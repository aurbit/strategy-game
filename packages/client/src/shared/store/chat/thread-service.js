import { getIdentity } from './helper'
import { Database, ThreadID } from '@textile/hub'
import { collect } from 'streaming-iterables'

const DB_NAME = 'threads.chat.test3'
// Temp Keys
// bbstpostzi645hsn7ptfq7ijsce  bw6qxwfzqtuct444bndtdeztc6j5smyoxcm3aqxq
const level = require('level')
export class ThreadService {
  threadID
  identity
  Db

  constructor() {
    this.threadID = ThreadID.fromRandom()
  }

  init = async () => {
    // Create or restore identity from localStorage
    this.identity = await getIdentity()
    const key = { key: 'bbstpostzi645hsn7ptfq7ijsce' }
    this.db = await Database.withKeyInfo(key, DB_NAME)
    console.log('DB INITALIZED')
    return this
  }

  // Reset Current DB
  // Done by first closing it if open, deleting the existing data, and re-initializing.
  // Real version we will not reset to keep Data persistent
  reset = async () => {
    await this.db?.close()

    await new Promise((resolve, reject) => {
      level.destroy(DB_NAME, (err) => {
        if (err !== undefined) reject(err)
        resolve()
      })
    })
    return this.init()
  }

  // Stores the threadId as a string in the URL Allows for simple refresh / returning to room
  // Will change this to be added in chat redux store to keep URL Clean
  storeCurrentRoom = () => {
    const room = this.threadID.toString()
    window.location.hash = room
  }

  // Uses the default threadID to start a new thread and chat room
  startNewRoom = async () => {
    if (!this.identity) {
      throw new Error('Identity not found')
    }
    if (!this.db) {
      throw new Error('Databnase not setup')
    }
    // Start with empty thread
    await this.reset() // Reset deletes any existing data
    await this.db.start(this.identity, { threadID: this.threadID })
    console.log('STARTED')
    await this.createCollection()
    this.storeCurrentRoom()
    this.db.emitter.on('basic-chat.*.0', (x) => {
      // Attach events to listen for when a message is push to add to UI State
      console.log('EMIT: ', x)
    })
    return this.threadID
  }

  // Work on rejoining a room if user refreshes the screen
  rejoinOpenRoom = async () => {
    if (!this.identity) {
      throw new Error('Identity not found')
    }
    if (!this.db) {
      throw new Error('Database not setup')
    }

    await this.db.start(this.identity, { threadID: this.threadID })
    // await this.db.start(this.identity)
    await this.createCollection()
    this.threadID = this.db.threadID || this.threadID
    return this.db.threadID
  }

  // Creates a collection using the Chat schema (ChatInstance)
  // If the chat thread already exists, this will reconnect it with `get`.
  createCollection = async () => {
    if (!this.db) {
      throw new Error('No db')
    }
    const { collections } = this.db
    if (collections.get('basic-chat')) {
      // Chat exists, so just use it as the reference
      this.room = collections.get('basic-chat')
    } else {
      // Chat doesn't exist, create it
      this.room = await this.db.newCollection('basic-chat', chatSchema)
    }
    this.storeCurrentRoom()
  }

  // Broadcast a message
  send = async (message) => {
    if (!this.room) {
      throw new Error('DB not ready')
    }
    await this.room.insert({
      _id: '',
      author: 'nate',
      text: message
    })
    if (!this.db || !this.db.threadID) {
      throw new Error('DB not ready')
    }
  }

  getMessages = async () => {
    const result = await this.room.find({})
    for (const { key, value } of await collect(result)) {
      console.log(`${key.toString()}`)
      console.log(value)
    }
  }

  // Disconnect - used when unmounting
  disconnect = () => {
    if (!this.db) {
      return
    }
    this.db.close()
  }
}

export const chatSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  definitions: {
    ChatBasic: {
      title: 'ChatBasic',
      type: 'object',
      properties: {
        _id: {
          type: 'string'
        },
        text: {
          type: 'string'
        },
        author: {
          type: 'string'
        }
      },
      required: ['text', 'author', '_id']
    }
  }
}

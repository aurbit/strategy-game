export const ADDRESS = '0x81fAA51021052E0af28EBb8E3FFE3A6f4FA55b88'

export const ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'playerId',
        type: 'uint256'
      },
      { indexed: false, internalType: 'string', name: 'name', type: 'string' },
      { indexed: false, internalType: 'uint256', name: 'dna', type: 'uint256' }
    ],
    name: 'NewPlayer',
    type: 'event'
  },
  {
    inputs: [{ internalType: 'string', name: '_name', type: 'string' }],
    name: 'createRandomPlayer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'playerToOwner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'players',
    outputs: [
      { internalType: 'string', name: 'name', type: 'string' },
      { internalType: 'uint256', name: 'dna', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  }
]

import contextFactory, { STATUS } from 'shared/context/factory'

const initialState = {
  status: STATUS.INIT,
  tokens: []
}

const actions = {
  GET_AVATARS_REQUEST: 'GET_AVATARS_REQUEST'
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.GET_AVATARS_REQUEST: {
      return {
        ...state,
        tokens: [],
        status: STATUS.GETTING
      }
    }
  }
}

const AvatarContext = contextFactory('Avatar', initialState, reducer)
export default AvatarContext
export { STATUS }
// get the avatars for the given address
export const getAvatars = async ({
  avatarDispatch, // the context dispatch
  address, // the address of the user's wallet
  provider, // the web3 provider
  avatar // the contract object
}) => {
  avatarDispatch({ type: actions.GET_AVATARS_REQUEST })

  const balanceOf = await avatar.methods.balanceOf(address)
  console.log(balanceOf)
}

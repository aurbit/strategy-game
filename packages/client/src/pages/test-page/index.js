import React from 'react'
import { useDispatch } from 'react-redux'
import { ACTIONS as AVATAR_ACTIONS } from 'shared/store/avatar'
import { ACTIONS as CHAIN_ACTIONS } from 'shared/store/chain'

const TestPage = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    // BEGIN TO INIT PROVIDER
    dispatch(CHAIN_ACTIONS.initProvider())
    // START TO INIT ARTIFACTS - store/chain/sagas - check initArtifacts() function
    dispatch(CHAIN_ACTIONS.initArtifacts())
    // CREATE CONTRACT BASED ON ARTIFACTS - store/chain/sagas - check initContracts() function
    dispatch(CHAIN_ACTIONS.initContracts())
  }, [])

  function onClick () {
    const dna = [165, 228, 239, 117, 68, 239, 5, 4, 239, 153, 5, 2, 9, 3, 85]
    dispatch(AVATAR_ACTIONS.callMintAvatar({ name: 'df', dna }))
  }

  return (
    <div>
      <button onClick={onClick}>SUBMIT</button>
    </div>
  )
}

export default TestPage

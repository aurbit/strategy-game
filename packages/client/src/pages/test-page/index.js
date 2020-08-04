import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTIONS } from 'shared/store/chain'
// import { selectAvatarContract } from 'shared/store/chain/selectors'
import {
  selectProvider,
  selectAvatarContract
} from 'shared/store/chain/selectors'

const TestPage = () => {
  const dispatch = useDispatch()
  const provider = useSelector(selectProvider)
  // Access the avatar Contract
  const avatarContract = useSelector(selectAvatarContract)
  React.useEffect(() => {
    // BEGIN TO INIT PROVIDER
    dispatch(ACTIONS.initProvider())
    // START TO INIT ARTIFACTS - store/chain/sagas - check initArtifacts() function
    dispatch(ACTIONS.initArtifacts())
    // CREATE CONTRACT BASED ON ARTIFACTS - store/chain/sagas - check initContracts() function
    dispatch(ACTIONS.initContracts())
  }, [])

  function onClick() {
    const dna = [165, 228, 239, 117, 68, 239, 5, 4, 239, 153, 5, 2, 9, 3, 85]
    dispatch(ACTIONS.callMintAvatar({ name: 'df', dna }))
  }

  return (
    <div>
      <button onClick={onClick}>SUBMIT</button>
    </div>
  )
}

export default TestPage

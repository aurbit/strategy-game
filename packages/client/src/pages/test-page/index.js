import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTIONS } from 'shared/store/chain'
import { selectAvatarContract } from 'shared/store/chain/selectors'

const TestPage = () => {
  const dispatch = useDispatch()
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

  console.log('AVATAR CONTRACT: ', avatarContract)

  return <div>Test Page</div>
}

export default TestPage

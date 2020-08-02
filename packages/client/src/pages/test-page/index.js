import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ACTIONS } from 'shared/store/avatar/index'

const TestPageContainer = ({ fetchAvatar }) => {
  React.useEffect(() => {
    fetchAvatar('asd')
  }, [])
  return <div>Hello</div>
}

const structuredSelector = createStructuredSelector({
  posts: (state) => state.posts
})

const mapDispatchToProps = { fetchAvatar: ACTIONS.fetchAvatarRequest }
export default connect(
  structuredSelector,
  mapDispatchToProps
)(TestPageContainer)

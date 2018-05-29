import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PostsContainer from '../containers/PostsContainer'

export default class IndexPage extends React.Component {
  static getInitialProps ({ store, isServer }) {
    return { isServer }
  }

  render () {
    return (
      <div>
        <PostsContainer/>
      </div>
    )
  }
}
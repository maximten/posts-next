import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import PostContainer from '../containers/PostContainer'

export default class PostsPage extends React.Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }

  render () {
    const { id } = this.props
    return (
      <div>
        <Header/>
        <PostContainer id={id}/>
      </div>
    )
  }
}
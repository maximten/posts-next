import React, { Component } from 'react'
import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'
import { actions } from 'react-redux-form'
import { addPost } from '../../redux/posts'
import Post from '../../components/Post'

class PostContainer extends Component {
    render () {
        const { posts: { posts }, id } = this.props
        const post = posts[id]
        return (
            <div>
                <Post model={post}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts
})

const mapDispatchToProps = (dispatch) => ({
    addPost: bindActionCreators(addPost, dispatch),
    resetForm: (form) => dispatch(actions.reset(form))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)
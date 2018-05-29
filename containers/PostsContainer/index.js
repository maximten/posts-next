import React, { Component } from 'react'
import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'
import { actions } from 'react-redux-form'
import { addPost } from '../../redux/posts'
import Posts from '../../components/Posts'

class PostsContainer extends Component {
    render () {
        const { posts, addPost, resetForm } = this.props
        return (
            <div>
                <Posts posts={posts} addPost={addPost} resetForm={resetForm}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
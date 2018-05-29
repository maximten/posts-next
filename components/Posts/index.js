import React, { Component } from 'react';
import Post from '../Post'
import PostForm from '../PostForm'

export default class Posts extends Component {
    render () {
        const { posts: { posts }, addPost, resetForm } = this.props
        return (
            <div>
                <h1>Posts</h1>
                {
                    posts.map((post, key) => (
                        <Post key={key} model={post}/>
                    ))
                }
                <PostForm addPost={addPost} resetForm={resetForm}/>
            </div>
        )
    }
}

import React, { Component } from 'react';
import Link from 'next/link'
import Post from '../Post'
import PostForm from '../PostForm'

export default class Posts extends Component {
    render () {
        const { posts: { posts }, addPost, resetForm } = this.props
        return (
            <div className="container">
                <h1>Posts</h1>
                {
                    posts.length ? 
                    posts.map((post, key) => (
                        <div className="card" key={key}>
                            <div className="card-body">
                                <Link key={key} href={{
                                    pathname: '/post',
                                    query: { id: key }
                                }} as={{
                                    pathname: `/post/${key}`,
                                }}>
                                    <a>{post.title}</a>
                                </Link>
                            </div>
                        </div>
                    ))
                    :
                    <p>No posts yet :(</p>
                }
                <PostForm addPost={addPost} resetForm={resetForm}/>
            </div>
        )
    }
}

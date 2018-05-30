import React, { Component } from 'react';
import Link from 'next/link'
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
                        <div key={key}>
                            <Link key={key} href={{
                                pathname: '/post',
                                query: { id: key }
                            }} as={{
                                pathname: `/about/${key}`,
                            }}>
                                <a>{post.title}</a>
                            </Link>
                        </div>
                    ))
                }
                <PostForm addPost={addPost} resetForm={resetForm}/>
            </div>
        )
    }
}

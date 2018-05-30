import React, { Component } from 'react'

class Post extends Component {
    render () {
        const { model } = this.props
        return (
            <div className="container">
                <h1>{ model.title }</h1>
                <div className="card">
                    <div className="card-body">
                        <p>{ model.content }</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post
import React, { Component } from 'react'

class Post extends Component {
    render () {
        const { model } = this.props
        return (
            <div>
                <h3>{ model.title }</h3>
                <p>{ model.content }</p>
            </div>
        )
    }
}

export default Post
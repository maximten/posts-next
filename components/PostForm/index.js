import React, { Component } from 'react';
import { Form, Control } from 'react-redux-form'

export default class PostForm extends Component {
    handleSubmit = (model) => { 
        const { addPost, resetForm } = this.props
        addPost(model)
        resetForm('forms.post')
    }
    render () {
        return (
            <Form model='forms.post'
                onSubmit={this.handleSubmit}
            >
                <Control.text model=".title" />
                <br/>
                <Control.textarea model=".content" />
                <br/>
                <button type="submit">Add</button>
            </Form>
        )
    }
}

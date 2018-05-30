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
            <div className="card">
                <div className="card-body">
                    <h3>Add new post</h3>
                    <Form model='forms.post'
                        onSubmit={this.handleSubmit}
                    >
                        <div className="form-group">
                            <Control.text model=".title" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <Control.textarea model=".content" className="form-control"/>
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </Form>
                </div>
            </div>
        )
    }
}

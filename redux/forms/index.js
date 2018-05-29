import { combineForms, modelReducer } from 'react-redux-form'

export default combineForms({
    post: modelReducer('forms.post', {
        title: '',
        content: ''
    }) 
})
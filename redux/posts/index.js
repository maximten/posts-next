const types = {
    ADD_POST: 'ADD_POST'
}

export const addPost = (post) => ({
    type: types.ADD_POST,
    data: post
})

const initialState = {
    posts: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    action.data
                ]
            }
        default: 
            return state;
    }
}
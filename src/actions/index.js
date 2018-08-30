import fetch from 'cross-fetch'

let nextTodoId = 0
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}


export const updateSomeStatusByThunk = (para) => dispatch => {
    dispatch({
        type: 'UPDATE_SOMESTATUS',
        para
    })
}
//this.props.dispatch(updateSomeStatusByThunk(value))

export const updateSomeStatusByThunk = (id) => dispatch => {
    let url = `/aaa/bbb?ccc=json&_id=${id}&source=xxx`;
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        let jsonVar = {...data.mainjson, id: data.srcId};
        let list = data.results.list.slice(0, 10);
        let arraylist = [jsonVar, ...list];
        dispatch({
            type: LOADSUCCESS,
            arraylist
        });
    }).catch(err => {
        console.error(err);
    });
}
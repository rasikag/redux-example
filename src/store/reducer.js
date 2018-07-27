const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INCREMENT':
            
            // const newState = Object.assign({}, state);
            // newState.counter = 1;

            return {
                ...state,
                counter : state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter : state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter : state.counter + action.value
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter : state.counter - action.value
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(),value: state.counter})
            }
        case 'DELETE_RESULT':
            console.log('[DELETE_RESULT]');
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id,1);    
            const updateArray = state.results.filter(result => result.id !== action.resultElId);
            
            return {
                ...state,
                result : updateArray
            }
            
            //const id =  2;
            //const newArray = [...state.results];
            //newArray.splice(id, 1);
        default:
            return state;
    }
}

export default reducer;
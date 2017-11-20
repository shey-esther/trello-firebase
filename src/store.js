// import createStore from 'redux-zero'

// const initialState = {
//     foodUser: [],
//     selectedItem : -1,
//     newBoard : true,
//     newtext : " "
    
// }

// const store = createStore(initialState)
// export default store

import createStore from 'redux-zero'

const initialState = {
   stages: [ ],
   tasks: [ ]
};

const store = createStore (initialState);
export default store;  
import createStore from 'redux-zero'

const initialState = {
    user:'',
    boards:[],
    login: false,
   stages: [ ],
   tasks: [ ]
};

const store = createStore (initialState);
export default store;  


import { combineReducers, createStore } from "redux";
import {projectsReducer} from "./projects-reducer";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    projects: projectsReducer,
    form: formReducer
});

const store = createStore(reducers);

export default store;
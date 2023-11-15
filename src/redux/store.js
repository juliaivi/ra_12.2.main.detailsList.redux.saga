import {createStore, compose, combineReducers, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import saga from "./sagas";
import skillsReducer from "./reducers/skills";
import skillReducer from "./reducers/skill";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //просто мидлвар с подключение REDUX_DEVTOOLS
const reduser = combineReducers({
    skills: skillsReducer,
    skill: skillReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reduser,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(saga);
export default store;
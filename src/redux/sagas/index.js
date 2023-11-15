import { put, spawn, takeLatest} from 'redux-saga/effects';
import { getSkills, getSkill } from '../../api';
import { skillsFailure, skillFailure, skillSuccess, skillsSuccess} from '../actions/actionCreators';
import { SKILLS_REQUEST, SKILL_REQUEST } from '../actions/actionType';

//put - это по сути аналог диспатчаб диспатчит переданный экшен
// spawn - создает паралельную задачу в корне саги и ее использование не привязоно к родителю. Является не блокирующей задачей
// takeLatest - takeEvery + отмена предыдущей задачи (осуществляет вызов только последней переданной функции )

//worKer
function* handleSkillsSaga(action) {
    try{
        const data = yield getSkills();
        yield put(skillsSuccess(data));
    } catch (e) {
        yield put(skillsFailure(e.message));
    }
}

function* handleSkillSaga(action) {
    try{
        const data = yield getSkill();
        yield put(skillSuccess(data));
    } catch (e) {
        yield put(skillFailure(e.message));
    }
}

//wotchers
function* watchSkillsSaga() {
    yield takeLatest(SKILLS_REQUEST, handleSkillsSaga);
}

function* watchSkillSaga() {
    yield takeLatest(SKILL_REQUEST, handleSkillSaga);
}

export default function* saga() {
    yield spawn(watchSkillsSaga);
    yield spawn(watchSkillSaga);
}

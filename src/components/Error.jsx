import {useDispatch} from 'react-redux';
import { skillsRequest, skillRequest } from '../redux/actions/actionCreators';

export default function Error({id}) {
    const dispatch = useDispatch();

    const handelClick = () => {
        console.log(id);
        id ? dispatch(skillRequest()) : dispatch(skillsRequest())
    }

    return (
        <div className='error'>
            <p>"Произошла ошибка!"</p>
            <button className='btn_click' onClick={handelClick}>Повторить запрос</button>
        </div>
    )
}
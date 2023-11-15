import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {NavLink} from 'react-router-dom';

import { skillsRequest } from '../redux/actions/actionCreators';
import Loading from './Loading';
import Error from './Error';

export default function ServiceLists() {
    const {items, loading, error} = useSelector(state => state.skills);
    console.log(useSelector(state => state), 'ServiceLists -useSelector(state => state')
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(skillsRequest());
    }, [])

    return (
        <>
            {loading && <Loading />}
            {(error && !loading )? <Error/> : (<ul className='list__items'>{
                items.map((el) => (
                    <NavLink to={`/${el.id}/details`}>
                        <li className='item' key={el.id}>{el.name}</li>
                    </NavLink>
                ))
            }</ul>)}
        </>
    )
}
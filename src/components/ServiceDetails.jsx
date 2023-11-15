import Loading from "./Loading";
import Error from "./Error";
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useParams } from "react-router-dom";/////////
import { skillRequest } from "../redux/actions/actionCreators";

export default function ServiceDetails() {
    const {item, loading, error} = useSelector(state => state.skill);
    console.log(useSelector(state => state), 'ServiceDetails -useSelector(state => state')

    const dispatch = useDispatch();

    const {id} = useParams();
    window.localStorage.setItem('id', id);
    
    useEffect(() => {
        dispatch(skillRequest());
    }, [id])

    return (
        <>
            {loading && <Loading />}
            {(error && !loading) ? <Error id={id} /> : (
                <div>
                    <p className="item__name">{item?.name}</p>
                    <ul className="item__details">
                        <li>{item?.content}</li>
                        <li>Стоимость:{item?.price}</li>
                    </ul>
                </div>
            )}
        </>
    )

}
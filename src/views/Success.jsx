import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { active_stripe_connect_account, messageClear } from '../store/Reducers/sellerReducer';
import { FadeLoader } from 'react-spinners';
import error from '../assets/error.png'
import success from '../assets/success.png'

const Success = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {loader,successMessage,errorMessage} = useSelector(state => state.seller)


    const queryParams = new URLSearchParams(window.location.search)
    const activeCode = queryParams.get('activeCode')

    useEffect(()=> {
        dispatch(active_stripe_connect_account(activeCode))
    },[activeCode]) 

    const redirect = () => {
        dispatch(messageClear())
        navigate('/')
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center flex-col gap-4'>
            {
                loader ? <FadeLoader/> : errorMessage ? <>
                    <img src={error} alt="" />
                    <button onClick={redirect} className='px-5 py-2 bg-green-700 rounded-sm text-white'>Back to Dashboard</button>
                </> : successMessage && <>
                <img src={success} alt="" />
                    <button onClick={redirect} className='px-5 py-2 bg-green-700 rounded-sm text-white'>Back to Dashboard</button>
                </>
            }


        </div>
    );
};

export default Success;
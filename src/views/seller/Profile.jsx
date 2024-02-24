import React, { useEffect, useState } from 'react';
import { FaImages } from "react-icons/fa6";
import { FadeLoader } from 'react-spinners';
import { FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { profile_image_upload,messageClear,profile_info_add } from '../../store/Reducers/authReducer'
import toast from 'react-hot-toast';
import { PropagateLoader } from 'react-spinners';
import { overrideStyle } from '../../utils/utils'; 
import { create_stripe_connect_account } from '../../store/Reducers/sellerReducer';

const Profile = () => {

    const [state, setState] =  useState({
        division: '',
        district: '',
        shopName: '',
        sub_district: '' 
    })

    const dispatch = useDispatch()
    const { userInfo,loader,successMessage } = useSelector(state => state.auth)
  

    useEffect(() => {

        if (successMessage) {
            toast.success(successMessage)
            messageClear() 
        } 
    },[successMessage])

    const add_image = (e) => {
        if (e.target.files.length > 0) { 
            const formData = new FormData()
            formData.append('image',e.target.files[0])
            dispatch(profile_image_upload(formData))
        }

    }

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const add = (e) => {
        e.preventDefault()
        dispatch(profile_info_add(state))
    }

    return (
        <div className='px-2 lg:px-7 py-5'>
<div className='w-full flex flex-wrap'>
    <div className='w-full md:w-6/12'>
        <div className='w-full p-4 bg-[#6a5fdf] rounded-md text-[#d0d2d6]'>
            <div className='flex justify-center items-center py-3'>
                {
                    userInfo?.image ? <label htmlFor="img" className='h-[150px] w-[200px] relative p-3 cursor-pointer overflow-hidden'>
                        <img src={userInfo.image} alt="" />
                        {
                        loader && <div className='bg-slate-600 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-20'>
                            <span>
                                <FadeLoader/>
                            </span>

                        </div>
                    }


                    </label> : <label className='flex justify-center items-center flex-col h-[150px] w-[200px] cursor-pointer border border-dashed hover:border-red-500 border-[#d0d2d6] relative' htmlFor="img">
                    <span><FaImages /> </span>
                    <span>Select Image</span>
                    {
                        loader && <div className='bg-slate-600 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-20'>
                            <span>
                                <FadeLoader/>
                            </span>

                        </div>
                    }

                </label>
                }
                <input onChange={add_image} type="file" className='hidden' id='img' /> 
            </div>

        <div className='px-0 md:px-5 py-2'>
            <div className='flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md relative'>
                <span className='p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 absolute right-2 top-2 cursor-pointer'><FaRegEdit /> </span>
                <div className='flex gap-2'>
                    <span>Name : </span>
                    <span>{userInfo.name}</span> 
                </div>
                <div className='flex gap-2'>
                    <span>Email : </span>
                    <span>{userInfo.email}</span> 
                </div>
                <div className='flex gap-2'>
                    <span>Role : </span>
                    <span>{userInfo.role}</span> 
                </div>
                <div className='flex gap-2'>
                    <span>Status : </span>
                    <span>{userInfo.status}</span> 
                </div>
                <div className='flex gap-2'>
                    <span>Payment Account : </span>
                     <p>
    {
        userInfo.payment === 'active' ? <span className='bg-red-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded'>{userInfo.payment}</span> : <span onClick={()=> dispatch(create_stripe_connect_account())}  className='bg-blue-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded'>Click Active</span>
    } 
                     </p>
                </div> 
            </div> 
        </div>


        <div className='px-0 md:px-5 py-2'>
            {
                !userInfo?.shopInfo ? <form onSubmit={add}>
                    <div className='flex flex-col w-full gap-1 mb-2'>
                <label htmlFor="Shop">Shop Name</label>
                <input value={state.shopName} onChange={inputHandle} className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' type="text" name='shopName' id='Shop' placeholder='Shop Name' />
            </div>  

            <div className='flex flex-col w-full gap-1 mb-2'>
                <label htmlFor="division">Division Name</label>
                <input value={state.division} onChange={inputHandle} className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' type="text" name='division' id='division' placeholder='division Name' />
            </div>  

            <div className='flex flex-col w-full gap-1 mb-2'>
                <label htmlFor="district">District Name</label>
                <input value={state.district} onChange={inputHandle} className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' type="text" name='district' id='district' placeholder='District Name' />
            </div>  

            <div className='flex flex-col w-full gap-1 mb-2'>
                <label htmlFor="sub">Sub District Name</label>
                <input value={state.sub_district} onChange={inputHandle} className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' type="text" name='sub_district' id='sub' placeholder='Sub District Name' />
            </div>  

            <button disabled={loader ? true : false}  className='bg-red-500 w-[200px] hover:shadow-red-300/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>
            {
               loader ? <PropagateLoader color='#fff' cssOverride={overrideStyle} /> : 'Save Changes'
            } 
            </button>

                </form> : <div className='flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md relative'>
                <span className='p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 absolute right-2 top-2 cursor-pointer'><FaRegEdit /> </span>
                <div className='flex gap-2'>
                    <span>Shop Name : </span>
                    <span>{ userInfo.shopInfo?.shopName }</span> 
                </div>
                <div className='flex gap-2'>
                    <span>Divission : </span>
                    <span>{ userInfo.shopInfo?.division }</span> 
                </div>
                <div className='flex gap-2'>
                    <span>District : </span>
                    <span>{ userInfo.shopInfo?.district }</span> 
                </div>
                <div className='flex gap-2'>
                    <span>Sub District : </span>
                    <span>{ userInfo.shopInfo?.sub_district }</span> 
                </div>
                
            </div> 
            }


        </div>






        </div> 
    </div>



    <div className='w-full md:w-6/12'>
        <div className='w-full pl-0 md:pl-7 mt-6 md:mt-0'>
        <div className='bg-[#6a5fdf] rounded-md text-[#d0d2d6] p-4'>
        <h1 className='text-[#d0d2d6] text-lg mb-3 font-semibold'>Change Password</h1>
        <form>
                    <div className='flex flex-col w-full gap-1 mb-2'>
                <label htmlFor="email">Email</label>
                <input className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' type="email" name='email' id='email' placeholder='email' />
            </div>  

            <div className='flex flex-col w-full gap-1 mb-2'>
                <label htmlFor="o_password">Old Password</label>
                <input className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' type="password" name='old_password' id='o_password' placeholder='Old Password' />
            </div>  
 
            <div className='flex flex-col w-full gap-1 mb-2'>
                <label htmlFor="n_password">New Password</label>
                <input className='px-4 py-2 focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' type="password" name='new_password' id='n_password' placeholder='New Password' />
            </div>   
 

            <button className='bg-red-500  hover:shadow-red-500/40 hover:shadow-md text-white rounded-md px-7 py-2 my-2'>Save Changes</button>

                </form>

        </div>
        
        </div>

    </div>




</div>
            
        </div>
    );
};

export default Profile;
import React from 'react';
import { FaImages } from "react-icons/fa6";
import { FadeLoader } from 'react-spinners';

const Profile = () => {
    const image = false 
    const loader = true

    return (
        <div className='px-2 lg:px-7 py-5'>
            <div className='w-full flex flex-wrap'>
                <div className='w-full md:w-6/12'>
                    <div className='w-full p-4 bg-[#6a5fdf] rounded-md text-[#d0d2d6]'>
                        <div className='flex justify-center items-center py-3'>
                            {
                                image ? <label htmlFor=""></label> : <label className='flex justify-center items-center flex-col h-[150px] w-[200px] cursor-pointer border border-dashed hover:border-red-500 border-[#d0d2d6] relative' htmlFor="img">
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

                        </div>

                    </div>

                </div>



                <div className='w-full md:w-6/12'>

                   </div>

            </div>
            
        </div>
    );
};

export default Profile;
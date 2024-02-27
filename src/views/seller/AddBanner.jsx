import React, { useState } from 'react';
import { FaRegImage } from "react-icons/fa";
import { PropagateLoader } from 'react-spinners';
import { overrideStyle } from '../../utils/utils';

const AddBanner = () => {
    const loader = false

    const [imageShow, setImageShow] = useState('')
    const [image, setImage] = useState('')

    const imageHandle = (e) => {
        const files = e.target.files 
        const length = files.length

        if (length > 0) {
            setImage(files[0])
            setImageShow(URL.createObjectURL(files[0]))
        } 
    }

    const add = (e) => {
        e.preventDefault()
    }



    return (
    <div className='px-2 lg:px-7 pt-5'>
        <h1 className='text-[#000000] font-semibold text-lg mb-3'>Add Banner</h1> 
        <div className='w-full p-4 bg-[#6a5fdf] rounded-md'> 
        
        <form onSubmit={add}>
         <div className='mb-4'>
            <label className='flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-red-500 w-full text-white' htmlFor="image">
                <span className='text-4xl'><FaRegImage /></span>
                <span>Select Banner Image </span>
            </label>
            <input required onChange={imageHandle} className='hidden' type="file" id='image' />
            </div>

            {
                imageShow && <div className='mb-4'>
                    <img className='w-full h-[300px]' src={imageShow} alt="" />
                </div>
            }

            <button disabled={loader ? true : false}  className='bg-red-500 w-[280px] hover:shadow-red-300/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>
            {
               loader ? <PropagateLoader color='#fff' cssOverride={overrideStyle} /> : 'Add Banner'
            } 
            </button>

        </form> 

       
        
        </div> 
    </div>
    );
};

export default AddBanner;
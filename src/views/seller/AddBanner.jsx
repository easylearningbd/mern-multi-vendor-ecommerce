import React from 'react';
import { FaRegImage } from "react-icons/fa";
import { PropagateLoader } from 'react-spinners';
import { overrideStyle } from '../../utils/utils';

const AddBanner = () => {
    const loader = false
    return (
    <div className='px-2 lg:px-7 pt-5'>
        <h1 className='text-[#000000] font-semibold text-lg mb-3'>Add Banner</h1> 
        <div className='w-full p-4 bg-[#6a5fdf] rounded-md'> 
        <div className='flex justify-between items-center pb-4'>

        <form>
         <div className='mb-4'>
            <label className='flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-red-500 w-[800px] text-white' htmlFor="image">
                <span className='text-4xl'><FaRegImage /></span>
                <span>Select Banner Image </span>
            </label>
            <input className='hidden' type="file" id='image' />
            </div>

            <button disabled={loader ? true : false}  className='bg-red-500 w-[280px] hover:shadow-red-300/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>
            {
               loader ? <PropagateLoader color='#fff' cssOverride={overrideStyle} /> : 'Add Banner'
            } 
            </button>

        </form> 

        </div>
        
        
        </div> 
    </div>
    );
};

export default AddBanner;
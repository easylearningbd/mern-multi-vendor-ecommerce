import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddProduct = () => {

    const [state, setState] = useState({
        name: "",
        description: '',
        discount: '',
        price: "",
        brand: "",
        stock: ""
    
    })

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })

    }



    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
                <div className='flex justify-between items-center pb-4'>
                    <h1 className='text-[#d0d2d6] text-xl font-semibold'>Add Product</h1>
                    <Link className='bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-sm px-7 py-2 my-2'>All Product</Link> 
                </div>
<div>
    <form>
        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
            <div className='flex flex-col w-full gap-1'>
                <label htmlFor="name">Product Name</label>
                <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.name} type="text" name='name' id='name' placeholder='Product Name' />
            </div>  

             <div className='flex flex-col w-full gap-1'>
            </div> 

        </div>
    </form>
</div>

            </div>
            
        </div>
    );
};

export default AddProduct;
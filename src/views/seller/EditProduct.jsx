import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoMdImages } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { get_category } from '../../store/Reducers/categoryReducer';
import { get_product } from '../../store/Reducers/productReducer';

const EditProduct = () => {

    const { productId } = useParams()

    const dispatch = useDispatch()
    const { categorys } = useSelector(state => state.category)
    
    useEffect(() => {
        dispatch(get_category({
            searchValue: '',
            parPage: '',
            page: ""
        }))
    }, [])

    useEffect(() => {
        dispatch(get_product(productId))
    }, [productId])


    // const categorys = [
    //     {
    //         id: 1,
    //         name : 'Sports'
    //     },
    //     {
    //         id: 2,
    //         name : 'Tshirt'
    //     },
    //     {
    //         id: 3,
    //         name : 'Mobile'
    //     },
    //     {
    //         id: 4,
    //         name : 'Computer'
    //     },
    //     {
    //         id: 5,
    //         name : 'Watch'
    //     },
    //     {
    //         id: 6,
    //         name : 'Pant'
    //     },
    // ]

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

    const [cateShow, setCateShow] = useState(false)
    const [category, setCategory] = useState('')
    const [allCategory, setAllCategory] = useState(categorys)
    const [searchValue, setSearchValue] = useState('') 
  
    const categorySearch = (e) => {
        const value = e.target.value
        setSearchValue(value)
        if (value) {
            let srcValue = allCategory.filter(c => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1)
            setAllCategory(srcValue)
        } else {
            setAllCategory(categorys)
        }

    }

    const [images, setImages] = useState([])
    const [imageShow, setImageShow] = useState([])

  
    const changeImage = (img, files) => {
        if (files.length > 0) {
            console.log(img)   
            console.log(files[0])         
        }
       
    }

   

    useEffect(() => {
        setState({
            name: "Mens tshirt",
            description: 'Utilities for controlling how',
            discount: 5,
            price: 255,
            brand: "Easy",
            stock: 10 
        })
        setCategory('Tshirt')
        setImageShow([
            'http://localhost:3000/images/admin.jpg',
            'http://localhost:3000/images/demo.jpg',
            'http://localhost:3000/images/seller.png'
            
        ])
    },[])
 
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
                <div className='flex justify-between items-center pb-4'>
                    <h1 className='text-[#d0d2d6] text-xl font-semibold'>Edit Product</h1>
                    <Link to='/seller/dashboard/products' className='bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-sm px-7 py-2 my-2'>All Product</Link> 
                </div>
<div>
    <form>
        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
            <div className='flex flex-col w-full gap-1'>
                <label htmlFor="name">Product Name</label>
                <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.name} type="text" name='name' id='name' placeholder='Product Name' />
            </div>  

            <div className='flex flex-col w-full gap-1'>
                <label htmlFor="brand">Product Brand</label>
                <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.brand} type="text" name='brand' id='brand' placeholder='Brand Name' />
            </div>   

        </div>


        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
            <div className='flex flex-col w-full gap-1 relative'>
                <label htmlFor="category">Category</label>
                <input readOnly onClick={()=> setCateShow(!cateShow)} className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={category} type="text" id='category' placeholder='--select category--' />

                <div className={`absolute top-[101%] bg-[#475569] w-full transition-all ${cateShow ? 'scale-100' : 'scale-0' } `}>
                    <div className='w-full px-4 py-2 fixed'>
                        <input value={searchValue} onChange={categorySearch} className='px-3 py-1 w-full focus:border-indigo-500 outline-none bg-transparent border border-slate-700 rounded-md text-[#d0d2d6] overflow-hidden' type="text" placeholder='search' /> 
                    </div>
                    <div className='pt-14'></div>
                    <div className='flex justify-start items-start flex-col h-[200px] overflow-x-scrool'>
                        {
                            allCategory.map((c,i) => <span className={`px-4 py-2 hover:bg-indigo-500 hover:text-white hover:shadow-lg w-full cursor-pointer ${category === c.name && 'bg-indigo-500'}`} onClick={()=> {
                                setCateShow(false)
                                setCategory(c.name)
                                setSearchValue('')
                                setAllCategory(categorys)
                            }}>{c.name} </span> )
                        } 
                    </div>

                </div>
            </div>  

            <div className='flex flex-col w-full gap-1'>
                <label htmlFor="stock">Product Stock</label>
                <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.stock} type="text" name='stock' id='stock' placeholder='Stock' />
            </div>   

        </div>


        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
            <div className='flex flex-col w-full gap-1'>
                <label htmlFor="price">Price</label>
                <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.price} type="number" name='price' id='price' placeholder='price' />
            </div>  

            <div className='flex flex-col w-full gap-1'>
                <label htmlFor="discount">Discount</label>
                <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.discount} type="number" name='discount' id='discount' placeholder='discount by %' />
            </div>   

        </div>

        <div className='flex flex-col w-full gap-1 mb-5'>
                <label htmlFor="description" className='text-[#d0d2d6]'>Description</label>
                <textarea className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.description} name='description' id='description' placeholder='Description' cols="10" rows="4"></textarea> 
                
            </div> 

            <div className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 gap-3 w-full text-[#d0d2d6] mb-4'>
                {
                    imageShow.map((img, i) => <div>
                        <label htmlFor={i}>
                            <img src={img} alt="" />
                        </label>
                        <input onChange={(e) => changeImage(img, e.target.files)} type="file" id={i} className='hidden' />
                    </div> )
                }

            </div>

            <div className='flex'>
                <button className='bg-red-500  hover:shadow-red-500/40 hover:shadow-md text-white rounded-md px-7 py-2 my-2'>Save Changes</button>

            </div>



    </form>
</div>

            </div>
            
        </div>
    );
};

export default EditProduct;
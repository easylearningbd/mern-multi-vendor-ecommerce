import { lazy } from "react";        
const Home = lazy(()=> import('../../views/Home'))   
const SellerDashboard = lazy(()=> import('../../views/seller/SellerDashboard'))   
const AddProduct = lazy(()=> import('../../views/seller/AddProduct'))   
const Products = lazy(()=> import('../../views/seller/Products')) 
const DiscountProducts = lazy(()=> import('../../views/seller/DiscountProducts')) 
const Orders = lazy(()=> import('../../views/seller/Orders')) 
const Payments = lazy(()=> import('../../views/seller/Payments'))

export const sellerRoutes = [
    {
        path: '/',
        element : <Home/>,
        ability : ['admin','seller']
    },
    {
        path: '/seller/dashboard',
        element : <SellerDashboard/>,
        role : 'seller',
        status : 'active'
    },
    {
        path: '/seller/dashboard/add-product',
        element : <AddProduct/>,
        role : 'seller',
        status : 'active'
    },
    {
        path: '/seller/dashboard/products',
        element : <Products/>,
        role : 'seller',
        status : 'active'
    },
    {
        path: '/seller/dashboard/discount-product',
        element : <DiscountProducts/>,
        role : 'seller',
        status : 'active'
    },
    {
        path: '/seller/dashboard/orders',
        element : <Orders/>,
        role : 'seller',
        ability : ['active','deactive']
    },
    {
        path: '/seller/dashboard/payments',
        element : <Payments/>,
        role : 'seller',
        status : 'active'
    }

]
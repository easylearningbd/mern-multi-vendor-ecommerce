import { lazy } from "react";     
const Home = lazy(()=> import('../../views/Home'))   
const SellerDashboard = lazy(()=> import('../../views/seller/SellerDashboard'))   
const AddProduct = lazy(()=> import('../../views/seller/AddProduct'))   
const Products = lazy(()=> import('../../views/seller/Products')) 

export const sellerRoutes = [
    {
        path: '/',
        element : <Home/>,
        ability : ['admin','seller']
    },
    {
        path: '/seller/dashboard',
        element : <SellerDashboard/>,
        ability : ['seller']
    },
    {
        path: '/seller/dashboard/add-product',
        element : <AddProduct/>,
        ability : ['seller']
    },
    {
        path: '/seller/dashboard/products',
        element : <Products/>,
        ability : ['seller']
    }

]
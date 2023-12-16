import React from 'react';

const Pagination = ({pageNumber,setPageNumber,totalItem,parPage,showItem}) => {

    let totalPage = Math.ceil(totalItem / parPage)
    let startPage = pageNumber

    let dif = totalPage - pageNumber
    if (dif <= showItem) {
        startPage = totalPage - showItem
    }
    let endPage = startPage < 0 ? showItem : showItem + startPage
     
    if (startPage <= 0) {
        startPage = 1
    }

    const createBton = () => {

    }
    return (
        <ul>
            
        </ul>
    )


};

export default Pagination;
import React from 'react';
import { FixedSizeList as List } from 'react-window';

const PaymentRequest = () => {
    return (
<div className='px-2 lg:px-7 pt-5'>
    <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
        <h2 className='text-xl font-medium pb-5 text-[#d0d2d6]'>Withdrawal Request</h2>
        <div className='w-full'>
            <div className='w-full overflow-x-auto'>
                <div className='flex bg-[#a7a3de] uppercase text-xs font-bold min-w-[340px] rounded-md'>
                    <div className='w-[25%] p-2'> No </div>
                    <div className='w-[25%] p-2'> Amount </div>
                    <div className='w-[25%] p-2'> Status </div>
                    <div className='w-[25%] p-2'> Date </div>
                    <div className='w-[25%] p-2'> Action </div> 

                </div>

            </div>

        </div>

    </div>
    
</div>
    );
};

export default PaymentRequest;
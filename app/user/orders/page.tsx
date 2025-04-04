"use client"
import Table from '@/components/globals/Table';
import { my_orders_colomn } from '@/helpers/tableColumn';
import { getMyOrders } from '@/store/actions/user/orders';
import { AppDispatch } from '@/store/store';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

const page = () => {

    const [data, setData] = useState<any>([]);
    const [apiHit, setApiHit] = useState(false);
  const dispatch = useDispatch<AppDispatch>();


   const getOrders = async () => {
      try {
        const res = await dispatch(getMyOrders({})).unwrap();
        if (res.success) {
          console.log("res.data.result",res.data.result);
          
          setData(res.data.result);
          setApiHit(true);
        }
      } catch (error) {}
    };

    useEffect(()=>{
      getOrders()
    },[])

  return (
    <div className=' p-4 px-10' >
      <h1 className='font-bold text-3xl m-4 text-black' >Orders</h1>
       <Table
        apiHit={apiHit}
        columns={my_orders_colomn()} //
        tableData={data}
      />
    </div>
  )
}

export default page
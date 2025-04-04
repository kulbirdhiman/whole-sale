"use client";
import React, { useEffect, useState } from "react";
import OrderDetail from "@/components/admin/OrderDetail";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { getOrderDetail } from "@/store/actions/admin/order";
import { useParams } from "next/navigation";
const page = () => {
  const [orderDetail, setOrderDetail] = useState({});
  const [apiHit, setApiHit] = useState(false);

  const order = {
    id: "ORD12345",
    date: "2025-03-04T12:30:00Z",
    status: "Delivered",
    customer: {
      name: "John Doe",
      email: "john@example.com",
      phone: "+123456789",
      address: "123 Main Street, New York, NY 10001",
    },
    items: [
      {
        name: "Product 1",
        image: "/images/product1.jpg",
        price: 49.99,
        quantity: 2,
      },
      {
        name: "Product 2",
        image: "/images/product2.jpg",
        price: 29.99,
        quantity: 1,
      },
    ],
    subtotal: 129.97,
    discount: 10.0,
    total: 119.97,
  };

  const dispatch = useDispatch<AppDispatch>();
  const params = useParams();

  const viewDetail = async () => {
    try {
      const res = await dispatch(getOrderDetail({ id: params.id })).unwrap();

      if (res.success) {
        console.log(res);
        setApiHit(true);
        setOrderDetail((res.data as any).result);
        console.log("detail", res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    viewDetail();
  }, []);

  return (
    <div>
      <OrderDetail viewDetail={viewDetail} order={orderDetail} />
    </div>
  );
};

export default page;

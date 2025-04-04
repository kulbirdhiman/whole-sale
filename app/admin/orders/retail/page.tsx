"use client";

import React, { useEffect, useState } from "react";
import RightDrawerForm from "@/components/globals/RightDrawerForm";
import Table from "@/components/globals/Table";
import { department_fields } from "@/helpers/formField";
import { department_colomn, orders_colomn } from "@/helpers/tableColumn";
import {
  addDepartment,
  deleteDepartment,
  editDepartment,
  getDepartment,
} from "@/store/actions/admin/department";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { addSlugField, mapServerErrors } from "@/helpers/commonFunction";

import ListOrder from "@/components/admin/ListOrder";
import Tabs from "@/components/globals/Tabs";
import { ORDER_STATUS } from "@/app/constants";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<Record<string, any>>({ name: "" });
  const [errors, setErrors] = useState({});
  const [apiHit, setApiHit] = useState(false);
  const [tableData, setTableData] = useState<Record<string, any>[]>([]);
  const [openDel, setOpenDel] = useState(false);

  const tabData = [
    {
      id: "All",
      label: "All",
      content: <ListOrder status={0} />,
      default: true,
    },

    {
      id: "Processing",
      label: "Processing",
      content: <ListOrder status={ORDER_STATUS.processing} />,
    },
    {
      id: "Shipped",
      label: "Shipped",
      content: <ListOrder status={ORDER_STATUS.shipped} />,
    },
    {
      id: "Delivered",
      label: "Delivered",
      content: <ListOrder status={ORDER_STATUS.delivered} />,
    },
    {
      id: "Trashed",
      label: "Trashed",
      content: <ListOrder status={ORDER_STATUS.trashed} />,
    },
    {
      id: "Refunded",
      label: "Refunded",
      content: <ListOrder status={ORDER_STATUS.returned} />,
    },
    {
      id: "PaymentFailed",
      label: "Payment Failed",
      content: <ListOrder status={ORDER_STATUS.failed_payment} />,
    },
  ];

  return (
    <div>
      <div className="lg:px-3 py-4 flex items-center flex-col sm:flex-row">
        <div className="font-bold text-xl mb-2 w-full">Orders</div>
        <div className="lg:px-3 w-full md:text-right">
          {/* <button className="bg-black hover:bg-black text-white py-1 px-2 rounded w-full md:w-max">
            <h3 className="text-base font-medium  "> Add New</h3>
          </button> */}
        </div>
      </div>
      <Tabs tabData={tabData} />
    </div>
  );
};

export default Page;

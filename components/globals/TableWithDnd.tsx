"use client";

import React, { useState, useCallback, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import Loader from "./Loader";

const ITEM_TYPE = "ROW";

interface Column {
  key: string;
  title: string;
  transform?: (value: any, row: any, index: number) => React.ReactNode;
}

interface TableProps {
  apiHit: boolean;
  columns: Column[];
  tableData: any;
  setTableData: (data: any) => void;
  updateRowOrderAPI: any;
}

const DraggableRow: React.FC<{
  row: Record<string, any>;
  index: number;
  columns: Column[];
  moveRow: (dragIndex: number, hoverIndex: number) => void;
  dropRow: (dragIndex: number, hoverIndex: number) => void;
}> = ({ row, index, columns, moveRow, dropRow }) => {
  const ref = useRef<HTMLTableRowElement>(null);

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover(item: { index: number }) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      moveRow(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
    drop(item: { index: number }) {
      dropRow(item.index, index);
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPE,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <tr
      ref={ref}
      className={`bg-lightthemecolor text-darkthemecolor border-b hover:bg-gray-50 ${
        isDragging ? "opacity-50" : ""
      }`}
      style={{
        transition: "transform 0.2s ease-in-out",
        willChange: "transform",
      }}
    >
      {columns.map((col, i) => (
        <td
          className="px-6 py-4 whitespace-nowrap text-black font-semibold"
          key={i}
        >
          {col.transform
            ? col.transform(row[col.key], row, index)
            : row[col.key]}
        </td>
      ))}
    </tr>
  );
};

const TableWithDnd: React.FC<TableProps> = ({
  apiHit,
  columns,
  tableData,
  setTableData,
  updateRowOrderAPI,
}) => {
  const moveRow = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      if (dragIndex === hoverIndex) return;
      setTableData((prevTableData) => {
        const updatedData = [...prevTableData];
        const [removed] = updatedData.splice(dragIndex, 1);
        updatedData.splice(hoverIndex, 0, removed);
        return updatedData;
      });
    },
    [setTableData]
  );

  const dropRow = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      console.log(dragIndex,"drag=====");
      
      // if (dragIndex !== hoverIndex) {
        console.log(dragIndex,"drag=====hit");
        updateRowOrderAPI(tableData);
      // }
    },
    [tableData, updateRowOrderAPI]
  );

  return (
    <div className="relative overflow-x-auto scrollbar-minimized overflow-y-auto sm:rounded-lg border border-gray-200 rounded-lg">
      <table className="w-full min-h-[150px] text-sm text-center text-gray-500">
        <thead className="text-xs text-white uppercase bg-black text-lightthemecolor h-[55px]">
          <tr>
            {columns.map((col, index) => (
              <th scope="col" className="px-6 py-3" key={index}>
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {apiHit && tableData.length > 0 ? (
            tableData.map((row, index) => (
              <DraggableRow
                key={index}
                row={row}
                index={index}
                columns={columns}
                moveRow={moveRow}
                dropRow={dropRow}
              />
            ))
          ) : apiHit && tableData.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="text-center py-4">
                No Record Found!
              </td>
            </tr>
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center py-4">
                <Loader />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithDnd;

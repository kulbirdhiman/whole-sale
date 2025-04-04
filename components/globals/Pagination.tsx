"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalRecords: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  limit: number;
  showPagination: number[];
  tableDataLength: number;
}

export default function Pagination({
  currentPage,
  totalRecords,
  totalPages,
  setCurrentPage,
  limit,
  showPagination,
  tableDataLength,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-between bg-lightthemecolor text-darkthemecolor pt-4">
      <div className="flex flex-1 flex-col-reverse gap-1 md:flex-row items-center justify-between">
        <div>
          <p className="text-sm text-gray-700 relative z-30">
            Showing <span className="font-medium">{tableDataLength !== 0 ? (currentPage - 1) * limit + 1 : 0}</span> to {" "} 
            <span className="font-medium">
              { totalRecords > (currentPage - 1) * limit + tableDataLength ? (currentPage - 1) * limit + tableDataLength :  totalRecords}
            </span>{" "}
            of <span className="font-medium"> {totalRecords}</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex gap-2 -space-x-px rounded-md shadow-sm relative z-30 md:hidden" aria-label="Pagination">
            <select onChange={(e) => setCurrentPage(Number(e.target.value))} value={currentPage}>
              <option disabled>Go to Page</option>
              {showPagination.map((pageNumber) => (
                <option key={pageNumber} value={pageNumber}>
                  {pageNumber}
                </option>
              ))}
            </select>
            <div className="flex">
              <button
                onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20"
                disabled={currentPage === 1}
              >
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20"
                disabled={currentPage === totalPages}
              >
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </nav>
          <nav className="isolate hidden md:inline-flex -space-x-px rounded-md shadow-sm relative z-30" aria-label="Pagination">
            <button
              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20"
              disabled={currentPage === 1}
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {showPagination.map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={
                  currentPage === pageNumber
                    ? "relative z-10 inline-flex items-center bg-black px-4 py-2 text-sm font-semibold text-white focus:z-20"
                    : "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20"
                }
              >
                {pageNumber}
              </button>
            ))}
            <button
              onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20"
              disabled={currentPage === totalPages}
            >
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
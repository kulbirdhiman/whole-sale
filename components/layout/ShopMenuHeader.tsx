"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { getDepartment } from "@/store/actions/admin/department";
import { DEPARTMENT_VIEW } from "@/app/constants";
import MegaMenu from "./MegaMenu";
import { getCategories } from "@/store/actions/admin/category";
import { useRouter } from "next/navigation";
import { ArrowBigDown, ArrowBigDownIcon, FileDownIcon } from "lucide-react";
import { MdArrowDropDown } from "react-icons/md";

interface HeaderProps {
  data: any[];
  setOpen?: (open: boolean) => void;
}
const ShopMenuHeader: React.FC<HeaderProps> = ({ setOpen, data }) => {

  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  // const [open, setOpen] = useState<boolean>(false);
  // const [data, setData] = useState<Record<string, any>[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);

  const [megaMenu, setMegaMenu] = useState<{ [key: string]: any }>({
    main: {},
    department: { show: false, data: [] },
    category: { show: false, data: [] },
    model: { show: false, data: [] },
  });

  const listDepartments = async () => {
    try {
      const res = await dispatch(
        getDepartment({ is_view: DEPARTMENT_VIEW.YES })
      ).unwrap();
      if (res.success) {
        // setData(res?.data?.result ?? []);
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  const listCategories = async (row) => {
    try {
      const res = await dispatch(
        getCategories({ department_id: row.id, ...row })
      ).unwrap();
      if (res.success) {
        if (row.search || res?.data?.result.length > 0) {
          setMegaMenu((prev) => ({
            ...prev,
            department: { show: true, data: res?.data?.result ?? [] },
            category: { ...prev.category },
            model: { ...prev.model },
            main: row,
          }));
        } else {
          const params = new URLSearchParams({
            category: row.slug,
          });
          const url = `/products/?${params.toString()}`;
          router.push(url);
          setMegaMenu({
            department: { show: false, data: [] },
            category: { show: false, data: [] },
            model: { show: false, data: [] },
          });
        }
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
 

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMegaMenu({
          department: { show: false, data: [] },
          category: { show: false, data: [] },
          model: { show: false, data: [] },
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      // onMouseLeave={() =>
      //   setMegaMenu({
      //     department: { show: false, data: [] },
      //     category: { show: false, data: [] },
      //     model: { show: false, data: [] },
      //   })
      // }
      ref={menuRef}
      className="mt-[0px] relative"
    >
      <div className="w-full overflow-auto hide-scrollbar  px-3 items-center bg-gray m-auto hidden lg:flex justify-between dark:bg-white text-amazon_light 2xl:gap-10   align-center text-sm leading-6">
        <button
          onClick={() => setOpen?.(!open)}
          className="flex py-2 my-1 gap-1 max-w-[100px] border px-2 rounded hover:bg-[#cccccc]"
        >
          <Bars3Icon className="h-6 w-6 font-avenir-bold text-xl" />
          All
        </button>

        {/* <div className="flex"> */}
        {data.map((dept, index) =>
          dept.is_view === DEPARTMENT_VIEW.YES ? (
            <button

            className={`hover:bg-gray-200 hover:border active:scale-75`}
    //           className={`border-e-2 ${
    //   index !== dept.length - 1 ? "border-e-2 border-gray-500" : ""
    // }   px-2 border-gray-500 active:scale-90 transition-transform duration-150 `}
              key={`${dept.slug}-${index}`}
              onClick={() => {
                listCategories({
                  id: dept.id,
                  slug: dept.slug,
                  name: dept.name,
                });
              }}
            >
              <div className="hover:border hover:border-white py-2 px-1 font-semibold text-sm flex items-center cursor-pointer text-nowrap">
                {dept.name}<MdArrowDropDown className="h-7 text-lg"/>
              </div>
            </button>

          ) : null
        )}

        {/* </div> */}
        <Link href="#">
          <div className="hover:border hover:border-white py-2 px-2 my-1 font-avenir-bold flex items-center cursor-pointer text-nowrap">
            
          </div>
        </Link>
      </div>

      {megaMenu.department.show && (
        <MegaMenu
          title={"Kayhan Audio"}
          position={{ top: "50px" }}
          link="/departments"
          setMegaMenu={setMegaMenu}
          data={megaMenu.department.data}
          megaMenuData={megaMenu}
          getData={listCategories}
        />
      )}
      {megaMenu.category.show && (
        <MegaMenu
          title={"Kayhan Audio"}
          position={{ top: "50px" }}
          link="/departments"
          setMegaMenu={setMegaMenu}
          data={megaMenu.category.data}
          megaMenuData={megaMenu}
          getData={listCategories}
        />
      )}

      {megaMenu.model.show && (
        <MegaMenu
          title={"Kayhan Audio"}
          position={{ top: "50px" }}
          link="/departments"
          setMegaMenu={setMegaMenu}
          data={megaMenu.model.data}
          megaMenuData={megaMenu}
          getData={listCategories}
        />
      )}
    </div>
  );
};

export default ShopMenuHeader;

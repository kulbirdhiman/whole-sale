import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowBigLeft, Car } from "lucide-react";
import { detailCategory } from "@/store/actions/admin/category";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import { detailCarModel } from "@/store/actions/admin/carModel";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";

type MegaMenuProps = {
  title: string;
  position: { top: string };
  link: string;
  setMegaMenu: React.Dispatch<React.SetStateAction<any>>;
  data: any[];
  getData: any;
  megaMenuData: any;
};

type CategoryItem = {
  name: string;
  slug: string;
};

 

const MegaMenu: React.FC<MegaMenuProps> = ({
  title,
  position,
  link,
  setMegaMenu,
  data,
  getData,
  megaMenuData,
}) => {
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState<boolean>(false);
  const [values, setValues] = useState({});

  const searchFunction = async (e) => {
    setValues({ ...values, search: e.target.value });

    if (megaMenuData.department.show) {
      await getData({ id: megaMenuData.main.id, search: e.target.value });
    } else if (megaMenuData.category.show && !megaMenuData?.parent_model) {
      await viewCategory({
        id: megaMenuData.main.id,
        slug: megaMenuData.main.slug,
        search: e.target.value,
      });
    } else if (megaMenuData.category.show && megaMenuData?.parent_model) {
      await viewModel({
        id: megaMenuData.main.id,
        slug: megaMenuData.main.slug,
        search: e.target.value,
        parent_model: megaMenuData.parent_model,
      });
    }
  };

  const viewCategory = async (data: Record<string, any>) => {
    try {
      const res = await dispatch(
        detailCategory({ ...data, slug: data.slug })
      ).unwrap();

      if (
        res.success &&
        (data.search || (res.data.result as any).car_models.length > 0)
      ) {
       
        setMegaMenu((prev) => ({
          ...prev,
          department: { ...prev.department, show: false },
          category: { show: true, data: (res.data.result as any).car_models },
          model: { ...prev.model },
          main: data,
        }));
      } else {
        const params = new URLSearchParams({
          company: data.slug,
        });
 
              const url = `/products/${data.slug}`

        // const url = `/product/list?${params.toString()}`;
        // const url = `/products/${params.toString()}`;
        router.push(url);
        setMegaMenu({
          department: { show: false, data: [] },
          category: { show: false, data: [] },
          model: { show: false, data: [] },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const viewModel = async (data: Record<string, any>) => {
    try {
      const res = await dispatch(
        detailCategory({
          ...data,
          model_id: data?.parent_model?.id,
          slug: data.slug,
        })
      ).unwrap();

      if (res.success) {
        if (
          res.success &&
          (data.search || (res.data.result as any).car_models.length > 0)
        ) {
          setMegaMenu((prev) => ({
            ...prev,
            department: { ...prev.department, show: false },
            category: { show: true, data: (res.data.result as any).car_models },
            model: { ...prev.model },
            parent_model: data.parent_model,
          }));
        } else {
          const res = await dispatch(
            detailCarModel({
              id: data?.parent_model?.id,
            })
          ).unwrap();
          console.log(res, "lpppp");
          if (res.success && (data.search || res.data.result.length > 0)) {
            setMegaMenu((prev) => ({
              ...prev,
              department: { ...prev.department, show: false },
              category: { ...prev.category, show: false },
              model: { data: res.data.result, show: true },
              parent_model: data.parent_model,
            }));
          } else {
            const params = new URLSearchParams({
              company: data.slug,
              model: data?.parent_model?.slug,
            });
                          const url = `/products/${megaMenuData.main.slug}/${data?.parent_model?.slug}`
            // const url = `/product/list?${params.toString()}`;
            router.push(url);
            setMegaMenu({
              department: { show: false, data: [] },
              category: { show: false, data: [] },
              model: { show: false, data: [] },
            });
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onAction = async (data) => {
    if (megaMenuData.department.show) {
      await viewCategory(data);
    } else if (megaMenuData.category.show) {
      await viewModel({
        id: megaMenuData.main.id,
        slug: megaMenuData.main.slug,
        parent_model: data,
      });
    } else if (megaMenuData.model.show) {

 


      const params = new URLSearchParams({
        model: megaMenuData?.parent_model?.slug,
        year: data.slug,
      });
      // const url = `/product/list?${params.toString()}`;
      const url = `/products/${megaMenuData.main.slug}/${megaMenuData?.parent_model?.slug}/${data.slug}`
      router.push(url);
      setMegaMenu({
        department: { show: false, data: [] },
        category: { show: false, data: [] },
        model: { show: false, data: [] },
      });
    }
  };

  const onMain = async () => {
    if (megaMenuData.department.show) {
      const params = new URLSearchParams({
        category: megaMenuData.main.slug,
      });
      const url = `/product/list?${params.toString()}`;
      router.push(url);
    } else if (megaMenuData.category.show) {
      const params = new URLSearchParams({
        company: megaMenuData.main.slug,
      });
      const url = `/product/list?${params.toString()}`;

      router.push(url);
    }
    setMegaMenu({
      department: { show: false, data: [] },
      category: { show: false, data: [] },
      model: { show: false, data: [] },
    });
  };

  const handleBack = () => {
    if(megaMenuData.category.show){
      setMegaMenu((prev) => ({
        ...prev,
        department: { ...prev.department, show: true },
        category: { ...prev.category, show: false },
        model: { ...prev.model, show: false },
        main: data,
      }));
    }
    if(megaMenuData.model.show){
      setMegaMenu((prev) => ({
        ...prev,
        department: { ...prev.department, show: false },
        category: { ...prev.category, show: true },
        model: { ...prev.model, show: false },
        // main: data,
      }));
    }
 
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="absolute bg-gradient-to-br from-white to-gray-50 rounded-b-xl pt-6 pb-10 z-50 w-11/12 px-6 shadow-2xl overflow-y-auto transition-all duration-500"
      style={{ top: position.top, left: "50px", height: "400px" }}
    >
      {(megaMenuData.category.show || megaMenuData.model.show) && (
        <button onClick={handleBack}>
          <ArrowBigLeft />
        </button>
      )}
      <div className="flex justify-between border-b-2 pb-5 items-center mb-6">
        {!megaMenuData.department.show &&
            <button
            // href={megaMenuData.main.slug}
            className="font-bold text-2xl text-[#212529] hover:text-[#005164] transition-all duration-300"
            onClick={() => onMain()} // Now accepts any value
          >
            {megaMenuData?.main?.name}
          </button>
        }
    
        {!megaMenuData.model.show && (
          <input
            type="text"
            value={(values as any).search}
            onChange={(e) => searchFunction(e)}
            placeholder="Search categories..."
            className="p-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#005164] transition-all duration-300"
          />
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-5">
        {data.map((category, index) => (
          <motion.button
            key={`${category.slug}-${index}-${category.id}`}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
            }}
            transition={{ duration: 0.2 }}
            onClick={() => onAction(category)}
            className="flex flex-col items-center justify-center gap-2 bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg"
          >
            <Car className="text-[#005164] w-7 h-7" />
            <p className="font-medium text-sm md:text-base text-[#212529] hover:text-[#005164]   transition-all duration-300 text-center">
              <span className="text-[7px]">for</span> {category.name}
            </p>
          </motion.button>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Didn’t find what you were looking for?
        </p>
        <Link
          href="/contact"
          className="text-[#005164] font-semibold hover:underline"
        >
          Contact us!
        </Link>
      </div>
    </motion.div>
  );
};

export default MegaMenu;

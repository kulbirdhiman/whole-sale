"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { getCategories, detailCategory } from "@/store/actions/admin/category";
import { CATEGORY_TYPE } from "@/app/constants";
import { detailCarModel } from "@/store/actions/admin/carModel";

const VehicleSelector = () => {
  const [make, setMake] = useState<any>("");
  const [model, setModel] = useState<any>("");
  const [year, setYear] = useState<any>("");

  const [years, setYears] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [models, setModels] = useState<any[]>([]);
  const [loadingMakes, setLoadingMakes] = useState<boolean>(true);
  const [loadingModels, setLoadingModels] = useState<boolean>(false);

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  // Fetch Makes
  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const res = await dispatch(
          getCategories({ limit: 10000000, type: CATEGORY_TYPE.company })
        ).unwrap();
        setCategories(res.data.result || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoadingMakes(false);
      }
    };
    fetchMakes();
  }, [dispatch]);

  // Fetch Models when a Make is selected
  const fetchModels = async (selectedMake: any) => {
    setLoadingModels(true);
    setModels([]);

    const category = categories.find((cat) => cat.id == selectedMake);

    if (!category) {
      setLoadingModels(false);
      return;
    }
    setMake(category);
    try {
      const res = await dispatch(
        detailCategory({ slug: category.slug })
      ).unwrap();
      if (res.success) {
        const options =
          (res.data.result as any).car_models?.map(
            (row: any) => ({
              value: row.id,
              label: row.name,
              slug:row.slug
            })
          ) || [];
        setModels(options);
      }
    } catch (error) {
      console.error("Error fetching models:", error);
    } finally {
      setLoadingModels(false);
    }
  };

  const fetchYears = async (selectedMake: any) => {
    try {

     const model =  models.find((r)=>r.value == selectedMake)
     console.log("model",model);
     
      setModel(model );
      const res = await dispatch(detailCarModel({ id: selectedMake })).unwrap();
      if (res.success) {
        setYears(res.data.result);
      }
    } catch (error) {
      console.error("Error fetching models:", error);
    } finally {
      setLoadingModels(false);
    }
  };

   

 
  // Handle Make Selection
  const handleMakeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedMake = e.target.value;

    setModel("");
    setYear("");
    fetchModels(selectedMake);
  };

  // Handle Model Selection
  const handleModelChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    fetchYears(e.target.value);
 
    setYear("");
  };

  // Handle Year Selection & Redirect
  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = e.target.value;

    // setYear(selectedYear);
    if (make && model && selectedYear) {
      router.push(`/products/${make.slug}/${model.slug}/${selectedYear}`);
    }
  };
  return (
    <div
  className="h-[70vh] flex flex-col mt-10 items-center justify-center bg-gray-900 text-white relative px-6"
  style={{
    backgroundImage:
      "url('/images/Banner3.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-50"></div>

  {/* Content */}
  <div className="space-y-4 flex flex-col justify-center items-center relative">
    {/* Heading */}
    <h2 className="text-2xl md:text-3xl font-semibold text-center">
      Find What Fits Your Vehicle
    </h2>

    {/* Make Selection */}
    <select
  className="block w-[11rem] sm:w-[14rem] md:w-[24rem] p-3 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm 
    focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
  value={make?.id || ""}
  onChange={handleMakeChange}
  disabled={loadingMakes || categories.length === 0}
>
  <option value="" disabled>
    Select Your Make
  </option>
  {categories.map((makeOption, index) => (
    <option key={index} value={makeOption.id}>
      {makeOption.name}
    </option>
  ))}
</select>


    {/* Model Selection */}
    {make && (
  <select
    className="block w-[11rem] sm:w-[14rem] md:w-[24rem] p-3 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm mt-4 focus:ring-2 focus:ring-blue-500"
    value={model?.value || ""}
    onChange={handleModelChange}
    disabled={loadingModels || models.length === 0}
  >
    <option value="" disabled>
      Select Your Model
    </option>
    {models.map((modelOption) => (
      <option key={modelOption.value} value={modelOption.value}>
        {modelOption.label}
      </option>
    ))}
  </select>
)}


    {/* Year Selection */}
    {model && (
      <select
        className="block w-[11rem] sm:w-[14rem] md:w-[24rem] p-3 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm mt-4 focus:ring-2 focus:ring-blue-500"
        value={year?.id || ""}
        onChange={handleYearChange}
      >
        <option value="">Select Year</option>
        {years.map((yearOption, index) => (
          <option key={index} value={yearOption.id}>
            {yearOption.name}
          </option>
        ))}
      </select>
    )}
  </div>
</div>

  );
};

export default VehicleSelector;

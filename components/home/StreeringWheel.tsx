"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { getCategories, detailCategory } from "@/store/actions/admin/category";

import Link from "next/link";
import { CATEGORY_TYPE } from "@/app/constants";
import dynamic from "next/dynamic";
import SteeringWheelSlider from "./SteeringWheelSlider";

const SteeringWheelSection = () => {
  const [makes, setMakes] = useState<any[]>([]);
  const [models, setModels] = useState<any[]>([]);
  const [selectedMake, setSelectedMake] = useState<any>("");
  const [selectedModel, setSelectedModel] = useState<any>("");
  const [loadingMakes, setLoadingMakes] = useState<boolean>(true);
  const [loadingModels, setLoadingModels] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  // Fetch Makes
  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const res = await dispatch(getCategories({ limit: 10000000,type:CATEGORY_TYPE.company })).unwrap();
        setMakes(res.data.result || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoadingMakes(false);
      }
    };
    fetchMakes();
  }, [dispatch]);

  // Fetch Models when Make is selected
  const fetchModels = useCallback(async (make: any) => {
    setLoadingModels(true);
    setModels([]);

    try {
      const category = makes.find((cat: any) => cat.id == make);
 
      if (!category) {
        setLoadingModels(false);
        return;
      }
 
setSelectedMake(category)
      const res = await dispatch(
        detailCategory({ slug: category.slug })
      ).unwrap();
      if (res.success) {
        setModels(
          (res.data.result as any).car_models || []
        );
      }
    } catch (error) {
      console.error("Error fetching models:", error);
    } finally {
      setLoadingModels(false);
    }
  }, [dispatch, makes])

  // Handle Make Selection
  const handleMakeChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const makeId = e.target.value;
      setSelectedModel(null); 
      fetchModels(makeId);
    },
    [fetchModels]
  );

  // Handle Model Selection
  const handleModelChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const model = models.find((r) => r.id == e.target.value);
      setSelectedModel(model);
    },
    [models]
  );

  return (
    <section className="bg-gray-50 text-gray-900 py-16 px-6 md:px-12 lg:px-20">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Side - Image Slider */}
  <SteeringWheelSlider />


        {/* Right Side - Details */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-blue-600">
            Custom Steering Wheel's
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Experience superior grip and comfort with our high-quality steering
            wheels. Designed for performance and style, they enhance driving
            precision and control.
          </p>

          {/* Dropdown Selectors */}
          <div>
            {/* Make Selector */}
            <label className="text-gray-700 font-medium text-sm">
              Select Make:
            </label>
            <select
              className="block w-[13rem] sm:w-[14rem] md:w-[20rem] p-3 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              value={selectedMake.id}
              onChange={handleMakeChange}
              disabled={loadingMakes}
            >
              <option value="">
                {loadingMakes ? "Loading makes..." : "Choose a Make"}
              </option>
              {makes.map((make, index) => (
                <option key={index} value={make.id}>
                  {make.name}
                </option>
              ))}
            </select>

            {/* Model Selector */}
            {selectedMake && (
              <>
                <label className="text-gray-700 font-medium text-sm">
                  Select Model:
                </label>
                <select
                  className="block w-[13rem] sm:w-[14rem] md:w-[20rem] p-3 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                  value={selectedModel.id}
                  onChange={handleModelChange}
                  disabled={loadingModels || models.length === 0}
                >
                  <option value="">
                    {loadingModels ? "Loading models..." : "Choose a Model"}
                  </option>
                  {models.map((model, index) => (
                    <option key={index} value={model.id}>
                      {model.name}
                    </option>
                  ))}
                </select>
              </>
            )}
          </div>

          {/* Explore Button */}
          <Link
          href={selectedModel?  `/products/${selectedMake.slug}/${selectedModel.slug}?category=steering-wheel` : "#" }
            className={`px-6 py-3 mt-4 rounded-lg shadow-md text-lg font-semibold  block w-[200px] text-center  transition-all ${
              selectedModel
                ? "bg-blue-500 hover:bg-blue-600 text-white scale-105"
                : "bg-gray-300 cursor-not-allowed text-gray-600"
            }`}
            // disabled={!selectedModel}
          >
            Explore {selectedModel.name || "More"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SteeringWheelSection;

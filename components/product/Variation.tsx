import { IN_STOCK, IS_MULTY, OPTION_TYPE } from "@/app/constants";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

const Variations = ({ variationData, setVariation, variation, errors }) => {
  const [showCategory, setShowCategory] = useState({});
  const [customType,setCustomType] = useState("")

  const toggleCategoryVisibility = (category) => {
    setShowCategory((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const handleOptionChange = (row, option) => {
    if (option.in_stock !== IN_STOCK) return;

    setVariation((prev) => {
      let updatedVariations = [...prev];

      if (row.is_multy == IS_MULTY) {
        const existingVariation = updatedVariations.find((v) => v.id == row.id);

        if (existingVariation?.id) {
          const isOptionSelected = existingVariation.options.some(
            (o) => o.id == option.id
          );

          if (isOptionSelected) {
            existingVariation.options = existingVariation.options.filter(
              (o) => o.id !== option.id
            );
          } else {
            existingVariation.options = [...existingVariation.options, option];
          }

          updatedVariations = updatedVariations.filter((v) => v.id != row.id);

          if (existingVariation.options.length > 0) {
            updatedVariations.push(existingVariation);
          }
        } else {
          updatedVariations.push({
            ...row,

            options: [option],
          });
        }
      } else {
        const existingVar = updatedVariations.find((v) => v.id == row.id);
        updatedVariations = updatedVariations.filter((v) => v.id != row.id);
        if (existingVar?.options[0]?.id == option.id) {
        } else {
          updatedVariations.push({
            ...row,
            options: [option],
          });
        }
      }

      return updatedVariations;
    });
  };

  const handleOptionChangeForCustom = (row, option) => {


    setVariation((prev) => {
      let updatedVariations = [...prev];

     
        const existingVar = updatedVariations.find((v) => v.id == row.id);
        updatedVariations = updatedVariations.filter((v) => v.id != row.id);

        if(option.name){
          if (existingVar?.options[0]?.id == option.id) {
          
            updatedVariations.push({
              ...row,
              options: [option],
            });
          } else {
            updatedVariations.push({
              ...row,
              options: [option],
            });
          }
        }
      
  

      return updatedVariations;
    });

  }
  useEffect(()=>{
console.log(variation,"variation");

  },[variation])
  return (
    <div>
      <p className="text-lg text-black font-bold">Select your Options</p>
      <div className="mt-4   space-y-4">
        {variationData?.map((row) =>
          row.type_of_option != OPTION_TYPE.custom ? (
            <div key={row.id}>
              {errors[row.id] && (
                <p className="px-3 text-red-400">{errors[row.id]}</p>
              )}
              <button
                onClick={() => toggleCategoryVisibility(row.name)}
                className="flex items-center justify-between w-full px-4 py-2 text-lg font-medium text-black bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-blue-50 hover:text-blue-700 transition-all duration-300"
              >
                <span>
                  {row.name.charAt(0).toUpperCase() + row.name.slice(1)}
                </span>
                {showCategory[row.name] ? (
                  <ChevronUpIcon className="h-5 w-5 text-black transition-transform duration-300" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-black transition-transform duration-300" />
                )}
              </button>
              {showCategory[row.name] && (
                <div className="mt-2 space-y-2">
                  {row.options.map((option) => (
                    <div key={option.id} className="flex items-center gap-2">
                      <input
                        name={row.name}
                        type={
                          row.is_multy == IS_MULTY ? "checkbox" : "checkbox"
                        }
                        disabled={option.in_stock !== IN_STOCK} // Disable out-of-stock options
                        checked={
                          variation
                            .find((r) => r.id === row.id)
                            ?.options?.some((op) => op.id === option.id) ||
                          false
                        }
                        id={`option-${option.id}`}
                        onChange={() =>  handleOptionChange(row, option)}
                        className="w-5 h-5"
                      />
                      <label
                        htmlFor={`option-${option.id}`}
                        className="text-sm text-gray-600"
                      >
                        {option.name}{" "}
                        {option.price > 0 && `(+$${option.price})`}{" "}
                        {option.in_stock != IN_STOCK && "Out of stock"}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <>
              <div key={row.id}>
                {errors[row.id] && (
                  <p className="px-3 text-red-400">{errors[row.id]}</p>
                )}
                <button
                  onClick={() => toggleCategoryVisibility(row.name)}
                  className="flex items-center justify-between w-full px-4 py-2 text-lg font-medium text-black bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-blue-50 hover:text-blue-700 transition-all duration-300"
                >
                  <span>
                    {row.name.charAt(0).toUpperCase() + row.name.slice(1)}
                  </span>
                  {showCategory[row.name] ? (
                    <ChevronUpIcon className="h-5 w-5 text-black transition-transform duration-300" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-black transition-transform duration-300" />
                  )}
                </button>
                {showCategory[row.name] && (
                  <div className="mt-2 space-y-2">
                    {row.options.map((option) => (
                      <div key={option.id} className="flex items-center gap-2">
                        <input
                          type={"text"}
                          placeholder={row.name}
                          id={`option-${option.id}`}
                          value={
                            variation.find((r) => r.id === row.id)?.options[0]
                              ?.name
                          }
                          onChange={(e) => {
                            setCustomType(e.target.value)
                            handleOptionChangeForCustom(row, {
                              ...option,
                              name: e.target.value,
                            });
                          }}
                          className="   border-black border-2 px-2 py-1   rounded text-black "
                        />
                        <label
                          htmlFor={`option-${option.id}`}
                          className="text-sm text-gray-600"
                        >
                          {option.price > 0 ? `(+$${option.price})` : "add"}{" "}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default Variations;

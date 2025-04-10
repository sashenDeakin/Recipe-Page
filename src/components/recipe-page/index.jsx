import React from "react";

const RecipePage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-y-8 pt-12">
      <div className="w-[240px] h-[44px] sm:w-[280px] sm:h-[50px] mt-10">
        <p className="text-[28px] sm:text-[36px] font-[400] text-center">
          Create Recipe
        </p>
      </div>

      <div className="w-[95%] sm:w-1/2 h-screen bg-[#FFFEFE] items-center rounded-lg flex justify-center">
        <div className="w-[95%] sm:w-4/6 h-full pt-24 pb-24 flex flex-col justify-between items-center gap-y-8">
          {/* Recipe Description */}
          <div className="w-full h-full bg-purple-100 rounded-lg pl-2 sm:pl-6">
            <div className="p-2 font-[500] text-[18px] sm:text-[20px]">
              <p>Recipe Description</p>
            </div>
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-y-4">
              <div className="flex flex-col justify-between">
                <div className="w-full p-2">
                  <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-x-7 gap-y-2">
                    <p className="font-[400] text-[14px] sm:text-[16px]">
                      Recipe Name
                    </p>
                    <input
                      className="rounded-full w-full sm:w-[200px] h-[42px] border border-gray-400 text-start p-4"
                      placeholder="Enter Recipe Name"
                    />
                  </div>
                </div>
                <div className="w-full p-2">
                  <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-x-7 gap-y-2">
                    <p className="font-[400] text-[14px] sm:text-[16px]">
                      Cuisine Type
                    </p>
                    <input
                      className="rounded-full w-full sm:w-[200px] h-[42px] border border-gray-400 text-start p-4"
                      placeholder="Enter Cuisine Type"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center sm:pr-10 gap-x-5 w-full sm:w-fit">
                <p className="font-[400] text-[14px] sm:text-[16px]">
                  Add Image
                </p>
                <button className="bg-[#BA49E7] px-4 py-4 rounded-lg text-white font-semibold">
                  Upload Image
                </button>
              </div>
            </div>
          </div>

          {/* Cooking Description */}
          <div className="w-full h-full bg-purple-100 rounded-lg pl-2 sm:pl-6">
            <div className="p-2 font-[500] text-[18px] sm:text-[20px]">
              <p>Cooking Description</p>
            </div>
            <div className="flex flex-col justify-between">
              <div className="w-full p-2">
                <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-x-7 gap-y-2">
                  <p className="font-[400] text-[14px] sm:text-[16px]">
                    Preparation Time
                  </p>
                  <input
                    className="rounded-full w-full sm:w-[200px] h-[42px] border border-gray-400 text-start p-4"
                    placeholder="Enter Preparation Time"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-x-7 gap-y-2">
                  <p className="font-[400] text-[14px] sm:text-[16px] mr-5">
                    Total Servings
                  </p>
                  <input
                    className="rounded-full w-full sm:w-[200px] h-[42px] border border-gray-400 text-start p-4"
                    placeholder="Enter Total Servings"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="w-full h-full bg-purple-100 rounded-lg pl-2 sm:pl-6 pr-2 sm:pr-10">
            <div className="p-2 font-[500] text-[18px] sm:text-[20px]">
              <p>Recipe Description</p>
            </div>
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-y-4">
              <div className="flex flex-col justify-between w-full sm:w-fit">
                <div className="w-full p-2">
                  <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-x-7 gap-y-2">
                    <p className="font-[400] text-[14px] sm:text-[16px]">
                      Recipe Name
                    </p>
                    <input
                      className="rounded-full w-full sm:w-[200px] h-[42px] border border-gray-400 text-start p-4"
                      placeholder="Enter Recipe Name"
                    />
                  </div>
                </div>
                <div className="w-full p-2">
                  <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-x-7 gap-y-2">
                    <p className="font-[400] text-[14px] sm:text-[16px]">
                      Cuisine Type
                    </p>
                    <input
                      className="rounded-full w-full sm:w-[200px] h-[42px] border border-gray-400 text-start p-4"
                      placeholder="Enter Cuisine Type"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-full sm:w-fit">
                <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-y-2 sm:gap-y-0 sm:gap-x-7 w-full">
                  <p className="font-[400] text-[14px] sm:text-[16px]">
                    Cuisine Type
                  </p>
                  <input
                    className="rounded-full w-full sm:w-[200px] h-[42px] border border-gray-400 text-start p-4"
                    placeholder="Enter Cuisine Type"
                  />
                </div>
                <div className="mt-4 sm:ml-32 sm:mt-2 w-full sm:w-fit">
                  <button className="bg-[#BA49E7] px-4 py-1 rounded-lg text-white font-semibold w-full sm:w-fit">
                    Add Ingredient +
                  </button>
                </div>
              </div>
            </div>

            <table className="table-auto border border-gray-300 w-full text-left mb-10 mt-5 text-sm sm:text-base">
              <thead>
                <tr className="bg-[#6F42C1] text-white text-center text-xs sm:text-base">
                  <th className="border border-gray-300 px-2 sm:px-4 py-2">
                    Category
                  </th>
                  <th className="border border-gray-300 px-2 sm:px-4 py-2">
                    Ingredient
                  </th>
                  <th className="border border-gray-300 px-2 sm:px-4 py-2">
                    Quantity
                  </th>
                  <th className="border border-gray-300 px-2 sm:px-4 py-2">
                    Edit/Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#F4F4F4]">
                  <td className="border border-gray-300 px-2 sm:px-4 py-2">
                    Row 1, Col 1
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2">
                    Row 1, Col 2
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2">
                    Row 1, Col 3
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2">
                    Row 1, Col 4
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Instructions Section */}
          <div className="w-full h-full bg-purple-100 rounded-lg pl-2 sm:pl-6">
            <div className="p-2 font-[500] text-[18px] sm:text-[20px]">
              <p>Instructions</p>
            </div>
            <div className="flex flex-col sm:flex-row w-full justify-center items-start sm:items-center pr-2 sm:pr-6 gap-y-2 sm:gap-y-0">
              <button className="w-full sm:w-1/3 bg-[#6F42C1] py-2 px-3 font-semibold text-white">
                Step 1:
              </button>
              <input
                className="w-full py-2 placeholder:text-center pl-4"
                placeholder="Enter Step by Step instructions here..."
              />
            </div>
            <div className="mt-4 sm:ml-32 sm:mt-2 flex justify-end pr-2 sm:pr-6 my-4">
              <button className="bg-[#BA49E7] px-4 py-1 rounded-lg text-white font-semibold">
                Add Step +
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full h-full flex justify-center items-center mb-10">
            <button className="bg-[#4CAF50] px-12 py-4 rounded-full font-semibold text-white w-full sm:w-fit">
              Create Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;

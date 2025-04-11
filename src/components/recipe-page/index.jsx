import React from "react";

const RecipePage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-y-4 md:gap-y-6 lg:gap-y-8 pt-6 md:pt-10 lg:pt-12">
      <div className="w-[200px] xs:w-[240px] sm:w-[260px] md:w-[280px] h-[40px] xs:h-[44px] sm:h-[48px] md:h-[50px] mt-6 md:mt-8 lg:mt-10">
        <p className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] font-[400] text-center">
          Create Recipe
        </p>
      </div>

      <div className="w-[95%] xs:w-[90%] sm:w-[85%] md:w-[75%] lg:w-[60%] xl:w-1/2 h-auto min-h-screen bg-[#FFFEFE] items-center rounded-lg flex justify-center">
        <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-4/6 h-full pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24 flex flex-col justify-between items-center gap-y-4 md:gap-y-6 lg:gap-y-8">
          {/* Recipe Description */}
          <div className="w-full h-full bg-purple-100 rounded-lg pl-2 sm:pl-4 md:pl-6">
            <div className="p-2 font-[500] text-[16px] sm:text-[18px] md:text-[20px]">
              <p>Recipe Description</p>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-y-3 sm:gap-y-4">
              <div className="flex flex-col justify-between w-full md:w-auto">
                <div className="w-full p-1 sm:p-2">
                  <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-x-4 sm:gap-x-7 gap-y-1 sm:gap-y-2">
                    <p className="font-[400] text-[12px] xs:text-[14px] sm:text-[15px] md:text-[16px]">
                      Recipe Name
                    </p>
                    <input
                      className="rounded-full w-full xs:w-[180px] sm:w-[200px] h-[38px] xs:h-[42px] border border-gray-400 text-start px-3 xs:px-4"
                      placeholder="Enter Recipe Name"
                    />
                  </div>
                </div>
                <div className="w-full p-1 sm:p-2">
                  <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-x-4 sm:gap-x-7 gap-y-1 sm:gap-y-2">
                    <p className="font-[400] text-[12px] xs:text-[14px] sm:text-[15px] md:text-[16px]">
                      Cuisine Type
                    </p>
                    <input
                      className="rounded-full w-full xs:w-[180px] sm:w-[200px] h-[38px] xs:h-[42px] border border-gray-400 text-start px-3 xs:px-4"
                      placeholder="Enter Cuisine Type"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center md:pr-6 lg:pr-10 gap-x-3 sm:gap-x-5 w-full md:w-fit">
                <p className="font-[400] text-[12px] xs:text-[14px] sm:text-[15px] md:text-[16px]">
                  Add Image
                </p>
                <button className="bg-[#BA49E7] px-3 sm:px-4 py-2 sm:py-3 md:py-4 rounded-lg text-white font-semibold text-[12px] xs:text-[14px] sm:text-base">
                  Upload Image
                </button>
              </div>
            </div>
          </div>

          {/* Cooking Description */}
          <div className="w-full h-full bg-purple-100 rounded-lg pl-2 sm:pl-4 md:pl-6">
            <div className="p-2 font-[500] text-[16px] sm:text-[18px] md:text-[20px]">
              <p>Cooking Description</p>
            </div>
            <div className="flex flex-col justify-between">
              <div className="w-full p-1 sm:p-2">
                <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-x-4 sm:gap-x-7 gap-y-1 sm:gap-y-2">
                  <p className="font-[400] text-[12px] xs:text-[14px] sm:text-[15px] md:text-[16px]">
                    Preparation Time
                  </p>
                  <input
                    className="rounded-full w-full xs:w-[180px] sm:w-[200px] h-[38px] xs:h-[42px] border border-gray-400 text-start px-3 xs:px-4"
                    placeholder="Enter Preparation Time"
                  />
                </div>
              </div>
              <div className="w-full p-1 sm:p-2">
                <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-x-4 sm:gap-x-7 gap-y-1 sm:gap-y-2">
                  <p className="font-[400] text-[12px] xs:text-[14px] sm:text-[15px] md:text-[16px] mr-3 sm:mr-5">
                    Total Servings
                  </p>
                  <input
                    className="rounded-full w-full xs:w-[180px] sm:w-[200px] h-[38px] xs:h-[42px] border border-gray-400 text-start px-3 xs:px-4"
                    placeholder="Enter Total Servings"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="w-full h-full bg-purple-100 rounded-lg pl-2 sm:pl-4 md:pl-6 pr-2 sm:pr-4 md:pr-10">
            <div className="p-2 font-[500] text-[16px] sm:text-[18px] md:text-[20px]">
              <p>Recipe Description</p>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-y-3 sm:gap-y-4">
              <div className="flex flex-col justify-between w-full md:w-fit">
                <div className="w-full p-1 sm:p-2">
                  <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-x-4 sm:gap-x-7 gap-y-1 sm:gap-y-2">
                    <p className="font-[400] text-[12px] xs:text-[14px] sm:text-[15px] md:text-[16px]">
                      Recipe Name
                    </p>
                    <input
                      className="rounded-full w-full xs:w-[180px] sm:w-[200px] h-[38px] xs:h-[42px] border border-gray-400 text-start px-3 xs:px-4"
                      placeholder="Enter Recipe Name"
                    />
                  </div>
                </div>
                <div className="w-full p-1 sm:p-2">
                  <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-x-4 sm:gap-x-7 gap-y-1 sm:gap-y-2">
                    <p className="font-[400] text-[12px] xs:text-[14px] sm:text-[15px] md:text-[16px]">
                      Cuisine Type
                    </p>
                    <input
                      className="rounded-full w-full xs:w-[180px] sm:w-[200px] h-[38px] xs:h-[42px] border border-gray-400 text-start px-3 xs:px-4"
                      placeholder="Enter Cuisine Type"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-full md:w-fit">
                <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-y-1 sm:gap-y-0 gap-x-4 sm:gap-x-7 w-full">
                  <p className="font-[400] text-[12px] xs:text-[14px] sm:text-[15px] md:text-[16px]">
                    Cuisine Type
                  </p>
                  <input
                    className="rounded-full w-full xs:w-[180px] sm:w-[200px] h-[38px] xs:h-[42px] border border-gray-400 text-start px-3 xs:px-4"
                    placeholder="Enter Cuisine Type"
                  />
                </div>
                <div className="mt-3 sm:mt-2 md:ml-32 w-full sm:w-fit">
                  <button className="bg-[#BA49E7] px-3 sm:px-4 py-1 rounded-lg text-white font-semibold text-[12px] xs:text-[14px] sm:text-base w-full sm:w-fit">
                    Add Ingredient +
                  </button>
                </div>
              </div>
            </div>

            <table className="table-auto border border-gray-300 w-full text-left mb-6 sm:mb-8 md:mb-10 mt-3 sm:mt-4 md:mt-5 text-[10px] xs:text-[12px] sm:text-[14px] md:text-base">
              <thead>
                <tr className="bg-[#6F42C1] text-white text-center text-[10px] xs:text-[12px] sm:text-[14px] md:text-base">
                  <th className="border border-gray-300 px-1 xs:px-2 sm:px-3 md:px-4 py-1 xs:py-2">
                    Category
                  </th>
                  <th className="border border-gray-300 px-1 xs:px-2 sm:px-3 md:px-4 py-1 xs:py-2">
                    Ingredient
                  </th>
                  <th className="border border-gray-300 px-1 xs:px-2 sm:px-3 md:px-4 py-1 xs:py-2">
                    Quantity
                  </th>
                  <th className="border border-gray-300 px-1 xs:px-2 sm:px-3 md:px-4 py-1 xs:py-2">
                    Edit/Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#F4F4F4]">
                  <td className="border border-gray-300 px-1 xs:px-2 sm:px-3 md:px-4 py-1 xs:py-2">
                    Row 1, Col 1
                  </td>
                  <td className="border border-gray-300 px-1 xs:px-2 sm:px-3 md:px-4 py-1 xs:py-2">
                    Row 1, Col 2
                  </td>
                  <td className="border border-gray-300 px-1 xs:px-2 sm:px-3 md:px-4 py-1 xs:py-2">
                    Row 1, Col 3
                  </td>
                  <td className="border border-gray-300 px-1 xs:px-2 sm:px-3 md:px-4 py-1 xs:py-2">
                    Row 1, Col 4
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Instructions Section */}
          <div className="w-full h-full bg-purple-100 rounded-lg pl-2 sm:pl-4 md:pl-6">
            <div className="p-2 font-[500] text-[16px] sm:text-[18px] md:text-[20px]">
              <p>Instructions</p>
            </div>
            <div className="flex flex-col sm:flex-row w-full justify-center items-start sm:items-center pr-2 sm:pr-4 md:pr-6 gap-y-1 sm:gap-y-0">
              <button className="w-full sm:w-1/3 bg-[#6F42C1] py-1 sm:py-2 px-2 sm:px-3 font-semibold text-white text-[12px] xs:text-[14px] sm:text-base">
                Step 1:
              </button>
              <input
                className="w-full py-1 sm:py-2 placeholder:text-center pl-2 sm:pl-4 text-[12px] xs:text-[14px] sm:text-base"
                placeholder="Enter Step by Step instructions here..."
              />
            </div>
            <div className="mt-3 sm:mt-2 md:ml-32 flex justify-end pr-2 sm:pr-4 md:pr-6 my-3 sm:my-4">
              <button className="bg-[#BA49E7] px-3 sm:px-4 py-1 rounded-lg text-white font-semibold text-[12px] xs:text-[14px] sm:text-base">
                Add Step +
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full h-full flex justify-center items-center mb-6 sm:mb-8 md:mb-10">
            <button className="bg-[#4CAF50] px-8 sm:px-10 md:px-12 py-2 sm:py-3 md:py-4 rounded-full font-semibold text-white text-[14px] sm:text-[16px] w-full sm:w-fit">
              Create Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;

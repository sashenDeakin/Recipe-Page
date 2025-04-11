import React from "react";

const RecipePage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="w-full sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] max-w-[1400px] bg-[#FFFEFE] rounded-lg flex flex-col sm:flex-row">
        {/*         <div className="hidden sm:flex w-0 sm:w-1/4 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-purple-50 p-4 sm:p-6 md:p-8 rounded-l-lg">
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-800 mb-4 sm:mb-6 md:mb-8">
              Recipe Creator
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-purple-600 text-center">
              Create delicious recipes with ease
            </p>
          </div>
        </div> */}

        {/* Main Form Area - full width on mobile, constrained on larger screens */}
        <div className="w-full  p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
          {/* Header - flex column on mobile, row on sm+ */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <div className="w-full flex justify-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-center sm:text-left mb-4 sm:mb-0">
                Create Recipe
              </h1>
            </div>
            {/*            <button className="bg-[#BA49E7] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base md:text-lg">
              Save Draft
            </button> */}
          </div>

          {/* Recipe Description Section */}
          <div className="bg-purple-100 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6">
              Recipe Description
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
              <div className="flex-1 flex flex-col gap-4 sm:gap-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <label className="w-full sm:w-1/3 text-sm sm:text-base md:text-lg">
                    Recipe Name
                  </label>
                  <input
                    className="w-full sm:w-2/3 rounded-full h-10 sm:h-12 border border-gray-400 px-4"
                    placeholder="Enter Recipe Name"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <label className="w-full sm:w-1/3 text-sm sm:text-base md:text-lg">
                    Cuisine Type
                  </label>
                  <input
                    className="w-full sm:w-2/3 rounded-full h-10 sm:h-12 border border-gray-400 px-4"
                    placeholder="Enter Cuisine Type"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between sm:justify-end gap-4 sm:gap-6">
                <label className="text-sm sm:text-base md:text-lg sm:mr-4">
                  Add Image
                </label>
                <button className="bg-[#BA49E7] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base">
                  Upload Image
                </button>
              </div>
            </div>
          </div>

          {/* Cooking Description Section */}
          <div className="bg-purple-100 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6">
              Cooking Description
            </h2>

            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                <label className="w-full sm:w-1/3 text-sm sm:text-base md:text-lg">
                  Preparation Time
                </label>
                <input
                  className="w-full sm:w-2/3 rounded-full h-10 sm:h-12 border border-gray-400 px-4"
                  placeholder="Enter Preparation Time"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                <label className="w-full sm:w-1/3 text-sm sm:text-base md:text-lg">
                  Total Servings
                </label>
                <input
                  className="w-full sm:w-2/3 rounded-full h-10 sm:h-12 border border-gray-400 px-4"
                  placeholder="Enter Total Servings"
                />
              </div>
            </div>
          </div>

          {/* Ingredients Section */}
          <div className="bg-purple-100 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6">
              Ingredients
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                <label className="w-full sm:w-1/3 text-sm sm:text-base md:text-lg">
                  Category
                </label>
                <input
                  className="w-full sm:w-2/3 rounded-full h-10 sm:h-12 border border-gray-400 px-4"
                  placeholder="Enter Category"
                />
              </div>

              <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                <label className="w-full sm:w-1/3 text-sm sm:text-base md:text-lg">
                  Ingredient
                </label>
                <input
                  className="w-full sm:w-2/3 rounded-full h-10 sm:h-12 border border-gray-400 px-4"
                  placeholder="Enter Ingredient"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                <label className="w-full sm:w-1/3 text-sm sm:text-base md:text-lg">
                  Quantity
                </label>
                <input
                  className="w-full sm:w-2/3 rounded-full h-10 sm:h-12 border border-gray-400 px-4"
                  placeholder="Enter Quantity"
                />
              </div>

              <div className="flex items-center justify-end sm:justify-start">
                <button className="bg-[#BA49E7] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base">
                  Add Ingredient +
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-[#6F42C1] text-white">
                  <tr>
                    <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">
                      Category
                    </th>
                    <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">
                      Ingredient
                    </th>
                    <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">
                      Quantity
                    </th>
                    <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#F4F4F4]">
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">
                      Dairy
                    </td>
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">
                      Milk
                    </td>
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">
                      1 cup
                    </td>
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">
                      <button className="text-blue-500 mr-2">Edit</button>
                      <button className="text-red-500">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="bg-purple-100 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6">
              Instructions
            </h2>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 mb-4 sm:mb-6">
              <div className="w-full sm:w-1/4">
                <button className="w-full bg-[#6F42C1] text-white py-2 sm:py-3 px-4 rounded-l-lg font-semibold text-sm sm:text-base">
                  Step 1:
                </button>
              </div>
              <input
                className="w-full sm:w-3/4 rounded-r-lg border border-gray-400 py-2 sm:py-3 px-4"
                placeholder="Enter step by step instructions here..."
              />
            </div>

            <div className="flex justify-end">
              <button className="bg-[#BA49E7] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base">
                Add Step +
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button className="bg-[#4CAF50] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-lg sm:text-xl md:text-2xl w-full sm:w-auto">
              Create Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;

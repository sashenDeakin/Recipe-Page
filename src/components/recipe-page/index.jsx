import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import supabase from "../../supabase-client";

const RecipePage = () => {
  const fileInputRef = useRef(null);

  const [recipeName, setRecipeName] = useState("");
  const [cuisineType, setCuisineType] = useState("");
  const [preparationTime, setPreparationTime] = useState("");
  const [totalServings, setTotalServings] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [quantity, setQuantity] = useState("");
  const [step, setStep] = useState("");

  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([
    {
      category: "",
      ingredient: "",
      quantity: "",
    },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Upload image to Supabase Storage
      let imageUrl = null;
      if (image) {
        const fileExt = image.name.split(".").pop();
        const fileName = `${uuidv4()}.${fileExt}`;
        const filePath = `Create Recipe/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("my-recipe-page")
          .upload(filePath, image);

        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage
          .from("my-recipe-page")
          .getPublicUrl(filePath);

        imageUrl = publicUrlData?.publicUrl;
      }

      // Step 2: Insert recipe data into Supabase
      const { data, error } = await supabase.from("my-recipe").insert([
        {
          creater_id: 1,
          recipeName,
          cuisineType,
          preparationTime,
          totalServings,
          ingredients, // already an array of objects
          instructions, // already an array of strings
          image_url: imageUrl || null, // use the uploaded image URL or null if no image was uploaded
        },
      ]);

      if (error) {
        console.error("Insert error:", error.message);
        alert("Failed to save recipe.");
      } else {
        alert("Recipe created successfully!");
        console.log("Inserted recipe:", data);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred while saving your recipe.");
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center bg-purple-100">
      <div className="w-full min-h-screen flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <div className="w-full sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] max-w-[1400px] bg-[#FFFEFE] rounded-lg flex flex-col sm:flex-row">
          {/* Main Form Area - full width on mobile, constrained on larger screens */}
          <div className="w-full  p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
            {/* Header - flex column on mobile, row on sm+ */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <div className="w-full flex justify-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-center sm:text-left mb-4 sm:mb-0">
                  Create Recipe
                </h1>
              </div>
            </div>
            {/* Recipe Description Section */}
            <div className="bg-purple-100 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6">
                Recipe Description
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
                <div className="flex flex-col justify-start items-start gap-4 sm:gap-6 w-full">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0 w-2/3">
                    <label className="w-full sm:w-1/3 text-sm sm:text-base md:text-lg">
                      Recipe Name
                    </label>
                    <input
                      className="w-full sm:w-2/3 rounded-xl h-10 sm:h-12 border border-gray-400 px-4"
                      placeholder="Enter Recipe Name"
                      value={recipeName}
                      onChange={(e) => setRecipeName(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0 w-2/3">
                    <label className="w-full sm:w-1/3 text-sm sm:text-base md:text-lg">
                      Cuisine Type
                    </label>
                    <input
                      className="w-full sm:w-2/3 rounded-xl h-10 sm:h-12 border border-gray-400 px-4"
                      placeholder="Enter Cuisine Type"
                      value={cuisineType}
                      onChange={(e) => setCuisineType(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between sm:justify-end gap-4 sm:gap-6 sm:w-1/3">
                  <label className="text-sm sm:text-base md:text-lg sm:mr-4">
                    Add Image
                  </label>

                  {/* Hidden file input */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    id="file-upload"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="hidden"
                  />

                  {/* Styled label as button */}
                  <label
                    htmlFor="file-upload"
                    className="bg-[#BA49E7] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base cursor-pointer"
                  >
                    Upload Image
                  </label>
                </div>
              </div>
            </div>
            {/* Cooking Description Section */}
            <div className="bg-purple-100 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6">
                Cooking Description
              </h2>
              <div className="flex flex-col gap-4 sm:gap-6 w-full">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0 w-1/2">
                  <label className="w-full sm:w-1/3 text-sm sm:text-base md:text-lg">
                    Preparation Time
                  </label>
                  <input
                    className="w-full sm:w-2/3 rounded-xl h-10 sm:h-12 border border-gray-400 px-4"
                    placeholder="Enter Preparation Time"
                    value={preparationTime}
                    onChange={(e) => setPreparationTime(e.target.value)}
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0 w-1/2">
                  <label className="w-full sm:w-1/3 text-sm sm:text-base md:text-lg">
                    Total Servings
                  </label>
                  <input
                    className="w-full sm:w-2/3 rounded-xl h-10 sm:h-12 border border-gray-400 px-4"
                    placeholder="Enter Total Servings"
                    value={totalServings}
                    onChange={(e) => setTotalServings(e.target.value)}
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
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0 sm:w-1/2">
                  <label className="w-full sm:w-1/3 text-sm sm:text-base md:text-lg">
                    Category
                  </label>
                  <select
                    className="w-full sm:w-2/3 rounded-xl h-10 sm:h-12 border border-gray-400 px-4 bg-white"
                    defaultValue=""
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="meat">Meat</option>
                    <option value="vegetables">Vegetables</option>
                    <option value="grains">Grains</option>
                    <option value="carbs">Carbs</option>
                    <option value="dairy">Dairy</option>
                    <option value="spices">Spices</option>
                  </select>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0 sm:w-1/2">
                  <label className="w-full sm:w-1/3 text-sm sm:text-base md:text-lg">
                    Ingredient
                  </label>
                  <input
                    className="w-full sm:w-2/3 rounded-xl h-10 sm:h-12 border border-gray-400 px-4"
                    placeholder="Enter Ingredient"
                    value={ingredient}
                    onChange={(e) => setIngredient(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8 w-full">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0 sm:w-1/2">
                  <label className="w-full sm:w-1/3 text-sm sm:text-base md:text-lg">
                    Quantity
                  </label>
                  <select
                    className="w-full sm:w-2/3 rounded-xl h-10 sm:h-12 border border-gray-400 px-4 bg-white"
                    defaultValue=""
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="ml">Ml</option>
                    <option value="g">G</option>
                    <option value="cups">Cups</option>
                    <option value="tbsp">Tbsp</option>
                    <option value="tsp">Tsp</option>
                  </select>
                </div>

                <div className="flex items-center justify-end sm:justify-end sm:w-1/2">
                  <button
                    className="bg-[#BA49E7] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base"
                    onClick={() => {
                      setIngredients((prev) => [
                        ...prev,
                        { category, ingredient, quantity },
                      ]);
                      setCategory("");
                      setIngredient("");
                      setQuantity("");
                    }}
                  >
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
                    {ingredients.map((item, index) => (
                      <tr className="bg-[#F4F4F4]" key={index}>
                        <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">
                          {item.category}
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">
                          {item.ingredient}
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">
                          {item.quantity}
                        </td>
                        <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">
                          {item.category &&
                            item.ingredient &&
                            item.quantity && (
                              <>
                                <button
                                  className="text-blue-500 mr-2"
                                  onClick={() => {
                                    setCategory(item.category);
                                    setIngredient(item.ingredient);
                                    setQuantity(item.quantity);
                                    setIngredients((prev) =>
                                      prev.filter((_, i) => i !== index)
                                    );
                                  }}
                                >
                                  Edit
                                </button>
                                <button
                                  className="text-red-500"
                                  onClick={() => {
                                    setIngredients((prev) =>
                                      prev.filter((_, i) => i !== index)
                                    );
                                  }}
                                >
                                  Delete
                                </button>
                              </>
                            )}
                        </td>
                      </tr>
                    ))}
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
                  value={step}
                  onChange={(e) => setStep(e.target.value)}
                />
              </div>

              <div className="flex justify-end">
                <button
                  className="bg-[#BA49E7] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base"
                  onClick={() => {
                    setInstructions((prev) => [...prev, step]);
                    setStep("");
                  }}
                >
                  Add Step +
                </button>
              </div>
              {instructions.length > 0 && (
                <div className="overflow-x-auto mt-4">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-[#6F42C1] text-white">
                      <tr>
                        <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">
                          Step
                        </th>
                        <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {instructions.map((item, index) => (
                        <tr className="bg-[#F4F4F4]" key={index}>
                          <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">
                            {item}
                          </td>
                          <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">
                            <button
                              className="text-red-500"
                              onClick={() => {
                                setInstructions((prev) =>
                                  prev.filter((_, i) => i !== index)
                                );
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                className="bg-[#4CAF50] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-lg sm:text-xl md:text-2xl w-full sm:w-auto"
                onClick={handleSubmit}
              >
                Create Recipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;

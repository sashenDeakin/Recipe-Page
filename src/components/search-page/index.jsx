import React from "react";

const SearchPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/*   */}
        <div className="w-full">
          <p className="text-center text-4xl font-bold">Recipes</p>
        </div>
        <div className="w-full flex justify-center items-center mt-8">
          <input
            className="bg-purple-200 rounded-full w-1/2 h-[66px]"
            disabled
          />
        </div>
        <div className="w-full flex justify-center items-center mt-4">
          <div className="relative w-1/2">
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
              width="42"
              height="42"
              viewBox="0 0 43 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.5778 17.2C30.5778 24.5884 24.5883 30.5778 17.2 30.5778C9.81166 30.5778 3.82222 24.5884 3.82222 17.2C3.82222 9.81166 9.81166 3.82222 17.2 3.82222C24.5883 3.82222 30.5778 9.81166 30.5778 17.2ZM27.936 30.6387C24.9935 32.9925 21.2611 34.4 17.2 34.4C7.7007 34.4 0 26.6993 0 17.2C0 7.70071 7.7007 0 17.2 0C26.6993 0 34.4 7.70071 34.4 17.2C34.4 21.2611 32.9925 24.9935 30.6387 27.936L42.4403 39.7375C43.1866 40.4839 43.1866 41.6939 42.4403 42.4403C41.6939 43.1866 40.4839 43.1866 39.7375 42.4403L27.936 30.6387Z"
                fill="#B2B2B2"
              />
            </svg>

            <input
              className="bg-purple-200 rounded-full w-full h-[66px] pl-12 placeholder:text-center placeholder:text-xl target:outline-none outline-none"
              placeholder="Search for recipes..."
              disabled
            />
          </div>
        </div>

        {/*   */}
        <div className="w-full flex flex-col justify-center items-center mt-24">
          <p className="text-4xl font-semibold text-center">Popular Recipes</p>

          <div
            className="grid gap-6 mt-6 px-24
  grid-cols-1 
  sm:grid-cols-2 
  md:grid-cols-3 
  lg:grid-cols-4 
  xl:grid-cols-5"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="bg-white shadow-xl flex flex-col justify-between items-center gap-y-4 rounded-2xl p-4 w-full h-[400px] transition-transform hover:scale-105 duration-300"
              >
                <img
                  src="/7577409d513e5fe45ea1bd764127adcf.png"
                  alt="Butter Chicken"
                  className="w-2/3 object-contain"
                />
                <button className="w-full bg-[#6F42C1] py-2 rounded-full text-white font-semibold text-base text-center">
                  Butter Chicken
                </button>
                <p className="text-sm text-gray-600">Universal</p>
                <p className="text-center text-xs sm:text-sm font-medium text-gray-700">
                  Marinate chicken in yogurt and spices, then cook in a rich
                  butter and tomato sauce.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

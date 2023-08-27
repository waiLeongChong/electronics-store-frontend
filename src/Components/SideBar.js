import React from 'react';

const categoryList = [
  "Camera and Lens", 
  "Camera Accessories", 
  "Camcorder", 
  "Mobile", 
  "Speaker", 
  "Computer"
];

function SideBar({ selectedCategory, onCategoryClick }) {
  return (
    <div className="h-auto bg-gray-200 text-left min-w-[200px] py-8 border-r border-gray-300 md:w-1/4 xl:w-1/5 2xl:w-1/6">
      <h4 className="font-bold mb-4 text-xl px-1">Categories</h4>
      <ul className="">
        <li 
          className={`cursor-pointer border-b border-gray-300 p-4 hover:bg-white p-2  ${!selectedCategory ? "bg-white text-gray-500" : ""}`}
          onClick={() => onCategoryClick("")}
        >
          All Electronics
        </li>
        {categoryList.map((category, index) => (
          <li 
            key={index}
            className={`cursor-pointer p-4 border-b border-gray-300 hover:bg-white hover:text-gray-500 ${category === selectedCategory ? "bg-white text-gray-500" : ""}`}
            onClick={() => onCategoryClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;

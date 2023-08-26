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
    <div className="text-left min-w-[200px] p-2 border-r border-gray-300 md:w-1/4 xl:w-1/5 2xl:w-1/6">
      <h4 className="font-bold mb-4 text-xl">Categories</h4>
      <ul className="">
        <li 
          className={`cursor-pointer border-b p-4 hover:bg-blue-500 p-2  ${!selectedCategory ? "bg-blue-500 text-white" : ""}`}
          onClick={() => onCategoryClick("")}
        >
          All Electronics
        </li>
        {categoryList.map((category, index) => (
          <li 
            key={index}
            className={`cursor-pointer p-4 border-b hover:bg-blue-500 hover:text-white ${category === selectedCategory ? "bg-blue-500 text-white" : ""}`}
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

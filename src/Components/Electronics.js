import axios from "axios";
import { useState, useEffect } from "react";
import Electronic from "./Electronic";
import SideBar from './SideBar';

const API = process.env.REACT_APP_API_URL;

function Electronics() {
  const [electronics, setElectronics] = useState([]);
  const [allElectronics, setAllElectronics] = useState([]);  // To store all the electronics items
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");


  useEffect(() => {
    axios
      .get(`${API}/electronics`)
      .then((response) => {
        setElectronics(response.data);
        setAllElectronics(response.data);
      })
      .catch((c) => console.warn("catch", c));
  }, []);
  
  
  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim() === "") {
      setElectronics(allElectronics);
    } else {
      const filtered = allElectronics.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setElectronics(filtered);
    }
  };


  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category.trim() === "") {
      setElectronics(allElectronics);
    } else {
      const filteredByCategory = allElectronics.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
      );
      setElectronics(filteredByCategory);
    }
  };  

  return (
  <div className="flex flex-col md:flex-row">
      <SideBar selectedCategory={selectedCategory} onCategoryClick={handleCategoryFilter} />

      <div className="p-4 flex-1">
          <form onSubmit={handleSearch} className="mb-4 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                  type="text"
                  placeholder="Search brand and category"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="p-2 border rounded-md flex-grow"
              />
              <button type="submit" className="bg-blue-500 text-white p-2 rounded-md mt-2 sm:mt-0">Search</button>
          </form>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
              {electronics.map((electronicsItem) =>
                  <Electronic key={electronicsItem.id} electronic={electronicsItem}/>
              )}
          </div>
      </div>
  </div>
  );
}

export default Electronics
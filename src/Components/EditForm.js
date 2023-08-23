import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;


function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [electronic, setElectronic] = useState({
    name: "",
    brand: "",
    category: "",
    description: "",
    image_url: "",
    price: 0,
  });


  useEffect(() => {
    console.log(`fetching from API: ${API}/electronics/${id}`);
    axios
      .get(`${API}/electronics/${id}`)
      .then((response) => {
        setElectronic(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [id, navigate]);

  const categoryList = ["Camera and Lens", "Camera Accessories", "Camcorder", "Mobile", "Speaker", "Computer"]

  const handleInput = (event) => {
    setElectronic({
      ...electronic,
      [event.target.id]: event.target.value
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/electronics/${id}`, electronic)
      .then(() => {
        navigate(`/electronics/${id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <img src={electronic.image_url} alt={electronic.name} style={{ width: '200px' }} />

        <label htmlFor="category">Category:</label>
        <select value={electronic.category} onChange={handleInput} id="category" required>
            {categoryList.map((category, index) => (
                <option key={index} value={category}>
                    {category}
                </option>
            ))}
        </select>

        <label htmlFor="brand">Brand:</label>
        <input type="text" id="brand" value={electronic.brand} onChange={handleInput} required />

        <label htmlFor="title">Title:</label>
        <input type="text" id="name" value={electronic.name} onChange={handleInput} required />

        <label htmlFor="description">Description:</label>
        <input type="text" id="description" value={electronic.description} onChange={handleInput} required />

        <label htmlFor="Price">Price:</label>
        <input type="number" id="price" value={electronic.price || ""} onChange={handleInput} required />
        
        <label htmlFor="image">Image URL:</label>
        <input type="url" id="image_url" value={electronic.image_url} placeholder="http://example.com/image.jpg" onChange={handleInput} required />


        <button type="submit">Save and Change</button>
      </form>

    </div>
  );
}

export default Edit;




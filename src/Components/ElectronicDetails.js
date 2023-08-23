import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function ElectronicDetails() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [electronic, setElectronic] = useState({});
  
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

  const deleteItem = () => {
    axios
      .delete(`${API}/electronics/${id}`)
      .then(() => {
        navigate("/electronics");
      })
      .catch((error) => console.error("Error:", error));
  };

  return(
    <div>
      <p>{electronic.category}</p>
      <p>{electronic.brand}</p>
      <p>{electronic.name}</p>
      <img src={electronic.image_url} alt={electronic.name} style={{width: '200px'}}/>     
      <p>{electronic.description}</p>
      <div>{electronic.price}</div>
      <button onClick={() => navigate("/electronics")}>Back</button>
      <button onClick={() => navigate(`/electronics/${id}/edit`)}>Edit</button>
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
}


export default ElectronicDetails;
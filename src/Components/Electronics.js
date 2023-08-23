import axios from "axios";
import { useState, useEffect } from "react";
import Electronic from "./Electronic";

const API = process.env.REACT_APP_API_URL;

function Electronics() {
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/electronics`)
      .then((response) => setElectronics(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div>
      {electronics.map((electronicsItem, index) =>
        <Electronic key={electronicsItem.id} electronic={electronicsItem}/>
      )}
    </div>
  );
}

export default Electronics
import { Link } from "react-router-dom";

function Electronic({ electronic }) {
  return (
    <div>
      <p>{electronic.category}</p>
      <p>{electronic.brand}</p>
      <p>{electronic.name}</p>
      <img src={electronic.image_url} alt={electronic.name} style={{width: '200px'}}/>     
      <p>{electronic.description}</p>
      <div>{electronic.price}</div>
      <Link to={`/electronics/${electronic.id}`}>items details</Link>
    </div>
  );
}

export default Electronic;
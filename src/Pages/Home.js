import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className="relative h-screen w-full">
      <img 
        src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWgelg-fHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" 
        alt="Full Screen Banner" 
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-transparent"></div>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center bg-gradient-to-r from-blue-900 via-blue-500 to-blue-300 p-6 rounded">
        <FontAwesomeIcon icon={faCube} size="3x" className="text-white mr-2"/>
        <h1 className="text-6xl text-white font-bold">
          electro.
        </h1>
      </div>
    </div>
  );
}

export default Home;
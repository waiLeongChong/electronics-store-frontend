import NewForm from "../Components/NewForm"

function New() {
  return(
    <div className="bg-gray-100 flex flex-col items-center justify-center py-8">
      <h2 className="text-3xl mb-6 text-blue-600">Add New Product</h2>
      <NewForm />
    </div>
  );
}

export default New;

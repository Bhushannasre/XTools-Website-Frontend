import { useParams } from "react-router-dom";
import { xData } from "../utils/Data";


function Product() {
  const { id } = useParams();

  const product = xData.find(item => item.id === Number(id));

  if (!product) {
    return <h1 className="text-white">Product not found</h1>;
  }

  return (
    <>
      {/* SVG BACKGROUND */}
  <svg
    className="absolute inset-0 z-0"
    viewBox="0 0 1440 720"
    fill="none"
  >
    <circle cx="1372.48" cy="618.205" r="308.334" stroke="#FF5722" strokeOpacity=".7" />
    <circle cx="16.942" cy="20.834" r="308.334" stroke="#299253" strokeOpacity=".7" />
  </svg>
     <div className="min-h-screen bg-black text-white p-10 flex flex-col items-center ">
      <h1 className="text-4xl font-bold text-white mt-12 border border-slate-700 p-4 rounded-lg">{product.title}</h1>
      <img src={product.image} alt={product.title} className="w-96 mt-6" />
      <p className="mt-4 max-w-xl">{product.description}</p>
      <div className="flex space-x-6">
         <div className="mt-10 relative inline-block p-0.5 rounded-full overflow-hidden hover:scale-105 transition duration-300 active:scale-100 before:content-[''] before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,_#00F5FF,_#00F5FF30,_#00F5FF)] button-wrapper">
                <button className="relative z-10 bg-gray-800 text-white rounded-full px-8 py-3 font-medium text-sm cursor-pointer flex "><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f6efef"><path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg>Add to Cart</button>
            </div>
            <div className="mt-10 relative inline-block p-0.5 rounded-full overflow-hidden hover:scale-105 transition duration-300 active:scale-100 before:content-[''] before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,_#00F5FF,_#00F5FF30,_#00F5FF)] button-wrapper">
                <button className="relative z-10 bg-gray-800 text-white rounded-full px-8 py-3 font-medium text-sm cursor-pointer flex items-center " onClick={() => window.history.back()}><svg xmlns="http://www.w3.org/2000/svg" height="24px"  viewBox="0 -960 960 960" width="24px" fill="#f3ecec"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>Back to Products</button>
            </div>
      </div>
     
    </div>
    </>
   
  );
}

export default Product;

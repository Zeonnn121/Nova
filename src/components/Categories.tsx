import React from 'react';
import './Categories.css';
import { useNavigate } from "react-router-dom";


const Categories = () => {
  const navigate = useNavigate();
  return (
    <div> {/* Wrapped everything in a div */}
      <div className="container">
        <h1 className="categ">Shop by Category</h1>
      </div>
      
    <div className="container my-3">
      <div className="row justify-content-center">
        {/* Box 1 */}
        <div className="col-md-3 mb-4">
          <button className="btn p-0 w-100 border-0 shadow-sm rounded overflow-hidden"
          onClick={() => navigate("/mens")}>
            <img
              src="sample-1.avif" // Replace with actual image
              alt="Category 1"
              className="img-fluid w-100"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <p className="text-center mt-2 m">Mens</p>
            
          </button>
        </div>

        {/* Box 2 */}
        <div className="col-md-3 mb-4">
          <button className="btn p-0 w-100 border-0 shadow-sm rounded overflow-hidden"
          onClick={()=>navigate("/Boys")}>
            <img
              src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/21466740/2023/1/9/74be0631-23cd-4dbf-8ab6-babedfbf89e91673254469774SuperstretchSlimFitJeans1.jpg" // Replace with actual image
              alt="Category 2"
              className="img-fluid w-100"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <p className="text-center mt-2 m">Boys</p>
          </button>
        </div>

        {/* Box 3 */}
        <div className="col-md-3 mb-4">
          <button className="btn p-0 w-100 border-0 shadow-sm rounded overflow-hidden"
          onClick={()=>navigate("/Girls")}>
            <img
              src="https://images.bewakoof.com/web/trending-spring-outfits-for-girls-bewakoof-blog-2-1620740561.jpg" // Replace with actual image
              alt="Category 3"
              className="img-fluid w-100"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <p className="text-center mt-2 m">Girls</p>
          </button>
        </div>

        {/* Box 4 */}
        <div className="col-md-3 mb-4">
          <button className="btn p-0 w-100 border-0 shadow-sm rounded overflow-hidden"
          onClick={()=>navigate("/Couple")}>
            <img
              src="https://m.media-amazon.com/images/I/516IcgCekGL._AC_UY1100_.jpg" // Replace with actual image
              alt="Category 4"
              className="img-fluid w-100"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <p className="text-center mt-2 m">Couple</p>
          </button>
        </div>
      </div>



    </div>
    </div>
  );
};

export default Categories;

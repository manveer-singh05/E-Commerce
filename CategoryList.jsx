import React from 'react';
import cateImg1 from '../../assets/cateImg1.png';
import cateImg2 from '../../assets/cateImg2.png';
import cateImg3 from '../../assets/cateImg3.png';
import cateImg4 from '../../assets/cateImg4.png';
import cateImg5 from '../../assets/cateImg5.png';
import cateImg6 from '../../assets/cateImg6.png';

import './CategorySlider.css';

function CategoryList() {
  const categories = [
    { img: cateImg1, title: "Men's T-Shirts" },
    { img: cateImg2, title: "Women's Wear" },
    { img: cateImg3, title: "Winter Collections" },
    { img: cateImg4, title: "Hooded T-Shirts" },
    { img: cateImg5, title: "Polo Neck T-Shirts" },
    { img: cateImg6, title: "Full Sleeves T-Shirts" },
  ];

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        {categories.map((cat, index) => (
          <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4">
            <div className="categoriesImg">
              <img
                src={cat.img}
                alt={cat.title}
                style={{
                  width: '140px',
                  height: '140px',
                  objectFit: 'cover',
                  borderRadius: '50%'
                }}
              />
              <p className="mt-2">{cat.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;

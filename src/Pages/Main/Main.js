import React, { useState, useEffect } from 'react';
import MainSlide from './MainSlide';
import TodayDeal from './TodayDeal';
import MainCategory from './MainCategory';
import MainProduct from './MainProduct';
import { API_URL } from '../../config';

export default function Main() {
  const [slideData, setSlideData] = useState([]);
  const [productlist, setProductlist] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [queyValue, setQueryValue] = useState('price');
  const [currentId, setCurrentId] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const handleFilterId = (id, queryName) => {
    setCurrentId(id);
    toggleFilter();
    setQueryValue(queryName);
  };

  useEffect(() => {
    fetch(`${API_URL}/store/category`)
      .then(res => res.json())
      .then(categoryList => setCategoryList(categoryList.category_lists));
    fetch('/data/mainslideData.json')
      .then(res => res.json())
      .then(slideData => setSlideData(slideData.slide_lists));
    fetch(`${API_URL}/store?ordering=${queyValue}`)
      .then(res => res.json())
      .then(productlist => setProductlist(productlist.product_lists));
  }, [queyValue]);

  return (
    <div>
      <MainSlide slideData={slideData} />
      <TodayDeal productlist={productlist} />
      <MainCategory categoryList={categoryList} />
      <MainProduct
        productlist={productlist}
        currentId={currentId}
        filterOpen={filterOpen}
        toggleFilter={toggleFilter}
        handleFilterId={handleFilterId}
      />
    </div>
  );
}

import React from 'react';
import './SearchFilter.css';

export const SearchFilter = ({ filterLogic }) => (
  <div>
    <h3>Categories</h3>
    <ul className="filters">
      <li className="filter" onClick={filterLogic}>
        Chicken
      </li>
      <li className="filter" onClick={filterLogic}>
      viande
      </li>
      <li className="filter" onClick={filterLogic}>
        poisson
      </li>
      <li className="filter" onClick={filterLogic}>
      High Protein 
      </li>
      <li className="filter" onClick={filterLogic}>
      Peanut Free 
      </li>
      <li className="filter" onClick={filterLogic}>
      Low Carb 
      </li>
      <li className="filter" onClick={filterLogic}>
      Low Fat
      </li>
      <li className="filter" onClick={filterLogic}>
      vegetarian
      </li>
      <li className="filter" onClick={filterLogic}>
      vegan
      </li>
    </ul>
  </div>
);
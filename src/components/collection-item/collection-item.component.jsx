import React from 'react';

import './collection-item.styles.css';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div 
      className="image" 
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      key={ id } />
      <div className="collection-footer">
        <span className="name"></span>
        <span className="price"></span>
    </div>
  </div>
);

export default CollectionItem;
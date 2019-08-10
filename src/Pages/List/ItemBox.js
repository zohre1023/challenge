import React from 'react';

const ItemBox = ({ item }) => {
  return ( 
    <div className="item-box">
      <div className="item">
        <span className="bold">NAME</span> <span>{item.name || ''}</span>
      </div> 
      <div className="item">
        <span className="bold">ID</span> <span>{item.id || ''}</span>
      </div>
      <div className="item">
        <span className="bold">MODE</span> <span>{item.mode || ''}</span>
      </div>
      <div className="item">
        <span className="bold">STATUS</span> <span>{item.status || ''}</span>
      </div>
      <div className="item">
        <span className="bold">DESTINATION</span> <span>{item.destination || ''}</span>
      </div>
      <div className="item">
        <span className="bold">ORIGIN</span> <span>{item.origin || ''}</span>
      </div>
      <div className="item">
        <span className="bold">TOTAL</span> <span>{item.total || ''}</span>
      </div>
    </div>
  );
};
 
export default ItemBox;
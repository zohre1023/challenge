import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Title = ({title}) => {
  return ( 
    <div className="title">
      <h5>{title}</h5>
    </div>
  );
};
Title.propTypes = {
  title : PropTypes.string, 
};
export default Title;
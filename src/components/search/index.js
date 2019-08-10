import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Search = ({value, onChange, searchedValue, changeSearchValue}) => {
  return ( 
    <input
      type="text"
      name="query"
      className="form-control search mb-3"
      placeholder="Search..."
      value={ searchedValue || '' }
      onChange = { e => changeSearchValue(e.currentTarget.value) }
    />
  );
};
Search.propTypes = {
  Search : PropTypes.string,
  onChange : PropTypes.func
};


export default Search;
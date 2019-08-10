import React, { useState, useEffect, useReducer } from 'react';
import _ from 'lodash';
import { getShipments } from '../../services/shipments';
import ListTable from './ListTable';
import Search from '../../components/search';
import {paginate} from '../../components/Pagination/Paginat';
import Pagination from '../../components/Pagination/pagination';
import './style.scss';
import ItemBox from './ItemBox';
const ListPage = () => {
  const [list, setList] = useState([]);
  const [sortColumn, setSortColumn] = useState({ path: 'left', order: 'asc' });
  const [searchQuery, setSearchQuery] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [selected, setSelected] = useState('');
 
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    getShipments().then((list) => {
      setList(list.data);
    });
  };
    
  const handleSort = col => {
    setSortColumn(col);
  };

  const  handleSearch = query =>{
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = page =>{
    setCurrentPage(page);
  };

  const handleClick = (item) =>{

    setSelected(item);
    // setSelected('hi');
  };
  const getPageData = (allItems=list) =>{

    let filtered = allItems;
    if (searchQuery)
      filtered = allItems.filter(m =>
        m.id.toString().toLowerCase().startsWith(searchQuery.toString().toLowerCase())
      );
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const list = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: list};
  };

  const {totalCount, data} = getPageData();

  return (
    <div className="list-page">
      <div className="leftside">
        <ListTable sortColumn={ sortColumn } datas={ data } onSort={ handleSort } onClick={ handleClick } />
        <Pagination
          itemsCount={ totalCount }
          pageSize={ pageSize }
          onPageChange={ handlePageChange }
          currentPage={ currentPage }
        />
      </div>
      <div className="rightside">
        <Search value={ searchQuery } onChange={ handleSearch } />
        <ItemBox item={ selected } />
      </div>   
    </div>
  );
};

export default ListPage;

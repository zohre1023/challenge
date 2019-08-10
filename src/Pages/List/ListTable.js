import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../components/SortTable';

const columns = [
  { path: 'id', lable: 'Id'},
  { path: 'name', lable: 'Name ' },
  { path: 'mode', lable: 'Mode ' },
  { path: 'type', lable: 'Type ' },
  { path: 'destination', lable: ' Destination' },
];
const ListTable = ({ sortColumn, datas, onSort, onClick }) => {

  return (
    <Table 
      className="list-table"
      columns={ columns } 
      data={ datas } 
      onSort={ onSort } 
      onClick={ onClick } 
      sortColumn={ sortColumn } 
    />
  );
};

ListTable.propTypes = {
  sortColumn: PropTypes.object,
  datas: PropTypes.array,
  onSort: PropTypes.func,
  onClick: PropTypes.func,
};
export default ListTable;

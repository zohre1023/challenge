import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ columns, sortColumn, onSort }) => {
  const raiseSort = path => {
    const sortColumn2 = { ...sortColumn };
    if (sortColumn2.path === path)
      sortColumn2.order = sortColumn2.order === 'asc' ? 'desc' : 'asc';
    else {
      sortColumn2.path = path;
      sortColumn2.order = 'asc';
    }
    onSort(sortColumn2);
  };

  const renderSortIcon = column => {
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };
  return (
    <thead>
      <tr>
        {columns.map(column => (
          <th
            className="clickable"
            key={ column.path || column.key }
            onClick={ () => raiseSort(column.path) }
          >
            {column.lable} {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};
TableHeader.propTypes = {
  columns: PropTypes.array,
  sortColumn: PropTypes.object,
  onSort: PropTypes.func,
};
export default TableHeader;

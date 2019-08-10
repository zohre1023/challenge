import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const TableBody = ({ data, columns, onClick }) => {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  const createKey = (item, column) => item.id + (column.path || column.key);
  return (
    <tbody>
      {data.map(item => (
        <tr key={ item.id } onClick={ () => onClick(item) }>
          {columns.map(column => (
            <td key={ createKey(item, column) }>{renderCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

TableBody.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  onClick: PropTypes.func
    
};
export default TableBody;

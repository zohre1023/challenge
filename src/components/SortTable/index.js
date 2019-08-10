import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Example = ({ columns, data, sortColumn, onSort, onClick, className }) => (
  <Table hover className={ className }>
    <TableHeader columns={ columns } sortColumn={ sortColumn } onSort={ onSort } />
    <TableBody data={ data } columns={ columns } onClick={ onClick } />
  </Table>
);
Example.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  sortColumn: PropTypes.object,
  onSort: PropTypes.func,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
export default Example;

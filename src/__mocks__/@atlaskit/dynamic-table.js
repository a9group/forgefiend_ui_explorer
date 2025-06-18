// Mock implementation of @atlaskit/dynamic-table for testing
import React from 'react';

const DynamicTable = ({ head, rows, onSort, ...props }) => (
  <div data-testid="atlaskit-dynamic-table" {...props}>
    <div data-testid="table-head">
      {head?.cells?.map((cell, index) => (
        <div key={index} data-testid="table-header-cell">
          {cell.content}
        </div>
      ))}
    </div>
    <div data-testid="table-body">
      {rows?.map((row, rowIndex) => (
        <div key={row.key || rowIndex} data-testid="table-row">
          {row.cells?.map((cell, cellIndex) => (
            <div key={cellIndex} data-testid="table-cell">
              {cell.content}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default DynamicTable;
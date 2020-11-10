import React from 'react';

const typeFilter = ({ change, filter }) => (
  <div>
    <input className="input-search" name="type-filter" id="type-filter" onChange={change.bind(this)} type="text" value={filter} placeholder="Write your pokemon type" />
  </div>
);

export default typeFilter;

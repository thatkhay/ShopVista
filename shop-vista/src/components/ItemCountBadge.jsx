import React from 'react';

function ItemCountBadge({ show, count }) {
  return show ? <p>{count}</p> : null;
}

export default ItemCountBadge;

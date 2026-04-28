import React from 'react';
const ListitemCompoinent = props => {
  return <li key={'${props.element}'}>{props.element}</li>;
};

export default ListitemCompoinent;

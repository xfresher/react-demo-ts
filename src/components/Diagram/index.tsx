import React from 'react';
import Canvas from './Canvas';

const Diagram = () => {
  return (
    <Canvas
      id="myCanvas"
      width="200"
      height="100"
      style={{ border: "1px solid #d3d3d3" }}
    />
  );
};

export default Diagram;

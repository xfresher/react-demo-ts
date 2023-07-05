import React, { useEffect } from 'react';
import type { CSSProperties } from 'react';

type CanvasProps = {
  id: string;
  width: number | string;
  height: number | string;
  style: CSSProperties;
};

function Canvas({
  id,
  width,
  height,
  style
}: CanvasProps) {

  useEffect(() => {
    // var c = document.getElementById(id);

    // if (c) {
    //   var ctx = c.getContext("2d");
    //   ctx.moveTo(0, 0);
    //   ctx.lineTo(200, 100);
    //   ctx.stroke();
    // }
  }, []);

  const addPoint = () => {
    const ctx = document.getElementById(id).getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 50, 10, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
  }

  return (
    <>
      <canvas
        id={id}
        width={width}
        height={height}
        style={style}
      >
        Your browser does not support the HTML canvas tag.
      </canvas>
      <button onClick={() => addPoint()}>Add Point</button>
    </>
  );
}

export default Canvas;

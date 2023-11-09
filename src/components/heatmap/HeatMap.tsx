"use client";
import React from "react";
import { HeatMapGrid } from "react-grid-heatmap";

const xLabels = new Array(24).fill(0).map((_, i) => `${i}`);
console.log(xLabels)
const yLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const data = new Array(yLabels.length)
  .fill(0)
  .map(() =>
    new Array(xLabels.length)
      .fill(0)
      .map(() => Math.floor(Math.random() * 50 + 50))
  );

console.log(data)

const HeatMap = () => {
  return (
    <div
      className="h-56 "
      style={{
        width: "100%",
      }}
    >
      <HeatMapGrid
        data={data}
        xLabels={xLabels}
        yLabels={yLabels}
    
        // Render cell with tooltip
        cellRender={(x, y, value) => (
          <div title={`Pos(${x}, ${y}) = ${value}`}></div>
        )}
        xLabelsStyle={(index) => ({
          color: index % 2 ? "transparent" : "#777",
          fontSize: ".8rem",
        })}
        yLabelsStyle={() => ({
          fontSize: ".7rem",
          textTransform: "uppercase",
          color: "#777",
        })}
        cellStyle={(_x, _y, ratio) => ({
          background: `rgb(12, 160, 44, ${ratio})`,
          fontSize: ".8rem",
          color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`,
        })}
        cellHeight="1.5rem"
        xLabelsPos="top"
        onClick={(x, y) => alert(`Clicked (${x}, ${y})`)}
        yLabelsPos="left"
        square
      />
    </div>
  );
};

export default HeatMap;

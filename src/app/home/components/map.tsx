"use client";
import React from "react";
// @ts-ignore
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function WorldMap() {
  const handleHover = (geo: any) => {
    alert(`You hovered over: ${geo.properties.NAME}`);
  };

  return (
    <ComposableMap projectionConfig={{ scale: 150 }} width={800} height={400}>
      <Geographies geography={geoUrl}>
        {({ geographies }: { geographies: any[] }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onClick={() => handleHover(geo)}
              style={{
                default: {
                  fill: "#818cf8",
                  stroke: "#000000",
                  strokeWidth: 0.1,
                  outline: "none",
                },
                hover: {
                  fill: "indigo",
                  stroke: "#000000",
                  strokeWidth: 0.5,
                  outline: "none",
                  cursor: "pointer",
                },
                pressed: {
                  fill: "indigo",
                  stroke: "#000000",
                  strokeWidth: 0.5,
                  outline: "none",
                },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
}

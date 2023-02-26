"use client";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";
import { geoCentroid } from "d3-geo";

const MapIndo = () => {
  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

  return (
    <div>
      <p className="font-extralight text-slate-400 text-center text-xl top-[200]">
        Potensi Suara:
      </p>
      <ComposableMap
        width={800}
        height={300}
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [242, 2, 2],
          scale: 960,
        }}
      >
        <Geographies geography={"/indonesia.json"}>
          {({ geographies }) => (
            <>
              {geographies.map((geo) => {
                return (
                  <Geography
                    key={geo.rsmKey}
                    className="cursor-pointer"
                    stroke="#FFF"
                    geography={geo}
                    style={{
                      default: {
                        fill: "#d8d8d8",
                      },
                      hover: {
                        fill: "#F53",
                      },
                      pressed: {
                        fill: "#E42",
                      },
                    }}
                  />
                );
              })}
              {geographies.map((geo) => {
                const centroid = geoCentroid(geo);
                const cur = geo.properties.name;
                return (
                  <g key={geo.rsmKey + "-name"}>
                    <Marker coordinates={centroid}>
                      <text fontSize={5} textAnchor="middle">
                        {cur}
                      </text>
                    </Marker>
                  </g>
                );
              })}
            </>
          )}
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapIndo;

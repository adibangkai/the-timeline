"use client";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import { scaleLinear } from "d3-scale";
import suara from "../public/suara/suara.json";

interface tokohInterface {
  tokoh: string;
}

const MapIndo = ({ tokoh }: tokohInterface) => {
  const nilai = suara[tokoh].Nilai;
  const warnaA = suara[tokoh].Warna;
  const warnaB = suara[tokoh].WarnaB;
  const colorScale = scaleLinear().domain([0.29, 0.68]).range([warnaA, warnaB]);

  return (
    <div>
      <p className="font-extralight text-slate-400 text-center text-xl top-[200]">
        Potensi Pemilih:
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
                const d = nilai.find((s) => s.id === geo.id);

                const centroid = geoCentroid(geo);
                const cur = geo.properties.name;
                return (
                  <>
                    <Geography
                      key={geo.rsmKey}
                      className="cursor-pointer "
                      stroke="#c1c1c1"
                      strokeWidth={0.4}
                      geography={geo}
                      fill={d ? colorScale(d.val) : "#d9d6db"}

                      // style={{
                      //   default: {
                      //     fill: "#d8d8d8",
                      //   },
                      //   hover: {
                      //     fill: "#F53",
                      //   },
                      //   pressed: {
                      //     fill: "#E42",
                      //   },
                      // }}
                    />
                    <g key={geo.rsmKey + "-name"}>
                      <Marker coordinates={centroid}>
                        <text
                          fontSize={5}
                          textAnchor="middle"
                          className="hover:scale-125"
                        >
                          {cur}
                        </text>
                      </Marker>
                    </g>
                  </>
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

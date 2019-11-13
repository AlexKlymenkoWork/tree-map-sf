import React from "react"
import DeckGL from "@deck.gl/react"
import { StaticMap } from "react-map-gl"
import { ColumnLayer } from "@deck.gl/layers"
import DATA from "../dataSet/street-tree-list.json"

const Dmap = () => {

  const initialViewState = {
    longitude: -122.4815969,
    latitude: 37.7591778,
    zoom: 12,
    maxZoom: 15,
    pitch: 45,
  }

  const layer = new ColumnLayer({
    id: "column-layer",
    data: DATA,
    radius: 10,
    elevationScale: 10,
    getPosition: d => [d.Longitude, d.Latitude],
    getFillColor: d => [0, 10 + d.DBH * 3, 60],
    getElevation: d => (d.DBH < 50 ? 1 + d.DBH : 50),
  })

  return (
    <>
      <DeckGL
        initialViewState={initialViewState}
        controller={true}
        layers={[layer]}
      >
        <StaticMap
          mapStyle="mapbox://styles/mapbox/dark-v9"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        />
      </DeckGL>
    </>
  )
}

export default Dmap

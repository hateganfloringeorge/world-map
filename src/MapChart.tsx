import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from 'react-simple-maps'

export default function MapChart() {
  return (
    <ComposableMap>
      <ZoomableGroup>
        <Geographies geography="../Maps/WorldMap.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  )
}

import './App.css';
import { Map } from 'react-map-gl';

function App() {
  return (
    <div className="App">
      <h2>Hello</h2>
      <Map 
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken='pk.eyJ1IjoibXRheXlhYm1pciIsImEiOiJjbDZuaWQ5Z3QwMTNyM2tsbGs2emtlc21uIn0.cwMj_2X3NoUdcbWnLGiG4g'
      />
    </div>
  );
}

export default App;

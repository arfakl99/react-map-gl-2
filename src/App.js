import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map, Marker} from 'react-map-gl';
import markerIcon from './assets/images/marker.png';

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
      >
         <Marker longitude={-100} latitude={40} anchor="bottom" onClick={()=>{console.log('marker clicked')}}>
          <img src={markerIcon} alt='markerimg' />
        </Marker> 
      </Map>
    </div>
  );
}

export default App;

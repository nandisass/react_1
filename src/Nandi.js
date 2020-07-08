import React, { useState } from 'react'
import { Map, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Select from 'react-select';
import {
  ImageOverlay,
} from "react-leaflet";


const Nandi = () => {

  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png')
  });

  const options = [
    { value: 'https://raw.githubusercontent.com/nandisass/react_data/master/test/data/black.png', label: 'Black' },
    { value: 'https://raw.githubusercontent.com/nandisass/react_data/master/test/data/red.png', label: 'Red' },
  ];


    const [selectedOption, setSelectedOption] = useState(null)
    const [lnk, setLnk] = useState('')
    const [showMap] = useState(true)

    const handleChange = (e) => {
      setSelectedOption(e.value);
      setLnk(e.value);
      console.log(`Option selected:`, e.value);
    }

    // const groupStyles = {
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'space-between',
    // };


    return (
      <div>
      <Map
      center={[20.0, 79.9]}
      zoom={4}
      style={{height: '450px'}}
      zoomControl={true}

      >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution=''
      />
        {showMap ? (
          <ImageOverlay
            bounds={[
              [5.99 , 67.40],
              [37.98, 97.67],
            ]}
            opacity= {1}
            url={lnk}
          />
        ) : null}

      {/* <ImageOverlay
        bounds={[
          [5.99 , 67.40],
          [37.98, 97.67],
        ]}
        opacity= {1}
        url="https://i.ibb.co/fM78wJr/pngwing.png"
      /> */}

      </Map>
        <div>
          <h1>This is it</h1>
          <Select
            // value={selectedOption}
            value = {options.filter(function(option) {
                    return option.value === selectedOption;
                    })}
            // onChange={(selectedOption)=>handleChange(selectedOption)}
            onChange={handleChange}
            options={options}
            autoFocus={true}
            placeholder="Select Map Color"
          />
          <h2>The selected option is {selectedOption} </h2>
        </div>
      </div>
      )
}

export default Nandi;
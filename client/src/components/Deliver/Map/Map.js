import { GoogleMap, Marker, MarkerF } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import * as l from "./MapElements";
import { HiLocationMarker } from "react-icons/hi";
const MapComponent = (props) => {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  useEffect(() => {
    // update the center state variable when the props.data object changes
    setCenter({ lat: props.data.lat, lng: props.data.lang });
  }, [props.data]);

  console.log(center);
  return (
    <l.Div>
      <l.SubSection>
        <GoogleMap
          mapContainerStyle={{ height: "100%", width: "100%" }}
          zoom={10}
          center={center}
          options={{
            disableDefaultUI: false, // hide default UI components
          }}
        >
          <MarkerF
            title={props.data.customerName}
            position={center}
            options={{ optimized: false }}
          />
        </GoogleMap>
      </l.SubSection>
    </l.Div>
  );
};

export default MapComponent;

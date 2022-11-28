import { useEffect, useState } from "react";
import { alertError } from "./alertError";

export const locationUser = () => {
  const [coords, setCoords] = useState({
    lat: 0,
    long: 0,
    isError: false,
  });

  if ("geolocation" in navigator) {
  } else {
    alert("Tu navegador no soporta el acceso a la ubicación. Intenta con otro");
  }

  const onUbicacionConcedida = ({ coords: { latitude, longitude } }: GeolocationPosition) => {
    setCoords({ ...coords, lat: latitude, long: longitude, isError: false });
  };

  const onErrorDeUbicacion = (err: GeolocationPositionError) => {
    alertError(err.message);
    setCoords({ ...coords, lat: 0, long: 0, isError: true });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onUbicacionConcedida, onErrorDeUbicacion);
  }, []);
  return { coords };
};

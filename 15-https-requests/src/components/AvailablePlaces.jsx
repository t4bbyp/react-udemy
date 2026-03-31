import Places from "./Places.jsx";
import { useState, useEffect } from "react";
import ErrorPlaces from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import {fetchAvailablePlaces} from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  //doing it like this will cause an infinite loop
  //fetch runs when component is rendered -> 2nd then() updates state
  // -> component rerenders -> fetch runs
  /*
  fetch('https://localhost:3000/places').then((response) => {
    return response.json();
  }).then((resData) => {
    setAvailablePlaces(resData.places);
  });
  */

  useEffect(() => {
    //more readable/prefered method
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const places = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude,
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        setError({ message: error.message || "could not fetch bye" });
        setIsFetching(false);
      }

      
    }

    fetchPlaces();

    //this is valid but less readable
    /*    
      fetch('http://localhost:3000/places').then((response) => {
        return response.json();
      }).then((resData) => {
        setAvailablePlaces(resData.places);
      });
      */
  }, []);

  if (error) {
    return <ErrorPlaces title="An error occured" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}


import { useState } from "react";

import "./styles/styles.css";

export default function ArtistPage(props) {
  const [index, setIndex] = useState(0);

  if (props.results.length === 0) {
    return null;
  }

  const increase = () => {
    if (index === artistInfo.length - 1) {
      return
    }
    setIndex(index + 1);
    return index
  }

  const decrease = () => {
    if (index === 0) {
      return
    }
    setIndex(index - 1);
    return index
  }

  const artistInfo = props.results

  const concert = props.results[index];

  const artist = concert.artist.name

  const tour = concert.tour?.name

  const venue = concert.venue?.name

  const city = concert.venue.city?.name

  const state = concert.venue.city?.state

  const stateCode = concert.venue.city?.stateCode

  const country = concert.venue.city?.country.code

  const concertDate = concert.eventDate

  const songs = concert.sets.set[0]?.song || [];

  const list = songs?.map((song) => {
    return song.name
  })

  return (
    <div>
      <div className="container-1">
        <div className="box-1">
          <h2><button onClick={increase}>Decrease</button>
            Concert Date: {concertDate}
            <button onClick={decrease}>Increase</button>
          </h2>
        </div>
        <div className="box-2">
          <h2>Artist: {artist}</h2>
          <h2>Tour: {tour}</h2>
          <h2>Venue: {venue}</h2>
          <h2>Location: {city}, {state}, {country}</h2>
        </div>
      </div>
      <div className="container-4">
        <div className="container-2">
          <ul className="box-3">
            {list.length === 0 ? "There are no songs in this setlist because the concert hasn't happend yet. Please come back later" : list.map((song, songIndex) => <li key={songIndex}>{song}</li>)}
          </ul>
        </div>
        <div className="container-3">
          UpcomingConcerts
          <div className="box-5">
            {artistInfo.map((previousConcert, previousConcertIndex) => <li key={previousConcertIndex}>{previousConcert.eventDate}</li>)}
          </div>
        </div>
      </div>
    </div>
  );
}

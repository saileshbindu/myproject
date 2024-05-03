import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import axios from 'axios';
import Typography from '@mui/material/Typography';

function App() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    const genresFetch = async () => {
      try {
        const generRes = await axios.get("https://qtify-backend-labs.crio.do/genres");
        setGenres([...genres, generRes.data])
        console.log([...genres, generRes.data]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    genresFetch();

    const songsFetch = async () => {
      try {
        const songsRes = await axios.get("https://qtify-backend-labs.crio.do/songs");
        setSongs( songsRes.data);
        console.log(songsRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    songsFetch();
  },[genres, songs]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className='songsMain'>
      <Typography className="topText">Top Albums</Typography>
      <Tabs value={selectedTab} onChange={handleTabChange} centered>
        {genres.map((genre) => (
          <Tab key={genre.key} label={genre.label} />
        ))}
      </Tabs>
      <div>
        {songs.filter(song => song.genre === genres[selectedTab].key).map((song) => (
          console.log( "song", song)
          // <div key={song.key}>
          //   <h3>{song.title}</h3>
          //   <p>{song.artist}</p>
          // </div>
        ))}
      </div>
    </div>
  );
}

export default App;

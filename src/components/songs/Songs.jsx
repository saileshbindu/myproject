import React, { useState, useEffect } from "react";
import { Typography, Tabs, Tab } from "@mui/material";
import CarouselComponent from "../carousel/Carousel";
import axios from "axios";
import './songs.css'

const Song = () => {
  const [song, setSong] = useState([]);
  const [genre, setGenre] = useState([]);
  const [filterSong, setFilterSong] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const songs = await axios.get(`https://qtify-backend-labs.crio.do/songs`);
      const genres = await axios.get(
        `https://qtify-backend-labs.crio.do/genres`
      );
      setSong(songs.data);
      setGenre(genres.data);
      setFilterSong(songs.data);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const match = e.target.id;
    if (match === "all") {
      setFilterSong(song);
      return;
    }
    const filtered = song.filter((item) => item.genre.key === match);
    setFilterSong([...filtered]);
  };

  return (
    <>
     <div className="songsMain">
      <Typography className="topText">Songs</Typography>
        <Tabs value="all" onChange={handleChange} className="tabmain"  >
          {genre.data &&
            genre.data.map((item, index) =>
              index === 0 ? (
                <Tab key="all" value="All" id="all" label="All" wrapped className="tabcolor"/>
              ) : (
                <Tab
                  key={item.key}
                  value={item.label}
                  id={item.key}
                  label={item.label}
                  wrapped
                  className="tabcolor"
                />
              )
            )}
        </Tabs>
   

        <CarouselComponent items={filterSong} />
      </div>
      <hr/>
    </>
  );
};

export default Song;

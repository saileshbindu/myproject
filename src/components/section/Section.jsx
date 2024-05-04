import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from '@mui/material/Typography';
import Carousel from "../carousel/Carousel";
import CardComponent from "../cards/Cards";
import './Section.css'

const Cards = () => {
    const [topAlbums, setTopAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);
    const [showTopAlbums, setShowTopAlbums] = useState(true);
    const [showNewAlbums, setShowNewAlbums] = useState(true);

  useEffect(() => {
    const fetchTopAlbums  = async () => {
      try {
        const apiRes = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
        setTopAlbums(apiRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchNewAlbums = async () => {
        try {
          const apiRes = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
          setNewAlbums(apiRes.data);
        } catch (error) {
          console.error('Error fetching new albums:', error);
        }
      };

      fetchTopAlbums ();
      fetchNewAlbums ();
  }, []);

  const toggleShowTopAlbums = () => {
    setShowTopAlbums(!showTopAlbums);
  };

  const toggleShowNewAlbums = () => {
    setShowNewAlbums(!showNewAlbums);
  };

  return (
    <div>
      <div className="cardsMain">
        <Typography className="topText">Top Albums</Typography>
        <button onClick={toggleShowTopAlbums} className="toggleBtn">
          {showTopAlbums ? "Show all" : "Collapse"}
        </button>
        {showTopAlbums ? (
            <Carousel items={topAlbums} />
        ) : (
          <div className="cardContainer">
            {topAlbums.map((card) => (
              <CardComponent key={card.id} card={card} />
            ))}
          </div>
        )}
      </div>

      <div className="cardsMain">
        <Typography className="topText">New Albums</Typography>
        <button onClick={toggleShowNewAlbums} className="toggleBtn">
          {showNewAlbums  ? "Show all" : "Collapse"}
        </button>
        {showNewAlbums  ? (
            <Carousel items={newAlbums} />
        ) : (
          <div className="cardContainer">
            {newAlbums.map((card) => (
              <CardComponent key={card.id} card={card} />
            ))}
          </div>
        )}
      </div>
      <hr></hr>
    </div>
  );
};

export default Cards;

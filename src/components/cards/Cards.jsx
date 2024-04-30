import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './cards.css';
import { Box } from "@mui/system";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import axios from "axios";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Cards = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const [cardDetails, setCardDetails] = useState([])
    const [showall, setShowall] = useState(false);

    const [cardalbum, setcardalbum] = useState([])
    const [albumshowall, setalbumshowall] = useState(false);

    const toggleShowAll = () =>{
      setShowall(!showall)
    }

    const toggleablum = () =>{
      setalbumshowall(!albumshowall)
    }

    useEffect(() =>{
        const fetchcards = async () => {
            try{
                const apiRes = await axios.get('https://qtify-backend-labs.crio.do/albums/top')
                setCardDetails(apiRes.data)
            }
            catch (error){
                console.error('Error fetching data:', error);
            }
        }
        fetchcards();

       const fetchnewablums = async()=>{
 try{
                const apiRes = await axios.get('https://qtify-backend-labs.crio.do/albums/new')
                setcardalbum(apiRes.data)
            }
            catch (error){
                console.error('Error fetching data:', error);
            }
       }
       fetchnewablums();
        
       
    },[])


    return(
      <div>
    <div className="cardsMain">
      
        <Typography className="topText">Top Albums</Typography>

        <button onClick={toggleShowAll} className="toggleBtn">
          {showall ? "Show All" : "Collapse"}
        </button>

        {
          showall ? (<div>
            <Carousel responsive={responsive}>
           {cardDetails.map((card) =>( <div>
            <Card key={card.id} className="cardsBox">
   
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image}
                  alt="{card.title}"
                />
         
                    <Box className="followBox">
                   <Stack direction="row" spacing={1}> 
                   <Chip label={`${card.follows} follows`} className="follower" />
                    </Stack>
                    </Box>
                <Typography gutterBottom className="songTitle">
                    {card.title}
                  </Typography>
            
            </Card>
           </div>))}
            
</Carousel>
          </div>) :( <div className="cardContainer">
          {cardDetails.map((card) => (
          
              <Card key={card.id}  className="cardsBoxone">
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image}
                  alt={card.title}
                />

                <Box className="followBox">
                  <Stack direction="row" spacing={1}>
                    <Chip
                      label={`${card.follows} follows`}
                      className="follower"
                    />
                  </Stack>
                </Box>
                <Typography gutterBottom className="songTitle">
                  {card.title}
                </Typography>
              </Card>
           
          ))}
        </div>)
        }

        

    </div>
<hr></hr>
    <div className="cardsMain">
      
      <Typography className="topText">Top Albums</Typography>

      <button onClick={toggleablum} className="toggleBtn">
        {albumshowall ? "Show All" : "Collapse"}
      </button>

      {
        albumshowall ? (<div>
          <Carousel responsive={responsive}>
         {cardalbum.map((card) =>( <div>
          <Card key={card.id} className="cardsBox">
 
              <CardMedia
                component="img"
                height="140"
                image={card.image}
                alt="{card.title}"
              />
       
                  <Box className="followBox">
                 <Stack direction="row" spacing={1}> 
                 <Chip label={`${card.follows} follows`} className="follower" />
                  </Stack>
                  </Box>
              <Typography gutterBottom className="songTitle">
                  {card.title}
                </Typography>
          
          </Card>
         </div>))}
          
</Carousel>
        </div>) :( <div className="cardContainer">
        {cardalbum.map((card) => (
        
            <Card key={card.id}  className="cardsBoxone">
              <CardMedia
                component="img"
                height="140"
                image={card.image}
                alt={card.title}
              />

              <Box className="followBox">
                <Stack direction="row" spacing={1}>
                  <Chip
                    label={`${card.follows} follows`}
                    className="follower"
                  />
                </Stack>
              </Box>
              <Typography gutterBottom className="songTitle">
                {card.title}
              </Typography>
            </Card>
         
        ))}
      </div>)
      }

  </div>
  


    </div>
    
    
    
    
   
    
    
    )
    
}

export default Cards;
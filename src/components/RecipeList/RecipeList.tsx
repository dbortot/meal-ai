import React from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function RecipeList() {

  const _ = require('lodash');

  const getThumbnailForAccordion = (category: string) : any[] => {
    return data.filter((data) => data.category === category).slice(0, 3);
  }

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Pasta</Typography>
          <ImageList>
            {getThumbnailForAccordion("pasta").map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=80&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=80&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>

            ))}
          </ImageList>
        </AccordionSummary>
        <AccordionDetails>
          <ImageList sx={{ width: 500 }}>
            <ImageListItem key="Subheader" cols={2}>
              <ListSubheader component="div">December</ListSubheader>
            </ImageListItem>
            {data.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={"Lorem Ipsum"}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Carne</Typography>
          <ImageList>
            {getThumbnailForAccordion("carne").map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=80&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=80&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>

            ))}
          </ImageList>
        </AccordionSummary>
        <AccordionDetails>
          <ImageList sx={{ width: 500 }}>
            <ImageListItem key="Subheader" cols={2}>
              <ListSubheader component="div">December</ListSubheader>
            </ImageListItem>
            {data.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={"Lorem Ipsum"}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </AccordionDetails>
      </Accordion>
    
      
    </div>
  );
}

const data = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    category: 'pasta'
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    category: 'pasta'
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    category: 'pasta'
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    category: 'carne'
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    category: 'carne'
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    category: 'carne'
  }
]

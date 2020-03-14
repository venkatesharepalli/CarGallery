import React, {useContext} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardMedia
} from "@material-ui/core";
import { map } from "lodash";
import { StoreContext } from '../utils/store';
import {getImage} from '../helpers/gallery-helpers';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    marginBottom: '2%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  }  
}));

/**
 * GalleryView - Component responsible for rendering the photo thumbnails of a car.
 */
const GalleryView = ({history}) => {
  const classes = useStyles();
  const { galleryData, setSelectedGalleryIndex} = useContext(StoreContext);  
  const onSelectedGalleryClickHandler = (index) => {
    setSelectedGalleryIndex(index);
    history.push(`/details`)
  };

  return (
    <Box     
      px={3}
      py={10}     
      component={Grid}
      container
      direction="row"
      marginBottom={8}   
    >
    {map(galleryData.images, (rep, index) => {
      return (
        <Grid item xs={12} sm={3} key={index}>
          <Card className={classes.card} onClick={() => onSelectedGalleryClickHandler(index)}>    
            <CardMedia className={classes.media} image={getImage('small', rep.uri)} />                  
          </Card>
        </Grid>
      );
    })}
  </Box>
  )
}

export default GalleryView;
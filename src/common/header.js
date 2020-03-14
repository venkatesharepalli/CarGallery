import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Box} from "@material-ui/core";
import { StoreContext } from '../utils/store';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    color: "inherit"  
  } 
}));

/**
 * Header - Component displays the header of the application. 
 * 
 * @returns {React.ReactElement} Header
 */
const Header = () => {
  const classes = useStyles();
  const {galleryData: {title}} = useContext(StoreContext);  

  return (
    <AppBar>
      <Toolbar>        
          <Typography variant="h5" className={classes.title}>
            <Box letterSpacing={1}>{title}</Box>
          </Typography>
       </Toolbar>
    </AppBar>
  );
}

export default Header;
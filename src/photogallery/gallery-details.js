import React, { useContext } from "react";
import { StoreContext } from '../utils/store';
import { makeStyles } from "@material-ui/core/styles";
import { red } from '@material-ui/core/colors';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  IconButton,
  Avatar,
  Typography,
  Box,
  Grid,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import CustomTable from '../common/table';
import { getImage } from '../helpers/gallery-helpers';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  }
}));

/**
 * GalleryDetails - Component responsible for rendering the selected photo details.
 */
const GalleryDetails = ({ history }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { selectedGalleryIndex, galleryData, setSelectedGalleryIndex } = useContext(StoreContext);

  if (selectedGalleryIndex !== null) {
    const {
    images,
      title,
      sellerId,
      created,
      price: { gross, net },
      htmlDescription,
      isNew,
      isPreRegistration,
      category,
      isDamageCase,
      features,
      attributes,
      contact: {
      type,
        name,
        country,
        address1,
        address2,
        phones
    },
      adMobTargeting: {
      model,
        make,
        kw
    }
  } = galleryData;

    const handleChange = panel => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    const onCloseButtonClickHandler = () => {
      setSelectedGalleryIndex(null);
      history.push('/');
    }

    return (
      <Box
        px={3}
        py={10}
        component={Grid}
        container
        direction="row"
        justify="center"
      >
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar className={classes.avatar}>
                {title && title.charAt(0)}
              </Avatar>
            }
            action={
              <IconButton onClick={() => onCloseButtonClickHandler()}>
                <CloseIcon />
              </IconButton>
            }
            title={title}
            subheader={`Gross ${gross}, Net ${net}`}
          />
          <CardMedia
            className={classes.media}
            image={getImage('large', images[selectedGalleryIndex].uri)}
          />
          <CardContent>
            <Typography color="textSecondary">
              {htmlDescription}
            </Typography>
            <ExpansionPanel expanded={expanded === 'specificationPanel'} onChange={handleChange('specificationPanel')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Specifications</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <CustomTable data={[
                  { label: 'New', value: isNew },
                  { label: 'Category', value: category },
                  { label: 'Features', value: features },
                  { label: 'PreRegistration', value: isPreRegistration },
                  { label: 'Damage', value: isDamageCase },
                  { label: 'Created Date', value: Intl.DateTimeFormat().format(created) },
                  { label: 'Country', value: country },
                  { label: 'Model', value: model },
                  { label: 'Manufactured year', value: make },
                  { label: 'Power', value: kw },
                  ...attributes
                ]
                } />
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel expanded={expanded === 'contactPanel'} onChange={handleChange('contactPanel')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Contact</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <CustomTable data={[
                  { label: 'Name', value: name },
                  { label: 'Type', value: type },
                  { label: 'SellerId', value: sellerId },
                  { label: 'Tel', value: phones && phones.map(item => item.number) },
                  { label: 'Address', value: [address1, address2] }
                ]} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </CardContent>
        </Card>
      </Box>
    )
  }

  return (<Box
    px={3}
    py={10}
    component={Grid}
    container
    direction="row"
    justify="center"
  ><Typography>Information Not Available</Typography>
  </Box>)
}

export default GalleryDetails;

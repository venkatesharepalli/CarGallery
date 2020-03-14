import React from "react";
import { Route, Switch } from "react-router-dom";
import GalleryView from './photogallery/gallery-view-app';
import GalleryDetails from './photogallery/gallery-details';

const AppRoutes = () => (
  <Switch>   
    <Route exact path="/" component={GalleryView} />
    <Route path="/details" component={GalleryDetails} />
  </Switch>
);

export default AppRoutes;

import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LandingPage from "pages/LandingPage";
import Listing from "pages/Listing";
import ListingMapView from "pages/ListingMapView";
import AgentList from "pages/AgentList";
import AgentProfile from "pages/AgentProfile";
import Signup from "pages/Signup";
import SignIn from "pages/SignIn";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "listing",
      element: <Listing />,
    },
    {
      path: "listingmapview",
      element: <ListingMapView />,
    },
    {
      path: "agentlist",
      element: <AgentList />,
    },
    {
      path: "agentprofile",
      element: <AgentProfile />,
    },
    {
      path: "signup",
      element: <Signup/>
    },
    {
      path: "login",
      element: <SignIn/>
    }
  ]);

  return element;
};

export default ProjectRoutes;

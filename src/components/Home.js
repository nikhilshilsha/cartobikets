import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import Navbar from "./common/Navbar";
import HeroSection from "./HeroSection";
import AdsSection from "./AdsSection";
import PopularVehicle from "./PopularVehicle";
import VehicleSell from "./VehicleSell";
import Blog from "./Blog";



function home(props) {
  return (
    <div className="top-section">
      <Container>
        <Navbar />
        <HeroSection />
        <AdsSection />
        <PopularVehicle />
        <VehicleSell />
        <Blog />
      </Container>
    </div>
  );
}

export default home;

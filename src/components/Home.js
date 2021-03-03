import React from "react";
import Slider from "./Slider";
import InfoSection from "./InfoSection";
import { InfoData } from "../data/InfoData";
import { SliderData } from "../data/SliderData";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Slider slides={SliderData} />
            <InfoSection {...InfoData} />
            <Footer />
        </>
    );
}

export default Home;

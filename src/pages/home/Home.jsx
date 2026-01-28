import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../../components/hero/Hero";
import Section1 from "../../components/section1/Section1";
import LastSection from "../../components/LastSection/LastSection";
import RenovationsFabrications from "../../components/Renovation&Fabrications/Renovation&Fabrications";
import Highlight from "../../components/Highlight/Highlight.jsx";
import InstagramSection from "../../components/Instagram/InstagramSection.jsx";
import Service2 from "../../components/Services/Service2.jsx";
import Testimonial from "../../components/Testimonials/Testimonial.jsx";
import Features from "../../components/Features/Features.jsx";
import BlogSection from "../../features/BlogSection/BlogSection.jsx";
import { services } from "../../mocks/services.js";
import { pageTransition } from "../../utils/animations.js";

const Home = () => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
        >
            <Hero />
            <Features />
            {/* <Section1 /> */}
            {/* <RenovationsFabrications /> */}
            {/* <Highlight /> */}
            <Service2 service={services[0]} />
            <Service2 service={services[1]} />
            <Service2 service={services[2]} />
            <Testimonial />
            <BlogSection />
            <InstagramSection />
            <LastSection />
        </motion.div>
    );
};

export default Home;

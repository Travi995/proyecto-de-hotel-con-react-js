import React from "react";
import './TestimonialsLayout.css'
import Navbar from "../Navbar/Navbar";
import ViewportIncialTestimonials from "../ViewportIncialTestimonials/ViewportIncialTestimonials";
import FooterHome from "../FooterHome/FooterHome";

const TestimonialsLayout = () => {
    
    return <div className="TestimonialsLayout">
        
        <Navbar/>
        <ViewportIncialTestimonials />
        <FooterHome/>
    </div>
}

export default TestimonialsLayout
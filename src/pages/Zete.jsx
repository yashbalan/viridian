import { Container, Grid, Typography,Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Title from "../components/Title";
import { section3Content } from "../utils/content";
import Section1 from "../containers/Section1";
import zete from "../assets/zete/cad2.jpg"


import OutlinedButton from "../components/Buttons/OutlinedButton";

import { section4Content } from "../utils/content";


const ITEMS = [{name:"Environmental Simulation",logo:"Utilizing advanced simulation techniques, our platform assesses the environmental impact of proposed designs, allowing architects and engineers to make informed decisions to further reduce carbon emissions."},
                {name:"Material Optimization",logo:"Our application suggests environmentally friendly materials and construction methods that significantly reduce carbon emissions throughout the building lifecycle, from construction to maintenance."},
            {name:"Energy Efficiency Analysis",logo:"By simulating energy usage and performance metrics, our platform helps optimize building systems and layouts to enhance energy efficiency, thereby reducing greenhouse gas emissions associated with heating, cooling, and lighting."},
        {name:"Lifecycle Assessment",logo:"Our AI-based CAD application provides comprehensive lifecycle assessments, enabling stakeholders to evaluate the long-term environmental impact of building designs and identify opportunities for further emissions reduction."},
    {name:"Collaboration and Integration",logo:"With seamless collaboration features and compatibility with existing CAD software, our platform facilitates interdisciplinary collaboration and integration into existing workflows, empowering architects, engineers, and sustainability experts to work together towards a common goal of carbon-neutral construction."}]

const Zete = () => {
  return (
    <div>
    <Section1></Section1>
    <Typography></Typography>
    <Grid
        container
        spacing={10}
        flexWrap="wrap-reverse"
        alignItems="center"
        sx={{ mt: 40 }}
      >
        {/* Left */}
        <Grid item xs={12} md={6}>
          <img
            src={zete}
            style={{ width: "100%", objectFit: "contain" }}
          />
        </Grid>

        {/* Right */}
        <Grid item xs={12} md={6}>


  

      
                <div style={{display:"flex",flexDirection:"column", marginLeft:"30%"}}>
              {
                ITEMS.map((item)=>
                <Typography variant="body2" color="text.secondary" sx={{ mt:2, fontSize:"1.3em", border:"2px; white"}} >{item.name}</Typography>
                )
              }
              </div>
   

        </Grid>
      </Grid>
  </div>
  
  );
};

export default Zete;

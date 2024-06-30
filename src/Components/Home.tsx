"use client"
import React from 'react';
import Section1 from './home/Section1';
import Section2 from './home/Section2';
import Skills from './home/Skills';
import MyProject from './home/MyProject';
import MyExperience from './home/MyExperience';
import Service from './home/Service';
import Newslatter from './home/Newslatter';
import ContactMe from './home/ContactMe';

const Homes = () => {
    return (
        <div>
           <Section1/>
           <Section2/>
           <Skills/>
           <MyProject/>
           <MyExperience/>
           {/* <Service/> */}
           <Newslatter/>
           <ContactMe/>
        </div>
    );
};

export default Homes;
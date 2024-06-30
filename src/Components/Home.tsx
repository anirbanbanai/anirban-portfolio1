import React from 'react';
import Section1 from './home/Section1';
import Section2 from './home/Section2';
import Skills from './home/Skills';
import MyProject from './home/MyProject';
import MyExperience from './home/MyExperience';

const Homes = () => {
    return (
        <div>
           <Section1/>
           <Section2/>
           <Skills/>
           <MyProject/>
           <MyExperience/>
        </div>
    );
};

export default Homes;
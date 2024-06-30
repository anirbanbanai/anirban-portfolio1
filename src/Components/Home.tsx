import React from 'react';
import Section1 from './home/Section1';
import Section2 from './home/Section2';
import Skills from './home/Skills';
import MyProject from './home/MyProject';

const Homes = () => {
    return (
        <div>
           <Section1/>
           <Section2/>
           <Skills/>
           <MyProject/>
        </div>
    );
};

export default Homes;
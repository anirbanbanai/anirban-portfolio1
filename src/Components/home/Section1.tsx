"use client"
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import ButtonAll from '../common/Button';
import Default from '../common/Tilt';

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, 10px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
const Section1 = () => {
    return (
        <div id="home" className="max-w-7xl mx-auto nnn1 grid md:grid-cols-2 ">
            <div className="p-5  ">
                
            <Fade cascade damping={.1}>
            <h3 className="text-xl font-semibold">Full stack developer</h3>
                <h1 className="text-5xl font-bold mt-2 text-red-500">Hey ! I am </h1>
                <h1 className="text-5xl font-bold mt-5 ">Anirban Chondro Banai</h1>
                <p className="text-xl font-semibold mt-5">I am a Next.js developer . I have Experience with MERN stack, PERN stack and Nest.js .</p>

                <a href="mailto:anirbanchondrobanai@gmail.com">
                    <ButtonAll>Hire me</ButtonAll>
                </a>
                <h2 className="text-2xl">Follow Me </h2>
                <div className="flex mt-2">
                    <a href="https://web.facebook.com/profile.php?id=100077890384340" className="text-2xl ml-1"><FaFacebookF /></a>
                    <a href="https://github.com/anirbanbanai" className="text-2xl ml-3"><BsGithub /></a>
                    <a href="https://www.linkedin.com/in/anirban-cb-50439b284/" className="text-2xl ml-3"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/anirbanbanai/" className="text-2xl ml-3"><BsInstagram /></a>
                </div>
            </Fade>
                
            </div>
            <div className=" p-10 pt-5">
            <Reveal keyframes={customAnimation}>
                <Default />
            </Reveal>
            </div>
        </div>
    );
};

export default Section1;
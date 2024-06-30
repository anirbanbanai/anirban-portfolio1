"use client"
import AOS from "aos";
import "aos/dist/aos.css";
import boot from "@/assets/skills/bootstrap.png";
import css from "@/assets/skills/css3.png";
import html from "@/assets/skills/html-5--v1.png";
import js from "@/assets/skills/javascript--v1.png";
import rtn from "@/assets/skills/react-native.png";
import tail from "@/assets/skills/tailwind_css.png";

import mongo from "@/assets/skills/mongodb-icon-2048x2048-cezvpn3f.png";
import node from "@/assets/skills/node.png";
import express from "@/assets/skills/express-js.png";
import fire from "@/assets/skills/firebase2.webp";
import next from "@/assets/skills/next.png";
import ts from "@/assets/skills/type.png";
import nest from "@/assets/skills/nest2.jpg";
import post from "@/assets/skills/postgresql.png";
import mysq from "@/assets/skills/mysql.png";
import redux from "@/assets/skills/redux.png";
// import { CircularProgressbar } from 'react-circular-progressbar';
// import "react-circular-progressbar/dist/styles.css";

import { useEffect } from "react";
import Image from "next/image";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="skill" className="max-w-7xl mx-auto  mt-10 mb-10">
      <h2 className="text-4xl font-bold text-center mb-5">My Skills </h2>

      <div className="nnn2 grid grid-cols-2 lg:grid-cols-4 gap-4 items-center mx-auto text-center">
        <div className="flex mx-auto items-center gap-1">
          <Image
            className="rounded-full max-w-[90%]"
            src={html}
            alt="img"
            width={50}
            height={30}
          />
          <p>HTML</p>
        </div>
        <div className="flex mx-auto items-center gap-1">
        <Image
            className="rounded-full max-w-[90%]"
            src={css}
            alt="img"
            width={50}
            height={30}
          />
          <p>CSS</p>
        </div>

        <div className="flex mx-auto items-center gap-1">
        <Image
            className="rounded-full max-w-[90%]"
            src={tail}
            alt="img"
            width={50}
            height={30}
          />
          <p>Tailwind</p>
        </div>
        <div className="flex mx-auto items-center gap-1">
        <Image
            className="rounded-full max-w-[90%]"
            src={boot}
            alt="img"
            width={50}
            height={30}
          />
          <p>Bootstrap</p>
        </div>
        <div className="flex mx-auto items-center gap-1">
        <Image
            className="rounded-full max-w-[90%]"
            src={js}
            alt="img"
            width={50}
            height={30}
          />
          <p>Javascript</p>
        </div>
        <div className="flex mx-auto items-center gap-1">
        <Image
            className="rounded-full max-w-[90%]"
            src={ts}
            alt="img"
            width={50}
            height={30}
          />
          <p>Typescript</p>
        </div>
        <div className="flex mx-auto items-center gap-1">
        <Image
            className="rounded-full max-w-[90%]"
            src={rtn}
            alt="img"
            width={50}
            height={30}
          />
          <p>React</p>
        </div>
        <div className="flex mx-auto items-center gap-1">
        <Image
            className="rounded-full max-w-[90%]"
            src={next}
            alt="img"
            width={50}
            height={30}
          />
          <p>Next.js</p>
        </div>
        <div className="flex mx-auto items-center gap-1">
        <Image
            className="rounded-full max-w-[90%]"
            src={nest}
            alt="img"
            width={50}
            height={30}
          />
          <p>Nest.js</p>
        </div>
        <div className="flex mx-auto items-center gap-1">
        <Image
            className="rounded-full max-w-[90%]"
            src={redux}
            alt="img"
            width={50}
            height={30}
          />
          <p>Redux</p>
        </div>
        <div className="flex mx-auto items-center gap-1">
        <Image
            className="rounded-full max-w-[90%]"
            src={node}
            alt="img"
            width={50}
            height={30}
          />
          <p>Node.js</p>
        </div>
        <div className="flex mx-auto items-center gap-1">
        <Image
            className="rounded-full max-w-[90%]"
            src={express}
            alt="img"
            width={50}
            height={30}
          />
          <p>Express.js</p>
        </div>
        <div className="flex mx-auto items-center gap-1">
        <Image
            className="rounded-full max-w-[90%]"
            src={mongo}
            alt="img"
            width={50}
            height={30}
          />
          <p>MongoDb</p>
        </div>
        <div className="flex mx-auto items-center gap-1">
        <Image
            className="rounded-full max-w-[90%]"
            src={post}
            alt="img"
            width={50}
            height={30}
          />
          <p>PostgreSQL</p>
        </div>
        <div className="flex mx-auto items-center gap-1">
        <Image
            className="rounded-full max-w-[90%]"
            src={mysq}
            alt="img"
            width={50}
            height={30}
          />
          <p>MySQl</p>
        </div>
        <div className="flex mx-auto items-center gap-1">
        <Image
            className="rounded-full max-w-[90%]"
            src={fire}
            alt="img"
            width={50}
            height={30}
          />
          <p>Firebase</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

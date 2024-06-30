"use client"
import React, { useEffect, useState, ChangeEvent } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiOutlineSun } from "react-icons/hi";
import ScrollButton from "./ScrollButton";

const AllNormal: React.FC = () => {
    const [theme, setTheme] = useState<string>("autumn");
    const [isMounted, setIsMounted] = useState(false);

    const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setTheme("synthwave");
        } else {
            setTheme("autumn");
        }
    };

    useEffect(() => {
        setIsMounted(true);
        if (isMounted) {
            const localTheme = localStorage.getItem("theme");
            if (localTheme) {
                setTheme(localTheme);
            }
        }
    }, [isMounted]);

    useEffect(() => {
        if (isMounted) {
            localStorage.setItem("theme", theme);
            document.querySelector("html")?.setAttribute("data-theme", theme);
        }
    }, [theme, isMounted]);

    return (
        <div className='tggl p-4 top-2/4 right-0 fixed z-10'>
            <label className="swap swap-rotate">
                <input onChange={handleToggle} type="checkbox" />
                <HiOutlineSun className="swap-on text-4xl text-yellow-500" />
                <BsFillMoonStarsFill className="swap-off text-3xl" />
            </label>
            <ScrollButton />
        </div>
    );
};

export default AllNormal;

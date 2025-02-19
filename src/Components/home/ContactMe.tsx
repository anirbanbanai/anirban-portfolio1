import React, { useRef, FormEvent } from 'react';
import { FcCallback } from 'react-icons/fc';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import ButtonAll from '../common/Button';

const ContactMe: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm('service_lmh4fz4', 'template_myh6j2c', form.current, 'iFtRcuCAcdj61l7qw')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }
    };

    return (
        <div  id="contact" className="p-10 max-w-7xl mx-auto">
            <h2 className="text-red-500 text-5xl font-bold text-center mb-3">Contact me</h2>
            <div className="mt-5 md:grid grid-cols-2">
                <div>
                    <div className="flex items-center mb-5">
                        <FcCallback className="text-4xl" />
                        <div className="ml-4">
                            <h2 className="text-2xl font-semibold">Call me</h2>
                            <p className="text-xl">+8801313558092</p>
                        </div>
                    </div>
                    <div className="flex items-center mb-5">
                        <GrLocation className="text-4xl" />
                        <a href="#map" className="ml-4">
                            <h2 className="text-2xl font-semibold">Location </h2>
                            <p className="text-xl">Bangladesh, Mymensingh</p>
                        </a>
                    </div>
                    <div className="flex items-center mb-5">
                        <MdOutlineMarkEmailUnread className="text-4xl" />
                        <div className="ml-4">
                            <h2 className="text-2xl font-semibold mx-auto">Email me : <a href="mailto:anirbanchondrobanai@gmail.com">Click Here</a></h2>
                        </div>
                    </div>
                    <div>
                        <div className="flex mt-2">
                            <a href="https://web.facebook.com/profile.php?id=100077890384340" className="text-2xl ml-1"><FaFacebookF /></a>
                            <a href="https://github.com/anirbanbanai" className="text-2xl ml-3"><BsGithub /></a>
                            <a href="https://www.linkedin.com/in/anirban-chandra-banai-b0a222275/" className="text-2xl ml-3"><FaLinkedin /></a>
                            <a href="https://www.instagram.com/anirbanbanai/" className="text-2xl ml-3"><BsInstagram /></a>
                        </div>
                    </div>
                </div>
                <form className="mt-10" ref={form} onSubmit={sendEmail}>
                    <div className="md:flex gap-5 mb-4">
                        <input type="text" placeholder="Enter Your Name" name="from_name" className="input w-full mb-4" />
                        <input type="email" placeholder="Enter Your Emal" name="from_email" className="input w-full" />
                    </div>
                    <input type="text" name="subject" placeholder="Enter Your Subject" className="input w-full" />
                    <br />
                    <textarea name="message" className="textarea w-full mt-4 h-32" placeholder="Your Message"></textarea>
                    <ButtonAll type="submit">Submit</ButtonAll>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;

import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaTwitterSquare, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="flex flex-col lg:flex-row lg:gap-24  py-20 px-10 lg:px-40 bg-zinc-800 text-neutral-content">
                <div className='lg:w-5/12 mb-5'>
                    <span className="footer-title text-3xl ">About Us</span>
                    <p>Experience the best Chinese Cuisine at DELICIOUS. We use only the freshest ingredients and authentic recipes to create delicious dishes that will satisfy your taste buds.</p>
                </div>

                <div className='grid md:grid-cols-3 gap-10'>
                    <div className='lg:ml-auto'>
                        <span className="footer-title">About</span>
                        <p className="link link-hover">History us</p>
                        <p className="link link-hover">Our Team</p>
                        <p className="link link-hover">History us</p>
                        <p className="link link-hover">Brand Guidelines</p>
                        <p className="link link-hover">Terms & Condition</p>
                        <p className="link link-hover">Privacy Policy</p>
                    </div>

                    <div className='lg:ml-auto'>
                        <span className="footer-title">Services</span>
                        <p className="link link-hover">How to Order</p>
                        <p className="link link-hover">Our Product</p>
                        <p className="link link-hover">Order Status</p>
                        <p className="link link-hover">Promo</p>
                        <p className="link link-hover">Payment Method</p>
                    </div>

                    <div className='lg:ml-auto'>
                        <span className="footer-title">Follow</span>
                        <p className="flex items-center gap-2 link link-hover"><FaFacebook/>Facebook</p>
                        <p className="flex items-center gap-2 link link-hover"><FaTwitter/>Twitter</p>
                        <p className="flex items-center gap-2 link link-hover"><FaInstagram/>Instagram</p>
                        <p className="flex items-center gap-2 link link-hover"><FaWhatsapp/>Whatsapp</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/media-logo-removebg-preview.png"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="" className='w-[50px] h-[50px] object-contain'/>
              <span className="font-bold text-xl">
                Magnetiq <span className="text-purple-500">Media</span>
              </span>
            </div>
            <p className="text-zinc-400 mb-6">
              Your growth partner that delivers real results through data-driven creativity and strategic marketing solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-400 hover:text-purple-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-purple-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/magnetiq_media3?igsh=MXB6ZWVpZWtkMG82bw" className="text-zinc-400 hover:text-purple-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-purple-500 transition-colors" aria-label="Linkedin">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'SEO',
                'Content Writing',
                'Social Media Marketing',
                'Pay Per Click',
                'Influencer Marketing',
                'Video Marketing',
                'E-commerce Marketing',
                'Mobile Marketing'
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-zinc-400 hover:text-purple-500 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Privacy Policy', path: '#' },
                { name: 'Terms of Service', path: '#' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-zinc-400 hover:text-purple-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-purple-500 h-5 w-5 mt-1 flex-shrink-0" />
                <span className="text-zinc-400">Pune, Maharashtra</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-purple-500 h-5 w-5 flex-shrink-0" />
                <span className="text-zinc-400">+91 99226 57543</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-purple-500 h-5 w-5 flex-shrink-0" />
                <span className="text-zinc-400">magnetiqmedia@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-zinc-800 my-8" />

        <div className="text-center text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} Magnetiq Media. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

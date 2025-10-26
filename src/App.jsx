import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./App.css"
import Home from './components/home';
import About from './components/aboutus';
import Features from './components/features';
import Orderpage from './components/orderpage';
import BookTable from './components/booktable';
import Specilaties from './components/specilaties';
import Chef from './components/chefpage';
import Testimonial from './components/testimonials';
import Location from './components/location';
import Community from './components/community';
import Contact from './components/contact';

// Navigation items configuration with section IDs
const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'book-table', label: 'Book Table' },
  { id: 'location', label: 'Location' },
  { id: 'testimonial', label: 'Testimonial' },
  { id: 'contact', label: 'Contact' }
];

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 70; // approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-black text-white fixed-top">
      <div className="container">
        <a 
          className="navbar-brand text-warning fw-bold" 
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          TIFFIN BOX
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon-custom"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mt-2">
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <a 
                  className={`nav-link text-warning ${activeSection === item.id ? 'active' : ''}`}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <button className="btn btn-warning viewmenu-btn fw-semibold">
              View Menu{' '}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 18 18">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="bg-black min-vh-100">
      <div className="bg-black min-vh-100 main-container mx-auto">
        <Navbar />
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="features"><Features /></section>
        <section id="order"><Orderpage /></section>
        <section id="book-table"><BookTable /></section>
        <section id="specialties"><Specilaties /></section>
        <section id="chef"><Chef /></section>
        <section id="testimonial"><Testimonial /></section>
        <section id="location"><Location /></section>
        <section id="community"><Community /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  )
}

export default App

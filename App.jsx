// React Components for AutoCare - Car Service & Spare Parts Website


 import React, { useState, useEffect } from 'react';


// Navigation Component

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    };

    return (
         <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#" className="logo">
                    <i className="fas fa-car"></i>
                    <span>AutoCare</span>
                </a>
                
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <li><a href="#" className="nav-link" onClick={() => scrollToSection('hero')}>Home</a></li>
                    <li><a href="#" className="nav-link" onClick={() => scrollToSection('services')}>Services</a></li>
                    <li><a href="#" className="nav-link" onClick={() => scrollToSection('spare-parts')}>Spare Parts</a></li>
                    <li><a href="#" className="nav-link" onClick={() => scrollToSection('about')}>About</a></li>
                    <li><a href="#" className="nav-link" onClick={() => scrollToSection('contact')}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}


// Hero Component

function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="container">
                <div className="hero-content fade-in">
                    <h1>Professional Car Service & Quality Spare Parts</h1>
                    <p>Your trusted partner for all automotive needs. Expert mechanics, genuine parts, and exceptional service.</p>
                    <div className="cta-buttons">
                        <a href="#services" className="btn btn-primary">
                            <i className="fas fa-tools"></i>
                            Our Services
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            <i className="fas fa-phone"></i>
                            Book Appointment
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}


// Features Component

function Features() {
    const features = [
        {
            icon: 'fas fa-user-shield',
            title: 'Expert Mechanics',
            description: 'Certified professionals with years of experience in automotive repair and maintenance.'
        },
        {
            icon: 'fas fa-certificate',
            title: 'Quality Parts',
            description: 'Genuine and high-quality spare parts from trusted manufacturers worldwide.'
        },
        {
            icon: 'fas fa-clock',
            title: 'Quick Service',
            description: 'Fast turnaround time without compromising on quality and attention to detail.'
        },
        {
            icon: 'fas fa-rupee-sign',
            title: 'Fair Pricing',
            description: 'Transparent and competitive pricing with no hidden charges or surprises.'
        }
    ];

    return (
        <section className="features">
            <div className="container">
                <div className="section-header">
                    <h2>Why Choose AutoCare?</h2>
                    <p>We provide comprehensive automotive solutions with unmatched quality and service</p>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card fade-in">
                            <div className="feature-icon">
                                <i className={feature.icon}></i>
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


// Services Component

function Services() {
    const services = [
        {
            icon: 'fas fa-oil-can',
            title: 'Oil Change & Maintenance',
            description: 'Regular maintenance to keep your vehicle running smoothly and efficiently.',
            features: ['Engine Oil Replacement', 'Filter Changes', 'Fluid Top-ups', 'Multi-point Inspection'],
            price: '₹49.99'
        },
        {
            icon: 'fas fa-cogs',
            title: 'Engine Diagnostics',
            description: 'Advanced computer diagnostics to identify and resolve engine issues quickly.',
            features: ['Computer Scanning', 'Error Code Reading', 'Performance Testing', 'Detailed Report'],
            price: '₹79.99'
        },
        {
            icon: 'fas fa-car-crash',
            title: 'Brake Service',
            description: 'Complete brake system inspection, repair, and replacement services.',
            features: ['Brake Pad Replacement', 'Rotor Resurfacing', 'Brake Fluid Change', 'Safety Inspection'],
            price: '₹129.99'
        },
        {
            icon: 'fas fa-battery-full',
            title: 'Battery & Electrical',
            description: 'Battery testing, replacement, and electrical system diagnostics.',
            features: ['Battery Testing', 'Alternator Check', 'Wiring Inspection', 'Starter Service'],
            price: '₹59.99'
        },
        {
            icon: 'fas fa-snowflake',
            title: 'AC Service & Repair',
            description: 'Air conditioning system maintenance, repair, and refrigerant recharge.',
            features: ['AC Performance Test', 'Refrigerant Recharge', 'Leak Detection', 'Component Replacement'],
            price: '₹99.99'
        },
        {
            icon: 'fas fa-wrench',
            title: 'General Repairs',
            description: 'Comprehensive repair services for all makes and models of vehicles.',
            features: ['Suspension Repair', 'Exhaust System', 'Transmission Service', 'Body Work'],
            price: 'Custom Quote'
        }
    ];

    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-header">
                    <h2>Our Services</h2>
                    <p>Comprehensive automotive services to keep your vehicle in peak condition</p>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card fade-in">
                            <div className="service-image">
                                <i className={service.icon}></i>
                            </div>
                            <div className="service-content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <ul>
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <i className="fas fa-check-circle"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="price">{service.price}</div>
                                <button className="btn">
                                    <i className="fas fa-calendar-check"></i>
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


// Spare Parts Component

function SpareParts() {
    const parts = [
        {
            icon: 'fas fa-oil-can',
            name: 'Engine Oil',
            brand: 'Castrol EDGE',
            price: '₹45.99',
            badge: 'Popular'
        },
        {
            icon: 'fas fa-filter',
            name: 'Air Filter',
            brand: 'K&N Performance',
            price: '₹29.99',
            badge: 'New'
        },
        {
            icon: 'fas fa-compact-disc',
            name: 'Brake Pads',
            brand: 'Brembo Premium',
            price: '₹89.99',
            badge: 'Best Seller'
        },
        {
            icon: 'fas fa-battery-full',
            name: 'Car Battery',
            brand: 'Optima RedTop',
            price: '₹179.99',
            badge: 'Premium'
        },
        {
            icon: 'fas fa-lightbulb',
            name: 'Headlight Bulbs',
            brand: 'Philips X-treme',
            price: '₹34.99',
            badge: 'Sale'
        },
        {
            icon: 'fas fa-circle-notch',
            name: 'Tires',
            brand: 'Michelin Pilot',
            price: '₹249.99',
            badge: 'Premium'
        },
        {
            icon: 'fas fa-wind',
            name: 'Cabin Air Filter',
            brand: 'MANN-Filter',
            price: '₹19.99',
            badge: 'Popular'
        },
        {
            icon: 'fas fa-car-battery',
            name: 'Spark Plugs',
            brand: 'NGK Iridium',
            price: '₹12.99',
            badge: 'Best Value'
        }
    ];

    return (
        <section className="spare-parts" id="spare-parts">
            <div className="container">
                <div className="section-header">
                    <h2>Quality Spare Parts</h2>
                    <p>Genuine and aftermarket parts from world-renowned manufacturers</p>
                </div>
                <div className="parts-grid">
                    {parts.map((part, index) => (
                        <div key={index} className="part-card fade-in">
                            <div className="part-image">
                                <i className={part.icon}></i>
                                <span className="part-badge">{part.badge}</span>
                            </div>
                            <div className="part-content">
                                <h3>{part.name}</h3>
                                <p className="part-brand">{part.brand}</p>
                                <div className="part-price">{part.price}</div>
                                <button className="btn">
                                    <i className="fas fa-shopping-cart"></i>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


// About Component

function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="section-header">
                    <h2>About AutoCare</h2>
                    <p>Your trusted automotive service partner since 2005</p>
                </div>
                <div className="about-content">
                    <div className="about-image">
                        <div className="about-placeholder">
                            <i className="fas fa-warehouse"></i>
                        </div>
                    </div>
                    <div className="about-text">
                        <h3>Excellence in Automotive Service</h3>
                        <p>
                            AutoCare has been serving the community for over 18 years with dedication, 
                            expertise, and a commitment to quality. Our state-of-the-art facility is 
                            equipped with the latest diagnostic tools and equipment.
                        </p>
                        <p>
                            We employ certified mechanics who undergo continuous training to stay updated 
                            with the latest automotive technologies. Whether it's routine maintenance or 
                            complex repairs, we treat every vehicle with the care it deserves.
                        </p>
                        <p>
                            Our extensive inventory of genuine and quality spare parts ensures that your 
                            vehicle gets the best components, extending its life and maintaining optimal performance.
                        </p>
                        <div className="stats">
                            <div className="stat-item">
                                <div className="stat-number">18+</div>
                                <div className="stat-label">Years Experience</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">15K+</div>
                                <div className="stat-label">Happy Customers</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">50+</div>
                                <div className="stat-label">Expert Mechanics</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


// Testimonials Component

function Testimonials() {
    const testimonials = [
        {
            name: 'Shaik Faizan',
            role: 'Business Owner',
            initial: 'JS',
            text: 'AutoCare has been servicing my fleet of vehicles for years. Their professionalism and quality work are unmatched. Highly recommended!',
            rating: 5
        },
        {
            name: 'Sarah ',
            role: 'Teacher',
            initial: 'SJ',
            text: 'Excellent service! They diagnosed my car issue quickly and fixed it at a fair price. The staff is friendly and knowledgeable.',
            rating: 5
        },
        {
            name: 'Shaik Fayaz',
            role: 'Engineer',
            initial: 'MD',
            text: 'I trust AutoCare with all my automotive needs. From routine maintenance to major repairs, they always deliver exceptional results.',
            rating: 5
        }
    ];

    return (
        <section className="testimonials">
            <div className="container">
                <div className="section-header">
                    <h2>What Our Customers Say</h2>
                    <p>Real experiences from our satisfied customers</p>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card fade-in">
                            <i className="fas fa-quote-right quote-icon"></i>
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{testimonial.initial}</div>
                                <div className="author-info">
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.role}</p>
                                    <div className="rating">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <i key={i} className="fas fa-star"></i>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


// Contact Component

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you shortly.');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="section-header">
                    <h2>Get In Touch</h2>
                    <p>Contact us for appointments, inquiries, or to learn more about our services</p>
                </div>
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="contact-details">
                                <h3>Visit Us</h3>
                                <p>144/72 AutoNagar KNL<br/>Mechanic City<br/>INDIA</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className="contact-details">
                                <h3>Call Us</h3>
                                <p>Phone: +91 1234567890<br/>Emergency: +91 0987654321</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-details">
                                <h3>Email Us</h3>
                                <p>Mechanic@autocare.com<br/>support@autocare.com</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-clock"></i>
                            </div>
                            <div className="contact-details">
                                <h3>Working Hours</h3>
                                <p>Mon - Fri: 8:00 AM - 6:00 PM<br/>Sat: 9:00 AM - 4:00 PM<br/>Sun: Closed</p>
                            </div>
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name *</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address *</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number *</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="service">Service Required *</label>
                            <select 
                                id="service" 
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a service</option>
                                <option value="oil-change">Oil Change & Maintenance</option>
                                <option value="diagnostics">Engine Diagnostics</option>
                                <option value="brakes">Brake Service</option>
                                <option value="battery">Battery & Electrical</option>
                                <option value="ac-service">AC Service & Repair</option>
                                <option value="general">General Repairs</option>
                                <option value="spare-parts">Spare Parts Inquiry</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea 
                                id="message" 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn">
                            <i className="fas fa-paper-plane"></i>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}


// Footer Component

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>AutoCare</h3>
                        <p>
                            Your trusted partner for professional car service and quality spare parts. 
                            We're committed to keeping your vehicle running at its best.
                        </p>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#services">Our Services</a></li>
                            <li><a href="#spare-parts">Spare Parts</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Oil Change</a></li>
                            <li><a href="#">Engine Diagnostics</a></li>
                            <li><a href="#">Brake Service</a></li>
                            <li><a href="#">AC Repair</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Contact Info</h3>
                        <ul>
                            <li><i className="fas fa-map-marker-alt"></i> 144/72 AutoNagar KNL</li>
                            <li><i className="fas fa-phone"></i> +91 1234567890</li>
                            <li><i className="fas fa-envelope"></i> Mechanic@autocare.com</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Sinces 2022 AutoCare. All rights reserved. | Designed for professional car service</p>
                </div>
            </div>
        </footer>
    );
}


// Main App Component

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Features />
            <Services />
            <SpareParts />
            <About />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}

 export default App;
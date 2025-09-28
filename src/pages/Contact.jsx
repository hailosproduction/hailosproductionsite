import React from 'react';
import '../styles.css';

export default function Contact(){
  return (
    <section className="page-banner" style={{ backgroundImage: "url('/images/contact-banner.jpg')" }}>
      <div className="banner-content fade-page">
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="mt-4 max-w-2xl">For bookings, collaborations or press, reach out via email or the contact form.</p>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('Sending...');
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log('Response data:', data); // Debug response
    
    if (response.ok) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    } else {
      setStatus(`Failed to send message: ${data.message}`);
    }
  } catch (error) {
    console.error('Error:', error);
    setStatus('An error occurred. Please try again later.');
  }
};


  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          HUBUNGI SAYA JIKA ADA PERMASALAHAN
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 tracking-wider">
          KLIK DI BAWAH INI UNTUK KE WA SAYA
        </p>
      </div>
      {status && (
        <p className="mt-4 text-center text-lg text-green-600">{status}</p>
      )}
    </section>
  );
};

export default GetInTouch;

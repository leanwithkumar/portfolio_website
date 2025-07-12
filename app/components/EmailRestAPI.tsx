'use client';

import React, { useState, FormEvent } from 'react';
import axios from 'axios';

const EmailForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = 'service_6isk9tm';
    const templateId = 'template_c7n8j5p';
    const publicKey = 'P6OorjZVtC49vY2Ib';

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: 'Abhay',
        message,
      },
    };

    try {
      const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
      console.log(response.data);
      setStatus('Message sent!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full px-4 md:px-6 lg:px-8 py-6 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Name*"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-700 text-white rounded px-4 py-3 outline-none placeholder:text-gray-300"
          />
          <input
            type="email"
            placeholder="Email*"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-700 text-white rounded px-4 py-3 outline-none placeholder:text-gray-300"
          />
        </div>
        <textarea
          placeholder={`Message*`}
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-gray-700 text-white rounded px-4 py-3 outline-none placeholder:text-gray-300"
          rows={6}
        ></textarea>
        <button
          type="submit"
          className="w-full bg-gray-600 text-white py-3 rounded hover:bg-gray-500 transition-all font-medium"
        >
          Send Message
        </button>
        <div className='py-4'>Avg. response: 1-2 Hours (Working Hours, GMT+5:30)</div>

        {status && <p className="text-sm text-center mt-2 text-white">{status}</p>}
      </form>

    </div>
  );
};

export default EmailForm;

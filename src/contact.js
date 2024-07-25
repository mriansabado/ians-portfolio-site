import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log(formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 via-purple-900 to-black text-white px-4 md:px-0">
      <div className="w-full max-w-4xl bg-opacity-75 p-10 md:p-16 rounded-lg shadow-2xl flex flex-col items-center relative">
        <div className="absolute inset-0 z-0">
          
        </div>
        <div className="relative z-10 w-full">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">Contact Me</h1>
          <div className="w-full mt-8 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col">
                <label className="text-lg font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-3 rounded-lg bg-opacity-30 bg-white text-black"
                />
                {errors.name && <span className="text-red-400 mt-1">{errors.name}</span>}
              </div>
              <div className="flex flex-col">
                <label className="text-lg font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 rounded-lg bg-opacity-30 bg-white text-black"
                />
                {errors.email && <span className="text-red-400 mt-1">{errors.email}</span>}
              </div>
              <div className="flex flex-col">
                <label className="text-lg font-semibold">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="p-3 rounded-lg bg-opacity-30 bg-white text-black h-32"
                />
                {errors.message && <span className="text-red-400 mt-1">{errors.message}</span>}
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="py-3 px-8 bg-purple-600 hover:bg-purple-800 transition-colors duration-300 text-lg font-semibold rounded-full shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

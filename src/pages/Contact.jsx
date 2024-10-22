import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email' && value && !validateEmail(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address',
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
      }));
    } else if (name === 'email' && !validateEmail(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted (no backend to process data yet)');
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id='contact' className='container my-5 bg-light p-4 rounded'>
      <h2 className='text-center mb-4'>Contact Me</h2>

      <div className='row'>
        {/* Left Half - Contact Message */}
        <div className='col-md-6'>
          <h4 className='contact-header'>Get in Touch</h4>
          <p className='contact-text'>
            Please feel free to contact me at{' '}
            <a href='mailto:vaughanknouse@gmail.com' className='contact-email'>
              vaughanknouse@gmail.com
            </a>{' '}
            if you have any questions or comments.
          </p>
        </div>

        {/* Right Half - Contact Form */}
        <div className='col-md-6'>
          {submitted && (
            <div className='alert alert-success'>
              Your message has been sent!
            </div>
          )}

          <div className='card p-4 shadow-lg rounded'>
            <form className='mb-4' onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label htmlFor='name' className='form-label'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {errors.name && (
                  <div className='invalid-feedback'>{errors.name}</div>
                )}
              </div>

              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {errors.email && (
                  <div className='invalid-feedback'>{errors.email}</div>
                )}
              </div>

              <div className='mb-3'>
                <label htmlFor='message' className='form-label'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows='4'
                  className={`form-control ${
                    errors.message ? 'is-invalid' : ''
                  }`}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {errors.message && (
                  <div className='invalid-feedback'>{errors.message}</div>
                )}
              </div>

              <button type='submit' className='btn btn-primary btn-lg'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

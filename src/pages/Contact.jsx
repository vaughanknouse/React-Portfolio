import React, { useState } from 'react'; // Import React and useState hook for managing form data
// import '../styles/Contact.css'; // Import the styles for the Contact component

// Create a functional component for the Contact section
const Contact = () => {
  // Initialize state for form data and errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({}); // State for validation errors

  // Handle changes in the form inputs
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Validate the email format using regex
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
    return regex.test(email); // Returns true if email matches the regex
  };

  // Validate required fields on blur
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };

    if (!value) {
      newErrors[name] = `${
        name.charAt(0).toUpperCase() + name.slice(1)
      } is required`;
    } else if (name === 'email' && !validateEmail(value)) {
      newErrors[name] = 'Email is invalid';
    } else {
      delete newErrors[name]; // Remove error if field is valid
    }

    setErrors(newErrors); // Update errors state
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate form fields
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);

    // Proceed with form submission if no errors
    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!'); // Reset form fields after submission
    }
  };

  // Render the contact section
  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        {' '}
        <input
          type='text'
          name='name'
          placeholder='Your Name'
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.name && <p className='error'>{errors.name}</p>}{' '}
        <input
          type='email'
          name='email'
          placeholder='Your Email'
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.email && <p className='error'>{errors.email}</p>}{' '}
        <textarea
          name='message'
          placeholder='Your Message'
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.message && <p className='error'>{errors.message}</p>}{' '}
        <button className='btn send-button' type='submit'></button>{' '}
      </form>
      <div>
        {' '}
        {/* Display contact information */}
        <p>Email: vaughanknouse@gmail.com</p>
        <p>Phone: 202-365-3858</p>
      </div>
    </section>
  );
};

// Export the Contact component for use in other parts of the application
export default Contact;

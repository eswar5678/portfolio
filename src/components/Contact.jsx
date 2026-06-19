import { useState } from 'react';
import contactImg from '../assets/contact_illustration.png';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert(`Thank you, ${formData.name}! Your message has been sent successfully.`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        <i className="fas fa-headset"></i> Get in <span>Touch</span>
      </h2>

      <div className="container">
        <div className="contact-content">
          <div className="image-box">
            <img draggable="false" src={contactImg} alt="Contact Illustration" />
          </div>
          
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="field">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
                <i className="fas fa-user"></i>
              </div>
              <div className="field">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                <i className="fas fa-envelope"></i>
              </div>
              <div className="field">
                <input 
                  type="text" 
                  name="phone" 
                  placeholder="Phone" 
                  value={formData.phone}
                  onChange={handleChange}
                />
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="message">
                <textarea 
                  name="message" 
                  placeholder="Message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <i className="fas fa-comment-dots"></i>
              </div>
            </div>
            <div className="button-area">
              <button type="submit">
                Submit <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

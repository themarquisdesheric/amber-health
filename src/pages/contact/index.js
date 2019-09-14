import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Breadcrumbs from '../../components/Breadcrumbs';

const Index = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const { name, email, message } = form;
    
    if (name.length && email.length && message.length) {
      setIsValid(true);
    }
  }, [form]);

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value 
    });
  };

  return ( 
    <Layout className="contact">
      <section className="content">
        <Breadcrumbs path="Contact" />
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold text-center mb-12 md:text-3xl">Get in touch.</h1>
          <form
            name="contact"
            action="mailto:someone@example.com" 
            method="post" 
            encType="text/plain"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="max-w-xl"
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{' '}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </div>
            
            <label htmlFor="name">
              Your name
            </label>
            <div>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                id="name"
                required={true}
              />
            </div>
            <label htmlFor="email">
              Email
            </label>
            
            {/* ensure email input validation is working */}
            <div>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                id="email"
                required={true}
              />
            </div>
            <label htmlFor="message">
              Message
            </label>
            
            <div>
              <textarea
                name="message"
                onChange={handleChange}
                id="message"
                rows="6"
                required={true}
              ></textarea>
            </div>
            <button type="submit" disabled={!isValid}>
              Send
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

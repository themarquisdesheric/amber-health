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
    
    if (!isValid && name.length && email.length && message.length) {
      setIsValid(true);
    }
  }, [form]);

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = form;
    const body = `
      ${message.slice(0, 1800)}

      ----------

      ${name}
      ${email}
    `;

    window.location.href = `mailto:amber.robinson21@gmail.com?subject=${subject}&body=${body}`;
  };

  const messageLength = form.message.length;
  const showEmailClientNotification = messageLength > 10;
  const showMessageLengthLimit = messageLength > 1800;

  return ( 
    <Layout className="contact">
      <section className="content">
        <Breadcrumbs path="Contact" />
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold text-center mb-12 md:text-3xl">Get in touch.</h1>
          <form name="contact" className="max-w-xl">
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{' '}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </div>
            
            <label htmlFor="name">
              Name*
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
              Email*
            </label>
            <div>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                id="email"
                required={true}
              />
            </div>
            
            <label htmlFor="subject">
              Subject*
            </label>
            <div>
              <input
                type="text"
                name="subject"
                onChange={handleChange}
                id="subject"
                required={true}
              />
            </div>

            <label htmlFor="message">
              Message*
            </label>
            <div>
              <textarea
                name="message"
                onChange={handleChange}
                id="message"
                rows="6"
                required={true}
              ></textarea>
              
              <span className="text-xs">
                {/* there is a 2000 character cutoff for messages sent via mailto */}
                {showMessageLengthLimit
                  ? 'You\'ve reached the message length limit. Please click Send to complete the message in your email client.'
                  : showEmailClientNotification && 'Your message will be sent using your default email client.'
                }
              </span>
            </div>
            
            <button onClick={handleSubmit} disabled={!isValid}>
              Send
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

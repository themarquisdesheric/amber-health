import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Breadcrumbs from '../../components/Breadcrumbs';
import GetInTouchAnimation from './GetInTouchAnimation';

const initializeForm = () => ({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const Index = () => {
  const [emailSaved, setEmailSaved] = useState(false);
  const [form, setForm] = useState(initializeForm());
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const { subject, message } = form;
    
    if (!isValid && subject.length && message.length) {
      setIsValid(true);
    }
  }, [form, isValid]);

  const saveEmail = () => {
    for (const key in form) {
      localStorage.setItem(key, form[key]);
    }

    setForm(initializeForm());
    setEmailSaved(true);
  };

  const restoreEmail = (e) => {
    e.preventDefault();

    const restoredEmail = {};

    for (const key in form) {
      restoredEmail[key] = localStorage.getItem(key);
    }

    setForm(restoredEmail);
    setEmailSaved(false);
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = form;
    const body = `${message.slice(0, 1800)} ${(name || email) ? `[FROM: ${name}/${email}]` : ''}`;
    
    if (window !== undefined) {
      window.location.href = `mailto:thechronicinfo@gmail.com?subject=${subject}&body=${body}`;
    }

    saveEmail();  
  };

  const messageLength = form.message.length;
  const showEmailClientNotification = messageLength > 10;
  const showMessageLengthLimit = messageLength > 1800;
  const { name, email, subject, message } = form;

  return ( 
    <Layout className="contact">
      <section className="content">
        <Breadcrumbs path="Contact" />
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold text-center mb-12 md:text-3xl">
            <GetInTouchAnimation />
          </h1>
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
              Name
            </label>
            <div>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={name}
                id="name"
              />
            </div>

            <label htmlFor="email">
              Email
            </label>
            <div>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={email}
                id="email"
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
                value={subject}
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
                value={message}
                id="message"
                rows="6"
                required={true}
              ></textarea>
              
            </div>
            
            <div className={`contact-send-button-container ${(showMessageLengthLimit || showEmailClientNotification) ? 'reveal' : ''}`}>
              <span className="block mb-3 text-xs">
                {/* there is a 2000 character cutoff for messages sent via mailto */}
                {showMessageLengthLimit
                  ? 'You\'ve reached the message length limit. Please click Send to complete the message in your email client.'
                  : 'Your message will be sent using your default email client.'
                }
              </span>

              {!emailSaved && (
                <button onClick={handleSubmit} disabled={!isValid}>
                  Send
                </button>
              )}

              {emailSaved && (
                <button onClick={restoreEmail} className="restore-email bg-black text-white">
                  Restore email
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

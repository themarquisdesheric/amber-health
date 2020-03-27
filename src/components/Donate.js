import React, { Fragment } from 'react';
import { Link } from 'gatsby';

const Donate = ({ aboutPage = false }) => (
  <div id="donate" className="relative text-center text-sm rounded-lg mx-auto my-12 p-4">
    <p className="mt-4">
      If you found this website useful, <br />
      please consider donating
    </p>
    <form className="m-auto" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_donations" />
      <input type="hidden" name="business" value="UV9GEXJFJ7AKJ" />
      <input type="hidden" name="currency_code" value="USD" />
      <input className="p-0" type="image" src="https://github.com/themarquisdesheric/amber-health/blob/master/static/img/donate-button.png?raw=true" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
      <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
    </form>
    <p className="mx-auto mt-2">
      {aboutPage
        ? 'Donations will be used to maintain the website and support the author as she works towards a healthier future'
        : <Fragment>Donations will be used to maintain the website and support the <Link to="/about">author</Link> as she works towards a healthier future</Fragment>
      }
    </p>
  </div>
);

export default Donate;

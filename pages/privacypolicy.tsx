import { head } from 'lodash';
import React from 'react';

const containerStyle = {
  backgroundColor: 'black',
  color: 'white',
  padding: '20px',
  margin: '20px', // Add margin to create space around the component
};

const headingStyle = {
  fontSize: '32px', // Increase the font size for headings
  fontWeight: 'bold', // Make headings bold
  marginBottom: '10px', // Add margin at the bottom of headings
};

const paragraphStyle = {
  fontSize: '18px',
  marginBottom: '10px', // Add margin at the bottom of paragraphs
};

const PrivacyPolicy: React.FC = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Privacy Policy</h1>

      <p>Effective Date: 2 October 2023</p>

      <h2 style={headingStyle}>1. Introduction</h2>

      <p style={paragraphStyle}>
        This Privacy Policy explains how we collect, use, disclose, and
        safeguard your personal information when you visit our website. By using
        our website, you consent to the practices described in this policy.
      </p>


      <h2 style={headingStyle}>2. About Our Website</h2>

<p style={paragraphStyle}>
  This website is a personal project created with the primary purpose of
  enhancing skills and showcasing web development abilities. It is not
  affiliated with or endorsed by Netflix, Inc. We do not claim to be an
  official Netflix website.
</p>

<h2 style={headingStyle}>3. Avoiding Deceptive Practices</h2>

<p style={paragraphStyle}>
  We are committed to providing a transparent and honest online
  experience. To avoid any deceptive practices, we adhere to the
  following principles:
</p>

<ul style={paragraphStyle}>
  <li>We clearly state that our website is not affiliated with Netflix.</li>
  <li>We do not collect or share personal information without consent.</li>
  <li>We do not engage in misleading activities or misrepresentation.</li>
</ul>



<h2 style={headingStyle}>4. Data Collection and Security</h2>

<p style={paragraphStyle}>
  We may collect personal information such as your name, email address,
  phone number, and password when you sign up for our services or interact
  with our website. We take the security and confidentiality of your
  personal information seriously. Here is how we handle your data:
</p>

<ul style={paragraphStyle}>
  <li>We collect your personal information solely for the purpose of providing and improving our services, as well as customizing your experience.</li>
  <li>Your data is securely stored and protected from unauthorized access, disclosure, alteration, or destruction.</li>
  <li>We do not share your personal information with third parties except as described in this policy.</li>
  <li>We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and tailor content to your interests. You can manage your cookie preferences through your browser settings.</li>
</ul>


      <h2 style={headingStyle}>3. How We Use Your Information</h2>

      <p style = {paragraphStyle}>We use your personal information for various purposes, including:</p>

      <ul style = {paragraphStyle}>
        <li>Providing and improving our services</li>
        <li>Communicating with you</li>
        <li>Customizing your experience</li>
        <li>Understanding user behavior and preferences</li>
      </ul>

      <h2 style={headingStyle}>4. Data Security</h2>

      <p style = {paragraphStyle}>
        We take data security seriously. Your information is securely stored and
        protected from unauthorized access, disclosure, alteration, or
        destruction. We do not share your personal information with third
        parties except as described in this policy.
      </p>

      <h2 style={paragraphStyle}>5. Cookies and Tracking</h2>

      <p style = {paragraphStyle}>
        We use cookies and similar tracking technologies to enhance your
        browsing experience, analyze website traffic, and tailor content to your
        interests. You can manage your cookie preferences through your browser
        settings.
      </p>

      <h2 style={headingStyle}>6. Third-Party Links</h2>

      <p style = {paragraphStyle}>
        Our website may contain links to third-party websites. We are not
        responsible for the privacy practices or content of these websites.
        Please review the privacy policies of third-party sites before
        providing any personal information.
      </p>

      <h2 style={headingStyle}>7. Changes to this Privacy Policy</h2>

      <p style = {paragraphStyle}>
        We may update this Privacy Policy periodically to reflect changes in our
        practices and services. We will notify you of any material changes by
        posting a prominent notice on our website or by sending you an email.
      </p>

      <h2 style={headingStyle}>8. Contact Us</h2>

      <p style = {paragraphStyle}>
        If you have questions or concerns about this Privacy Policy or our data
        practices, please contact us at:
      </p>

      <ul style = {paragraphStyle}>
        <li>Email: appsbyadii@email.com</li>
        <li>Phone: (123) 456-7890</li>
      </ul>

      <p style = {paragraphStyle}>This privacy policy was last updated on [Date of Last Update].</p>
    </div>
  );
};

export default PrivacyPolicy;

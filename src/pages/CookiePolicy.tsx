import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CookiePolicy: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Cookie Policy</h1>
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none">
            <p>
              This Cookie Policy explains what cookies are and how we use them. You should read this policy to understand what cookies are, how we use them, the types of cookies we use, the information we collect using cookies and how that information is used and how to control the cookie preferences.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">What are cookies?</h2>
            <p>
              Cookies are small text files that are stored on your browser or device by websites, apps, online media, and advertisements. There are different types of cookies. Cookies served by the entity that operates the domain you are visiting are called "first-party cookies."
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">How do we use cookies?</h2>
            <p>
              We use cookies to enhance your browsing experience by:
            </p>
            <ul>
              <li>Remembering your preferences and settings.</li>
              <li>Understanding how you use our services.</li>
              <li>Improving our services and offerings.</li>
              <li>Providing personalized content and advertising.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">Types of Cookies We Use</h2>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems.
              </li>
              <li>
                <strong>Performance and Analytics Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization.
              </li>
              <li>
                <strong>Advertising Cookies:</strong> These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">Your Choices Regarding Cookies</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your browser. Most browsers allow you to refuse to accept cookies and to delete cookies.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Contact Us</h2>
            <p>If you have any questions about our use of cookies, please contact us:</p>
            <ul>
              <li>By email: acs.arifulislam@gmail.com</li>
              <li>By visiting this page on our website: /contact</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CookiePolicy; 
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Terms of Service</h1>
        <p className="text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-lg max-w-none">
          <p>
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the arifulgfx.com website (the "Service") operated by Ariful GFX ("us", "we", or "our").
          </p>

          <p>
            Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Accounts</h2>
          <p>
            When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Intellectual Property</h2>
          <p>
            The Service and its original content, features and functionality are and will remain the exclusive property of Ariful GFX and its licensors. The Service is protected by copyright, trademark, and other laws of both the Bangladesh and foreign countries.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Links To Other Web Sites</h2>
          <p>
            Our Service may contain links to third-party web sites or services that are not owned or controlled by Ariful GFX. Ariful GFX has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Termination</h2>
          <p>
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us:</p>
          <ul>
            <li>By email: acs.arifulislam@gmail.com</li>
            <li>By visiting this page on our website: /contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 
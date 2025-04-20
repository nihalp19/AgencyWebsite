import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const sections = [
    {
      title: "Introduction",
      content: `At Magnetiq Media, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.

      Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access our website or use our services.`
    },
    {
      title: "Information We Collect",
      content: `We may collect personal information that you voluntarily provide to us when you:
      
      • Register for an account
      • Sign up for our newsletter
      • Fill out a contact form
      • Request a quote or proposal
      • Participate in surveys or contests
      
      The personal information we collect may include:
      
      • Name, email address, and phone number
      • Billing information and payment details
      • Company information
      • IP address and browser information
      • Any other information you choose to provide`
    },
    {
      title: "How We Use Your Information",
      content: `We may use the information we collect for various purposes, including:
      
      • Providing, maintaining, and improving our services
      • Responding to your inquiries and fulfilling your requests
      • Sending administrative information
      • Sending marketing communications
      • Personalizing your experience
      • Conducting research and analysis
      • Preventing fraudulent transactions and monitoring against errors
      • Enforcing our terms and conditions`
    },
    {
      title: "How We Share Your Information",
      content: `We may share your information with:
      
      • Service providers who perform services on our behalf
      • Business partners with whom we jointly offer products or services
      • Affiliated companies within our corporate family
      • Third parties in connection with a business transaction
      • Law enforcement or other third parties when required by law`
    },
    {
      title: "Your Privacy Rights",
      content: `Depending on your location, you may have certain rights regarding your personal information, including:
      
      • The right to access personal information we hold about you
      • The right to request correction of inaccurate personal information
      • The right to request deletion of your personal information
      • The right to restrict processing of your personal information
      • The right to data portability
      • The right to object to processing of your personal information
      
      To exercise any of these rights, please contact us using the information provided in the "Contact Us" section.`
    },
    {
      title: "Cookies and Tracking Technologies",
      content: `We use cookies and similar tracking technologies to track activity on our website and to hold certain information. Cookies are small files placed on your device that allow us to enhance and personalize your experience.
      
      You can set your browser to refuse all or some browser cookies or to alert you when cookies are being sent. However, if you disable or refuse cookies, please note that some parts of our website may be inaccessible or not function properly.`
    },
    {
      title: "Data Security",
      content: `We have implemented appropriate technical and organizational security measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
      
      While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.`
    },
    {
      title: "Changes to This Privacy Policy",
      content: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
      
      You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.`
    },
    {
      title: "Contact Us",
      content: `If you have any questions about this Privacy Policy, please contact us at:
      
      Magnetiq Media
      Kothrud
      Pune Maharashtra
      Email: Magnetiqmedia3@gmail.com
      Phone: +91 99226 57543`
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy <span className="text-purple-500">Policy</span></h1>
          <p className="text-zinc-400 max-w-3xl mx-auto">
            Last Updated: April 19, 2025
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="mb-12"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">{section.title}</h2>
              <div className="text-zinc-300 space-y-4">
                {section.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Kayhan Audio</title>
        <meta name="description" content="Read the Terms and Conditions of Kayhan Audio's website." />
      </Head>

      <div className="container mx-auto px-4 py-10 text-black">
        <motion.h1
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Terms and Conditions
        </motion.h1>

        <motion.div className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <motion.div
            className="w-full bg-white shadow-md rounded-2xl p-6 border hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p className="text-gray-700">
              Welcome to Kayhan Audio’s website. By accessing or using this website, you agree to these Terms and Conditions.
            </p>
          </motion.div>

          <motion.div
            className="w-full bg-white shadow-md rounded-2xl p-6 border hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold mb-2">Legal Agreement</h2>
            <p className="text-gray-700">
              These terms form a legally binding agreement between you and The Trustee for Green Locals Australia Trust, trading as Kayhan Audio (ABN: 51 799 255 761).
            </p>
          </motion.div>

          <motion.div
            className="w-full bg-white shadow-md rounded-2xl p-6 border hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold mb-2">Acceptance & Updates</h2>
            <p className="text-gray-700">
              If you do not agree to these terms, please do not use the website. We may update these terms at any time, and your continued use of the site constitutes acceptance of any changes.
            </p>
          </motion.div>

          <motion.div
            className="w-full bg-white shadow-md rounded-2xl p-6 border hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold mb-2">2. Website Use</h2>
            <p className="text-gray-700">
              You may use this website in compliance with these terms and applicable laws. If you allow employees or agents to access the website on your behalf, you must ensure they also comply with these terms.
            </p>
          </motion.div>

          <motion.div
            className="w-full bg-white shadow-md rounded-2xl p-6 border hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold mb-2">3. User Responsibilities</h2>
            <p className="text-gray-700">
              When using our website, you must not: Copy, modify, or distribute website content without permission. Use the site for fraudulent, illegal, or unauthorized activities. Interfere with website functionality or security. Use automated tools (bots, scripts) to access the site. Harm our reputation or attempt unauthorized access.
            </p>
          </motion.div>

          <motion.div
            className="w-full bg-white shadow-md rounded-2xl p-6 border hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold mb-2">4. Website Content & Accuracy</h2>
            <p className="text-gray-700">
              We strive to keep all information accurate and up to date. However, we do not guarantee: The website will always be error-free or available. Messages or requests sent through the website will be delivered. The accuracy or completeness of all website content. We reserve the right to change website content, including product descriptions and pricing, without prior notice.
            </p>
          </motion.div>

          <motion.div
            className="w-full bg-white shadow-md rounded-2xl p-6 border hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold mb-2">5. Intellectual Property</h2>
            <p className="text-gray-700">
              All content on this website, including text, graphics, logos, and software, is owned or licensed by Kayhan Audio. You may make a temporary copy of website content for personal use. Any other use, including reproduction or distribution, requires written permission.
            </p>
          </motion.div>

          <motion.div
            className="w-full bg-white shadow-md rounded-2xl p-6 border hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold mb-2">6. External Links</h2>
            <p className="text-gray-700">
              Our website may link to external websites for your convenience. We are not responsible for their content, policies, or practices.
            </p>
          </motion.div>

          <motion.div
            className="w-full bg-white shadow-md rounded-2xl p-6 border hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold mb-2">7. Security</h2>
            <p className="text-gray-700">
              We take security seriously but cannot guarantee that the website is free from cyber threats. Users should take their own precautions when browsing.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

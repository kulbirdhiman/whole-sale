import React from "react";
import InfoCard from "@/components/footer/infoCard";

const About = () => {
  return (
    <section className="w-[90%] mx-auto py-16 text-black space-y-16">
      {/* Header Section */}
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Kayhan Audio is a leading manufacturer and developer of premium automotive entertainment devices. With 27 years of expertise, we understand our customers’ needs and are dedicated to providing cutting-edge products that enhance the driving experience. Our commitment to innovation, quality, and customer satisfaction has made us a trusted name in automotive audio solutions.
        </p>
      </div>

      {/* Core Sections - Our Journey, Mission, Why Choose Us */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <InfoCard
          title="Our Journey"
          content="Founded in 1997 in Germany, Kayhan Audio quickly recognized the demand for advanced in-car entertainment. With headquarters and production facilities in Australia, we serve both local and global customers with innovative solutions."
        />
        <InfoCard
          title="Our Mission"
          content="Our mission is to redefine in-car entertainment by delivering innovative, high-quality products. We continuously invest in research and development to stay ahead of industry trends and meet evolving customer needs."
        />
        <InfoCard
          title="Why Choose Us"
          content="We offer premium quality products, excellent customer service, wide compatibility with various car models, and competitive pricing to give you the best value for your investment."
        />
      </div>

      {/* What We Offer Section */}
      <div className="space-y-8">
        <h3 className="text-3xl font-semibold text-center text-gray-900">What We Offer</h3>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Our diverse product range is designed to enhance every aspect of your driving experience. Each product is crafted with precision and innovation, ensuring quality and performance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <InfoCard title="Head Unit's" content="Advanced infotainment systems with seamless integration." />
          <InfoCard title="Steering Wheel's" content="Ergonomic designs with modern functionality." />
          <InfoCard title="Car Batterie's" content="Long-lasting and efficient power solutions." />
          <InfoCard title="CarPlay Interface's" content="Smart connectivity for a seamless driving experience." />
          <InfoCard title="Audio Equipment's" content="High-performance sound systems for crystal-clear audio." />
          <InfoCard title="Frames & Fascia's" content="Custom-fit solutions for a variety of car models." />
          <InfoCard title="Wiring Harnesses" content="Durable, reliable, and secure electrical components." />
          <InfoCard title="Accessorie's" content="Premium automotive enhancements for added convenience and style." />
        </div>
      </div>

      {/* Visit Us Section */}
      <div className="text-center space-y-6">
        <h3 className="text-3xl font-semibold text-gray-900">Visit Us</h3>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Visit our workshop at <strong>Unit 3, 151 Dohertys Rd, Laverton North, VIC 3026, Australia</strong>, open <strong>Monday to Sunday, 9:00 AM - 6:00 PM</strong>.
        </p>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Prefer to shop online? Explore our complete product range at{" "}
          <a
            href="https://kayhanaudio.com.au"
            className="text-blue-600 underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
           www.Kayhanaudio.com.au
          </a>
          , available 24/7. Our online support team is ready to assist you daily from <strong>9:00 AM to 6:00 PM</strong>.
        </p>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          At Kayhan Audio, we are committed to delivering the ultimate driving experience through cutting-edge technology and superior craftsmanship. Upgrade your ride with us today!
        </p>
      </div>
    </section>
  );
};

export default About;

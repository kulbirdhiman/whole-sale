"use client";
import { useState } from "react";

interface Tab {
  name: string;
  key: string;
  bg: string;
  content: React.ReactNode;
}

export default function Tabs() {
  const tabs: Tab[] = [
    {
      name: "Kayhan Stream",
      key: "kayhan-stream",
      bg: "/carplyyy.png",
      content: (
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-6">
            Kayhan Stream
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-center text-white mb-4">
            The Kayhan Stream offers cutting-edge streaming technology for your
            car audio system. With seamless connectivity, it allows you to enjoy
            high-quality music and media from your smartphone or tablet, directly
            through your car's audio system.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-center text-white">
            Experience crystal-clear sound with the latest Bluetooth and Wi-Fi
            capabilities, making your drive more enjoyable than ever.
          </p>
        </div>
      ),
    },
    {
      name: "Kayhan Wheen",
      key: "kayhan-wheen",
      bg: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1920&q=80",
      content: (
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-6">
            Kayhan Wheen
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-center text-white mb-4">
            The Kayhan Wheen is designed for ultimate audio performance. Equipped
            with advanced features like noise cancellation and high-fidelity
            sound, it ensures you get the best music experience, even in noisy
            environments.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-center text-white">
            Perfect for audiophiles, the Kayhan Wheen is the ideal choice for those
            who demand clear, powerful sound.
          </p>
        </div>
      ),
    },
    {
      name: "Kayhan Headunit",
      key: "kayhan-headunit",
      bg: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?w=1920&q=80",
      content: (
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-6">
            Kayhan Headunit
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-center text-white mb-4">
            The Kayhan Headunit is the heart of your car's audio system. This
            device integrates all your media sources, including FM, Bluetooth, USB,
            and more, into one seamless interface for easy control and access.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-center text-white">
            With a sleek design and a high-resolution touchscreen, the Kayhan
            Headunit brings a modern, user-friendly experience to your car.
          </p>
        </div>
      ),
    },
    {
      name: "Kayhan Audio Subwoofer",
      key: "kayhan-subwoofer",
      bg: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1920&q=80",
      content: (
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-6">
            Kayhan Audio Subwoofer
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-center text-white mb-4">
            The Kayhan Audio Subwoofer delivers deep, powerful bass that brings
            your music to life. Perfect for those who crave thumping bass and
            incredible sound clarity, it adds the low-end punch that makes your
            audio experience unforgettable.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-center text-white">
            Built to last with high-quality materials, the Kayhan Subwoofer is the
            ultimate upgrade for your car's audio system.
          </p>
        </div>
      ),
    },
    {
      name: "Kayhan Amplifier",
      key: "kayhan-amplifier",
      bg: "/headunit.jpg",
      content: (
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-6">
            Kayhan Amplifier
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-center text-white mb-4">
            The Kayhan Amplifier ensures that every note and beat is heard clearly,
            even at high volumes. Designed to power your entire audio system, this
            amplifier provides unmatched sound clarity, even in the most demanding
            environments.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-center text-white">
            Whether you're driving through city traffic or cruising on the highway,
            the Kayhan Amplifier enhances your car's audio system for a premium sound
            experience.
          </p>
        </div>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].key);
  const activeTabData = tabs.find((tab) => tab.key === activeTab);

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      {activeTabData && (
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center transition-opacity duration-500"
          style={{ backgroundImage: `url(${activeTabData.bg})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div> {/* Dark overlay */}
        </div>
      )}

      {/* Tab Navigation */}
      <div className="flex flex-col items-center relative z-10 p-6">
        <div
          className="flex mx-auto justify-start w-full overflow-x-auto space-x-6 px-4 border-b border-gray-300 mb-6"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            minWidth: "100%",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`py-3 px-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap ${
                activeTab === tab.key
                  ? "border-b-4 border-blue-500 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="w-full max-w-2xl p-8 bg-white/20 rounded-lg shadow-lg text-center text-white text-base md:text-lg">
          {activeTabData?.content}
        </div>
      </div>
    </div>
  );
}

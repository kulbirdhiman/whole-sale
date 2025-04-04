import Accesories from "@/components/home/Accesories";
import WhatsHotSection from "@/components/home/WhatsHotSection";
import AudioEqupments from "@/components/home/AudioEqupments";
import SteeringWheelSection from "@/components/home/StreeringWheel";
import Recomended from "@/components/home/Recomended";
import VehicleSelector from "@/components/home/VehicalSelector";
import WeekHighlightsSection from "@/components/home/WeekHighlightsSection";
import ContactSupport from "@/components/home/ContactSupport";
import CustomSlider from "@/components/test/TestSlider";
import SliderComponentImages from "@/components/home/SliderComponentImage";
import MainSlider from "../components/home/MainSlider";
import TestSection from "@/components/test/TestSection";

export default function Home() {
  const products = {
    main: {
      image: "/carplyyy.png",
      name: "Fascia for FORD Ranger",
      short_description: "interest-free payments of $18.75",
    },
    sub_products_one: [
      {
        image: "/boofer.jpg",
        name: "Universal 2DIN Car Stereo with Android Auto ",
        short_description: "interest-free payments of $18.75",
      },
      {
        image: "/k_play.jpg",
        name: "Universal 2DIN Car Stereo with Android Auto",
        short_description: "interest-free payments of $18.75",
      },
    ],
    sub_products_twe: [
      {
        image: "/headunit.jpg",
        name: "Universal 2DIN Car Stereo with Android Auto",
        short_description: "interest-free payments of $18.75",
      },
      {
        image: "/carplyyy.png",
        name: "Universal 2DIN Car Stereo with Android Auto",
        short_description: "interest-free payments of $18.75",
      },
    ],
  };

  // const productse = {
  //   main: {
  //     image: "/carplyyy.png",
  //     name: "Fascia for FORD Ranger",
  //     short_description: "interest-free payments of $18.75",
  //   },
  //   sub_products_twe: [
  //     {
  //       image: "/boofer.jpg",
  //       name: "Universal 2DIN Car Stereo with Android Auto ",
  //       short_description: "interest-free payments of $18.75",
  //     },
  //     {
  //       image: "/k_play.jpg",
  //       name: "Universal 2DIN Car Stereo with Android Auto",
  //       short_description: "interest-free payments of $18.75",
  //     },
  //   ],
  //   sub_products_one: [
  //     {
  //       image: "/headunit.jpg",
  //       name: "Universal 2DIN Car Stereo with Android Auto",
  //       short_description: "interest-free payments of $18.75",
  //     },
  //     {
  //       image: "/carplyyy.png",
  //       name: "Universal 2DIN Car Stereo with Android Auto",
  //       short_description: "interest-free payments of $18.75",
  //     },
  //   ],
  // };

  return (
    <div className="w-11/12 mx-auto" >
      {/* <SliderComponentVedeo /> */}
      {/* <CustomSlider /> */}
      {/* <SliderComponentImages /> */}
      <MainSlider />
      <div className="relative w-full    mt-10">
        {/* <TabComponent tabs={tabData} /> */}
        <WeekHighlightsSection />
      </div>
      <div>
        <VehicleSelector />
      </div>
      <div className="relative w-full    mt-10">
        <AudioEqupments />
      </div>
      <div>
        {/* <WhatsHotSection /> */}
      </div>
      <div>
        <Recomended />
      </div>
      <div>
        <SteeringWheelSection />
        {/* <SteeringWheelSkeleton /> */}
      </div>
      <TestSection />
      <div className="flex flex-col gap-2">
        <Accesories />
      </div>
      <div>
        <ContactSupport />
      </div>
    </div> 
  );
}

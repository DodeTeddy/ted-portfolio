import { motion } from "framer-motion";
import { SectionEnum } from "../../enum";
import mobileApp from "../../assets/mobile-app.png";
import webApp from "../../assets/web-app.png";

type ServiceScreenProps = {
  setSelectedSection: (section: SectionEnum) => void;
};
export const ServiceScreen = ({ setSelectedSection }: ServiceScreenProps) => {
  return (
    <section id={SectionEnum.SERVICE} className="lg:pt-32 pt-24 px-16">
      <motion.div
        onViewportEnter={() => setSelectedSection(SectionEnum.SERVICE)}
      >
        <h1 className="font-pirataone text-6xl underline text-center">
          Service
        </h1>
        <div className="flex lg:flex-row flex-col items-center gap-5 lg:mb-0 md:mb-32 mb-16 mt-16 lg:mt-0">
          <div className="lg:w-[300px] md:w-[400px] w-[250px]">
            <img src={mobileApp} alt="mobile-app" />
          </div>
          <h1 className="lg:text-4xl md:text-4xl text-2xl font-bold">
            Mobile App Development
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col justify-end items-center gap-5">
          <h1 className="lg:text-4xl md:text-4xl text-2xl font-bold lg:order-1 order-2">
            Mobile App Development
          </h1>
          <div className="lg:w-[300px] md:w-[400px] w-[250px] lg:order-2 order-1">
            <img src={webApp} alt="mobile-app" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

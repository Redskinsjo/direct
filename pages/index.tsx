import type { NextPage } from "next";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import FormBeta from "@/components/form-beta";
import Language from "@/components/language";

const Home: NextPage = () => {
  const [discover, setDiscover] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <div className="relative" id="homepage">
      <div className="absolute mx-16 my-2">
        <span className="absolute text-white font-parisienne text-4xl z-20 top-4 left-2 slidein-30">
          Direct
        </span>
        <Image
          src={Logo}
          width={180}
          height={90}
          layout="raw"
          alt="Logo official"
          className="slidein-200 relative top-2 z-10 bottom-8"
        />
      </div>

      <iframe
        src="https://iframe.videodelivery.net/b7ca63b8f05e81406d34be8b8016924b?autoplay=true&muted=true&loop=true&controls=false&preload=auto"
        className={`w-full h-full bg-transparent absolute`}
        allowFullScreen={true}
        allowTransparency={true}
      ></iframe>

      <div className="w-58 h-16 absolute top-32 left-44">
        <div className="text-[#fff] text-3xl slidein-30">{t("hero-p")}</div>
        <div className="text-lg text-[#eee] slidein-30">
          {t("hero-details")}
          <span className="mx-1">-</span>
          <span className="text-[gold]">Bêta</span>
        </div>
        <button
          onClick={() => {
            setDiscover(true);
          }}
          className="mt-2 ml-8 p-2 rounded-lg button-gold hover:bg-[#FFD700dc] text-xl slidein-200"
        >
          {t("hero-action")}
        </button>
      </div>
      {discover && <FormBeta />}
      <Language />
    </div>
  );
};

export default Home;

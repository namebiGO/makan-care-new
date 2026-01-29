import React from "react";
import { COMMON_CONSTANTS } from "../../constants/common/commonConstants";
import { useTranslation } from "react-i18next";

const BannerContent = ({ title, price }) => {
    const { t } = useTranslation();

    return (
        <div className="absolute inset-0 bg-black/30 text-white flex justify-center p-8">
            <div className="w-full md:w-6/12 px-2 hidden md:block"></div>
            <div className="w-full md:w-6/12 px-2 my-auto">
                <p className="mb-5">{t('Big Saving Days Sale')}</p>
                <h2 className="text-3xl md:text-5xl font-medium mb-5">
                    {t(title)}
                </h2>
                <p className="mb-5">
                    {t('Starting At Only')}{" "}
                    <strong>
                        {COMMON_CONSTANTS.currency} {price.toFixed(2)}
                    </strong>
                </p>
                <button className="bg-[#6b4f36] text-white border-none px-4 py-2 rounded-md cursor-pointer uppercase">
                    {t('Book Now')}
                </button>
            </div>
        </div>
    );
};

export default BannerContent;

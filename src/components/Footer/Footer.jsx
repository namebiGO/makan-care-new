import React from "react";
import "./Footer.css";
import chat_img from "../../assets/chatbot.png";
import Subscribe from "../subscribebox/Subscribe";
import Footbase from "../footersection/Footbase";
import { Link } from "react-router-dom";
import { APPROUTES } from "../../constants/routes/appRoutes";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div>
            <footer className="footer">
                <div className="footer-container">
                    {/* Column 1 */}
                    <div className="footer-column">
                        <h3>{t('Contact Us')}</h3>
                        <p>
                            {t('Classyshop - Mega Super Store')}
                            <br />
                            {t('507-Union Trade Centre')}
                            <br />
                            {t('Riyadh')}
                        </p>
                        <p className="footer-mail">
                            <a href="mailto:support@makancare.com">
                                support@makancare.com
                            </a>
                        </p>
                        <p className="footer-phone">
                            <a href="tel:(+966) 9876-543-210">
                                (+966) 9876-543-210
                            </a>
                        </p>
                        <div className="footer-chatbot">
                            <img src={chat_img} alt="" srcset="" />
                            <p>
                                {t('Online Chat')}
                                <br />
                                {t('Get Expert Help')}
                            </p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="footer-column">
                        <h3>{t('Quick Links')}</h3>
                        <p>
                            <Link to={APPROUTES.CONTACT}>{t('Contact Us')}</Link>
                        </p>
                        <p>
                            <Link to={APPROUTES.SERVICES}>{t('Services')}</Link>
                        </p>
                        <p>
                            <Link to={APPROUTES.ABOUT}>{t('About Us')}</Link>
                        </p>
                        <p>{t('Best Services')}</p>
                        {/* <p>Shipping & Delivery</p> */}
                        {/* <p>Returns & Exchanges</p> */}
                    </div>

                    {/* Column 3 */}
                    <div className="footer-column">
                        <h3>{t('Our Company')}</h3>
                        <p>{t('Log in')}</p>
                        <p>{t('Privacy Policy')}</p>
                        <p>{t('Terms & Conditions')}</p>
                        {/* <p>Contact Us</p> */}
                        {/* <p>Shipping & Delivery</p> */}
                        <p>{t('Refund Policy')}</p>
                    </div>

                    {/* Column 4 */}
                    <div className="footer-column">
                        <>
                            <Subscribe />
                        </>
                    </div>
                </div>
            </footer>
            <>
                <Footbase />
            </>
        </div>
    );
};

export default Footer;

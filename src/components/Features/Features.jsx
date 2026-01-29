import { motion } from "framer-motion";
import TRUCK_IMG from "../../assets/truck.png";
import { COMMON_CONSTANTS } from "../../constants/common/commonConstants";
import { slideUp, staggerContainer, fadeIn } from "../../utils/animations";
import { useTranslation } from "react-i18next";

const Features = () => {
    const { t } = useTranslation();

    return (
        <>
            <motion.div
                className="w-full py-2 border-2 border-red-400"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
            >
                <div className="max-w-7xl mx-auto p-4">
                    <motion.div
                        className="flex flex-wrap items-center -mx-2"
                        variants={staggerContainer}
                    >
                        <motion.div
                            className="w-full sm:w-4/12 lg:w-4/12 p-2"
                            variants={slideUp}
                        >
                            <div className="flex items-center">
                                <motion.img
                                    className="mr-5"
                                    src={TRUCK_IMG}
                                    alt=""
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <h2 className="text-2xl font-bold">
                                    {t('FAST SERVICE')}
                                </h2>
                            </div>
                        </motion.div>
                        <motion.div
                            className="w-full sm:w-4/12 lg:w-4/12 p-2"
                            variants={slideUp}
                        >
                            <p>
                                {t('Free Delivery Now On Your First Order and over')}
                                {COMMON_CONSTANTS.currency} 200
                            </p>
                        </motion.div>
                        <motion.div
                            className="w-full sm:w-4/12 lg:w-4/12 p-2"
                            variants={slideUp}
                        >
                            <h2 className="text-2xl font-bold">
                                {t('STARTING FROM Only')} {COMMON_CONSTANTS.currency}{" "}
                                200*
                            </h2>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};

export default Features;

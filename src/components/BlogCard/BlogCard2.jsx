import React from "react";
import { motion } from "framer-motion";
import { scaleIn, buttonHover } from "../../utils/animations";

const BlogCard2 = ({ image, date, title, description }) => {
    return (
        <motion.div
            className="rounded-lg overflow-hidden p-4 border border-gray-200 shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleIn}
            whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 }
            }}
        >
            <motion.div
                className="overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                <img src={image} alt="Blog" className="w-full h-48 object-cover" />
            </motion.div>
            <div className="flex flex-col h-full py-5">
                <p className="text-xs text-red-500 flex items-center">
                    <span className="mr-2">
                        <i className="fa-regular fa-clock"></i>
                    </span>
                    {date}
                </p>
                <h3 className="font-semibold mt-2">{title}</h3>
                <p className="text-gray-600 text-sm mt-2">{description}</p>
                <div className="flex-1 mt-auto">
                    <motion.a
                        href="#"
                        className="bg-[#6b4f36] text-white text-sm px-8 py-2 rounded-lg font-medium mt-3 inline-block"
                        variants={buttonHover}
                        initial="rest"
                        whileHover="hover"
                        whileTap="tap"
                    >
                        READ MORE
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

export default BlogCard2;

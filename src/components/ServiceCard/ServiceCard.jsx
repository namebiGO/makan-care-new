import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import useCart from "../../hooks/useCart";
import { COMMON_CONSTANTS } from "../../constants/common/commonConstants";
import useWishlist from "../../hooks/useWishlist";
import { slideUp, buttonHover } from "../../utils/animations";

const ServiceCard = ({ service }) => {
    const {
        id,
        title,
        description,
        rating,
        reviews,
        price,
        duration,
        services: servicesList,
    } = service;

    const { handleAddToCart } = useCart();
    const { handleAddToWishlist } = useWishlist();

    return (
        <motion.div
            className="p-4 py-10 w-full border-b-1 border-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideUp}
            whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
            }}
        >
            <div className="flex justify-between items-start">
                <div>
                    {/* Header */}
                    <h2 className="text-lg font-bold mt-1">{title}</h2>

                    {/* Rating and Reviews */}
                    <div className="flex items-center text-gray-600 text-sm mt-1">
                        <span className="text-[#6b4f36] text-lg">★</span>
                        <span className="ml-1 font-semibold">{rating}</span>
                        <span className="ml-1">({reviews} reviews)</span>
                    </div>

                    {/* Price and Duration */}
                    <p className="text-gray-900 font-bold mt-2">
                        {COMMON_CONSTANTS.currency} {price.toFixed(2)} •{" "}
                        {duration}
                    </p>
                </div>

                <div className="flex gap-4">
                    <motion.button
                        className="border border-[#6b4f36] text-[#6b4f36] hover:bg-[#6b4f36] hover:text-white px-4 py-2 rounded-md cursor-pointer transition-colors duration-300"
                        onClick={() => handleAddToWishlist(service)}
                        variants={buttonHover}
                        initial="rest"
                        whileHover="hover"
                        whileTap="tap"
                    >
                        Add to Wishlist
                    </motion.button>
                    <motion.button
                        className="border border-[#6b4f36] text-[#6b4f36] hover:bg-[#6b4f36] hover:text-white px-4 py-2 rounded-md cursor-pointer transition-colors duration-300"
                        onClick={() => handleAddToCart(service)}
                        variants={buttonHover}
                        initial="rest"
                        whileHover="hover"
                        whileTap="tap"
                    >
                        Add
                    </motion.button>
                </div>
            </div>
            <hr className="my-4 w-40 text-gray-200" />

            {/* Description */}
            <p className="text-gray-700 text-sm">{description}</p>
        </motion.div>
    );
};

export default ServiceCard;

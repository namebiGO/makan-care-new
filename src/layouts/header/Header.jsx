import { useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

import LOGO from "../../assets/logo.png";
import CART_ICON from "../../assets/cart.png";
import HEART_ICON from "../../assets/heart.png";
import Dropdown from "../../components/dropdown/Dropdown";

import ROCKET_IMG from "../../assets/inter-logo.png";
import HAMBURGER_IMG from "../../assets/Hamburger.png";
import { useSelector } from "react-redux";

import { categories } from "../../mocks/categories";
import { languageItems } from "../../mocks/languages";
import { currencyItems } from "../../mocks/currency";
import { useCategoryNavigation } from "../../hooks/useCategoryNavigation";
import { APPROUTES } from "../../constants/routes/appRoutes";

const Header = () => {
    const cartData = useSelector((state) => state.cart);
    const wishlistData = useSelector((state) => state.wishlist);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const handleSelect = useCategoryNavigation();

    return (
        <>
            <div className="w-full hidden sm:block">
                <div className="max-w-7xl mx-auto p-4">
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full px-2">
                            <ul className="list-none flex flex-nowrap justify-end items-center">
                                <li className="mx-2">
                                    <Link to={APPROUTES.HELP_CENTER}>
                                        Help Center
                                    </Link>
                                </li>
                                <li className="mx-2">
                                    <Link to={"/tracking"}>
                                        Order Tracking
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full hidden sm:block border-y-1 border-gray-200 relative">
                <div className="max-w-7xl mx-auto p-4">
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full sm:w-2/12 px-2">
                            <Link to={APPROUTES.HOME}>
                                <img
                                    className="absolute size-30 -top-12"
                                    src={LOGO}
                                    alt="Makan Care Logo"
                                />
                            </Link>
                        </div>
                        <div className="w-full sm:w-6/12 px-2">
                            <div className="flex">
                                <input
                                    className="flex-1 p-2 outline-none border border-[#ccc] rounded-md"
                                    type="text"
                                    placeholder="Search products here..."
                                />
                                <button className="bg-[#6b4f36] text-white border-none px-4 py-2 ml-2 rounded-md cursor-pointer">
                                    SEARCH
                                </button>
                            </div>
                        </div>
                        <div className="w-full sm:w-4/12 px-2 my-auto">
                            <div className="flex justify-end items-center gap-4">
                                <SignedOut>
                                    <div className="pr-4 mr-4 border-r-1 border-gray-300">
                                        <Link
                                            to={APPROUTES.LOGIN}
                                            className="hover:bg-gray-100 p-2"
                                        >
                                            Login
                                        </Link>{" "}
                                        /{" "}
                                        <Link
                                            to={APPROUTES.SIGNUP}
                                            className="hover:bg-gray-100 p-2"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </SignedOut>
                                <SignedIn>
                                    <Link to={APPROUTES.WISHLIST}>
                                        <div className="relative">
                                            <span className="flex justify-center items-center text-xs text-center bg-red-400 text-white rounded-full w-5 h-5 p-2 absolute -right-1 -top-2">
                                                {wishlistData.totalQuantity}
                                            </span>
                                            <img
                                                className="w-6 mr-2"
                                                src={HEART_ICON}
                                                alt="Wishlist"
                                            />
                                        </div>
                                    </Link>
                                    <Link to={APPROUTES.CART}>
                                        <div className="relative">
                                            <span className="flex justify-center items-center text-xs text-center bg-red-400 text-white rounded-full w-5 h-5 p-2 absolute -right-1 -top-2">
                                                {cartData.totalQuantity}
                                            </span>
                                            <img
                                                className="w-6 mx-2"
                                                src={CART_ICON}
                                                alt="Wishlist"
                                            />
                                        </div>
                                    </Link>
                                    <UserButton afterSignOutUrl={APPROUTES.HOME} />
                                </SignedIn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shadow-2xl">
                <nav class="">
                    <div class="mx-auto max-w-7xl px-4">
                        <div class="relative flex h-16 items-center justify-between">
                            {/* <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <button
                                    type="button"
                                    class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    <span class="absolute -inset-0.5"></span>
                                    <span class="sr-only">Open main menu</span>

                                    <svg
                                        class="block size-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        data-slot="icon"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                        />
                                    </svg>

                                    <svg
                                        class="hidden size-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        data-slot="icon"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6 18 18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div> */}
                            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div class="flex shrink-0 items-center">
                                    <Dropdown
                                        options={categories}
                                        showSelectedLabel={false}
                                        selected={selectedCategory}
                                        onSelect={(category) => {
                                            setSelectedCategory(category);
                                            handleSelect(category);
                                        }}
                                        label="SHOP BY CATEGORIES"
                                        icon={<img src={HAMBURGER_IMG} />}
                                        buttonOverrideClasses="border-0"
                                    />
                                </div>
                                <div class="hidden pl-20 sm:ml-6 sm:block border-l-1 border-gray-300">
                                    <div class="flex space-x-4">
                                        <Link
                                            className="px-3 py-2 text-sm font-medium hover:bg-gray-100"
                                            to={APPROUTES.HOME}
                                        >
                                            Home
                                        </Link>
                                        <Link
                                            className="px-3 py-2 text-sm font-medium hover:bg-gray-100"
                                            to={APPROUTES.SERVICES}
                                        >
                                            Services
                                        </Link>
                                        <Link
                                            className="px-3 py-2 text-sm font-medium hover:bg-gray-100"
                                            to={APPROUTES.ABOUT}
                                        >
                                            About
                                        </Link>
                                        <Link
                                            className="px-3 py-2 text-sm font-medium hover:bg-gray-100"
                                            to={APPROUTES.CONTACT}
                                        >
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="hidden lg:flex items-center">
                                    <img
                                        className="w-6"
                                        src={ROCKET_IMG}
                                        alt="free international delivery"
                                    />
                                    <span className="ml-2">
                                        Free International Delivery
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="sm:hidden" id="mobile-menu">
                        <div class="space-y-1 px-2 pt-2 pb-3">
                            <Link
                                className="px-3 py-2 text-sm font-medium"
                                to={APPROUTES.HOME}
                            >
                                Home
                            </Link>
                            <Link
                                className="px-3 py-2 text-sm font-medium"
                                to={APPROUTES.SERVICES}
                            >
                                Services
                            </Link>
                            <Link
                                className="px-3 py-2 text-sm font-medium hover:bg-gray-100"
                                to={APPROUTES.ABOUT}
                            >
                                About
                            </Link>
                            <Link
                                className="px-3 py-2 text-sm font-medium hover:bg-gray-100"
                                to={APPROUTES.CONTACT}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;

import { motion } from "framer-motion";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { Link } from "react-router-dom";
import BlogCard from "../../components/BlogCard/BlogCard";
import { pageTransition } from "../../utils/animations";

import TEAM_IMG_1 from "../../assets/about_1.jpg";
import TEAM_IMG_2 from "../../assets/about_2.jpg";

import GOOGLE_LOGO from "../../assets/google_logo.png";
import UBER_LOGO from "../../assets/uber_logo.png";
import INCIDENT_LOGO from "../../assets/incident_logo.png";
import RASPBERRY_PI_FOUNDATION_LOGO from "../../assets/raspberry_pi_foundation_logo.png";
import DUFFEL_LOGO from "../../assets/duffel_logo.png";
import TRADESHIFT_LOGO from "../../assets/tradeshift_logo.png";
import RELESYS_LOGO from "../../assets/relesys_logo.png";
import PLAYABLE_LOGO from "../../assets/playable_logo.png";

import TEAM_MEMBER_1_IMG from "../../assets/team_1.png";
import TEAM_MEMBER_2_IMG from "../../assets/team_2.png";
import TEAM_MEMBER_3_IMG from "../../assets/team_3.png";
import TEAM_MEMBER_4_IMG from "../../assets/team_4.png";
import TEAM_MEMBER_5_IMG from "../../assets/team_5.png";
import TEAM_MEMBER_6_IMG from "../../assets/team_6.png";
import TEAM_MEMBER_7_IMG from "../../assets/team_7.png";
import TEAM_MEMBER_8_IMG from "../../assets/team_8.png";

import BLOG_1_IMG from "../../assets/blog_1.png";
import BLOG_2_IMG from "../../assets/blog_2.png";
import BLOG_3_IMG from "../../assets/blog_3.png";
import { COMMON_CONSTANTS } from "../../constants/common/commonConstants";
import { blogData } from "../../mocks/blogs";
import BlogCard2 from "../../components/BlogCard/BlogCard2";

const teamMembers = [
    {
        image: TEAM_MEMBER_1_IMG,
        name: "Christian Leth-Espensen",
        role: "Engineering",
    },
    {
        image: TEAM_MEMBER_2_IMG,
        name: "Nicky Christensen",
        role: "Engineering",
    },
    {
        image: TEAM_MEMBER_3_IMG,
        name: "Benjamin Nørgaard",
        role: "Engineering",
    },
    {
        image: TEAM_MEMBER_4_IMG,
        name: "Thor Christensen",
        role: "Co-Founder",
    },
    {
        image: TEAM_MEMBER_5_IMG,
        name: "Jack Theobald",
        role: "Design",
    },
    {
        image: TEAM_MEMBER_6_IMG,
        name: "Niklas Refnov",
        role: "Growth",
    },
    {
        image: TEAM_MEMBER_7_IMG,
        name: "Anders Johnsen",
        role: "Co-Founder",
    },
    {
        image: TEAM_MEMBER_8_IMG,
        name: "Matias Frank",
        role: "Engineering",
    },
];

const blogs = [
    {
        image: BLOG_1_IMG,
        title: "Harnessing the power of GitOps with Rig",
        description: "Harnessing the power of GitOps with Rig",
        category: "Kubernetes",
        author: "Benjamin Nørgaard",
    },
    {
        image: BLOG_2_IMG,
        title: "The Risks and Rewards of Adopting Kubernetes",
        description: "The Risks and Rewards of Adopting Kubernetes",
        category: "Kubernetes",
        author: "Niklas Refnov",
    },
    {
        image: BLOG_3_IMG,
        title: "Introducing Rig.dev: The application platform for Kubernetes",
        description:
            "Introducing Rig.dev: The application platform for Kubernetes",
        category: "Company",
        author: "Rig.dev",
    },
];

const About = () => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
        >
            <div className="w-full py-5 pt-14 bg-gray-100">
                <div className="max-w-7xl 3xl:max-w-5xl mx-auto p-4">
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full sm:w-6/12">
                            <h2 className="text-[#0093FF] uppercase text-secondary mb-4">
                                About Us
                            </h2>
                            <h1 className="text-3xl font-light">
                                Providing developer-friendly Kubernetes
                                abstraction to unleash developer productivity
                            </h1>
                        </div>
                        <div className="w-full sm:w-6/12">
                            Rig dev offers an application platform for
                            Kubernetes. We empower developers with our
                            developer-friendly deployment engine that simplifies
                            the process of rolling out, managing,
                            troubleshooting, and scaling applications, on
                            Kubernetes. The platform provides elevated
                            Kubernetes-abstractions, cloud-native integrations,
                            and powerful tooling that unlocks true developer
                            experience and -productivity.
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full py-4 sm:py-10 bg-gray-100">
                <div className="max-w-7xl 3xl:max-w-5xl mx-auto p-4">
                    <div className="flex flex-wrap justify-end -mx-2">
                        <div className="w-full sm:w-8/12">
                            <img className="mb-4" src={TEAM_IMG_1} alt="" />
                            <p className="text-center sm:text-end">
                                On a mission to remove the complexity of
                                application development on Kubernetes
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="w-full py-4 sm:py-10 bg-gray-100">
                <div className="max-w-7xl 3xl:max-w-5xl mx-auto p-4">
                    <div className="flex flex-wrap justify-between items-center -mx-2">
                        <div className="w-full sm:w-5/12 gap-5">
                            <p className="text-center sm:text-start">
                                We come from a wide range of global technology
                                leaders and fast-paced startups.
                            </p>
                        </div>
                        <div className="w-full sm:w-6/12">
                            <div className="grid grid-cols-4 gap-4 justify-items-center">
                                <img src={GOOGLE_LOGO} alt="google logo" />
                                <img src={UBER_LOGO} alt="uber logo" />
                                <img src={INCIDENT_LOGO} alt="incident logo" />
                                <img
                                    src={RASPBERRY_PI_FOUNDATION_LOGO}
                                    alt="raspberry pi foundation logo"
                                />
                                <img src={DUFFEL_LOGO} alt="duffel logo" />
                                <img
                                    src={TRADESHIFT_LOGO}
                                    alt="tradeshift logo"
                                />
                                <img src={RELESYS_LOGO} alt="relesys logo" />
                                <img src={PLAYABLE_LOGO} alt="playable logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="w-full py-4 sm:py-10 bg-gray-100">
                <div className="max-w-7xl 3xl:max-w-5xl mx-auto p-4">
                    <div className="flex flex-wrap justify-between items-center -mx-2">
                        <div className="w-full sm:w-7/12 gap-5">
                            <h2 className="text-3xl font-normal mb-8">
                                Why we started Makan Care
                            </h2>
                            <p className="mb-4">
                                We have experienced the immense power of
                                platforms like Kubernetes in streamlining
                                infrastructure management. However, through
                                first-hand experience, we have seen how such
                                technologies often suffer from being
                                misunderstood and underutilized.
                            </p>

                            <p className="mb-4">
                                Additionally, too many developers are wasting
                                valuable time reinventing generic and repetitive
                                features and infrastructure environments - we've
                                been there ourselves.
                            </p>
                            <p className="mb-4">
                                We founded Rig.dev to rethink the developer
                                platform landscape by eliminating the
                                complexities associated with building,
                                deploying, and managing applications on
                                Kubernetes at scale.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="rounded-lg border border-gray-200 bg-white text-center p-5">
                                    <div className="text-3xl font-normal mb-2">
                                        2023
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Launched
                                    </div>
                                </div>
                                <div className="rounded-lg border border-gray-200 bg-white text-center p-5">
                                    <div className="text-3xl font-normal mb-2">
                                        {COMMON_CONSTANTS.currency} 2.2M
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Pre-Seed Round
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-4/12">
                            <img src={TEAM_IMG_2} alt="Team image 2" />
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="w-full py-4 sm:py-10 bg-gray-100">
                <div className="max-w-7xl 3xl:max-w-5xl mx-auto p-4">
                    <div className="flex flex-wrap justify-between items-center -mx-2">
                        <div className="w-full gap-5">
                            <h2 className="text-3xl font-normal text-center mb-8">
                                Why we started Makan Care
                            </h2>
                        </div>
                        <div className="w-full">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8 justify-center">
                                {teamMembers.map((member, index) => (
                                    <ProfileCard key={index} {...member} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="w-full py-4 sm:py-10">
                <div className="max-w-7xl 3xl:max-w-5xl mx-auto p-4">
                    <div className="flex flex-wrap justify-between items-center -mx-2">
                        <div className="w-full flex items-start">
                            <h2 className="text-3xl font-normal mb-8 mr-5">
                                Keep up to date
                            </h2>
                            <Link
                                to="/blog"
                                className="border border-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                            >
                                Visit the Blog
                            </Link>
                        </div>
                        <div className="w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
                                {blogData.map((blog, index) => (
                                    <BlogCard2 key={index} {...blog} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;

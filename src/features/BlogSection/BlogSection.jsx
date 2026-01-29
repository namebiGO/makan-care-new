import React from "react";
import BlogCard2 from "../../components/BlogCard/BlogCard2";

const BlogSection = () => {
    // Using static blog data since there's no blog API endpoint
    const blogs = [
        {
            _id: "1",
            image: "/assets/b1.png",
            date: "Feb 12, 2025",
            title: "The Ultimate Home Maintenance Checklist.",
            description: "A complete guide to essential home maintenance tasks for a safe, efficient, and well-kept home....",
        },
        {
            _id: "2",
            image: "/assets/b2.png",
            date: "Feb 11, 2025",
            title: "5 Common Plumbing Problems and How to Fix Them",
            description: "Learn to identify and fix common plumbing issues to prevent leaks, clogs, and costly repairs easily....",
        },
        {
            _id: "3",
            image: "/assets/b3.png",
            date: "Feb 10, 2025",
            title: "Signs Your Home Needs a Plumbing Check-up",
            description: "Watch for leaks, low water pressure, and strange noises—these signs mean your plumbing needs inspection....",
        },
        {
            _id: "4",
            image: "/assets/b4.png",
            date: "Feb 9, 2025",
            title: "How to Identify and Fix Common Electrical Issues",
            description: "Learn to spot faulty wiring, flickering lights, and tripped breakers, and fix them safely....",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto p-4 py-20">
            <h2 className="text-2xl font-bold mb-12">Our Latest Blogs</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {blogs.map((blog) => (
                    <BlogCard2 key={blog._id} {...blog} />
                ))}
            </div>
        </div>
    );
};

export default BlogSection;

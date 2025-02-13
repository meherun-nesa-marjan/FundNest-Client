import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);

  
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('https://assignment-10-silk.vercel.app/blogs'); 
                const data = await response.json();
                setBlogs(data); 
            } catch (error) {
                console.error('Error fetching blog data:', error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className="py-10 lg:w-11/12 mx-auto">
            <div className="lg:w-11/12 mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-[#754738]">Latest Blogs</h2>
                <p className="text-lg text-gray-600">Stay updated with the latest tips, stories, and insights from the world of fundraising.<Link to={'/Blogs'}>more Blogs</Link></p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {blogs.map(blog => (
                    <div key={blog._id} className="border rounded-lg shadow-md overflow-hidden bg-white">
                        <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#754738]">{blog.title}</h3>
                            <p className="mt-2 text-gray-600">{blog.subtitle}</p>
                            <Link to={`/blogs/${blog._id}`} className="text-[#754738] font-semibold mt-4 inline-block">
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogSection;

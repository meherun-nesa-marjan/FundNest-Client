import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`https://assignment-10-silk.vercel.app/blogs/${id}`);
                const data = await response.json();
                setBlog(data);
            } catch (error) {
                console.error("Error fetching blog details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <img src={blog.image} alt={blog.title} className="mb-4 w-full h-64 object-cover" />
            <h2 className="text-xl font-semibold text-gray-600 mb-2">{blog.subtitle}</h2>
            <p>{blog.content}</p>
            <p><strong>Author{blog.author}</strong></p>
            <p>Date:<strong>{blog.date}</strong></p>
        </div>
    );
};

export default BlogDetails;

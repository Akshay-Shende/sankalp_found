"use client";
import DOMPurify from "dompurify";
import React, { useEffect, useState } from "react";
import useBlog from "@/app/blogService/blogService";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline"; // Tailwind Heroicons for icons
import useFiles from "../fileService/fileService";
import { useRouter } from "next/navigation";
import { MyContext } from "../context/myContext";
import { useContext } from "react";

const Page = () => {
  const [blog, setBlog] = useState(null);
  const { getAllBlogs, deleteBlog } = useBlog();
  const { getFilePreview } = useFiles();
  const router = useRouter();
  const { loggedIn } = useContext(MyContext);

  useEffect(() => {
    (async () => {
      const result = await getAllBlogs();
      setBlog(result.documents);
    })();
  }, []);

  const handleDelete = async (blogId) => {
    try {
      console.log('blog Id',blogId);
      
      await deleteBlog(blogId);
      setBlog(blog.filter((e) => e.$id !== blogId));
      alert("Blog deleted successfully!");
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete blog");
    }
  };

  if (!blog) return <p>Loading...</p>;
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blog &&
          blog.map((e) => {
            // Sanitize HTML content before rendering
            const sanitizedHtml = DOMPurify.sanitize(e.blogData);

            return (
              <div
                key={e.$id}
                className="bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                <img
                    src={
                      getFilePreview(e.blogImage) 
                     
                    }
                    alt={e.title}
                    className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                  />
                  {/* Hover Actions */}
                  {loggedIn &&(<div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                      onClick={() => router.push(`/update-blog/${e.$id}`)}
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button
                      className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                      onClick={() => handleDelete(e.$id)}
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>)}
                  
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    {e.title}
                  </h2>
                  <div
                    className="text-gray-700 mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
                  />
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{new Date(e.$updatedAt).toLocaleDateString()}</span>
                    <a
                      href={`/display-blog/${e.$id}`}
                      className="text-blue-500 hover:text-blue-600 transition"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Page;

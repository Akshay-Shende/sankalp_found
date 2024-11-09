"use client";
import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { useRouter, useParams } from "next/navigation";
import useBlog from "@/app/blogService/blogService";
import useFiles from '@/app/fileService/fileService'

const DisplayBlog = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const { getBlog } = useBlog();
  const { getFilePreview } = useFiles();

  useEffect(() => {
    (async () => {
      if (blogId) {
        const result = await getBlog(blogId);
        setBlog(result);
      }
    })();
  }, [blogId]);

  if (!blog) return <p>Loading...</p>;

  const sanitizedHtml = DOMPurify.sanitize(blog.blogData);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <img
        src={getFilePreview(blog.blogImage)}
        alt={blog.title}
        className="w-full h-64 object-cover mb-4 rounded-lg"
      />
      <div
        className="text-gray-800"
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
      <p className="text-sm text-gray-500 mt-4">
        Last updated on {new Date(blog.$updatedAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default DisplayBlog;

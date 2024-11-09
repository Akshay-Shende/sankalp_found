"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import useBlog from "@/app/blogService/blogService";
import useFiles from "@/app/fileService/fileService";

// Dynamically import the Editor component with no SSR
const Editor = dynamic(
  () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
  { ssr: false }
);

function Page() {
  const editorRef = useRef(null);
  const [image, setImage] = useState(null);
  const blogId = useParams();
  const { getBlog, updateBlog } = useBlog();
  const {createFile} = useFiles()
  const [blogData, setBlogData] = useState({
    title: "",
    blogData: "",
    blogImage: "",
  });

  const handleImageChange = (event) => {
    setImage(event.target.files[0]); // Update the image state with the selected file
  };

  const handleTitleChange = (event) => {
    setBlogData({ ...blogData, title: event.target.value });
  };

  useEffect(() => {
    getBlog(blogId);
    (async () => {
      const blogData = await getBlog(blogId.blogId);
      setBlogData(blogData);
    })();
  }, [blogId]);

  const handleSubmit = async () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      const imageResponse = await createFile(image);

      // Send to API
      try {
        const result = await updateBlog(blogId.blogId, {
          title: blogData.title,
          blogData: content,
          blogImage: imageResponse.$id,
        });
        alert("Blog updated successfully!");
      } catch (error) {
        console.error("Error saving blog:", error);
        alert("Failed to update blog");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-8">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Create New Blog
        </h1>

        {/* Title Input */}
        <input
          type="text"
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter blog title"
          value={blogData.title}
          onChange={handleTitleChange} // Use the new function here
        />

        {/* Image Upload Input */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Upload Image (Optional)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Editor Component */}
        <Editor
          apiKey="gi7ws7sek662rbr7tqn1jj1loe62xux4rozrqhl6j1hd7r7s"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={blogData.blogData}
          init={{
            height: 500,
            menubar: "file edit view insert format tools table help",
            plugins: [],
            toolbar: `undo redo | formatselect | fontselect fontsizeselect | bold italic underline strikethrough | 
                      forecolor backcolor | alignleft aligncenter alignright alignjustify | 
                      bullist numlist outdent indent | link image media | 
                      emoticons hr pagebreak | removeformat | code fullscreen preview`,
            font_formats:
              "Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; Times New Roman=times new roman,times;",
            fontsize_formats: "8pt 10pt 12pt 14pt 18pt 24pt 36pt",
            toolbar_sticky: true,
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />

        {/* Save Button */}
        <button
           onClick={handleSubmit}
          className="w-full mt-6 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Update Blog
        </button>
      </div>
    </div>
  );
}

export default Page;
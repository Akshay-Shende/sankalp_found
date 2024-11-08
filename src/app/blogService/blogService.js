import conf from "@/app/config";
import { databases, ID } from "@/app/appWrite";

const useBlog = () => {
  const addToBlog = async (blog) => {
    try {
      console.log("blog", blog);

      let cartResult = await databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteBlogId,
        ID.unique(),
        blog
      );
      return cartResult;
    } catch (error) {
      console.log("Appwrite service :: addToCart :: error", error);
      return false;
    }
  };

  const getBlog = async (blogId) => {
    try {
      console.log( blogId.blogId);

      const blogResult = await databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteBlogId,
        blogId
      );
      return blogResult;
    } catch (error) {
      console.log("Appwrite service :: getBlog :: error", error);
      return false;
    }
  };
  const deleteBlog = async (blogId) => {
    try {
      const blogResult = await databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteBlogId,
        blogId
      );
      return blogResult;
    } catch (error) {
      console.log("Appwrite service :: deleteBlog :: error", error);
      return false;
    }
  };
  const updateBlog = async (blogId, blog) => {
    try {
      const blogResult = await databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteBlogId,
        blogId,
        blog
      );
      return blogResult;
    } catch (error) {
      console.log("Appwrite service :: updateBlog :: error", error);
      return false;
    }
  };

  const getAllBlogs = async () => {
    try {
      const blogResult = await databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteBlogId
      );
      return blogResult;
    } catch (error) {
      console.log("Appwrite service :: getAllBlogs :: error", error);
      return false;
    }
  };

  return { addToBlog,getAllBlogs, getBlog, deleteBlog, updateBlog };
};
export default useBlog;

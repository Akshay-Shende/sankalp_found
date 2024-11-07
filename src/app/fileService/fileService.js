import conf from '@/app/config';
import { storage, ID } from '@/app/appWrite'


const useFiles = () => {
  const bucketId = conf.appwriteBucketId;

  const createFile = async (file) => {
    try {
   
      const fileResult = await storage.createFile(bucketId, ID.unique(), file);
      return fileResult;
    } catch (error) {
      console.log("Appwrite service :: createFile :: error", error);
      return false;
    }
  };

  const deleteFile = async (fileId) => {
    try {
      const fileResult = await storage.deleteFile(bucketId, fileId);
      return fileResult;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  };

  const updateFile = async (fileId, file) => {
    try {
      const fileResult = await storage.updateFile(bucketId, fileId, file);
      return fileResult;
    } catch (error) {
      console.log("Appwrite service :: updateFile :: error", error);
      return false;
    }
  };

  const getFile = async (fileId) => {
    try {
      const fileResult = await storage.getFile(bucketId, fileId);
    
      
      return fileResult;
    } catch (error) {
      console.log("Appwrite service :: getFile :: error", error);
      return false;
    }
  };

const getFilePreview = async (fileId) => {
    try {
      console.log('bucket Id is:',bucketId)
      console.log('file Id is',fileId)
      const fileResult = await storage.getFilePreview(bucketId, fileId)
      console.log('fileResult',fileResult)
      return fileResult
    } catch (error) {
      console.log("Appwrite service :: getFilePreview :: error", error)
      return false
    }
  }
  

  const getFileView = (fileId) => {
   try {
      const fileResult = storage.getFileView(bucketId, fileId).href;
      console.log( "fileResult",fileResult);
      return fileResult;
    } catch (error) {
      console.log("Appwrite service :: getFileView :: error", error);
      return false;
    }
  };

  async function getFileIdsFromBucket(bucketId) {
    try {
        // List all files in the specified bucket
        const filesList = await storage.listFiles(bucketId);
        
        // Map over the files to extract fileId
        const fileIds = filesList.files.map(file => file.$id);

        return fileIds;
    } catch (error) {
        console.error("Error fetching file IDs:", error);
        return [];
    }
}


  return { createFile, deleteFile, updateFile, getFile, getFilePreview,getFileView,getFileIdsFromBucket };
};

export default useFiles;

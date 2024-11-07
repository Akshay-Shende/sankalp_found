const conf = {
  email:             String(process.env.EMAIL_USER),
  emailPassword :    String(process.env.EMAIL_PASS),
  emailTo :          String(process.env.EMAIL_TO),
  appwriteUrl:       String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT),
  appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
  appwriteAPIKey:    String(process.env.NEXT_PUBLIC_APPWRITE_API_KEY),
  appwriteBucketId:  String(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID),
}
export default conf;   
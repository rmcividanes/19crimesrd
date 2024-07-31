import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION } = process.env;

console.log("AWS_ACCESS_KEY_ID:", AWS_ACCESS_KEY_ID);
console.log("AWS_SECRET_ACCESS_KEY:", AWS_SECRET_ACCESS_KEY);
console.log("AWS_REGION:", AWS_REGION);

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: AWS_REGION,
});

const s3 = new AWS.S3();
export default s3;

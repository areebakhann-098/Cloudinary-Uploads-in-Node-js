
# Node.js File Handling, Streams, and Cloudinary Upload Backend

## Project Overview
This project covers two main functionalities:

1. **File Reading and Streams**  
2. **File Uploads with Multer + Cloudinary**


## Part 1 — File Reading and Streams

This part demonstrates how Node.js handles file operations efficiently.

### Features
- Learn how to use **fs** and **path** modules.
- Read a text or media file using the **fs** module.
- Write content into another file.
- Use **path module** to handle file paths in a cross-platform way.
- Copy large files using **readable and writable streams** for memory efficiency.
- Implement error handling for missing files or permission errors, with console logs.


## Part 2 — Multer + Cloudinary File Upload

This part allows users to securely upload and manage files in the cloud.

### Project Overview
- Users can upload **images or videos**.
- Files are temporarily stored using **Multer**.
- After upload, files are sent to **Cloudinary**.
- Local files are deleted to save disk space.
- Uploaded file URL and Cloudinary public ID are stored in MongoDB.
- Errors are handled gracefully.

---

### Features

#### File Upload
- Single file upload from frontend (`FormData`)  
- Supports both images and videos (`resource_type: "auto"`)  
- Local file deleted after upload  
- Returns file URL and Cloudinary public ID  

#### Database Integration
- Stores file metadata (`url` and `publicId`) in MongoDB  
- Easy retrieval and management of uploaded files  

#### Error Handling
- Handles missing files, invalid uploads, Cloudinary errors  
- Async wrapper used for cleaner error handling  



### Tech Stack
- **Node.js**  
- **Express.js**  
- **MongoDB** (via Mongoose)  
- **Multer** (file uploads)  
- **Cloudinary** (cloud storage)  
- **fs** & **path** (file handling & streams)  
- **dotenv** (environment variables)  


### Usage

#### Install dependencies
```bash
npm install
````

#### Create `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

#### Run the server

```bash
npm run dev
```



### Upload a File

* Endpoint: `POST /api/upload`
* Body: `form-data` → key: `file` → select image/video
* Response:

```json
{
  "success": true,
  "fileUrl": "https://res.cloudinary.com/.../file.jpg",
  "publicId": "abcdef12345"
}
```


### Notes

* Supports images and videos using Cloudinary.
* Local files deleted after upload.
* Streams used for efficient reading/writing of large files.
* All file paths handled using `path` module for cross-platform compatibility.
* Errors are handled gracefully with clear messages.

---

### Author

Areeba Khalid

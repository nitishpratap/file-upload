# **File Upload Service with Storage Optimization**

Here’s a challenging, practical question that focuses on your expertise as a Senior Node.js developer, testing your understanding of backend architecture, performance optimization, and integration:

### **Question: Build a Scalable REST API for a File Upload Service with Throttling and Storage Optimization**

### **Problem Statement:**

Create a Node.js REST API that allows users to upload large files (up to 1GB). The service should:

1. **Handle file uploads asynchronously** using streams to avoid memory overload.
2. **Throttle requests** to prevent server overload (e.g., no more than 5 concurrent uploads per user and limit the rate of upload requests per second).
3. Store the uploaded files in a local file system, but ensure files larger than 100MB are stored in an **external cloud service** (e.g., AWS S3).
4. Implement a **status check endpoint** that allows users to check the progress of their upload.

### **Requirements:**

- Use **Node.js** with **Express.js** for the API.
- Implement **concurrent upload throttling**. You can use Redis to track the number of concurrent uploads per user.
- Use **streams** to handle large files and prevent server memory overload.
- Integrate with **AWS S3** or a similar cloud service to store files larger than 100MB.
- Ensure proper **error handling** and edge cases (e.g., partial uploads, file type checks, max size checks).

### **Tasks:**

1. **File Upload API**:
    - Create an endpoint to handle the file upload (`POST /upload`).
    - The API should accept files up to 1GB in size.
    - Use streams to process the file upload to disk or S3.
2. **Progress Tracking**:
    - Implement a second endpoint (`GET /upload-status/:fileId`) to get the status of the file upload (e.g., % complete).
3. **Rate Limiting & Throttling**:
    - Use Redis or a similar in-memory store to throttle upload requests (5 concurrent uploads per user).
    - Limit the rate of uploads (e.g., no more than 10 requests per minute from a single IP).
4. **Error Handling**:
    - Ensure proper error handling for file type checks, size limits, and server crashes.
5. **Test the API** for load and stress to simulate concurrent uploads.

### **Bonus Points:**

- Add authentication (e.g., JWT) to ensure that only authenticated users can upload files.
- Add logging and monitoring to track failed uploads and system performance.
- Use **background job queues** (e.g., Bull or Kue) to handle large uploads asynchronously and offload heavy operations to a queue.

---

This question will test your understanding of Node.js' non-blocking I/O model, performance optimization, cloud integrations, and building robust, scalable systems.
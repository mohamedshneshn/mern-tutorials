/*
how to use multter to upload files
-----------------------------------
1. npm install --save multer

2.uploads/images     //folder to store images

3.middleware
    fileUpload.js   //middleware to write the logic to upload files


4.fileUpload.js    //middleware to write tthe configuration to upload files like file size, file type, file name, file destination
    const multer = require("multer");

    const MIME_TYPE_MAP = {    
    "image/png": "png",
    "image/jpeg": "jpeg",
    "image/jpg": "jpg",
    };

    const fileUpload = multer({
    limits: {
        fileSize: 800000, // 800 KB in bytes
    },
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
        cb(null, "uploads/images");
        },
        filename: (req, file, cb) => {
        const ext = file.originalname.split(".").pop(); // Extract extension from the original filename
        cb(null, Date.now() + "." + ext); // Append the extracted extension to the timestamp for a unique filename
        },
    }),
    fileFilter: (req, file, cb) => {
        const isValidMimeType = Object.keys(MIME_TYPE_MAP).includes(file.mimetype);
        if (isValidMimeType) {
        cb(null, true); // Allow the upload if the MIME type is recognized
        } else {
        cb(new Error("Invalid file type")); // Reject the upload if the MIME type is unrecognized
        }
    },
    });

    module.exports = fileUpload;


5. app.js
    const fileUpload = require("./middleware/file-upload");

    //middleware to serve static files
    app.use("/uploads/images", express.static("uploads/images"));

    //middleware to test image upload
    app.post("/api/upload", fileUpload.single("image"), (req, res) => {
    console.log(req.file);
    res.send("Image uploaded successfully");
    });

6. postman
    POST
    http://localhost:3000/api/upload
    body->form-data
    key->image
    value->choose file
    send
    response->Image uploaded successfully
    uploads/images->image is stored in this folder
    1626950730000.jpg
    1626950730000.jpg is the image name
    1626950730000 is the timestamp
    jpg is the extension

7. uploads/images
    1626950730000.jpg

-------------------------------------------------------------------------
what is multer
----------------
-is a middleware for handling file uploads in express
-it is used to upload files to the server


-------------------------------------------------------------------------
does we save photos in database or in server
--------------------------------------------
-we save photos in server
-we save the path of the photo in the database  
-we save the path of the photo in the database to retrieve the photo from the server

-------------------------------------------------------------------------
why we dont save photos in database
-----------------------------------
-because photos are large in size and it will slow down the database query
-storage cost is high

-------------------------------------------------------------------------

*/

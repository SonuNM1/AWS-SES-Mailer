import multer from "multer"

const storage = multer.diskStorage({

    // upload folder 
    
    destination: function (req, file, cb) {
        cb(null, "uploads/")
    }, 

    // file naming 

    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
}) ; 

// Create multer upload instance 

export const upload = multer({
    storage, 
})
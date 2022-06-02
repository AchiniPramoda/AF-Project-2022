const multer = require('multer');
const path = require('path');

module.exports = multer({
    storage : multer.diskStorage({}),

    fileFilter : (req, file, cb) => {
        let ext = path.extname(file.originalname);

        if(ext !==".docx" && ext !==".doc" && ext !==".pptx" && ext !==".pdf"){
            cb(new Error("File type is not supported"), false);
            return;
        }
        //console.log(file, path);
       cb(null, true);
    }    
});
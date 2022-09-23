const multer = require("multer");

const save_image = () => {
  //Setting up multer
  var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./images/");
    },
    filename: (req, file, cb) => {
      cb(null, "image.png");
    },
  });

  const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

  var upload = multer({
    storage: storage,
    fileFilter: fileFilter,
  });

  return upload;
};

module.exports = save_image;

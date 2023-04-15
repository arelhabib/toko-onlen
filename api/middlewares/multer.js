const multer = require("multer");

const multerSet = multer({
  storage: multer.memoryStorage(),
  limits: 1024 * 1024 * 2, //2mb
  fileFilter: (req, file, callback) => {
    if (!file.mimetype.startsWith("image")) {
      callback("not an image", false);
    } else {
      callback(null, true);
    }
  },
});

const uploadHandler = multerSet.single("image");

const upload = (req, res, next) => {
  uploadHandler(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.json({
        message: err.message,
        note: "make sure image input placed on image field",
      });
    } else if (err) {
      return res.json({ message: err });
    }

    next();
  });
};

module.exports = upload;

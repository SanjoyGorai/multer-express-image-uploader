export const uploadSingleFile = (req, res) => {
  try {
    res.status(200).json({
      message: "File uploaded successfully!",
      file: req.file,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const uploadMultipleFiles = (req, res) => {
  try {
    res.status(200).json({
      message: "Files uploaded successfully!",
      files: req.files,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

function parseImagePath(path) {
  const parts = path.split("/");
  const filenameWithExtension = parts.pop();
  const extension = filenameWithExtension.split(".").pop();
  const filename =
    "/" + filenameWithExtension.slice(0, -(extension.length + 1));
  const extensionWithPrefix = "." + extension;

  return {
    path: parts.join("/"),
    filename: filename,
    extension: extensionWithPrefix,
  };
}

export const smallImage = (imagePath) => {
  const { path, filename, extension } = parseImagePath(imagePath);
  return `${path}${filename}@0.5x${extension}`;
};

export const getLink = (img) => {
  if (
    img.fields.file.contentType === "image/jpeg" ||
    img.fields.file.contentType === "image/jpg"
  ) {
    return `${img.fields.file.url}?fm=jpg&fl=progressive`;
  } else {
    return `${img.fields.file.url}`;
  }
};

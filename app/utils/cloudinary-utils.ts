export const uploadToCloudinary = async (file: File): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "photo-ticket");

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/duv9p9dfw/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Upload failed");
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error("Upload error:", error);
    throw new Error("Failed to upload image");
  }
};

export const validateImage = (file: File): string | null => {
  if (file.size > 10 * 1024 * 1024) {
    return "Image size should be less than 10MB";
  }
  if (!file.type.startsWith("image/")) {
    return "Please upload an image file";
  }
  return null;
};



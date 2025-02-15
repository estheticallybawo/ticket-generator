import { useState } from "react";
import { validateImage } from "../utils/cloudinary-utils";
import Image from "next/image";
import styles from "./uploadImage.module.css";

interface UploadImageProps {
  onImageUpload: (file: File) => Promise<void>;
  currentImage?: string;
}

const UploadImage: React.FC<UploadImageProps> = ({ onImageUpload, currentImage }) => {
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(currentImage || null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file
    const validationError = validateImage(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    // Show preview immediately
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Upload file
    setIsLoading(true);
    setError(null);
    try {
      await onImageUpload(file);
    } catch {
      setError("Failed to upload image. Please try again.");
      setPreview(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.uploadContainer}>
      <div className={styles.dropzone}>
        <label htmlFor="dropzone-file" className={styles.uploadArea}>
          {isLoading ? (
            <div className="loading-spinner">Uploading...</div>
          ) : preview ? (
            <Image
              src={preview}
              alt="Preview"
              className={styles.preview}
              width={20}
              height={20}
            />
          ) : (
            <div className={styles.uploadContent}>
              <div className={styles.uploadIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span>Drag & drop or click to upload</span>
            </div>
          )}
          <input
            id="dropzone-file"
            type="file"
            className={styles.fileInput}
            accept="image/*"
            onChange={handleFileChange}
            disabled={isLoading}
          />
        </label>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default UploadImage;


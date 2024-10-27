'use client';
import React, { ChangeEvent, DragEvent, useState } from "react";

interface ImageUploadProps {
  maxSize?: number; // in bytes
  onUpload?: (file: File) => void;
  onError?: (error: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  maxSize = 5 * 1024 * 1024, // 5MB default
  onUpload,
  onError
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateFile = (file: File): boolean => {
    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      onError?.('Please upload an image file');
      return false;
    }

    // Check file size
    if (file.size > maxSize) {
      setError(`File size must be less than ${maxSize / (1024 * 1024)}MB`);
      onError?.(`File size must be less than ${maxSize / (1024 * 1024)}MB`);
      return false;
    }

    setError(null);
    return true;
  };

  const handleImagePreview = (file: File) => {
    if (!validateFile(file)) return;

    const preview = document.getElementById('preview') as HTMLImageElement;
    const reader = new FileReader();
  
    reader.onload = function (e: ProgressEvent<FileReader>) {
      if (e.target && e.target.result) {
        preview.src = e.target.result as string;
        preview.classList.remove('hidden');
        onUpload?.(file);
      }
    };
  
    reader.onerror = function () {
      setError('Error reading file');
      onError?.('Error reading file');
    };
  
    reader.readAsDataURL(file);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleImagePreview(file);
    }
  };

  const handleDrag = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === "dragenter" || event.type === "dragover") {
      setIsDragging(true);
    } else if (event.type === "dragleave") {
      setIsDragging(false);
    }
  };

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);

    const files = event.dataTransfer.files;
    if (files && files[0]) {
      handleImagePreview(files[0]);
    }
  };

  return (
    <div className="max-w-xl">
      <label
        className={`flex justify-center w-full h-32 px-4 transition bg-white border-2 ${
          isDragging ? "border-blue-400 bg-blue-50" : "border-gray-300"
        } ${error ? "border-red-400" : ""} border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop }
      >
        <span className="flex items-center space-x-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-6 h-6 text-gray-600" 
            fill="none" 
            viewBox="0 0 24 24"
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
            />
          </svg>
          <span className="font-medium text-gray-600">
            Select or drop an image
          </span>
        </span>
        <input 
          type="file" 
          name="file_upload" 
          className="hidden" 
          accept="image/*" 
          onChange={handleInputChange}
        />
      </label>

      {error && (
        <div className="text-red-600 text-sm">{error}</div>
      )}

      <div className="mt-4">
        <img 
          id="preview" 
          alt="Preview" 
          className="hidden max-w-full h-auto" 
        />
      </div>
    </div>
  );
};

export default ImageUpload;
"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X, Check, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";

export default function PhotoUploader() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Limit to 5 files at a time
    const newFiles = acceptedFiles.slice(0, 5 - uploadedFiles.length);

    if (newFiles.length === 0) {
      toast({
        title: "Too many files",
        description: "You can upload a maximum of 5 images at once.",
        variant: "destructive",
      });
      return;
    }

    // Create previews
    const newPreviews = newFiles.map(file => URL.createObjectURL(file));

    setUploadedFiles(prev => [...prev, ...newFiles]);
    setPreviews(prev => [...prev, ...newPreviews]);
  }, [uploadedFiles]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    },
    maxSize: 5 * 1024 * 1024, // 5MB
  });

  const removeFile = (index: number) => {
    const newFiles = [...uploadedFiles];
    const newPreviews = [...previews];

    // Release object URL to avoid memory leaks
    URL.revokeObjectURL(newPreviews[index]);

    newFiles.splice(index, 1);
    newPreviews.splice(index, 1);

    setUploadedFiles(newFiles);
    setPreviews(newPreviews);
  };

  const handleUpload = async () => {
    if (uploadedFiles.length === 0) return;

    setUploading(true);

    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // In a real app, you would use FormData to upload files to your server
    // const formData = new FormData();
    // uploadedFiles.forEach(file => {
    //   formData.append('photos', file);
    // });
    // await fetch('/api/upload', { method: 'POST', body: formData });

    toast({
      title: "Upload successful!",
      description: `${uploadedFiles.length} image${uploadedFiles.length > 1 ? 's' : ''} uploaded to the gallery.`,
    });

    // Clean up previews to avoid memory leaks
    previews.forEach(preview => URL.revokeObjectURL(preview));
    setUploadedFiles([]);
    setPreviews([]);
    setUploading(false);
  };

  return (
    <div className="space-y-6">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragActive
            ? 'border-emerald-500 bg-emerald-500/10'
            : 'border-white/30 hover:border-white/50 bg-white/5'
          }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center space-y-3 text-white/80">
          <Upload className={`w-10 h-10 ${isDragActive ? 'text-emerald-500' : 'text-white/60'}`} />

          {isDragActive ? (
            <p className="text-emerald-500">Drop your photos here...</p>
          ) : (
            <>
              <p>Drag & drop photos here, or click to select</p>
              <p className="text-xs text-white/60">
                Maximum 5 photos, 5MB each (JPG, PNG, GIF)
              </p>
            </>
          )}
        </div>
      </div>

      {previews.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-white">Selected Photos</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {previews.map((preview, index) => (
              <div key={index} className="relative group aspect-square bg-black/50 rounded-lg overflow-hidden">
                <Image
                  src={preview}
                  alt={`Preview ${index + 1}`}
                  fill
                  className="object-cover"
                />

                <button
                  onClick={() => removeFile(index)}
                  className="absolute top-2 right-2 w-8 h-8 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <Button
              onClick={handleUpload}
              disabled={uploading}
              className="bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              {uploading ? (
                <>Uploading...</>
              ) : (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Upload Photos
                </>
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

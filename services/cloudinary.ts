export const uploadImageToCloudinary = async (imageUri: string): Promise<string> => {
  const formData = new FormData();

  formData.append('file', {
    uri: imageUri,
    name: 'profile.jpg',
    type: 'image/jpeg',
  } as any);

  formData.append('upload_preset', 'your_unsigned_preset');

  const response = await fetch('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error?.message || 'Failed to upload image');
  }

  return data.secure_url; 
};

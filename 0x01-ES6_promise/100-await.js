import { uploadPhoto, createUser } from "./utils.js";

const asyncUploadUser = async () => {
  try {
    // Call uploadPhoto and createUser functions concurrently using Promise.all
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(),
      createUser()
    ]);

    // Return the response objects in the desired format
    return {
      photo: photoResponse,
      user: userResponse
    };
  } catch (error) {
    // If any of the async functions fail, return an empty object
    return {
      photo: null,
      user: null
    };
  }
};

export default asyncUploadUser;


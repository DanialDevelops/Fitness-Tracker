export const signupUser = async (username, email, password) => {
    try {
      // Simulate a signup request (replace this with your actual signup logic)
      // For demonstration purposes, I'm returning a fake token
      const fakeToken = "fakeToken"; // Replace this with an actual token from your server
      return fakeToken;
    } catch (error) {
      throw new Error("Signup failed");
    }
  };
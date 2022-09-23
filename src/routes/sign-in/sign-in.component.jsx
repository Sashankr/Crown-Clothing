import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.util";

import { getRedirectResult } from "firebase/auth";

import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.util";
import { useEffect } from "react";

const SignIn = () => {
  useEffect(() => {
    async function createUserFromRedirect() {
      const response = await getRedirectResult(auth);
      if (response) {
        const { user } = response;
        const userDocRef = await createUserDocumentFromAuth(user);
      }
    }
    createUserFromRedirect();
  }, []);

  const googleSignInPopup = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={googleSignInPopup}>Sign in with google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with google redirect
      </button>
    </div>
  );
};

export default SignIn;

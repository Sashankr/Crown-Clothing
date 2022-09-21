import { signInWithGooglePopup } from "../../utils/firebase/firebase.util";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.util";

const SignIn = () => {
  const googleSignInPopup = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={googleSignInPopup}>Sign in with google</button>
    </div>
  );
};

export default SignIn;

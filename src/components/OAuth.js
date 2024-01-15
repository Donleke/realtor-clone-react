import { FcGoogle } from "react-icons/fc";

function Oauth() {
  return (
    <button
      className="flex items-center justify-center w-full px-7 py-3 uppercase
     bg-red-700 text-white text-sm font-medium rounded hover:bg-red-800 active:bg-red-900 
     transition duration-150 ease-in-out shadow-md hover:shadow-lg active:shadow-lg"
    >
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
      Continue with Google
    </button>
  );
}

export default Oauth;

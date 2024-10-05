import { useState } from "react";
import assets from "./../assets/assets";

function Login() {
const [currState, setCurrState] = useState("Sign Up");

     const stateHandler = () =>{
        setCurrState("Login")
     }
      const stateHandler2 = () =>{
        setCurrState("Sign Up")
      }

  return (
    <div className="background min-h-screen flex flex-col md:flex-row items-center justify-evenly p-5 md:p-10 gap-20 bg-gray-100">
    <div className="flex flex-col items-center gap-3 md:gap-2">
  {/* LOGO */}
  <img
    src={assets.logo_icon}
    alt="logo"
    className="w-40 h-40 md:w-60 md:h-60 mb-2 md:mb-0"
  />

  {/* HEADER TEXT */}
  <h1 className="tracking-wider font-extrabold text-transparent text-6xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl bg-clip-text bg-gradient-to-r from-white to-white  shadow-lg drop-shadow-lg md:drop-shadow-md sm:drop-shadow-sm -mt-5 sm:-mt-3">
    SPYCHAT
  </h1>
</div>

   
  
      {/*  LOGIN FORM */}
      <form className="bg-white py-10 px-10 md:px-12 shadow-lg flex flex-col gap-6 rounded-lg max-w-md w-full">
        <h2 className="font-semibold text-3xl text-gray-800">{currState}</h2>

        {/* INPUT FIELDS */}
          {currState === "Sign Up" ? 
         <input
         type="text"
         placeholder="Username"
         required
         className="py-3 px-4 border-2 border-[#c9c9c9] rounded-md outline-none focus:border-[#077eff] transition duration-300"
       /> :null   
        }  
        <input
          type="email"
          placeholder="Email Address"
          required
          className="py-3 px-4 border-2 border-[#c9c9c9] rounded-md outline-none focus:border-[#077eff] transition duration-300"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="py-3 px-4 border-2 border-[#c9c9c9] rounded-md outline-none focus:border-[#077eff] transition duration-300"
        />

        {/*SIGN-UP BUTTON */}
        <button
          className="p-2 bg-[#077eff] text-white text-lg font-medium rounded-md shadow-md hover:bg-[#005bb5] transition duration-300"
          type="submit"
        >
        {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* TERMS AND CONDITIONS  */}
        <div className="flex items-start gap-2 text-sm text-[#808080]">
          <input type="checkbox" className="mt-1" />
          <p>
            By clicking Sign Up, you agree to the{" "}
            <a href="#" className="text-[#077eff] underline">
              Terms of Service
            </a>{" "}
            and{" "} 
            <a href="#" className="text-[#077eff] underline">
               Privacy Policy
            </a>.
          </p>
        </div>

        {/* ALREADY  HAVE AN ACCOUNT */}
      <div className="text-center mt-4"> {currState === "Sign Up" ?
          <p className="text-sm text-[#5c5c5c]">
          Already have an account?{" "}
          <span  onClick={stateHandler} className="font-medium text-[#077eff] cursor-pointer hover:underline">
            Login here
          </span>
        </p>  :  
    
    <p className="text-sm text-[#5c5c5c]">
    Create Account{" "}
    <span onClick={stateHandler2} className="font-medium text-[#077eff] cursor-pointer hover:underline">
      Click here
    </span>
  </p>
    
    }
          

          
        </div>
      </form>
    </div>
  );
}

export default Login;

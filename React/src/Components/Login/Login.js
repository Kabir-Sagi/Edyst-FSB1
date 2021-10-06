import React,{useRef} from "react";

const Login = () => {
          const inputText= useRef()
            const inputPassword=useRef()

            const getData = ()=>{
              console.log(inputText.current.type)
              console.log(inputPassword.current.value)
            }

 return <div>
    <p>
      NAME: <input type="text" ref={inputText} />
    </p>
    <p>
      PASSWORD:
      <input type="password" ref={inputPassword} />
    </p>
    <button onClick={getData}>Login</button>
  </div>;
};
 export default Login

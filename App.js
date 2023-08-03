/*import React from 'react';

class Calculator extends React.Component {
state = {
      result: 0,
    };
  

  justin = (operation) => {
    const { result } = this.state;
    let newResult;

    if (operation==='add') {
      newResult=result+1;
    } else if (operation === 'subtract') {
      newResult=result-1;
    } else if (operation === 'multiply') {
      newResult=result*2;
    }
    this.setState({result:newResult})
  };

  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <p>Result: {this.state.result}</p>
        <button onClick={() => this.justin('add')}>Add</button>
        <button onClick={() => this.justin('subtract')}>Subtract</button>
        <button onClick={() =>this.justin('multiply')}>Multiply</button>
      </div>
    );
  }
}

export default Calculator;*/


/*import { useState } from "react";
import './App.css'

const Add=()=>{
  const[color,setColor]=useState('apple')
  const[image,setImage]=useState(true)

const handleClick=()=>{
setColor('mango')
setImage(!image)
}


  return(
    <div>
      <div className={image?'one':'two'}>the class {color}</div>
      <button onClick={handleClick}>change</button>
    </div>
  )
}
export default Add;*/
/*import { useState,createContext } from "react";
import  ReactDOM  from "react-dom/client";
import Child from "./Comp";

export const UserContext=createContext()
function Parent(){
  const[user,setUser]=useState("preethi");
  const[pin,setPin]=useState(123)
  
  const contextValue={user,pin}

return(
  <UserContext.Provider value={contextValue}>
  <div style={{backgroundColor:'green'}}>hello {user}{pin}</div>
  <Child/>
  </UserContext.Provider>
)
  }
  export default Parent*/


/*import React from 'react';
import "./App.css";

const login=()=>{

  
  
  

  

  return (
    <div className="main">
     <div className="sub-main">
       </div>
         <div>
           <h1>Login Page</h1>
           <div>
            
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
   
             <input type="password" placeholder="user name" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );

  }*/


/*import React from 'react';
import './App.css';

class App extends React.Component{
  state={
    output:"",
    infoData:[
      {
        MovieName:"KGF", Genre:"Action" 
      },
      {
        MovieName:"LoveToday", Genre:"Rom-com"
      },
      {
        MovieName:"Vikram", Genre:"Action"
      },
      {
        MovieName:"Varisu", Genre:"Drama"
      },
      {
        MovieName:"Thunivu", Genre:"Action"
      }
      
    ]
  }

  update = (userID)=>{
    for(let i=0; i<this.state.infoData.length;i++){
      if(userID === i)
      {
        this.setState({
          output: this.state.infoData[i].MovieName + "------->" + this.state.infoData[i].Genre
        })
      }

    }
  }
  display=()=>{
    let  array=[];
    for(let i=0; i<this.state.infoData.length;i++)
    {
      array.push(
        <div  className="row">
          <div className="col">{this.state.infoData[i].MovieName}</div>
          <div className="col">{this.state.infoData[i].Genre}</div>
          <div className="col"><button onClick={this.update.bind(this,(i) )}>print</button></div>
        </div>
      )
    }
    return array
  }
  render(){
    return(
      <>
      <div className='preethi'>Table Class Function</div>
      <div className=''>{this.display()}</div>
      <div className='kumar'>{this.state.output}</div>
      </>
    )
  }
}
 export default  App;*/


/*import React from 'react';
import './App.css'

const LoginPage = () => {
 
 

 return (
 <div className=''>
     <div className='justin'>
       <h2>Login</h2>
       <div className="preethi">
         <label pree="username">Username:</label>
         <input type="text" />
       </div>
       <div className="preethi">
         <label kumar="password">Password:</label>
         <input type="password" />
       </div>
       <button type="submit">Login</button>
     </div>
   </div>
 );
};

export default LoginPage;*/



/*import React from 'react';
import './App.css'

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
  

  return (
    <div className="login-page">
      <form className="login-form"  onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password"/>
        </div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginPage;*/



// import React, { useState } from 'react';
// import './App.css';

// const LoginPage = () => {
// const payload={
//   name:null,
//   password:null
// }
// const [data,setData]=useState(payload)


//   return (
//     <div className="container">
//       <div className="justin" >
//         <h2>Login</h2>
//         <div className="preethi">
//           <label a="username">Username:</label>
//           <input name='name' onchange type="nmber" />
//         </div>
//         <div className="preethi">
//           <label b="password">Password:</label>
//           <input name =''type="password"  />
//         </div>
//         <button type="submit">Login</button>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

// import React, { useState } from 'react';

// const App = () => {
//   const payload={
//     name: '',
//     email: '',
//     password: ''
//   }
//   console.log(payload)
//   const [formData, setFormData] = useState(payload);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform form submission logic here
//     console.log('Form Data:', formData);

//     // Reset form fields
//     setFormData({
//       name: '',
//       email: '',
//       password: ''
//     });
//   };

//   return (
//     <form className='box' onSubmit={handleSubmit}>
//       <div >
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleInputChange}
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default App;




// import React, { useState } from 'react';

// function MyForm() {
//   const [state, setState] = useState({
//     abc: null,
//     email: null
//   });
// console.log(state)
//   const changeEvent=(e)=>{
//     console.log(e)
//     setState({
//       [e.target.name]: e.target.value,

//     });
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Access the form data (name and email)
//     // console.log(name, email);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={state.abc}
//         onChange={changeEvent}
//         placeholder="Name"
//       />
//       <input
//         type="email"
//         value={state.email}
//         onChange={changeEvent}
//         placeholder="Email"
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// export default MyForm




/*import { PureComponent, useState } from 'react';


class Greeting extends PureComponent {
  render() {
    



    console.log("Greeting was rendered at", new Date().toLocaleTimeString());
    return <h3>Hello{this.props.name}!</h3>;

    
    
  }
}

export default function MyApp() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
 return (
    <>
      <label>
        Name{': '}
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Address{': '}
        <input value={address} onChange={e => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
      <Greeting name={address} />
      
    </>
  );
}*/




/*import React, { useState } from 'react';

function MyForm() {
  const [state, setState] = useState({
    name: null,
    email:null
  });
console.log(state)
  const handleChange = (e) => {
    console.log(e)
    setState({
       [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Access the form data (name and email)
    console.log(state.name, state.email);
  };

  return (
    

    
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={state.name || ''}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={state.email || ''}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
    
  );
}

export default MyForm;*/





/*import React from "react";
import { useState,useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import './App.css'
import Add from "./Add";




const App = () => {
  const API_URL='http://localhost:3500/pree';
  const [pree, setItems] = useState(
    [
      {
        id: 1,
        checked: true,
        item: "practice coding"
      },
      {
        id: 2,
        checked: false,
        item: "play cricket"
      },
      {
        id: 3,
        checked: true,
        item: "read about AI"
      }
    ]
  );

  const [apple,setApple]=useState('')
  const[erro,setErro]=useState(null)

  useEffect(()=>{
    const fetc=async()=>{
      try{
      const response=await fetch(API_URL);
      if (!response.ok) throw Error("data not received");
      const bana=await response.json();
      setItems(bana);
      setErro(null)
      }catch(err){
setErro(err.message)
      }
    }
    (async()=> await fetc())()
  },[])

  const kumar =(item)=>{
    const id=pree.length?pree[pree.length-1].id+1:1;
    const aravinth={id,checked:false,item}
    const bottle=[...pree,aravinth]
    setItems(bottle)
  }

  const handleCheck=(id)=>{
    const justin=pree.map((item)=>item.id===id?{...item,checked:!item.checked}:item)
setItems(justin)
  }
  const handledelete=(id)=>{
    const testi=pree.filter((item)=>item.id!==id)
    setItems(testi)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!apple) return;
    kumar(apple)
    setApple('')

  }
  return (
    <div className="Content">
    <main style={{justifyContent:'center',alignItems:'center'}}>
      {erro && <p>{`Error:${erro}`}</p>
      
      }
      <ul>
        {pree.map((item) => (
          <li className="item" key={item.id}>
            <input type="checkbox"
            onChange={()=>handleCheck(item.id)
            }
              checked={item.checked} />
            <label>{item.item}</label>
          <FaTrashAlt
          role="button"
          onClick={()=>handledelete(item.id)}
          tabIndex="0"
          />
          
            </li>
            
            ))}
      </ul>
    </main>
<Add
apple={apple}
setApple={setApple}
handleSubmit={handleSubmit}
/>
    </div>
  )



}
export default App*/




//import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const validationSchema = Yup.object().shape({
//   name: Yup.string().min(2,'name must be at least 2 characters').required('Name is required'),
//   email: Yup.string().email('Invalid email').required('Email is required'),
//   password: Yup.string()
//     .required('Password is required')
//     .min(6, 'Password must be at least 6 characters'),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref('password'), null], 'Passwords must match')
//     .required('Confirm Password is required'),
// });

// const App = () => {
//   const formik = useFormik({ initialValues: {
//       name: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       // Handle form submission
//       console.log(values);
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <div>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.name}
//         />
//         {formik.touched.name && formik.errors.name ? (
//           <div>{formik.errors.name}</div>
//         ) : null}
//       </div>

//       <div>
//         <label htmlFor="email">Email</label>
//         <input
//           type="text"
//           id="email"
//           name="email"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.email}
//         />
//         {formik.touched.email && formik.errors.email ? (
//           <div>{formik.errors.email}</div>
//         ) : null}
//       </div>

//       <div>
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.password}
//         />
//         {formik.touched.password && formik.errors.password ? (
//           <div>{formik.errors.password}</div>
//         ) : null}
//       </div>

//       <div>
//         <label htmlFor="confirmPassword">Confirm Password</label>
//         <input
//           type="password"
//           id="confirmPassword"
//           name="confirmPassword"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.confirmPassword}
//         />
//         {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
//           <div>{formik.errors.confirmPassword}</div>
//         ) : null}
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default App;


// import React, { useState } from "react";
// import Square from "./Square";
// import Round from "./Round";



// const [color,setcolor]=useState('')
// const


// return(
//   <div className="square">
// <Square
// color={color}

// />
// <Round
// color={color}

// />

//   </div>
// )






// import { useState } from "react"
// import Square from "./Square"
// import Round from "./Round"



// function Justi(){
// const[color,setColor]=useState('')
// const[hex,setHex]=useState('')
// const[dark,setDark]=useState(true)

// return(
//   <div className="Justi">
// <Square
// color={color}
// hex={hex}
// dark={dark}
// />
// <Round
// color={color}
// setColor={setColor}
// hex={hex}
// dark={dark}
// setDark={setDark}

// />

//   </div>
// )

// }




// import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import './App.css'

// const validate = values => {
//   const errors = {};
//   if (!values.firstname) {
//     errors.firstname = 'required'
//   } else if (values.firstname.length > 8) {
//     errors.firstname = " must be 8 character or less";
//   }
//   if (!values.lastname) {
//     errors.lastname = 'required'
//   } else if (values.lastname.length > 8) {
//     errors.lastname = " must be 8 character or less";
//   }
//   if (!values.email) {
//     errors.email = "required";
//   } else if (! /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)) {
//     errors.email = "invalid email address"
//   }
//   if (!values.password) {
//     errors.password = "required";
//   } else if (values.password.length < 4) {
//     errors.password = "minimum 5 char"
//   }
//   if (!values.confirmpassword) {
//     errors.confirmpassword = "required";
//   } else if (values.password !== values.confirmpassword) {
//     errors.confirmpassword = "password must match"
//   }

//   return errors;
// }
// const App = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstname: '',
//       lastname: '',
//       email: '',
//       password: '',
//       confirmpassword: '',
//     },
//     validate,
//     onSubmit: event => {
//       console.log(event)
     
//       setSubmit(!submit)
//       // alert(`hello, ${values.firstname} you sucessfully signed up`);
//     }
//   });
//   const [submit, setSubmit] = useState(false)

//   return (
//     <div className='main'>
//       <div className='SignUp-form'>
//         <h2>sign up here</h2>
//         <form onSubmit={formik.handleSubmit}>
//           <div>
//             <input type="text" placeholder='firstname...' name='firstname' autoComplete='off' onChange={formik.handleChange} value={formik.values.firstname} onBlur={formik.handleBlur} />
//             {
//               formik.touched.firstname && formik.errors.firstname ? <span>{formik.errors.firstname}</span> : null
//             }
//           </div>
//           <di>
//             <input type="text" placeholder='lastname...' name='lastname' autoComplete='off' onChange={formik.handleChange} value={formik.values.lastname} onBlur={formik.handleBlur} />
//             {
//               formik.touched.lastname && formik.errors.lastname ? <span>{formik.errors.lastname}</span> : null
//             }
//           </di>
//           <div>
//             <input type="text" placeholder='email...' name='email' autoComplete='off' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
//             {
//               formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null
//             }
//           </div>
//           <div>
//             <input type="password" placeholder='password...' name='password' autoComplete='off' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
//             {
//               formik.touched.password && formik.errors.password ? <span>{formik.errors.password}</span> : null
//             }
//           </div>
//           <div>
//             <input type="password" placeholder='confirmpassword...' name='confirmpassword' autoComplete='off' onChange={formik.handleChange} value={formik.values.confirmpassword} onBlur={formik.handleBlur} />
//             {
//               formik.touched.confirmpassword && formik.errors.confirmpassword ? <span>{formik.errors.confirmpassword}</span> : null
//             }
//           </div>
//           <div>
//             <input type="submit" value="submit" />
//           </div>
//           {submit ? <div>hello, ${formik.firstname} you sucessfully signed up</div> : <div></div>}
//         </form>
//       </div>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react';
// import Header from './Header';
// import Nav from './Nav';
// import Home from './Home';
// import Post from './Post';
// import About from './About'
// import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// const App = () => {
//   const[search,setSearch]=useState('')
//   return (
//     <div className='App'>
// <Header title="preethi social media"/>
// <Nav search={search}
// setSearch={setSearch}/>
// <Home/>
// <Post/>
// <About/>

//     </div>
//   )
// }

// export default App



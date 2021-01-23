import '../assets/css/signin.css'


function Signin(props) {
    console.log('dădaw')
return (
    <div className='signin'>
       <div>
           <h1 >Sign in</h1>
           <h2>Username</h2>
           <input type='text' className='username'></input>
           <h2>Password</h2>
           <input type='text' className='pass'></input>
           <h3>Forgot Pasword?</h3>
           <h4>Sign up</h4>
           
       </div>
    </div>
)
    
}
export {Signin}
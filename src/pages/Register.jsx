import React from 'react'
import Add from "../img/addAvatar.png"
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import {auth, storage, db} from "../firebase"
import { useState } from 'react'
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);
      
      const uploadTaskSnapshot = await uploadBytesResumable(storageRef, file);
      const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);
      
      await updateProfile(res.user, {
        displayName,
        photoURL: downloadURL,
      });

      await setDoc(doc(db,"users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        photoURL: downloadURL,
      });

      await setDoc(doc(db, "userChats",res.user.uid),{});
      navigate("/");
      
    }catch(err){
      setError(true);
      console.log(err);
    }
  }

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chat time</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='display name'/>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <input style={{display:"none"}}type='file' id='file'/>
                <label htmlFor='file'>
                  <img src={Add} alt="" />
                  <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
                {error && <span>Something went wrong</span>}
            </form>
            <p>Do you have an account? <Link to="/login">Login</Link></p>
        </div>
    </div>
  )
}

export default Register
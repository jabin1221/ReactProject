import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fBase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { updateProfile } from "@firebase/auth";
import { dbService, storageService } from "fBase";
import {orderBy, onSnapshot, query, getDocs, addDoc, collection, doc } from "firebase/firestore";
import Clock from "components/Clock";
import { faAllergies } from "@fortawesome/free-solid-svg-icons";

function App() {
  console.log(authService.currentUser);
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(()=>{
    
    
    const auth = getAuth()
    authService.onAuthStateChanged(async (user)=>{
      if(user){
        
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          following: user.following, // 팔로잉 내가 한사람
          followings: user.followings,
          follow: user.follow, // 팔로우 해준 사람
          follows: user.follows,
          show: user.show,
          name: "test",
          updateProfile: (args) => updateProfile(user, { displayName: user.displayName }),
          });

          
          
          
      }else{
        
        setUserObj(null);
      }
      setInit(true);
  });
  }, []);
  const refreshUser = () => {
    
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      following: user.following, // 팔로잉 내가 한사람
          followings: user.followings,
          follow: user.follow, // 팔로우 해준 사람
          follows: user.follows,
          show: user.show,
          name: user.name,
      updateProfile: (args) => updateProfile(user, { displayName: user.displayName }),
      });
      
  };
  return (
    <>
    
    <Clock />
      {init ? (

        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        />
      ) : (
        "Initializing..."
      )}
      
    </>
  );
    
    
  
}

export default App;

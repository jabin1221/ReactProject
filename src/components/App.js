import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fBase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { updateProfile } from "@firebase/auth";
import { dbService, storageService } from "fBase";
import {orderBy, onSnapshot, query, getDocs, addDoc, collection, doc } from "firebase/firestore";
import Clock from "components/Clock";



function App() {
  console.log(authService.currentUser);
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);//누갸 쓴건지
  useEffect(()=>{

    

    authService.onAuthStateChanged(async (user)=>{//authservice가 바뀐다면 userobject에 user가 저장(로그인되면)
      if(user){
        
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          following: 0,
          followings: [],
          follower: 0,
          followers: [],
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
      disclockstatecclayName: user.displayName,
      uid: user.uid,
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

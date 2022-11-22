import {authService, dbService, storageService } from "fBase";
import {v4 as uuidv4} from "uuid";
import {orderBy, onSnapshot, query, getDocs, addDoc, collection, Firestore, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Tweet from "components/Tweet";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import TweetFactory from "components/TweetFactory";
import { getAuth } from "firebase/auth";
import { doc, deleteDoc, updateDoc }from "firebase/firestore";
import { faArrowAltCircleUp, faArrowDownUpAcrossLine } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { faUser, faUserCircle, faHeart, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Radio } from 'antd';
import { useHistory } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { faNutritionix } from "@fortawesome/free-brands-svg-icons";
import { normalizeStyle } from "@ant-design/cssinjs/lib/hooks/useStyleRegister";
import { updateProfile } from "@firebase/auth";




const ProfileContainer = styled.div``;






export default ({refreshUser, userObj}) => {// 실제로그인 유저, 일치하는가, 상대방
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(userObj.show);
    const [tweets, setTweets] = useState([]);
    const UserTextRef = doc(dbService, "users", `${userObj.uid}`);
    var follow = 0;
    var following = 0;
    var shows = "all"
    var name = ""
    var id = ""
  
    
    
    
    



// Initialize Cloud Firestore and get a reference to the service
//const db = getFirestore(app);
    
    
useEffect(() => {
  console.log(userObj)
  const q = query(
      collection(dbService, "users"),
      
      );
      onSnapshot(q, (snapshot) => {
      const userArr = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      }));
      setUsers(userArr);
      for(let i = 0 ; i < userArr.length; i++){
        console.log("1" + userArr[i].uid)
        console.log("2" + userObj.uid)
        if(userArr[i].uid == userObj.uid){
          follow = userArr[i].follow;
          following = userArr[i].following;
          shows = userArr[i].show;
          name = userArr[i].displayName;
          id = userArr[i].id;
          console.log(shows)
          console.log(id)
          console.log(follow)
          break;
          
        }
      }
      
      
      });
      console.log(follow + following + shows + name + id)
}, []);

  

  



  const Show = (e) => {
    console.log(users)
    console.log(e.target.value)
    console.log(userObj)
    console.log(name)
    console.log(id)
    for(let i = 0 ; i < users.length; i++){
        if(users[i].uid == userObj.uid){
            console.log(userObj.uid)
            updateDoc(doc(dbService, "users", `${users[i].id}`), {
                show: e.target.value,
            });
        }
    }

    
    //refreshUser();
    /*updateDoc(doc(dbService, "users", `${tweets[i].id}`), {
        count: 1,
        });*/
    //setShow(e.targetvalue)
  }

  

    

  return (
    <div className="container">
      <span className="radio">
      <Radio.Group
                optionType={'button'}
                options={['all', 'only friend']}
                onChange = {Show}
                
                />
                </span>
    
  </div>
  );
};
                
                

                
                
               
                
                 
                
        
    



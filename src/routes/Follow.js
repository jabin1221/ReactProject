import { dbService, storageService } from "fBase";
import {v4 as uuidv4} from "uuid";
import {orderBy, onSnapshot, query, getDocs, addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState, useSyncExternalStore } from "react";
import Tweet from "components/Tweet";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import TweetFactory from "components/TweetFactory";
import { getAuth, updateCurrentUser } from "firebase/auth";
import { doc, deleteDoc, updateDoc }from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt, faHeartBroken, faHeartCircleMinus, faPersonWalkingDashedLineArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faUser, faUserCircle, faHeart } from "@fortawesome/free-solid-svg-icons";
import View from "components/View";


const Follow = ({userObj, refreshUser}) => {
    const [users, setUsers] = useState([])
    const [users2, setUsers2] = useState([])
    const [tweets, setTweets] = useState([])
    const [viewing, setViewing] = useState(true)
    const [destuser, Setdestuser] = useState(null)
    
    
    
    useEffect(() => {
        console.log(userObj)
        const q = query(
            collection(dbService, "users"),
            
            );
            onSnapshot(q, (snapshot) => {
            let userArr = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            followcheck: 0,
            followingcheck: 0,
            }));
        
        for(let i = 0 ; i < userArr.length; i++){
            if(userArr[i].follow){
                for(let j = 0 ; j < userArr[i].follow; j ++){
                    if(userArr[i].follows[j] == userObj.uid){
                        userArr[i].followcheck = 1
                    }
                }
            }
            
        }
        for(let i = 0 ; i < userArr.length; i++){
            if(userArr[i].following){
                for(let j = 0 ; j < userArr[i].following; j ++){
                    if(userArr[i].followings[j] == userObj.uid){
                        userArr[i].followingcheck = 1
                    }
                }
            }
            
        }
        const followarray = userArr.filter(sch => (sch.followcheck == 1))
        const followingarray = userArr.filter(sch => (sch.followingcheck == 1))
        setUsers(followarray);
        setUsers2(followingarray);
        console.log(userArr)
        console.log(users)
            });
            console.log(users)
    }, []);

    useEffect(() => {
        const p = query(
            collection(dbService, "tweets"),
            orderBy("createdAt", "desc")
            );
            onSnapshot(p, (snapshot) => {
            const tweetArr = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }));
        setTweets(tweetArr);
            });
        }, []);

    const profile = ((user) => {
        //event.defaultPrevented()
        
        console.log(user)
        console.log(userObj)
        console.log(user.id)
        
        Setdestuser(user)
        console.log(user)
        console.log(viewing)
        toggleViewing()
        
    } );

    const toggleViewing = () => setViewing(prev => !prev);
    

    

    return(
        viewing ? 
        <>
        <div>
            <h2>팔로우한 유저</h2><br></br>
            {users.map((user) =>
            <><div>
            <span onClick={() => profile(user)}>
            <FontAwesomeIcon icon={faUserCircle} color={"#04AAFF"} size="2x" className="profileicon2" />
            </span>
            {user.displayName}</div>
            <br></br>
            </>)}
            

            <h3>----------------------------</h3>
            <h2>나를 팔로우한 유저</h2><br></br>
            {users2.map((user) =>
            <><div>
            <span onClick={() => profile(user)}>
            <FontAwesomeIcon icon={faUserCircle} color={"#04AAFF"} size="2x" className="profileicon2" />
            </span>
            {user.displayName}</div>
            <br></br>
            </>)}
            

        </div>
        </>
        :
        <>
        <div>
           <View userObj={userObj} destuser={destuser} userall={users} refreshUser = {refreshUser}/>
        </div>
        </>
    )
}

export default Follow;
import { dbService, storageService } from "fBase";
import {v4 as uuidv4} from "uuid";
import {orderBy, onSnapshot, query, getDocs, addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Tweet from "components/Tweet";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import TweetFactory from "components/TweetFactory";
import { getAuth } from "firebase/auth";
import { doc, deleteDoc, updateDoc }from "firebase/firestore";
import { faArrowDownUpAcrossLine } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { faUser, faUserCircle, faHeart, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ProfileContainer = styled.div``;

const ProfileFormImage = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  border: 5px solid #d0d0d0;
  cursor: pointer;
`;




const View = ({userObj, destuser, userall, refreshUser}) => { // 실제로그인 유저, 일치하는가, 상대방
    const [users, setUsers] = useState(userall)
    const [userlist, setuserlist] = useState(destuser.follows);
    const [userlist2, setuserlist2] = useState([]);
    const [tweets, setTweets] = useState([]);
    const [followuser, setFollowuser] = useState(true)
    var currentuserfollowing = 0
    var currentuserID = ""
    const id = destuser.uid;
    var followinglist
    const follow ="Follow"
    const unfollow="UnFollow"
   
    useEffect(() => {
        console.log(users)
        console.log(userObj.displayName)
        for(let i = 0 ; i < users.length; i++){
            if(users[i].uid == userObj.uid){
                currentuserfollowing = users[i].following
                
                setuserlist2(users[i].followings)
                followinglist = users[i].followings
                console.log("현재 유저의 팔로우 수" + currentuserfollowing)
                
                console.log("유저리스트2" + userlist2)
                console.log("??" + followinglist)
            }
        }
        for(let j = 0 ; j < destuser.follows.length; j++){
            console.log("1" + destuser.follows[j])
            console.log("2" + userObj.uid)
            if(destuser.follows[j] == userObj.uid){
                setFollowuser(false)
                console.log(followuser)
            }
            else{
                setFollowuser(true)
            }
        }
        
        
            
      }, [followuser]);

    

    

    const onFollow = async () => {
        console.log(userObj.followings)
        console.log(destuser);
        let found = 0;
        let i = 0;
        const FollowTextRef =doc(dbService, "users", `${destuser.id}`);
        for(let i = 0 ; i < users.length; i++){
            if(users[i].uid == userObj.uid){
                currentuserID = users[i].id
            }
        }
        const FollowingTextRef =doc(dbService, "users", `${currentuserID}`);
            console.log(destuser.follow);
            console.log(destuser.following);
            for(i = 0 ; i < destuser.follow ; i++){
                
                if(destuser.follows[i] == userObj.uid){
                    found = 1;
                    console.log("ok");
                }
            }
            if(found == 0){ // Follow
                
                const newList = userlist.concat(userObj.uid)
                const newList2 = userlist2.concat(destuser.uid)
                
                destuser.follow++; // follow, following info change
                destuser.follows = newList;
                userObj.following++;
                userObj.followings = newList2;
                
                await updateDoc(FollowTextRef, {
                    follows: newList,
                    follow : newList.length,
                    });
                await updateDoc(FollowingTextRef, {
                    followings: newList2,
                    following : newList2.length,
                    });
                    setFollowuser(false)
            }
            else{ // UnFollow
                const newList = userlist.filter(sch => sch != userObj.uid)
                const newList2 = userlist2.filter(sch => sch != destuser.uid)
                destuser.follow--; // follow, following info change
                destuser.follows = newList;
                userObj.following--;
                userObj.followings = newList2;
                
                await updateDoc(FollowTextRef, {
                    follows: newList,
                    follow : newList.length,
                    });
                await updateDoc(FollowingTextRef, {
                    followings: newList2,
                    following : newList2.length,
                    });
                    setFollowuser(true)    
            }
       // refreshUser()
        
            
    }

    return(
    
    <>
    <ProfileContainer>
    
        <div className="factoryForm4">
        <div className="factoryInput__container">
        <form>
        
            <div>
            <table className="followTable">
                <thead>
                <tr><th><FontAwesomeIcon icon={faUserCircle} color={"#04AAFF"} size="5x" className="profileicon2" /></th></tr>
                </thead>
                <tbody>
                    <tr><td>{destuser.displayName}</td></tr>
                    <tr>-------------------------</tr>
                <tr>
                <td>follower</td>
                <td>following</td>
                

                </tr>
                </tbody>
                <tfoot>
                    <tr>
                    <td>{destuser.follow}</td>
                    <td>{destuser.following}</td>
                    </tr>
                </tfoot>
                </table>
                </div>
                </form>
                
                
                <form>
                <div>
                    
                    <>
                <span onClick={onFollow} className="followBtn2">
                {followuser? "Follow" : "UnFollow"}
                 </span>
                 </>
                 </div> 
                 
                 
                    
                    
                    </form>

                    </div>
                    </div>
                    </ProfileContainer>
                 </>
                 
    );
                 
                
        
    
};

export default View;
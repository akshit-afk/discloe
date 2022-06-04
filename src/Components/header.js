import styled from "styled-components";
import { useDispatch,useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import { auth, provider, signInWithPopup} from "../firebase";
import { selectUserName,selectUserPhoto,setUserLoginDetails ,setSignOutState} from "../features/user/userslice";
import { useEffect } from "react";


const Header = (props)=> {
    const dispatch = useDispatch();
    const history = useNavigate();
    const username = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const handleAuth = ()=>{
        if(!username){
      signInWithPopup(auth,provider).then((result)=>{
          console.log(result)
          setUser(result.user);
      }).catch((error)=>{
          alert(error.message);
      })

    } else if(username){
        auth.signOut().then(()=>{
            dispatch(setSignOutState())
            history("/")
        }).catch((error)=>{
            alert(error.message);
        })
    }
}
   
    const setUser = (user)=>{
        dispatch(setUserLoginDetails({
            name  : user.displayName,
            email : user.email,
            photo : user.photoURL,
        }))
    }
    useEffect(()=>{
           auth.onAuthStateChanged(async (user) =>{
               if(user){
                   setUser(user);
                   history("/home");
               }
           })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[username]);
return <Navbar>
         <Logo>
             <a href = "/home">
             <img src="/images/logo.svg" alt="disney+" />
             </a>
         </Logo>
         {!username ? <Login onClick = {handleAuth}> LOGIN</Login>:
         <>
         <Navmenu>
             <a href ="/home">
                 <img src ="/images/home-icon.svg" alt="home" />
                 <span>HOME</span>
             </a>
             <a href ="/search">
                 <img src ="/images/search-icon.svg" alt="search" />
                 <span>SEARCH</span>
             </a>
             <a href ="/watchlist">
                 <img src ="/images/watchlist-icon.svg" alt="watchlist" />
                 <span>WATCHLIST</span>
             </a>
        
             <a href ="/orignals">
                 <img src ="/images/original-icon.svg" alt="orignal" />
                 <span>ORIGINAL</span>
             </a>
             <a href ="/movies/">
                 <img src ="/images/movie-icon.svg" alt="movies" />
                 <span>MOVIES</span>
             </a>
             <a href ="/series/">
                 <img src ="/images/series-icon.svg" alt="series" />
                 <span>SERIES</span>
             </a>
         </Navmenu>
          <SignOut>
          <UserImage src = { userPhoto } alt= "Userphoto" />
          <Dropdown> 
              <span onClick = {handleAuth}>Sign out</span>
          </Dropdown>
          </SignOut>
         </>
         }
       </Navbar>
}
const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
  }
`;

const Navmenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
   @media (max-width: 768px) {
    display: none;
  } 
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
    cursor :pointer;
  }
`;

const UserImage = styled.img`
  height: 100%;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImage} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${Dropdown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
// const Navbar = styled.nav`
// position: fixed;
// top :0;
// left :0;
// right: 0;
// height: 70px;
// display: flex;
// justify-content:space-between;
// align-items: center;
// padding: 0 36px;
// background-color: #090b13;
// letter-spacing: 16px;
// z-index : 3;
  
// `;
// const Logo = styled.a`
// padding: 0;
// width: 80px;
// margin-top: 4px;
// max-height:70px;
// display: inline-block;
// font-size: 0;
// `;
// const Navmenu = styled.div`
// display: flex;
// align-items: center;
// height: 100%;
// justify-content: center;
// position: relative;
// margin: 0px;
// margin-right: auto;
// padding: 0;
// margin-left: 25px;
 
//   @media (max-width :768px){
//       display: none;
//   } 
//   a{
//       display: flex;
//       align-items: center;
//       padding: 0 12px;

//       img{
//           height: 25px;
//           min-width: 20px;
//           width: 20px;
//           z-index: auto;
//       }
//       span{
//           color: rgb(200,200,200);
//           font-size: 13px;
//           letter-spacing: 1.42px;
//           line-height: 1.08;
//           padding: 3px 2px 0px 4px;
//           white-space: nowrap;
//           position: relative;
      
//       &:before{
//              background-color: rgb(249,249,249);
//              border-radius:0px 0px 4px 4px;
//              bottom: -6px;
//              content: "";
//              height: 2px;
//              opacity: 0;
//              left:0px;
//              position: absolute;
//              right: 0px;
//              transform: scaleX(0);
//              transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.95) 0s;
//              visibility: hidden;
//              width: auto;

//       }
//   }
//   &:hover{
//       span{
//         color :rgb(249,249,249);
//       };
//       span::before{
//           transform: scaleX(1);
//           visibility: visible;
//           opacity: 1 !important;
//       }
//   }
//   }
// `
// const Login = styled.a`
// background-color: rgb(0 0 0 0.6);
// padding: 8px 16px;
// text-transform: uppercase;
// letter-spacing:1.5px;
// border:1px solid #f9f9f9;
// border-radius: 4px;
// transition: all .2s ease-in-out 0s;
// &:hover{
//     background-color: #f9f9f9;
//     color:#000 !important;
//     cursor: pointer;
// }
// `
// const UserImage = styled.img`
// height: 100%;
// `
// const Dropdown = styled.div`
// position: absolute;
// top: 48px;
// right:0px;
// background-color: rgb(19,19,19);
// border: 1px solid rgba(151,151,151,0.34);
// border-radius: 4px;
// box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
// font-size: 14px; 
// padding:10px;
// letter-spacing: 3px;
// width:110px;
// text-align: center;
// opacity:0;

// `
// const SignOut = styled.div`
// position: relative;
// height: 48px;
// width: 48px;
// display: flex;
// cursor: pointer;
// align-items: center;
// justify-content: center;


//  ${UserImage}{
//      border-radius: 50%;
//      height:100%;
//      width: 100%;
    
// }

// &:hover{
// ${Dropdown}{
//     opacity: 1;
//     transition-duration: 1s;
// }
//  }



// `
export default Header
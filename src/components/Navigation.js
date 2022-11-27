import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHome, faArrowCircleUp, faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Container = styled.div`
  width: 1260px;
  max-width: 1260px;
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
const LeftContainerParent = styled.div`
  width: 280px;

  @media (max-width: 768px) {
    display: none;
  }
`;
const LeftContainer = styled.div`
  width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  padding-right: 20px;
  box-sizing: border-box;
  padding-top: 0px;
  padding-bottom: 15px;
  //border-right: 1px solid;
  color : gray;
`;
const MenuContainer = styled.div``;

const MenuNav = styled.ul``;

const MenuList = styled(Link)`
  margin-bottom: 8px;
  display: inline-block;
  margin-right: 50px;
  align-items: center;
  padding: 12px 120px;
  padding-right: 25px;
  border-radius: 50px;
  box-sizing: border-box;
  cursor: pointer;

  &:link {
    color: inherit;
  }
  &:visited {
    color: inherit;
  }
  &:hover {
    background-color: };
  }
`;


const IconContainer = styled(FontAwesomeIcon)`
  width: 30px !important;
  display: inline-block;
  font-size: 24px;
  color: #009be8;
`;

const IconText = styled.span`
  display: inline-block;
  font-size: 20px;
  margin-left: 20px;
  color: white;
`;
const UserContainerLink = styled(Link)`
  color: inherit;
`;



const IconGototopButton = styled(FontAwesomeIcon)`
  font-size: 38px;
  color: white;
`;

const GototopButton = styled.button`
  position: fixed;
  bottom: 60px;
  right: 60px;
  z-index: 50;
  width: 47px;
  height: 47px;
  background: #1da1f2;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
  transition: 0.3s;

  &:hover {
    transform: scale(0.85);
  }

  @media (max-width: 768px) {
    bottom: 70px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
`;

const Navigation = ({userObj}) => {

return (
    <>

<ul style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <Link to="/" style={{ marginRight: 10 }}>
          <FontAwesomeIcon icon={faTwitter} color={"#04AAFF"} size="2x" />
        </Link>
        </ul>
        <Container>
          {/*좌측*/}
        <LeftContainerParent>
          <LeftContainer>
            <MenuContainer>
              <MenuNav>
                <MenuList to="/">
                  <IconContainer icon={faHome}></IconContainer>
                  <IconText>홈</IconText>
                </MenuList>
                <MenuList to={userObj ? "/profile" : "/"}>
                  <IconContainer icon={faUser}></IconContainer>
                  <IconText>프로필</IconText>
                </MenuList>
                <MenuList to="/friend">
                  <IconContainer icon={faUserCircle}></IconContainer>
                  <IconText>친구</IconText>
                </MenuList>
              </MenuNav>
            </MenuContainer>
            <UserContainerLink to={userObj === null ? "/" : "/profile"}>
            </UserContainerLink>
          </LeftContainer>
        </LeftContainerParent>
        {/*중앙*/}
        

        

        <GototopButton type="button" onClick={() => window.scrollTo(0, 0)}>
          <IconGototopButton icon={faArrowCircleUp}></IconGototopButton>
        </GototopButton>
        </Container>
        </>
);
};
export default Navigation;
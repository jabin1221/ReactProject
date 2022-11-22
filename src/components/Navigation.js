import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBookmark, faListAlt } from "@fortawesome/free-regular-svg-icons";
import { faHome, faEllipsisH, faCog, faSearch, faArrowCircleUp, faTimes, faUserTag, faUser, faUserCircle, faChain } from "@fortawesome/free-solid-svg-icons";
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

const MenuListSpan = styled.span`
  margin-bottom: 8px;
  display: inline-block;
  margin-right: 50px;
  align-items: center;
  padding: 12px 15px;
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
    background-color: ${(props) => (props.current === "true" ? "#1e2125" : "#eeeeee")};
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


const RightContainerParent = styled.div`
  width: 330px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightContainer = styled.div`
  width: 330px;
  padding-left: 20px;
  position: fixed;
  height: 100vh;
  border-left: 1px solid ${(props) => (props.current === "true" ? "#1e2125" : "#eee")};
`;
const RegisterContainer = styled.div``;

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
/*우측
const TrendContainer = styled.div`
  background-color: ${(props) => (props.current === "true" ? "#1e2125" : "#f8f8f8")};
  border-radius: 20px;
  padding: 20px 0px;
  margin-top: 15px;
`;
const TrendHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TrendHeaderTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-left: 17px;
`;
const IconTrendContainer = styled(FontAwesomeIcon)`
  font-size: 16px;
  margin-right: 15px;
  cursor: pointer;
`;
const TrendInfo = styled.a`
  display: flex;
  justify-content: space-between;
  padding: 13px 17px;
  margin-top: 10px;
  cursor: pointer;
  color: ${(props) => (props.current === "true" ? "#cccccc" : "#31302E")};
  &:hover {
    background-color: ${(props) => (props.current === "true" ? "#2E3336" : "#eeeeee")};
  }
`;
const TrendContent = styled.div``;
const TrendHeading = styled.h3`
  font-size: 13px;
  color: #989898;
`;
const TrendTitle = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;
const IconTrendDotContainer = styled(FontAwesomeIcon)`
  font-size: 15px;
  cursor: pointer;
  color: #989898;
`;
const SeeMore = styled.div`
  color: var(--twitter-color);
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 17px;
  &:hover {
    text-decoration: underline;
  }
`;
const FollowContainer = styled.div`
  background-color: ${(props) => (props.current === "true" ? "#1e2125" : "#f8f8f8")};
  border-radius: 20px;
  margin-top: 15px;
  padding: 20px 0px;
`;
const FollowHeader = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-left: 17px;
`;
const FollowLink = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  color: inherits;
  &:visited {
    color: inherit;
  }
`;
const FollowContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  padding: 10px 17px;
  &:hover {
    background-color: ${(props) => (props.current === "true" ? "#2E3336" : "#eeeeee")};
  }
`;
const FollowImage = styled.img`
  width: 47px;
  height: 47px;
  border-radius: 50%;
`;
const FollowInfo = styled.div`
  margin-left: 15px;
  margin-right: 20px;
`;
const FollowInfoTitle = styled.h1`
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 5px;
  color: ${(props) => (props.current === "true" ? "#cccccc" : "#31302E")};
`;
const FollowInfoDesc = styled.h2`
  font-size: 15px;
  color: ${(props) => (props.current === "true" ? "#cccccc" : "#31302E")};
`;
const FollowButton = styled.span`
  color: white;
  padding: 7px 15px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${(props) => (props.current === "true" ? "#303030" : "#272c30")};
  margin-left: auto;
`;
const PolicyContainer = styled.div`
  margin-top: 20px;
`;
const PolicyHeader = styled.div``;
const PolicyLink = styled.a`
  font-size: 11px;
  margin: 0 10px;
  color: gray;
  &:hover {
    text-decoration: underline;
  }
`;
const PolicyFooter = styled.div`
  font-size: 14px;
  margin-top: 10px;
  margin-left: 12px;
`;
*/

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
                <MenuList to="/setting">
                  <IconContainer icon={faChain}></IconContainer>
                  <IconText>공개설정</IconText>
                </MenuList>
              </MenuNav>
            </MenuContainer>
            <UserContainerLink to={userObj === null ? "/" : "/friend"}>
            </UserContainerLink>
          </LeftContainer>
        </LeftContainerParent>
        {/*중앙*/}
        

        {/*우측*/}
        {/*
        <RightContainerParent>
          <RightContainer>
            <TrendContainer>
              <TrendHeader>
                <TrendHeaderTitle>나를 위한 트렌드</TrendHeaderTitle>
                <IconTrendContainer icon={faCog}></IconTrendContainer>
              </TrendHeader>
              <TrendInfo href="https://nomadcoders.co" target="_blank">
                <TrendContent>
                  <TrendHeading>노마드코더에서 트렌드 중</TrendHeading>
                  <TrendTitle>트위터 클론</TrendTitle>
                </TrendContent>
                <IconTrendDotContainer icon={faEllipsisH}></IconTrendDotContainer>
              </TrendInfo>
              <TrendInfo href="https://nomadcoders.co/nwitter" target="_blank">
                <TrendContent>
                  <TrendHeading>페이스북, 구글에서 트렌드 중</TrendHeading>
                  <TrendTitle>리액트, 파이어베이스</TrendTitle>
                </TrendContent>
                <IconTrendDotContainer icon={faEllipsisH}></IconTrendDotContainer>
              </TrendInfo>
              <SeeMore>더 보기</SeeMore>
            </TrendContainer>
            <FollowContainer>
              <FollowHeader>팔로우 추천</FollowHeader>
              <FollowContent>
                <FollowLink>
                  <FollowImage ></FollowImage>
                  <FollowInfo>
                    <FollowInfoTitle>Nomad Coders</FollowInfoTitle>
                    <FollowInfoDesc>@Nomad Coders</FollowInfoDesc>
                  </FollowInfo>
                  <FollowButton>팔로우</FollowButton>
                </FollowLink>
              </FollowContent>
              <FollowContent >
                <FollowLink>
                  <FollowImage ></FollowImage>
                  <FollowInfo>
                    <FollowInfoTitle>Apple</FollowInfoTitle>
                    <FollowInfoDesc>@Apple</FollowInfoDesc>
                  </FollowInfo>
                  <FollowButton>팔로우</FollowButton>
                </FollowLink>
              </FollowContent>
              <FollowContent>
                <FollowLink>
                  <FollowImage ></FollowImage>
                  <FollowInfo>
                    <FollowInfoTitle>NASA</FollowInfoTitle>
                    <FollowInfoDesc>@NASA</FollowInfoDesc>
                  </FollowInfo>
                  <FollowButton >팔로우</FollowButton>
                </FollowLink>
              </FollowContent>
              <FollowContent>
                <FollowLink>
                  <FollowImage ></FollowImage>
                  <FollowInfo>
                    <FollowInfoTitle >Coding</FollowInfoTitle>
                    <FollowInfoDesc>@Coding</FollowInfoDesc>
                  </FollowInfo>
                  <FollowButton>팔로우</FollowButton>
                </FollowLink>
              </FollowContent>
              <SeeMore >더 보기</SeeMore>
            </FollowContainer>
            <PolicyContainer>
              <PolicyHeader>
                <PolicyLink href="https://twitter.com/ko/tos" target="_blank">
                  이용약관
                </PolicyLink>
                <PolicyLink href="https://twitter.com/ko/privacy" target="_blank">
                  개인정보 처리방침
                </PolicyLink>
                <PolicyLink href="https://help.twitter.com/ko/rules-and-policies/twitter-cookies" target="_blank">
                  쿠키 정책
                </PolicyLink>
                <PolicyLink href="https://business.twitter.com/en/help.html" target="_blank">
                  광고 정보
                </PolicyLink>
              </PolicyHeader>
              <PolicyFooter>© 2021 GW. ALL RIGHTS RESERVED.</PolicyFooter>
            </PolicyContainer>
          </RightContainer>
        </RightContainerParent>
        */}

        <GototopButton type="button" onClick={() => window.scrollTo(0, 0)}>
          <IconGototopButton icon={faArrowCircleUp}></IconGototopButton>
        </GototopButton>
        </Container>
        </>
);
};
export default Navigation;

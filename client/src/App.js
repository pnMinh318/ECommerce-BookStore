import "./index.css";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./bootstrap.min.css";
import store from "./redux/store";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import LoginRegister from "./pages/LoginRegister";
import dcpng from "../src/assets/Frame.svg";
import Home from "./pages/Home";
import CheckOut from "./pages/CheckOut";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import CartItems from "./pages/CartItems";
import UserProfile from "./pages/UserProfile";
import HomeAdmin from "./pages/admin/HomeAdmin";
// import UsersListAdmin from './pages/admin/UsersListAdmin';
// import UserEditAdmin from './pages/admin/UserEditAdmin';
// import ProductsListAdmin from './pages/admin/ProductsListAdmin';
import OrderDetails from "./pages/OrderDetails";
import styled from "styled-components";
const svgTest = (childElement) => (
  <svg
    id="Layer_2"
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    height={" 328.45"}
    width={" 154.51"}
    viewBox="0 0 328.45 154.51"
  >
    <g id="Sedan">
      <path
        fill="red"
        class="cls-1"
        d="M94.94,9.7c-.65,1.62,1.73,3.25,1.17,4.9H59.07s-32.38-1.41-47.63,14.56c-15.25,15.95-15.25,80.27,0,96.22,15.25,15.95,47.63,14.54,47.63,14.54h37.03c.58,1.63-1.8,3.28-1.15,4.9,2.18,5.39,4.17,10.39,11.01,9.62,0,0-1.77-8.97-3.63-14.52h72.99s101.99-.28,103.16,.1c1.17,.35,36.37-6.66,37.78-8.31,1.41-1.65,12.21-12.43,12.21-54.45s-10.8-52.81-12.21-54.45c-1.41-1.65-36.61-8.67-37.78-8.32-1.17,.39-103.16,.08-103.16,.08H102.32c1.86-5.53,3.63-14.5,3.63-14.5-6.84-.77-8.83,4.22-11.01,9.62Zm-51.66,11.28l-2.85,9.44s-25.19-.36-32.1,18.05c0-21.51,34.95-27.49,34.95-27.49Zm37.61,6.07c11.74-2.82,54.67,11.02,54.67,11.02-7.97,17.6-7.5,39.2-7.5,39.2,0,0-.46,21.6,7.5,39.2,0,0-42.93,13.84-54.67,11.03,0,0-10.78-11.28-11.97-50.22,1.18-38.95,11.97-50.22,11.97-50.22ZM8.33,106.55c6.91,18.41,32.1,18.07,32.1,18.07l2.85,9.42s-34.95-5.97-34.95-27.49Zm82.66,25.87c6.79-5.73,51.56-11.45,84.86-13.12-2.59,7.15-5.79,11.42-8.38,13.9-39.27,.1-76.77-.52-76.48-.77Zm89.12,.72c3.34-5.04,4.89-10.8,5.58-14.21,6.39-.18,12.05-.15,16.53,.11,11.07,.66,21.15,2.56,29.27,4.62-1.59,3.67-3.42,6.59-4.83,8.56-13.22,.52-29.69,.8-46.55,.92Zm51.7-1.13c1.53-2.6,2.66-5.21,3.44-7.35,10.18,2.84,16.47,5.65,16.47,5.65-4.04,.72-11.04,1.28-19.91,1.7Zm69.78-2.79c10.5-2.77,11.15-28.82,11.15-28.82l7.8-.85s-2.92,31.76-18.94,29.67Zm18.94-73.48l-7.8-.85s-.64-26.05-11.15-28.82c16.02-2.09,18.94,29.67,18.94,29.67Zm-23.25,6.08c.3,5.13,.52,10.28,.56,15.45-.04,5.17-.27,10.31-.56,15.44-.32,5.42-.84,10.86-1.83,16.21-.27,1.45-2.58,13.92-4.44,13.88,0,0-33.31-.94-50.69-9.15,0,0,2.35-11.74,2.59-36.38-.24-24.65-2.59-36.38-2.59-36.38,17.38-8.21,50.69-9.15,50.69-9.15,1.86-.04,4.17,12.42,4.44,13.88,.98,5.35,1.51,10.77,1.83,16.21Zm-45.56-37.59s-6.29,2.8-16.47,5.65c-.78-2.13-1.89-4.74-3.42-7.35,8.87,.42,15.85,.99,19.89,1.7Zm-25.06-1.93c1.41,1.96,3.24,4.89,4.83,8.57-8.12,2.05-18.2,3.96-29.27,4.62-4.48,.27-10.14,.3-16.53,.11-.69-3.41-2.25-9.18-5.58-14.22,16.85,.13,33.31,.39,46.55,.91Zm-59.18-.97c2.59,2.51,5.79,6.77,8.36,13.91-33.28-1.69-78.06-7.39-84.86-13.12-.3-.25,37.21-.89,76.49-.79Z"
      />
    </g>
    <foreignObject>{svgTire()}</foreignObject>
  </svg>
);
const commonSVG = ({ children, className, ...rest }) => (
  <div className={className} {...rest} width={100}>
    {children}
  </div>
);
const StyledSVGWrapper = styled.div`
  height: auto;
  width: 100%;
  position: relative;
  svg {
    width: 100%;
  }
  @media screen and (max-width: 400px) {
    rotate: 90deg;
  }
`;

const StyledSVG = styled.svg`
  fill: ${(props) => (props.fill ? props.fill : "")};
  width: 100%;
  height: auto;
`;
const svgTire = ({ svgStyle = {}, fill = "", children, wrapperStyle = {} }) => {
  return (
    <StyledSVG fill={fill} style={{ ...svgStyle }}>
      <g id="Layer_1-2" data-name="Layer 1">
        <path d="M0,3v1.04H4.31l2,2.04H1.65l-1.65-1.68v2.73H.73l2,2.04H0v1.04H3.8l2,2.04H1.14l-1.14-1.16v2.21H.22l2,2.04H0v1.04c0,1.65,1.35,3,3,3H49.65c1.65,0,3-1.35,3-3v-1.04h-1.86l-2-2.04h3.86v-4.12h-1.35l-2-2.04h3.35v-1.04h-4.42l-2-2.04h4.66l1.77,1.8V3c0-1.65-1.35-3-3-3H3C1.35,0,0,1.35,0,3ZM46.79,13.28l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04H4.21l-2-2.04H6.87Zm43.5-3.08l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04H7.8l-2-2.04h4.66Zm36.85-3.08l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04H4.72l-2-2.04H7.38Zm36.85-3.08l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Z" />
      </g>
      {children}
    </StyledSVG>
  );
};
const VehicleImageComponent = ({ svgStyle = {}, fill = "", children, wrapperStyle = {} }) => {
  return (
    <StyledSVGWrapper style={{ ...wrapperStyle }}>
      <StyledSVG fill={fill} style={{ ...svgStyle }}>
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M0,3v1.04H4.31l2,2.04H1.65l-1.65-1.68v2.73H.73l2,2.04H0v1.04H3.8l2,2.04H1.14l-1.14-1.16v2.21H.22l2,2.04H0v1.04c0,1.65,1.35,3,3,3H49.65c1.65,0,3-1.35,3-3v-1.04h-1.86l-2-2.04h3.86v-4.12h-1.35l-2-2.04h3.35v-1.04h-4.42l-2-2.04h4.66l1.77,1.8V3c0-1.65-1.35-3-3-3H3C1.35,0,0,1.35,0,3ZM46.79,13.28l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04H4.21l-2-2.04H6.87Zm43.5-3.08l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04H7.8l-2-2.04h4.66Zm36.85-3.08l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04H4.72l-2-2.04H7.38Zm36.85-3.08l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Zm-6.65,0l2,2.04h-4.66l-2-2.04h4.66Z" />
        </g>
        {children}
      </StyledSVG>
    </StyledSVGWrapper>
  );
};
function App() {
  return (
    <>
      <div style={{ display: "flex" }}>
        {/* <StyledSVGWrapper>{svgTest()}</StyledSVGWrapper> */}
        <StyledSVGWrapper children={svgTire({ style: { width: "200px" } })} style />
      </div>
    </>
  );
}

export default App;

import styled from "styled-components";
import {baseCss, padding} from "./baseCss";

const BaseButton= styled.button`
${baseCss};
${padding};
color: ${props=> props.theme.color};
background-color: ${props=> props.theme.backgroundColor} ;
padding: 10px 20px;
margin: 15px;
font-size: 20px;
cursor: pointer;
text-decoration: none;


`

export {BaseButton};
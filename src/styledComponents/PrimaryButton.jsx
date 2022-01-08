import styled from "styled-components";
import { BaseButton } from "./BaseButton";

const PrimaryButton= styled(BaseButton)`
color: ${props=> (props.variant==="outline" ? "#3e1cb9": "white" )};
background-color: ${props=> (props.variant==="outline" ? "white" : "#8117e4")};

&:hover{          //tek seferde sas gibi css yazmamızı sağlıyor
    color:red;
}
`;

export {PrimaryButton};
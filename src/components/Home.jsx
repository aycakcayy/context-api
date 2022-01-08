import ChangeThemeButton from "./ChangeThemeButton";
import {BiAperture} from "react-icons/bi";
import styled from "styled-components";
import {StyledButton}  from "../styledComponents/StyledButton";
import { BaseButton } from "../styledComponents/BaseButton";
import { PrimaryButton } from "../styledComponents/PrimaryButton";
import { baseCss } from "../styledComponents/baseCss";



const Home= (props) =>{
    return <> 

  
    <h1>
    <BiAperture/>
    Home
    </h1>
    <BaseButton className="mb-3" type="submit" >Base Button</BaseButton>
    <br/>
    <StyledButton  className="mb-3" as="a" href="https://google.com" >Styled Button</StyledButton>
    <br/>
    <PrimaryButton  className="mb-3" variant="outline" >Outline</PrimaryButton>
    <br/>
    <PrimaryButton  className="mb-3" variant="outline" >Primary Button</PrimaryButton> 
    <br/>
    <ChangeThemeButton/>
   
    

    </>;
}

export default Home;
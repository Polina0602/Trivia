import React from "react";
import LanguageFlags from "../multilanguage/languageFlags";
// import { Avatar } from "@mui/material";
import { useTranslation } from 'react-i18next';
import './header.css';
// import { indigo } from "@mui/material/colors";
export default function HeaderContent () {

 const { t } = useTranslation();   //translation

 return(
        <div className="header">  
         <div className="profile" > </div>
               
      
         
                <LanguageFlags /> 
          
        </div>
 )}
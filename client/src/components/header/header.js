import React from "react";
import LanguageFlags from "../multilanguage/languageFlags";
import { useTranslation } from 'react-i18next';
import './header.css';

export default function HeaderContent () {

 const { t } = useTranslation();   //translation

 return(
        <div className="header">    
                <LanguageFlags /> 
          
        </div>
 )}
import React, { useEffect } from 'react';
import { Tooltip , Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import cookies from 'js-cookie';
import LanguageIcon from '@mui/icons-material/Language';
import './flags.css';
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import classNames from 'classnames';

export default function LanguageFlags() {

       const languages = [
        {
          code: 'en',
          country_code: 'us',
          name: 'English'
        },        
        {
          code: 'he',
          country_code: 'il',
          name: 'עברית',
          dir: 'rtl'
        },  
        {
          code: 'ru',
          country_code: 'ru',
          name: 'Русский'
        },        
      ]

    const { t } = useTranslation();

    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find(l => l.code === currentLanguageCode)
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {setAnchorEl(e.currentTarget);};
    const handleClose = () => {setAnchorEl(null);};

    useEffect(() => {
      document.body.dir = currentLanguage.dir || 'ltr'     
    },[currentLanguage])

return (
<div className='flags'>
<Tooltip title={t('language')} arrow>
  <IconButton  color="inherit" onClick={handleClick} size="small" sx={{ ml: 2 }}>
    <LanguageIcon style={{width:'32px', height:'32px'}}/>
  </IconButton>
</Tooltip>
<Menu 
  anchorEl={anchorEl}
  open={open}
  onClose={handleClose}
  onClick={handleClose}
  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
  disableScrollLock={true}
  PaperProps={{
    elevation: 0,
    sx: {
      overflow: 'visible',
      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
      mt: 1.5,
      bgcolor: '#F8F8F8',
      '& .MuiAvatar-root': {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
      },
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: '#F8F8F8',
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 0,        
      },
    },
  }}
>
  {languages.map(({ code, name, country_code}) => (
    <Tooltip title={name} arrow placement='left'>
      <MenuItem key={country_code} style={{
        backgroundColor: currentLanguageCode === code ? '#D8D8D8' : '#F8F8F8',      
        border: currentLanguageCode === code ? '1px solid #989898' : '#F8F8F8'             
      }}>
      <IconButton 
        className={classNames('dropdown-item')}
        onClick={() => {
          i18next.changeLanguage(code);          
      }}>
      <Box style={{height:10, fontSize:'small'  }} >
        <img width="20" 
          src={`https://flagcdn.com/w20/${country_code}.png`}
          srcSet={`https://flagcdn.com/w40/${country_code}.png 2x`}
          alt="" />{name}
      </Box>
     
      </IconButton>  
      </MenuItem>    
    </Tooltip>                                   
  ))}
  
</Menu></div>
)}
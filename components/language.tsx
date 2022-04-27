import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next';

const Language: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<
    (EventTarget & HTMLDivElement) | null
  >(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any, lang: string) => {
    setAnchorEl(null);
    i18n.changeLanguage(lang);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='w-8 h-8 absolute top-4 right-32'>
      <div
        className='text-2xl'
        onMouseEnter={(event) => setAnchorEl(event.currentTarget)}
      >
        {i18n.language}
      </div>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={(e) => handleClick(e, 'fr')} key='fr'>
          FR
        </MenuItem>
        <MenuItem onClick={(e) => handleClick(e, 'en')} key='en'>
          EN
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Language;

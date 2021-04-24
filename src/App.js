import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Drawer, Typography, MenuList, MenuItem } from '@material-ui/core';
import {menus, content} from './const';
import { ExitToApp, HelpOutline} from '@material-ui/icons';

function App() {

  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <div className="App">
      <Drawer variant="permanent" className="sidebar">
        <div className="logo">
          <img src={logo} alt=""/>
        </div>
        <div className="center-menu">
          <MenuList>
            {
              menus.map((menu, key) => (
                <MenuItem
                  key={key}
                  onClick={() => setActiveMenu(key)}
                  selected={key === activeMenu}
                  >
                  {menu.icon}
                </MenuItem>
              ))
            }
          </MenuList>
        </div>
        <div className="bottom-menu">
          <MenuList>
            <MenuItem><HelpOutline/></MenuItem>
            <MenuItem><ExitToApp/></MenuItem>
          </MenuList>
        </div>
      </Drawer>
      <main className="main-content">
        <AppBar className="header" color="transparent">
          <Typography variant="h4">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Typography>
        </AppBar>
        <div className="content">
          {content[activeMenu]}
        </div>
      </main>
    </div>
  );
}

export default App;

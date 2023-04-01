import React from 'react';
import logo from './logo.svg';
import { Button, BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import LocalPizzaRoundedIcon from '@mui/icons-material/LocalPizzaRounded';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import RecipeList from './components/RecipeList/RecipeList'
import './App.css';

function App() {

  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
  }, [value]);

  function renderBottomNavigation() {
    return ( 
      <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
        <BottomNavigationAction label="Recipes" icon={<LocalPizzaRoundedIcon />} />
        <BottomNavigationAction label="Groceries" icon={<ShoppingBasketOutlinedIcon />} />
        <BottomNavigationAction label="Meal Plan" icon={<RestaurantOutlinedIcon />} />
        <BottomNavigationAction label="Settings" icon={<SettingsOutlinedIcon />} />
      </BottomNavigation>
      )
  }


  return (
    <Box ref={ref}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <RecipeList />
          <div>
            <Button variant="contained">Hello World</Button>
          </div>
          { renderBottomNavigation() }
        </header>
      </div>
    </Box>
  );
}

export default App;

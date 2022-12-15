import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    return setIsDarkMode((isDarkMode) => !isDarkMode);
  }
//deliverableOne is just passing onDarkModeClick into another function
// also re moving what is below into Header component
  return (
    <div>
      <ShoppingList items={itemData} /><Header onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode}/>
    </div>
  
  );
}

export default App;

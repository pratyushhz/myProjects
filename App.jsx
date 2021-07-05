import React from 'react';
import SlotM from './SlotMachine';






// create component with the help of FAT Arrow function
const App =() => {
    return (
    <>
        <h1 className="heading_style">
            🎰 Welcome to <span style= {{ fontWeight:'bold'  }}>Slot Machine Game</span> 🎰
        </h1>
        <div className="slotMachine">
            <SlotM x= '😃'  y='😃' z='😃' />
            <SlotM x= '😺'  y='🍌' z='🐒' />
            <SlotM x= '⚾'  y='🏀' z='🍺'  />
            <SlotM x= '💑'  y='💑' z='💑'  />
        </div>
    </>

    )

};

export default App;


















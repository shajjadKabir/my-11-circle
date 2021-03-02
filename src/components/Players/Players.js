import React, {useState, useEffect } from 'react';
import Player from '../Player/Player';
import players from '../fakeData/data.json';
import Sidebar from '../Sidebar/Sidebar';
import './players.css';

const Players = () =>{
const [player, setPlayer] = useState([]);
const [cart,setCart] = useState([]);
  
useEffect(() => {
  setPlayer(players);
}, [])
  
const addToCartHandler = (player) => {
  const newCart = [...cart, player];
  setCart(newCart);
}
 
  return (
   <>
     <div className="players_list">
            <div className="players">
                {
                    players.map(player => <Player addToCartHandler={addToCartHandler} key={player.id} player={player}></Player>)
                }
            </div>
            <div className="player_card list-group my-4">
           
              <Sidebar cart={cart} />
            </div>
      </div>
    </> 
    );
};

export default Players;
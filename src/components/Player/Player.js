import React,{useState} from 'react';

const Player = (props) => {
    const { name, transferFee ,club, image } = props.player;
    const [ isClicked, setIsClicked ] =  useState(false);

    return (
        <div className="single-player col py-2">
            <div className="card col-md-12 border-end">
                <img src={image} class="rounded px-2 py-2 d-block" alt="..." />
                <div className="card-body">
                    <h5 className="card-title  py-2">Player Name :{name}</h5>
                    <h5 className="card-title  py-2">Club : {club}</h5>
                    <h5 className="card-title  py-2">Transfer Fee : ${transferFee}m</h5>
                    <button disabled={isClicked} onClick={() =>  {
                        props.addToCartHandler(props.player)
                        setIsClicked(true) 
                     }} className="btn btn-success">
                        {isClicked ? "✓ Already add " : "Add to squad"}
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Player;
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ cart }) => {
    const total = cart.reduce((acc, curr) => acc + curr.transferFee, 0)
    return (
        <aside className="player_card col-md-12 ps-5">
            <h1 className="lead">Player Added in Team : ({cart.length})</h1> <br/>
            <div className="d-grid">
                <button className="btn btn-outline-success">
                    <p> Total Cost - ${total}m</p>
                </button>
            </div> 
        <div className="py-3">
            {
                cart.map(cart => {
                    return (
                        <section className="py-2">
                            <div className="card col-md-12 border-end">
                                    <img src={cart.image} class="rounded px-2 py-2 d-block" alt={cart.image} />
                                <div className="card-body">
                                    <h5 className="py-2">Player Name : {cart.name}</h5>
                                    <h5 className="py-2">Club : {cart.club}</h5>
                                    <h5 className="py-2">Transfer Fee : ${cart.transferFee}m</h5>
                                </div>
                            </div>
                        </section>
                    )
                })
            }
         </div>
    </aside>
    );
};

export default Sidebar;

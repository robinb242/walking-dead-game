import React from "react";
import './Header.css';
//Set Click Status to null, ternary operator to handle the if/else Statement

const Header = props =>

    <div className='headerContainer'>
        <div className="row">
            <div className="col-lg-4" id="idOne">
                <h1 className='one'>Walking Dead Clicky Game</h1>
            </div>
            <div className="col-lg-4" id="idTwo">
                <h1 className='two'>{props.clickStatus === "" ? "Click an image to begin!" : props.clickStatus === "true" ? "You guessed correctly!" : "Incorrect! Try Again."}</h1>
            </div>
            <div className="col-lg-4" id="idThree">
                <h1 className='three'>Score:{props.score} | Top Score:{props.topScore}</h1>
            </div>
        </div>
            <p className='instructions'>
                Try to click all of the characters just once, if you click a character twice the game will reset. Good Luck!
            </p>
    </div>

export default Header;

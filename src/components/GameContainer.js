

import React, { Component } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Main from "./Main";
import Footer from "./Footer";
import './GameContainer.css';

class GameContainer extends Component {
    state = {
        score: 0,
        topScore: 0,
        clickStatus:"",
        results: [
            {
                imgId:0,
                imgUrl: "/assets/chadColeman.png",
                imgAlt: "Tyreese",
                imgClickStatus: false
            },

            {
                imgId:1,
                imgUrl: "/assets/rick.png",
                imgAlt: "Rick",
                imgClickStatus: false
            },
  

            {
                imgId:2,
                imgUrl: "/assets/emilyKinney.png",
                imgAlt: "Beth",
                imgClickStatus: false
            },


            {
                imgId:3,
               imgUrl: "/assets/sasha.png",
                imgAlt: "Sasha",
                imgClickStatus: false
            },


            {
                imgId:4,
                imgUrl: "/assets/glenn.png",
                imgAlt: "Glenn",
                imgClickStatus: false
            },


            {
                imgId:5,
                imgUrl: "/assets/chandlerRiggs.png",
                imgAlt: "Carl",
                imgClickStatus: false
            },

            {
                imgId:6,
                imgUrl: "/assets/danaiGurira.png",
                imgAlt: "Michonne",
                imgClickStatus: false
            },

            {
                imgId:7,
                imgUrl: "/assets/melissaMcbride.png",
                imgAlt: "Carol",
                imgClickStatus: false
            },
            
            {
                imgId:8,
                imgUrl: "/assets/daryl.png",
                imgAlt: "Daryl",
                imgClickStatus: false
            },

            {
                imgId:9,
                imgUrl: "/assets/maggie.png",
                imgAlt: "Maggie",
                imgClickStatus: false
            },

            {
                imgId:10,
                imgUrl: "assets/scottWilson.png",
                imgAlt: "Herschel",
                imgClickStatus: false
            },

            {
                imgId:11,
                imgUrl: "assets/morrissey.png",
                imgAlt: "The Governor",
                imgClickStatus: false
            }



  
        ]


    };

    componentDidMount = () => {
        this.shuffle(this.state.results);
    };

    shuffle = resultsArr => {
        let currentIndex = resultsArr.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = resultsArr[currentIndex];
            resultsArr[currentIndex] = resultsArr[randomIndex];
            resultsArr[randomIndex] = temporaryValue;
        }
        this.setState({
            results:resultsArr
        });
    };

    updateScore = () => {
        this.setState({
            score: this.state.score + 1
        });
    };

    updateTopScore = () => {
        this.setState({
            topScore: this.state.topScore + 1
        });
    };

    emptyScore = () => {
        this.setState({
            score: 0
        });
    };

    handleImageClick = imgId => {
        let result = this.state.results;
        let resultIdx = -1;
        for(let i=0;i<result.length;i++)
        {
            if(result[i].imgId === imgId) resultIdx = i;
        }
        if(!this.state.results[resultIdx].imgClickStatus)
        {
            result[resultIdx].imgClickStatus = true;
            this.updateScore();
            if(this.state.score >= this.state.topScore)
            {
                this.updateTopScore();
            }
            this.setState({
                clickStatus:"true",
                result
            });
        }
        else
        {
            this.setState({
                clickStatus:"false"
            });
            this.state.results.map(data => data.imgClickStatus = false);
            this.emptyScore();
        }
        this.shuffle(this.state.results);
    };

    render() {
        return (
            <div className='container'>
              <Banner />
                <Header
                    score={this.state.score}
                    topScore={this.state.topScore}
                    clickStatus={this.state.clickStatus}
                />
              
                <Main
                    results={this.state.results}
                    handleImageClick={this.handleImageClick}
                />
                <Footer />
            </div>
        );
    }
}

export default GameContainer;
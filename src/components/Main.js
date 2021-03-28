import React from "react";
import "./main.css" 

let imageEdit = {
    width:150,
    height:150,
    margin: 0,
    padding: 0
};

let borderEdit = {
    borderWidth:0.5,
    borderColor:"#FFFFFF",
    borderRadius: 4,
    borderStyle: "solid",
    width:180,
    height:150,
    margin:30,
    
};

const Main = props =>
    <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
            <div className="row">
                {props.results.map(data =>
                    <div className="col-lg-2" style={borderEdit} onClick={props.handleImageClick.bind(null, data.imgId)}>
                        <img className="img-responsive" style={imageEdit} alt={data.imgAlt} src={data.imgUrl}/>
                    </div>
                )}
            </div>
        </div>
        <div className="col-lg-2"></div>
    </div>

export default Main;

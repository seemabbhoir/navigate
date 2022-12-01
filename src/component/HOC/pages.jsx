import axios from "axios";
import React from "react";
import HOC from "./hoc";
const Pages = (props) => {
  return (
    <>
      <h1>pages</h1>
      {props.info &&
        props.info.slice(0, 10).map((item, index) => {
          return (
            <div className="col-md-12 my-3" key={index}>
              <div className="card text-left">
                <div className="card-body">
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-text">{item.body}</p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

// class Pages extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             postData:[]

//         }
//     }

//     componentDidMount(){
//         axios.get("https://jsonplaceholder.typicode.com/posts").then((resp) => this.setState({postData:resp.data}))
//     }
//     render(){
//
//     }
// }

export default HOC(Pages, "https://jsonplaceholder.typicode.com/posts");

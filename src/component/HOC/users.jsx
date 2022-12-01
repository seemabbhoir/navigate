import React from "react";
import HOC from "./hoc";


const Users = (props) => {
    return(
        <>
        <h1>users</h1>
        {props.info &&
          props.info.map((item, index) => {
            return (
              <div className="col-md-12 my-3" key={index}>
                <div className="card text-left">
                  <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text">{item.email}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </>
    )
}





// class Users extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userData: [],
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((resp) => resp.json())
//       .then((data) => this.setState({ userData: data }));
//   }

//   render() {
//     return (
     
//     );
//   }
// }

export default HOC(Users,"https://jsonplaceholder.typicode.com/users" );

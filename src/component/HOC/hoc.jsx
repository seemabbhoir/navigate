import React from "react";

const HOC = (WrapperComponent, fetchAPI) =>{
    class HOC extends React.Component{
    
        constructor(props){
            super(props);
            this.state={
                data: [],
            };
        }

        componentDidMount(){
            fetch(fetchAPI).then(resp=> resp.json()).then(newData=> this.setState({data: newData}));
        }

        render(){
            if(this.state.data.length <1 )return <h1>Loading ....</h1>;
            return<WrapperComponent info={this.state.data} />;
        }
    }
    return HOC;
}

export default HOC;
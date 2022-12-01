import React from "react";
import Pages from "./HOC/pages";
import Users from "./HOC/users";

class HighOrderCom extends React.Component{

    render(){

        return(
            <>
            <div className="row">
                <div className="col-md-6">
                    <Pages />
                </div>
                <div className="col-md-6">
                    <Users />
                </div>
            </div>
            </>
        )
    }
}

export default HighOrderCom;
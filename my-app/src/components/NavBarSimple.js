import React, { Component } from "react";
import css from "./css/NavBarSimple.module.css";


class NavBarSimple extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            message: "Hello Guest!",
            buttonText: "Login"
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
          console.log("Previous State:", prevState);
          console.log("Previous Props:", prevProps);
          return {
            introduction:
              prevState.message === "Hello Guest!" ? "Welcome Back User!" : "Hello Guest!",
            buttonText: prevState.buttonText === "Login" ? "Log out" : "Login",
          };
        });
    }

    render() {
        return (
            <div className = {css.NavBar}>
                <h1>
                    My Gallery
                </h1>
                <span>
                    {this.state.message}
                </span>
                <button onClick={() => this.handleClick()}>
                    {this.state.buttonText}
                </button>
            </div>
        );
    }
}

export default NavBarSimple;
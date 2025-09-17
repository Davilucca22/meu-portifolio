import React from "react";
import Main from "./Main/main";
import Header from "./Header/header"
import Footer from "./Footer/footer";

export default function Body(){
    return(
        <div className="container">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

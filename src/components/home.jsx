import React from "react";
import Main from "./main";
import Form from "./form";
import CarGallery from "./carGallery";
import Card from "./card";

function Home() {
    return (
        <React.Fragment>
            <Main />
            <Form />
            <CarGallery />
            <Card />
        </React.Fragment>
    )
}

export default Home;
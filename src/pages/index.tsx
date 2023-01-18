import React from "react";
import { Layout } from "../components/Layout";
import { Main } from "../components/Main";
import "../scss/index.scss";

const Index = () => {
    return (
        <Layout>
            <Main path={"/*"} />
        </Layout>
    );
};

export default Index;

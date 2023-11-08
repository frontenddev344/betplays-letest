import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import TermandConditionPage from "../../components/term-and-condition/index";
import { TabTitle } from "../../utils/genralfunction";
import { TermandConditionWrapper } from "./style";

export default function TermandCondition() {
    TabTitle('Termand Condition');
    return (
        <>
            <TermandConditionWrapper>
                <Header />
               <TermandConditionPage />
                <Footer />
            </TermandConditionWrapper>
        </>
    )
}
import React from "react";
import { PrivacyPolicyWrapper } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import PrivacyPolicyPage from "../../components/privacy-policy/index";
import { TabTitle } from "../../utils/genralfunction";

export const PrivacyPolicy = () => {
    TabTitle('Privacy Policy');
    return (
        <>
            <PrivacyPolicyWrapper>
                <Header />
                <PrivacyPolicyPage />
                <Footer />
            </PrivacyPolicyWrapper>
        </>
    )
}
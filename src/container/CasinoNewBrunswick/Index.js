import React from "react";
import { CasinonewbrunsWrapper } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import SlideBanner from "../../components/CasinoNewBrunswick/banner/Banner";
import Accrodition from "../../components/CasinoNewBrunswick/accordition";
import WhyChoose from "../../components/CasinoNewBrunswick/why-choose";
import WhatWeOfferTwo from "../../components/CasinoNewBrunswick/what-we-offers-Two";
import Entertenment from "../../components/CasinoNewBrunswick/entertainment/index";
import { TabTitle } from "../../utils/genralfunction";


export default function CasinoNewBruBrunswick() {
    TabTitle('Casino New Bru Brunswick');
    return (
        <>
            <CasinonewbrunsWrapper>
                <Header />
                <SlideBanner />
                <WhyChoose />
                <WhatWeOfferTwo />
                <Entertenment />
                <Accrodition />
                <Footer />

            </CasinonewbrunsWrapper>
        </>
    )
}


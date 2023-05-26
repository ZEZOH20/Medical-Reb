import React from 'react'
import '../styles/Categories.css'
import DrugsList from '../components/DrugsList'
import val from '../images/valsatens-plus160_1.png'
import nex from '../images/nexture.png'
import nat from '../images/Natrilix-sr.png'
import flo from '../images/floxamo.png'

export let DUMMY_DATA = [
    {
        id:1,
        image: val,
        title: "Valsatens-Plus",
        price: "Price Range: US$5~US$20/Kg",
        categories:"Categories: Cardiovascular System",
        company:"Company: Lorem ipsum dolor",
        composition: " Contains amoxicillin trihydrate and flucloxacillin sodium monohydrate equivalent to Amoxicillin 500 mg.",
        usage1:"Skin and soft tissue infections.",
        usage2:"Bone and joint infections.",
        usage3:"Upper and lower respiratory tract infections.",
        Adverse_Effects: "Floxamo® is well tolerated but in rare cases diarrhea, nausea or cholestatic jaundice which is reversible, may occur.",
        Dosage_Administration: "Dose for adults: one tablet every 8 hours (every 6 hours in severe infections).  Dose for children (8-16years): 1/2 tablet every 8 hours. ",

    },
    {
        id:2,
        image: nex,
        title: "Nexicure",
        price: "Price Range: US$5~US$20/Kg",
        categories:"Categories: Cardiovascular System",
        company:"Company: Lorem ipsum dolor",
        composition: " Contains amoxicillin trihydrate and flucloxacillin sodium monohydrate equivalent to Amoxicillin 500 mg.",
        usage1:"Skin and soft tissue infections.",
        usage2:"Bone and joint infections.",
        usage3:"Upper and lower respiratory tract infections.",
        Adverse_Effects: "Floxamo® is well tolerated but in rare cases diarrhea, nausea or cholestatic jaundice which is reversible, may occur.",
        Dosage_Administration: "Dose for adults: one tablet every 8 hours (every 6 hours in severe infections).  Dose for children (8-16years): 1/2 tablet every 8 hours. ",

    },
    {
        id:3,
        image: nat,
        title: "Natrilix SR",
        price: "Price Range: US$5~US$20/Kg",
        categories:"Categories: Cardiovascular System",
        company:"Company: Lorem ipsum dolor",
        composition: " Contains amoxicillin trihydrate and flucloxacillin sodium monohydrate equivalent to Amoxicillin 500 mg.",
        usage1:"Skin and soft tissue infections.",
        usage2:"Bone and joint infections.",
        usage3:"Upper and lower respiratory tract infections.",
        Adverse_Effects: "Floxamo® is well tolerated but in rare cases diarrhea, nausea or cholestatic jaundice which is reversible, may occur.",
        Dosage_Administration: "Dose for adults: one tablet every 8 hours (every 6 hours in severe infections).  Dose for children (8-16years): 1/2 tablet every 8 hours. ",

    },
    {
        id:4,
        image: flo,
        title: "Floxamo",
        price: "Price Range: US$5~US$20/Kg",
        categories:"Categories: Cardiovascular System",
        company:"Company: Lorem ipsum dolor",
        composition: " Contains amoxicillin trihydrate and flucloxacillin sodium monohydrate equivalent to Amoxicillin 500 mg.",
        Adverse_Effects: "Floxamo® is well tolerated but in rare cases diarrhea, nausea or cholestatic jaundice which is reversible, may occur.",
        usage1:"Skin and soft tissue infections.",
        usage2:"Bone and joint infections.",
        usage3:"Upper and lower respiratory tract infections.",
        Dosage_Administration: "Dose for adults: one tablet every 8 hours (every 6 hours in severe infections).  Dose for children (8-16years): 1/2 tablet every 8 hours. ",


    },
  ];

function Categories() {
    return (
            <section className='mt-3'>
                <h1 className='Categories'>CARDIOVASCULAR SYSTEM</h1>
                <DrugsList drugs={DUMMY_DATA} />
            </section>
    )
}

export default Categories

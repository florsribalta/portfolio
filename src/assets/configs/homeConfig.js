import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Flors Ribalta </strong>
        </h1>,
    titles: [
        "Data Scientist",
        "Machine Learning Developer",
        "Data Product Analyst",
        "Experimentation"
    ],
    about: {
        start: "I've been working as an analyst for more than 6 years, working on B2B to B2C Products," +
            " with a wide range of stakeholders, from business to technical." +
            " I have experience using models to analyse (advanced analytics or data mining) and to create ML based products," +
            " and spreading the word of data to any type of stakeholders ",
        exit: "I'm fluent at Python, Pyspark, SQL, BI tools (Looker, Tableau and Power BI)," +
            "with a deep interest in machine learning."
    },
    workTimeline: [
        {
            id: "work-5",
            title: "Product Data Analyst - Next Best Action (Personalization)",
            company: "Vistaprint",
            description: <p>  
                    <ul><li>Model feature creation that helped the model identify 5 more targets of people with uplift.</li>
                    <li>Analyses and definition of the test plan to evaluate the model performance.</li>
                    <li>Long-term financial return of the models.</li>
                    <li>Using models to predict the probability to become our higher performer group of customers and understand what are the attributes that make them be high performer.</li>
                    <li>Design of all the reporting.</li>
                    <li>Story telling to the developers and also business people to help them understand our models. (from technical to business stakeholders).</li>
                    <li>Scrapping campaigns to retrieve metadata to help the model understand the inputs to choose from.</li></ul> </p> ,
            date: "Jul 2022 — Present",
            icon: <DiCodeigniter/>,
            tags: ["ml", "automl", "python", "docker", "redshift", "superset"]
        },
        {
            id: "work-4",
            title: "Product Data Analyst - Product Recommendations & Site Search",
            company: "Vistaprint",
            description: <p>  
                    <ul><li>Refactoring of all code into DBT pipeline.</li>
                    <li>Design and Execution of Site Search Experiment Plan & Tracking Plan Creation.</li>
                    <li>Working with the model to get more accurate tags to help the search be more accurate.</li>
                    <li>Creating all the reporting structure with the events the web throws. Event management and organizationwith the developers. (segment event tracker)</li>
                    <li>Product Recommendations home page with all the different dashboards to monitor product recommendations algorithms.</li></ul> </p> ,
            date: "Aug 2021 — Jul 2022",
            icon: <DiCodeigniter/>,
            tags: ["ml", "automl", "python", "docker", "redshift", "superset"]
        },
        {
            id: "work-3",
            title: "Product Data Analyst - Business Performance Monitoring",
            company: "Vistaprint",
            description: "",
            date: "2021-present",
            icon: <DiCodeigniter/>,
            tags: ["ml", "automl", "python", "docker", "redshift", "superset"]
        },
        {
            id: "work-2",
            title: "Analyst - 3D Printing Services",
            company: "HP Inc",
            description: <p>  
                Impact and Optimisation of operations in cost of the P&L using:
                    <ul><li>Predictive modelling</li>
                    <li>Time Series to control shipments and parts sent to repairs.</li>
                    <li>Reporting generation and analytics for business partners from all over the world.</li></ul> </p> ,
            date: "Jun 2018 — Jun 2020",
            icon: <FaMobileAlt/>,
            tags: ["ml", "airflow", "python", "docker", "snowflake", "postgres", "azure"]
        },
        {
            id: "work-1",
            title: "R&D - 3D Project Coordinator",
            company: "HP Inc",
            description: "Creation of a playbook for sales to access the different markets where 3D Printing can apply.",
            date: "Mar 2018 — Jun 2018",
            icon: <GiCommercialAirplane/>,
            tags: ["Excel", "Power BI","PowerPoint", "Prezi", "MySQL"]
        },
        {
            id: "work-0",
            title: "Market Researcher & Marketing Planner",
            company: "Adding Plus Consultancy",
            description: "Market Access Analysis and Product Development",
            date: "Sep 2017 — Mar 2018",
            icon: <BsClipboardData/>,
            tags: ["Excel", "Power BI"]
        }
    ]
}


export default homeConfig
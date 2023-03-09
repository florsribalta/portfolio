import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Flors Ribalta</strong>
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
            description: "Build AutoML models and make them available to non-technical " +
                "users from a graphical interface.",
            date: "2021-present",
            icon: <DiCodeigniter/>,
            tags: ["ml", "automl", "python", "docker", "redshift", "superset"]
        },
        {
            id: "work-4",
            title: "Product Data Analyst - Product Recommendations & Site Search",
            company: "Vistaprint",
            description: " ",
            date: "2021-present",
            icon: <DiCodeigniter/>,
            tags: ["ml", "automl", "python", "docker", "redshift", "superset"]
        },
        {
            id: "work-3",
            title: "Product Data Analyst - Business Performance Monitoring",
            company: "Vistaprint",
            description: "Creation of the companies weekly reporting deck containing all the metrics of the business using Looker " +
                "and modelling anomaly detection.",
            date: "2021-present",
            icon: <DiCodeigniter/>,
            tags: ["ml", "automl", "python", "docker", "redshift", "superset"]
        },
        {
            id: "work-2",
            title: "Analyst - 3D Printing Services",
            company: "HP Inc",
            description: 
                "Impact and Optimisation of operations in cost of the P&L using <br>" +
                "predictive modelling, " +
                "time series and " +
                "generating BI dashboards for business stakeholders worlwide.",
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
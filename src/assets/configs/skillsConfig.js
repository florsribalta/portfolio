import {
    SiPython,
    SiPostgresql,
    SiMicrosoftsqlserver,
    SiDocker,
    SiMicrosoftazure,
    SiRedis,
    SiReact,
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiWindowsterminal,
    SiSnowflake,
    SiApacheairflow,
    SiApachekafka,
    SiPowerbi,
    SiDatabricks,
    SiApachespark,
    SiLooker,
    SiDbt,
    SiJupyter,
    SiTableau
} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import {FaGitAlt} from "react-icons/fa";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiApachespark size={50}/>,
            text: "PySpark"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiSnowflake size={50}/>,
            text: "Snowflake"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiDatabricks size={50}/>,
            text: "Databricks"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiLooker size={50}/>,
            text: "Looker"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiDbt size={50}/>,
            text: "DBT"
        }  
    ],
    complementarySkills: [
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <GrMysql size={50}/>,
            text: "MySQL"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiWindowsterminal size={50}/>,
            text: "Bash"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiJupyter size={50}/>,
            text: "Jupyter"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiApacheairflow size={50}/>,
            text: "Airflow"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiHtml5 size={50}/>,
            text: "HTML 5"
        },
        {
            id: "skills-15",
            className: "skill-icon",
            icon: <SiPowerbi size={50}/>,
            text: "Power BI"
        },
        {
            id: "skills-15",
            className: "skill-icon",
            icon: <SiTableau size={50}/>,
            text: "Tableau"
        }
    ]
}

export default skillsConfig

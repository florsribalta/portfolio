import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import sklearnGenetic from "../images/sklearn_genetic_opt.png"
import graphEmbeddings from "../images/graph_embeddings.png"
import kafkaMl from "../images/kafkaml.png"
import scikitPipes from "../images/scikit_pipes.png"
import portfolio from "../images/portfolio.png"

import React from 'react'

const projectConfig = [
    {
        id: "project-5",
        title: "Tipologia",
        links: [
            {
                name: "repo",
                url: "https://github.com/florsribalta/Tipologia",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/florsribalta/Tipologia/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/florsribalta/Tipologia/subscription",
                icon: <AiFillEye/>,
            }
        ],
        image: sklearnGenetic,
        description: "scikit-learn models hyperparameters tuning and feature selection, using evolutionary algorithms.",
        target: "_blank"
    }
    ,{
        id: "project-5",
        title: "Tipologia",
        links: [
            {
                name: "repo",
                url: "https://github.com/florsribalta/Tipologia",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/florsribalta/Tipologia/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/florsribalta/Tipologia/subscription",
                icon: <AiFillEye/>,
            }
        ],
        image: sklearnGenetic,
        description: "scikit-learn models hyperparameters tuning and feature selection, using evolutionary algorithms.",
        target: "_blank"
    },
    {
        id: "project-4",
        title: "Graphs Embeddings",
        links: [
            {
                name: "repo",
                url: "https://github.com/rodrigo-arenas/Graph-Embeddings",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/rodrigo-arenas/Graph-Embeddings/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/rodrigo-arenas/Graph-Embeddings/subscription",
                icon: <AiFillEye/>,
            },
            {
                name: "docs",
                url: "https://graph-embeddings.readthedocs.io/",
                icon: <ImBook/>,
            }
        ],
        image: graphEmbeddings,
        description: "Graph embeddings for downstream tasks.",
        target: "_blank"
    },

]

export default projectConfig
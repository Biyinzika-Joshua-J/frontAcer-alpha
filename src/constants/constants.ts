import { faHtml5, faCss3, faJs, faGit, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons"


export const sidebarLinks = [
    {
        route:'/learn/quizs',
        label:'Quiz'
    },
    {
        route:'/learn/ui',
        label:'UI Challenges'
    },
    {
        route:'/learn/algorithms',
        label:'Algorithms'
    },
]

export const Quizs = [
    {
        name : 'HTML',
        questions : 30,
        progress : 40,
        icon : faHtml5,
    },
    {
        name : 'CSS',
        questions : 32,
        progress : 30,
        icon : faCss3,
    },
    {
        name : 'JavaScript',
        questions : 35,
        progress : 60,
        icon : faJs,
    },
    {
        name : 'React JS',
        questions : 33,
        progress : 50,
        icon : faReact,
    },
    {
        name : 'Vue JS',
        questions : 40,
        progress : 80,
        icon : faVuejs,
    },
    {
        name : 'Git',
        questions : 50,
        progress : 35,
        icon : faGit,
    },
]
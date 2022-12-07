import {Week, WeekEvent} from '../types/WeekEvent';

export const Weeks : Week[] = [
    {
        id : 0,
        label : "Pre-Registration",
    },
    {
        id : 1,
        label : "Week 1",
        date : "6 Jan - 12 Jan",
    },
    {
        id : 2,
        label : "Week 2",
        date : "13 Jan - 19 Jan",
    },
    {
        id : 3,
        label : "Week 3",
        date : "20 Jan - 26 Jan",
    },
]

export const WeekEvents : WeekEvent[][] = [
    [
        {
            id : 0,
            date : "12 Dec - 30 Dec",
            title : "Fintech Month Hackathon Registration",
            label : "Fintech Month Hackathon",
        },
        {
            id : 1,
            date : "12 Dec - 30 Dec",
            title : 'Workshop Registration',
            label : "Fintech Month Hackathon",
        }
    ],
    [
        {
            id : 0,
            date : "1 Jan",
            time : "10am-11.30am",
            venue : "COM1-B1",
            title : "Navigating the Payments Space in the Digital Age & Careers in Fintech Startups",
            label : "Workshop",
            speakerInfo : [
            {
                id : 1,
                organisation : "Organisation",
                speaker : "Speaker",
                position : "Position",
            },
        ]
        },
        {
            id : 0,
            date : "1 Jan",
            time : "10:00AM-11:30AM",
            title : "Start Of Ideation",
            label : "Fintech Month Hackathon",
        },
        {
            id : 1,
            date : "6 Jan",
            time : "08:00AM-18:00PM",
            title : "Opening Address",
            label : "Fintech Month",
        },
        {
            id : 2,
            date : "6 Jan",
            time : "08:00AM-18:00PM",
            title : "Opening Address",
            label : "Fintech Month",
        },
        {
            id : 3,
            date : "12 Jan",
            time : "10:00AM-11:30AM",
            title : "Ideation Result Release",
            label : "Panel Discussion",
            venue : "COM1-B1",
            speakerInfo : [
                {
                    id : 0,
                    organisation : "Organisation",
                    speaker : "Speaker",
                    position : "Position",
                },
                {
                    id : 1,
                    organisation : "Organisation",
                    speaker : "Speaker",
                    position : "Position",
                },
                {
                    id : 2,
                    organisation : "Organisation",
                    speaker : "Speaker",
                    position : "Position",
                },
                {
                    id : 3,
                    organisation : "Organisation",
                    speaker : "Speaker",
                    position : "Position",
                }
            ]
        }
    ],
    [
        {
            id : 0,
            date : "13 Jan",
            time : "10am-11.30am",
            title : "Hackathon Prototyping",
            label : "Fintech Month Hackathon",
        },
        {
            id : 1,
            date : "15 Jan",
            time : "10:00AM-11:30AM",
            title : "Prototyping Submission",
            label : "Fintech Month Hackathon",
        },
        {
            id : 2,
            date : "9 Jan",
            time : "10am-11.30am",
            title : "Prototyping Results Release",
            label : "Fintech Month Hackathon",
        },
    ],
    [],
]
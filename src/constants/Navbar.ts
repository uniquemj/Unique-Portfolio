import {Compass, ChartColumnDecreasing, Medal} from "lucide-react";

export const NAV_OPTIONS = [
    {   
        id: 1,
        label: "STATS",
        logo: ChartColumnDecreasing,
        url: "/stats"
    },
    {   
        id: 2,
        label: "SKILLS",
        logo:Medal,
        url: "/skills"
    },
    {   
        id: 3,
        label: "QUESTS",
        logo: Compass,
        url: "/quests"
    },
]
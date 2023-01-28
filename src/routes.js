import MoodSelection from "./client/Pages/MoodSelection";
import Questions from "./client/Pages/Questions";

export default [
    {
        path: "/",
        component: MoodSelection,
        exact: true,
    },
    {
        path: "/questions/:value",
        component: Questions,
    }
];
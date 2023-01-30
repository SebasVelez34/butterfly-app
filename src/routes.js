import MoodSelection from "./client/pages/MoodSelection";
import Questions from "./client/pages/Questions";
import { MoodSelectionPage, QuestionsPage } from "./client/services";

const defaultCompany = '63d6914ba76bbbcbab9bdf43';


export default [
  {
    path: "/",
    component: MoodSelection,
    fetchInitialData: () => MoodSelectionPage.fetchInitialData({ companyId: defaultCompany })
  },
  {
    path: "/questions/:value",
    component: Questions,
    fetchInitialData: (path = '') => QuestionsPage.fetchInitialData({ companyId: defaultCompany, value: path.split('/').pop() })
  }
];
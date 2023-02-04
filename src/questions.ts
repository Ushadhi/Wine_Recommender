export type Question = {
  id: number;
  type: "slider" | "radio" | "multiple" | "special";
  question: string;
  category: string;
  specialCategories?: Object;
  minValue?: number;
  maxValue?: number;
  minTag?: string;
  maxTag?: string;
  answers?: Answer[];
};

export type Answer = {
  id: number;
  answer?: string;
  minTag?: string;
  maxTag?: string;
  minValue?: number;
  maxValue?: number;
  category?: string;
};

const questions: Question[] = [
  {
    id: 1,
    type: "slider",
    question: "How much would you like to pay for a bottle of wine?",
    minTag: "5$",
    maxTag: "160$",
    minValue: 5,
    maxValue: 160,
    category: "Price",
  },
  {
    id: 2,
    type: "radio",
    question: "Which type of wine would you prefer?",
    answers: [
      { id: 1, answer: "Red" },
      { id: 2, answer: "White" },
      { id: 3, answer: "Other" },
    ],
    category: "Wine style",
  },
  {
    id: 3,
    type: "slider",
    question:
      "When choosing wine, what is your preferred percentage of alcohol by volume?",
    minTag: "0%",
    maxTag: "100%",
    minValue: 0,
    maxValue: 100,
    category: "Alcohol content",
  },
  {
    id: 4,
    type: "radio",
    question: "Which region would you prefer your wine bottle to come from?",
    answers: [
      { id: 1, answer: "France" },
      { id: 2, answer: "Italy" },
      { id: 3, answer: "USA" },
      { id: 4, answer: "Portugal" },
      { id: 5, answer: "Australia" },
      { id: 6, answer: "Spain" },
      { id: 7, answer: "Chile" },
      { id: 8, answer: "New Zealand" },
    ],
    category: "Country",
  },
  {
    id: 5,
    type: "multiple",
    question: "With which dishes would you be pairing this bottle of wine?",
    answers: [
      { id: 1, answer: "Beef" },
      { id: 2, answer: "Poultry" },
      { id: 3, answer: "Lamb" },
      { id: 4, answer: "Game (deer, venison)" },
      { id: 5, answer: "Pasta" },
      { id: 6, answer: "Shellfish" },
      { id: 7, answer: "Vegetarian" },
      { id: 8, answer: "Pork" },
      { id: 9, answer: "Cured meat" },
      { id: 10, answer: "Appetizers and snacks" },
      { id: 11, answer: "Lean fish" },
      { id: 12, answer: "Rich fish (salmon, tuna etc)" },
      { id: 13, answer: "Mature and hard cheese" },
      { id: 14, answer: "Mild and soft cheese" },
      { id: 15, answer: "Aperitif" },
      { id: 16, answer: "Goat cheese" },
      { id: 17, answer: "Spicy food" },
      { id: 18, answer: "Fruity desserts" },
      { id: 19, answer: "Mushrooms" },
      { id: 20, answer: "Blue cheese" },
      { id: 21, answer: "Sweet desserts" },
    ],
    category: "Dishes",
  },
  {
    id: 6,
    type: "radio",
    question: "How old would you like your wine to be?",
    answers: [
      { id: 1, answer: "Non-vintage" },
      { id: 2, answer: "1 year" },
      { id: 3, answer: "2 years" },
      { id: 4, answer: "3 years" },
      { id: 5, answer: "4 years" },
      { id: 6, answer: "5 years" },
      { id: 7, answer: "6 years" },
      { id: 8, answer: "7 years" },
      { id: 9, answer: "7+ years" },
    ],
    category: "Year",
  },
  {
    id: 7,
    type: "special",
    question: "How would you like your wine to taste?",
    answers: [
      {
        id: 1,
        minTag: "Light",
        maxTag: "Bold",
        minValue: 0,
        maxValue: 100,
        category: "Bold",
      },
      {
        id: 2,
        minTag: "Smooth",
        maxTag: "Tannic",
        minValue: 0,
        maxValue: 100,
        category: "Tannin",
      },
      {
        id: 3,
        minTag: "Dry",
        maxTag: "Sweet",
        minValue: 0,
        maxValue: 100,
        category: "Sweet",
      },
      {
        id: 4,
        minTag: "Soft",
        maxTag: "Acidic",
        minValue: 0,
        maxValue: 100,
        category: "Acidic",
      },
    ],
    category: "",
    specialCategories: { Bold: 0, Tannin: 0, Sweet: 0, Acidic: 0 },
  },
];

export const questionState: Object = {
  Price: "",
  "Wine style": "",
  "Alcohol content": "",
  Country: "",
  Dishes: [],
  Year: "",
  Bold: 0,
  Tannin: 0,
  Sweet: 0,
  Acidic: 0,
};

export const questionCheckbox: Object = {
  Beef: false,
  Poultry: false,
  Lamb: false,
  "Game (deer, venison)": false,
  Pasta: false,
  Shellfish: false,
  Vegetarian: false,
  Pork: false,
  "Cured meat": false,
  "Appetizers and snacks": false,
  "Lean fish": false,
  "Rich fish (salmon, tuna etc)": false,
  "Mature and hard cheese": false,
  "Mild and soft cheese": false,
  Aperitif: false,
  "Goat cheese": false,
  "Spicy food": false,
  "Fruity desserts": false,
  Mushrooms: false,
  "Blue cheese": false,
  "Sweet desserts": false,
};

export default questions;

import { AnimationObject } from "lottie-react-native";

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const slider: OnboardingData[] = [
  {
    id: 1,
    animation: require("@/assets/animated/Game asset-1.json"),
    text: "Collection of Texts: Publish",
    textColor: '#005b4f',
    backgroundColor: '#ffa3ce'
  },
  {
    id: 2,
    animation: require("@/assets/animated/Gameasset.json"),
    text: "Collection of Texts: Publish",
    textColor: '#005b4f',
    backgroundColor: '#ffa3ce'
  },
  {
    id: 3,
    animation: require("@/assets/animated/Hero.json"),
    text: "Collection of Texts: Publish",
    textColor: '#005b4f',
    backgroundColor: '#ffa3ce'
  },
  {
    id: 4,
    animation: require("@/assets/animated/Animated movies.json"),
    text: "Collection of Texts: Publish",
    textColor: '#005b4f',
    backgroundColor: '#ffa3ce'
  },

];

export default slider

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
    backgroundColor: '#067FE2'
  },
  {
    id: 2,
    animation: require("@/assets/animated/Characters.json"),
    text: "Collection of Texts: Publish",
    textColor: '#005b4f',
    backgroundColor: '#E29700'
  },
  {
    id: 3,
    animation: require("@/assets/animated/Hero.json"),
    text: "Collection of Texts: Publish",
    textColor: '#005b4f',
    backgroundColor: '#A173CD'
  },
  {
    id: 4,
    animation: require("@/assets/animated/Animated movies.json"),
    text: "Collection of Texts: Publish",
    textColor: '#005b4f',
    backgroundColor: '#8BC151'
  },

];

export default slider

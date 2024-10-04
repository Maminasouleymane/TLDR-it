import { HfInference } from "@huggingface/inference";
import { FACEBOOK_BART } from "./constants";

const HF_ACCESS_TOKEN = import.meta.env.VITE_HF_ACCESS_TOKEN;

const inference = new HfInference(HF_ACCESS_TOKEN);

export const facebookBartSummarize = (userInput: string) =>
  inference.summarization({
    model: FACEBOOK_BART,
    inputs: userInput,
  });

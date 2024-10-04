import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { facebookBartSummarize } from "../utils/huggingface";
import { SummarizationOutput } from "@huggingface/inference";

// TODO: add support for more models
const FB_BART_KEY = ["fb-bart"];

export const useSummarization = (
  userInput: string
): UseQueryResult<SummarizationOutput, Error> => {
  return useQuery({
    queryKey: FB_BART_KEY,
    queryFn: () => facebookBartSummarize(userInput),
  });
};

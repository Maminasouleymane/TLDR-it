import { useSummarization } from "../hooks/useSummarization";

interface Props {
  textToSummarize: string;
}

export default function summarizing({ textToSummarize }: Props) {

  const { data, isLoading, isError, error } = useSummarization(textToSummarize);

  if(isLoading) {
    return <div>Summarizing...</div>
  }

  if(isError) {
    return <div>Error: {error.message}</div>
  }

  return <div>summarized version:  {data?.summary_text}</div>;
}

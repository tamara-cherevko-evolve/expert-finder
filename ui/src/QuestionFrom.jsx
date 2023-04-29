import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./components/button/Button";
import { Textarea } from "./components/textarea/Textarea";
import selectStyles from "./components/select/Select.module.css";
import { useGetSuggestionsMutation } from "./api/apiSlice";
import { Loading } from "./components/loading/Loading";
import SuggestionsView from "./SuggestionsView";
import { tempData } from "./data/data";

const QuestionForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  // const [getSuggestion, { isLoading, isSuccess }] = useGetSuggestionsMutation();
  const [getSuggestion, { isSuccess }] = useGetSuggestionsMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ question, area: relatedArea, urgency }) => {
    setIsLoading(true);
    getSuggestion({ question, relatedArea, urgency }).finally(() => {
      setIsLoading(false);
      setData(tempData);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isLoading && (
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/50 z-[1] flex justify-center items-center">
          <Loading size="40px" style={{ color: "white" }} />
        </div>
      )}
      <h2 className="my-6 text-xl">Not sure who to ask?</h2>
      <div className="my-4">
        <div>
          <label>Question:*</label>
        </div>
        <div className="my-2">
          <Textarea
            {...register("question", {
              required: true,
            })}
          />
          {errors.question && (
            <span className="block my-2 text-sm text-orange">
              Please enter your question!
            </span>
          )}
        </div>
      </div>
      <div className="flex w-full gap-8 my-6">
        <div className="flex-1">
          <div>
            <label>Related Area (if known)</label>
          </div>
          <div className="my-2">
            <select {...register("area")} className={selectStyles.select}>
              <option value="0">Select from dropdown</option>
              <option value="1">Technical Support</option>
              <option value="2">Development</option>
              <option value="3">Human Resources</option>
              <option value="4">Project Management</option>
              <option value="5">Sales and Marketing</option>
              <option value="6">General Information</option>
            </select>
          </div>
        </div>
        <div className="flex-1">
          <div>
            <label>Urgency*</label>
          </div>
          <div className="my-2">
            <select {...register("urgency")} className={selectStyles.select}>
              <option value="">Select from dropdown</option>
              <option value="0">Standard</option>
              <option value="1">Important</option>
              <option value="2">Urgent</option>
            </select>
          </div>
        </div>
      </div>

      {!!data && <SuggestionsView data={data} />}

      <div className="flex justify-center my-12">
        {!data && (
          <Button type="submit" className="!px-28">
            Direct me
          </Button>
        )}
        {!!data && <Button className="!px-28">Re-Find</Button>}
      </div>
    </form>
  );
};

export default QuestionForm;

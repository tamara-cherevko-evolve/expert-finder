import { useForm } from "react-hook-form";
import { Button } from "./components/button/Button";

const QuestionForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="my-6 text-2xl">Not sure who to ask?</h2>
      <div className="my-4">
        <div>
          <label>Question:*</label>
        </div>
        <div className="my-2">
          <input
            className="border border-main-light-80 leading-[18px] p-2.5 rounded-sm outline-none 
          text-grey-dark w-full 
          focus:border-blue-dfx focus:shadow-input focus:shadow-blue-dfx "
            {...register("question")}
          />
        </div>
      </div>
      <div className="flex w-full gap-8 my-6">
        <div className="flex-1">
          <div>
            <label>Related Area (if known)</label>
          </div>
          <div className="my-2">
            <input
              className="border border-main-light-80 leading-[18px] p-2.5 rounded-sm outline-none 
          text-grey-dark w-full 
          focus:border-blue-dfx focus:shadow-input focus:shadow-blue-dfx "
              {...register("area")}
            />
          </div>
        </div>
        <div className="flex-1">
          <div>
            <label>Urgency*</label>
          </div>
          <div className="my-2">
            <input
              className="border border-main-light-80 leading-[18px] p-2.5 rounded-sm outline-none 
          text-grey-dark w-full 
          focus:border-blue-dfx focus:shadow-input focus:shadow-blue-dfx "
              {...register("urgency")}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center my-12">
        <Button type="submit">
          Direct me
        </Button>
      </div>
    </form>
  );
};

export default QuestionForm;

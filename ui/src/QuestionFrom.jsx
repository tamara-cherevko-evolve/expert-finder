import { useForm } from "react-hook-form";
import { Button } from "./components/button/Button";
import { Input } from "./components/input/Input";

const QuestionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="my-6 text-xl">Not sure who to ask?</h2>
      <div className="my-4">
        <div>
          <label>Question:*</label>
        </div>
        <div className="my-2">
          <Input
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
            <select
              {...register("area")}
              className="border border-main-light-80 leading-[18px] p-2.5 rounded-sm outline-none 
          text-grey-dark w-full 
          focus:border-blue-dfx focus:shadow-input focus:shadow-blue-dfx"
            >
              <option value="">Select from dropdown</option>
              <option value="technicalSupport">Technical Support</option>
              <option value="development">Development</option>
              <option value="humanResources">Human Resources</option>
              <option value="projectManagement">Project Management</option>
              <option value="marketing">Sales and Marketing</option>
              <option value="general">General Information</option>
            </select>
          </div>
        </div>
        <div className="flex-1">
          <div>
            <label>Urgency*</label>
          </div>
          <div className="my-2">
            <Input {...register("urgency")} />
          </div>
        </div>
      </div>

      <div className="flex justify-center my-12">
        <Button type="submit">Direct me</Button>
      </div>
    </form>
  );
};

export default QuestionForm;

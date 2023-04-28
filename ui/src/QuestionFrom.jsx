import { useForm } from "react-hook-form";
import { Button } from "./components/button/Button";

const QuestionForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Have a question? Not sure who to ask? Ask Me</label>
      </div>
      <div className="my-4">
        <input
          className="border border-main-light-80 leading-[18px] p-2.5 rounded-sm outline-none 
          text-grey-dark w-full 
          focus:border-blue-dfx focus:shadow-input focus:shadow-blue-dfx "
          {...register("question")}
        />
      </div>

      <div className="my-4">
        <Button variant="" type="submit">
          Direct me
        </Button>
      </div>
    </form>
  );
};

export default QuestionForm;

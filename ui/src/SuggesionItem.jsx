import userPic from "./assets/images/userpic.svg";
import { Button } from "./components/button/Button";

const SuggestionItem = ({ item }) => {
  if (!item) return null;
  return (
    <div className="mt-6 items-center flex text-white hover:bg-[#363C54] hover:cursor-pointer bg-[#474C61] border-[#B6C0E9] rounded-[33px] py-[10px] px-[14px] shadow-lg shadow-[rgba(0, 0, 0, 0.25)]">
      <img src={userPic} />
      <div className="flex-auto ml-4">
        <div className="font-bold">{`${item.name} ${item.surname}`}</div>
        <div>{item.position}</div>
      </div>
      <div className="text-right">
        <Button
          className="!border !rounded-[33px] !py-[13px] !px-[35px] !border-primary !bg-transparent hover:!bg-primary"
          variant="outline"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log("item clicked!");
          }}
        >
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default SuggestionItem;

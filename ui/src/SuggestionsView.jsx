import SuggestionItem from "./SuggesionItem";

const SuggestionsView = ({ data }) => {
  return (
    <div className="mt-12 text-white">
      {!!data?.bestMatch?.name && (
        <div className="mb-8 ">
          <h3>
            Result: <span className="text-[#00FF38]">Best match</span>
          </h3>
          <SuggestionItem item={data.bestMatch} />
        </div>
      )}
      {!!data?.otherResults?.length && (
        <div>
          <h3>Other results:</h3>
          {data.otherResults.map((result) => (
            <SuggestionItem item={result} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SuggestionsView;

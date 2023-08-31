import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import agent from "../api/agent";
import { FlashcardSet } from "../models/flashcardSet";

const Study = () => {
  const { id } = useParams();
  const [set, setSet] = useState<FlashcardSet>();

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const setData = await agent.Set.detail(id);
        setSet(setData);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <div className="studycard">
        <h1>How would you center a div in CSS?</h1>
      </div>

      <> {/*flashcard rendering below*/}
      {set &&
        set.flashcards &&
        set?.flashcards.map((flashcard) => (
          <div key={flashcard.id}>
            <p>{flashcard.term}</p>
            <p>{flashcard.definition}</p>
            <img src={flashcard.pictureUrl} />
          </div>
        ))}
      </>

    </div>
  );
  
};

export default Study;

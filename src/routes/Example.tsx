import { useState, useEffect } from "react";
import agent from "../api/agent";
import { Flashcard } from "../models/flashcard";
import { PaginatedResult } from "../models/pagination";
import { FlashcardSet } from "../models/flashcardSet";
import { v4 as uuidv4 } from "uuid";

const Example = () => {
  const [sets, setSets] = useState<PaginatedResult<FlashcardSet[]>>();
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const flashcardsData = await agent.Flashcards.list(
        "F7D24C8C-42E7-47C4-937A-3D4E9FED30E9"
      );

      setFlashcards(flashcardsData);
    };

    fetchData();
  }, []);

  console.log(flashcards);

  useEffect(() => {
    const fetchData = async () => {
      const params = new URLSearchParams();
      params.append("pageNumber", "1");
      params.append("pageSize", "10");
      const sets = await agent.Set.list(params);
      setSets(sets);
    };

    fetchData();
  }, []);

  console.log(sets);
  const onClickLogin = async () => {
    const user = await agent.Account.login({
      email: "quizlit@test.com",
      password: "Pa$$w0rd",
    });
    localStorage.setItem("token", user.token);
  };
  const setId = uuidv4();
  const onClickSetCreate = () => {
    const set: FlashcardSet = {
      id: setId,
      title: "test frontend set",
      description: "test",
      appUserId: "265446eb-e5f2-47a5-b0fe-c8111855315a",
      flashcards: [
        {
          id: uuidv4(),
          term: "test",
          definition: "test",
          pictureUrl: "test",
          setId: setId,
        },
        {
          id: uuidv4(),
          term: "testtwo",
          definition: "testtwo",
          pictureUrl: "testtwo",
          setId: setId,
        },
      ],
    };
    agent.Set.create(set);
  };

  const onClickSetEdit = () => {
    const set: FlashcardSet = {
      id: "cf10dd7a-9a86-4d68-87e6-df72835e4eb3",
      title: "test edit frontend",
      description: "",
      appUserId: "265446eb-e5f2-47a5-b0fe-c8111855315a",
    };

    agent.Set.update(set);
  };

  const onClickEditFlashcards = () => {
    const flashcards: Flashcard[] = [
      {
        id: "b8c5e943-af82-4055-b027-acf749df54c4",
        term: "test edit flashcard",
        definition: "test",
        pictureUrl: "test.com",
        setId: "4301922e-eb35-4812-8262-11379c665e62",
      },
      {
        id: uuidv4(),
        term: "test add card",
        definition: "test",
        pictureUrl: "",
        setId: "4301922e-eb35-4812-8262-11379c665e62",
      },
    ];

    agent.Flashcards.update(flashcards, "4301922e-eb35-4812-8262-11379c665e62");
  };
  return (
    <div className="flex gap-2 m-4">
      <button className="bg-white p-2 rounded-md" onClick={onClickLogin}>
        Login
      </button>
      <button className="bg-white p-2 rounded-md" onClick={onClickSetCreate}>
        Create test set
      </button>
      <button className="bg-white p-2 rounded-md" onClick={onClickSetEdit}>
        Edit test set
      </button>
      <button
        className="bg-white p-2 rounded-md"
        onClick={onClickEditFlashcards}
      >
        Edit flashcards
      </button>
    </div>
  );
};

export default Example;

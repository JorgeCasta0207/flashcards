import { Flashcard } from "./flashcard";

export interface Sets {
  id: string;
  title: string;
  description: string;
  appUserId: string;
  flashcards?: Flashcard[];
}

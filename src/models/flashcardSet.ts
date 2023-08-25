import { Flashcard } from "./flashcard";

export interface FlashcardSet {
  id: string;
  title: string;
  description: string;
  appUserId: string;
  flashcards?: Flashcard[];
}

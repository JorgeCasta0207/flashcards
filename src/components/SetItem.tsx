import { FlashcardSet } from "../models/flashcardSet";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { router } from "../routes/Routes";

const SetItem = (props: FlashcardSet) => {
  const { title, id } = props;

  const handleEdit = (id: string) => {
    router.navigate(`/Study/${id}`);
  };

  return (
    <div className="w-full bg-secondary rounded-md p-2 mt-6 hover:border-b-8 hover:border-accent hover:pb-2">
      <div className="group">
        <div className="flex items-center justify-between">
          <div>
            <p>20 Cards</p>
            <h3 className="font-bold text-lg">{title}</h3>
          </div>
          <div className="flex gap-2 items-center opacity-0 group-hover:opacity-100">
            <div className="cursor-pointer" onClick={() => handleEdit(id)}>
              <EditIcon />
            </div>
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetItem;

import { RiPencilFill } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const EditAndDelet = ({ id, deleteTasks }) => {
  const navigate = useNavigate();
  return (
    <div className="absolute h-5 w-24 min-w-max top-0 right-0 rounded-md shadow-md transition-all duration-100 scale-0 origin-right group-hover:scale-100">
      <div className="h-5 px-3 flex gap-4">
        <button
          className="flex gap-1 justify-center items-center hover:cursor-pointe dark:text-slate-50"
          onClick={() => navigate(`/edit/${id}`)}
        >
          <RiPencilFill className="hover:text-blue-400" />
        </button>

        <button
          className="flex gap-1 justify-center items-center hover:cursor-pointe dark:text-slate-50"
          onClick={() => deleteTasks(id)}
        >
          <AiOutlineDelete className="hover:text-red-500" />
        </button>
      </div>
    </div>
  );
};

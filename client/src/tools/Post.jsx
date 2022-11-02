import { EditAndDelet } from "./EditAndDelet";
import { useTasksContext } from "../hooks/useTasksContext";
const Post = ({ id, name, done, timestamp, text, icon }) => {
  const { deleteTasks, toggleTaskDone } = useTasksContext();

  const onChange = () => {
    toggleTaskDone(id);
  };

  return (
    <div className="post w-9/12 flex-row">
      <div className="postCheking">
        <label>
          <input
            type={"checkbox"}
            onChange={onChange}
            className=" w-4 h-4 rounded-lg border border-sky-500 accent-slate-700"
          />
        </label>
      </div>
      <div className="post-content">
        <div className="post-title">
          <div className="post-user">
            <img
              src={`https://avatars.dicebear.com/api/open-peeps/${id}.svg`}
              alt=""
              className="avatar"
            />
            <p className="post-owner">
              <span className={`${done && "line-through"}`}>{name}</span>
              <small className="timestamp">{timestamp}</small>
            </p>
          </div>
          <div className=" relative group">
            <span className=" flex items-center justify-center h-5 w-5 mx-auto rounded-3xl  dark:bg-gray-600 dark:text-gray-100 transition-all duration-300 ease-linear cursor-pointer shadow-lg">
              {icon}
            </span>
            <EditAndDelet id={id} deleteTasks={deleteTasks} />
          </div>
        </div>
        <div className="post-tasks">
          <p className="post-text">{text}</p>
        </div>
      </div>
    </div>
  );
};
export default Post;

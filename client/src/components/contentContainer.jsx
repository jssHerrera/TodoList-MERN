import { useEffect } from "react";
import { VscEllipsis } from "react-icons/vsc";
import { NoTasks } from "./noTasks";
import { formatearFecha } from "../helpers/index";
import Post from "../tools/Post";
import { useTasksContext } from "../hooks/useTasksContext";
import Spiner from "./Spiner";

const ContentContainer = () => {
  const { cargando, tasks, loadTasks } = useTasksContext();

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="content-container pt-4">
      <div className="content-list">
        {cargando && <Spiner />}

        {tasks.map((elem) => (
          <Post
            key={elem.id}
            id={elem.id}
            name={elem.title}
            done={elem.done}
            timestamp={formatearFecha(elem.createAt)}
            text={elem.description}
            icon={<VscEllipsis />}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentContainer;

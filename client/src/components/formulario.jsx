import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useTasksContext } from "../hooks/useTasksContext.jsx";

export const Formulario = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const { createTasks, getTask, updateTask } = useTasksContext();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, [params.id]);

  return (
    <section className="content-container">
      <div className="content-list px-3 justify-center">
        <div className="post w-full max-w-[370px] flex-col">
          <div className=" w-full flex items-center justify-between ">
            <p>{params.id ? "Editando nota" : " Agrega una nueva nota "}</p>
          </div>
          <Formik
            initialValues={task}
            enableReinitialize={true}
            validate={(values) => {
              const errors = {};
              if (!values.title) {
                errors.title = "complete este campo";
              } else if (values.title.length <= 2) {
                errors.title = "debe ingresar almenos 3 caracteres";
              }
              return errors;
            }}
            onSubmit={async (values, actions) => {
              if (params.id) {
                await updateTask(params.id, values);
                navigate("/");
              } else {
                await createTasks(values);
                navigate("/");
              }
              setTask({
                title: "",
                description: "",
              });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label className="post-text mb-2" htmlFor="title">
                    Nota
                  </label>
                  <input
                    id="title"
                    className="input-type "
                    type="text"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                  />
                  {errors.title && touched.title && errors.title}
                </div>
                <div className="w-full ">
                  <label className="post-text mb-2" htmlFor="description">
                    description
                  </label>
                  <textarea
                    id="description"
                    className="input-type "
                    type="text"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    rows="5"
                  />
                  {errors.description &&
                    touched.description &&
                    errors.description}
                </div>
                <button
                  className={` input-sub ${
                    isSubmitting
                      ? "hover:cursor-pointer hover:scale-[1.02]  transition-all "
                      : null
                  } `}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Saving..." : "save"}
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Formulario;

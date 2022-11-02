import { Link } from "react-router-dom";

export const NoTasks = () => {
  return (
    <main className="h-full w-[calc(100vw-64px)] text-center flex flex-col justify-center items-center bg-slate-50 dark:bg-gray-800 ">
      <h1 className="text-9xl font-extrabold text-gray-800 dark:text-white tracking-widest">
        Not Tasks Add New
      </h1>
      <button className="mt-10">
        <span className="input-sub py-3 px-5 ">
          <Link to="/tasks">Add Tasks</Link>
        </span>
      </button>
    </main>
  );
};

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentContainer from "../components/contentContainer";
import SideBar from "../components/sidebar";
import Formulario from "../components/formulario";
import Nofount from "../components/nofount";

const TasksRoute = () => {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path="/" element={<ContentContainer />} />
        <Route path="/tasks" element={<Formulario />} />
        <Route path="/edit/:id" element={<Formulario />} />
        <Route path="/*" element={<Nofount />} />
      </Routes>
    </BrowserRouter>
  );
};

export default TasksRoute;

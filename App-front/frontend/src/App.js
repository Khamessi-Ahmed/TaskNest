import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Component/Login";
import NotFound from "./Component/NotFound";
import { CollaborateurList } from "./Component/list/CollaborateurList";
import NavBarManager from "./Component/Navigation/NavBarManager";
import BoardList from "./Component/list/BoardList";
import AvertisementList from "./Component/list/AvertisementList";
import TaskList from "./Component/list/TaskList";
import FormBoard from "./Component/form/FormBoard";
import LoginInfo from "./Services/auth/LoginInfo";
import FormTask from "./Component/form/FormTask"
const MainLayout = ({ children }) => {
  return (
    <>
      <NavBarManager />
      <div>{children}</div> 
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={<Login />} />

        
        <Route
          path="/"
          element={<MainLayout><Navigate to="/login" /></MainLayout>}  
        />

        <Route path="/listCollaborateur/:boardId/:userId" element={<MainLayout><CollaborateurList /></MainLayout>} />
        <Route path="/listBoard/:userId" element={<MainLayout><BoardList /></MainLayout>} />
        <Route path="/TaskList/:boardId/:userId" element={<MainLayout><TaskList /></MainLayout>} />
        <Route path="/listAvertisement/:boardId/:userId" element={<MainLayout><AvertisementList /></MainLayout>} />
        <Route path="/createBoard/:userId" element={<MainLayout><FormBoard/></MainLayout>}/>
        <Route path="/createTask/:boardId/:userId" element={<MainLayout><FormTask/></MainLayout>}/>
        <Route path="/login-info" element={<LoginInfo/>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

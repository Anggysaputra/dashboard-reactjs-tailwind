import { Routes, Route } from "react-router-dom";
import Sidebar from "./global/Sidebar";
import Tes from "./pages/Tes";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/analytics"
          element={<Sidebar child={<Tes />} />}
        />
      </Routes>
    </>
  );
}

export default App;

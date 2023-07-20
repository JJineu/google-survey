import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preview from "./pages/Preview";
import Result from "./pages/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

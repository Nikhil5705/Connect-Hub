import { Routes, Route } from "react-router-dom";


import "./App.css";
// import { posts } from "./backend/db/posts";
import { UserFeed } from "./pages/userfeed/UserFeed";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserFeed />} />
       
      </Routes>
    
    </div>
  );
}

export default App;

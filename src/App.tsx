import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./Home/home";
import Signup from "./signup/signup";

export default function App() {
  return (
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
  );
}
function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
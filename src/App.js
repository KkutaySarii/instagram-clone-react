import React from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { Loading } from "./pages/Loading";
import routes from "./routes";

function App() {
  const user = useSelector(state => state.auth.user);
  console.log(user);
  return (
    <>
      <Toaster position="top-right" />
      {useRoutes(routes)}
      {/* <Loading /> */}
    </>
  )
}

export default App;

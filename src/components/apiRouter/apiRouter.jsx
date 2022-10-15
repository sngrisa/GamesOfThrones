import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Chars } from "./../chars/chars";
import { CardDetails } from "./../cardDetails/cardDetails";

const ApiRouter = () => {

  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Chars />} />
        <Route path={"/chars"} element={<Chars />} />
        <Route path={`/chars/:id`} element={<CardDetails />} />
      </Routes>
    </Router>
  )
};

export { ApiRouter };

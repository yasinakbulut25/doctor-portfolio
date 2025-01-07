"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ACTION_TYPES from "@/store/actionTypes";
import Home from "./Home";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SELECTORS from "@/store/selectors";
import Loading from "@/components/loading";

function Main({ children }) {
  const dispatch = useDispatch();
  const isSectionsLoading = useSelector(SELECTORS.getSectionsLoading);
  const isContactsLoading = useSelector(SELECTORS.getContactsLoading);
  const isQuestionsLoading = useSelector(SELECTORS.getQuestionsLoading);
  const isCommentsLoading = useSelector(SELECTORS.getCommentsLoading);
  const isServicesLoading = useSelector(SELECTORS.getServicesLoading);
  const isUserLoading = useSelector(SELECTORS.getUserLoading);
  const isBlogsLoading = useSelector(SELECTORS.getBlogsLoading);

  const isAllLoading =
    isSectionsLoading ||
    isContactsLoading ||
    isQuestionsLoading ||
    isCommentsLoading ||
    isServicesLoading ||
    isUserLoading ||
    isBlogsLoading;

  useEffect(() => {
    if (!isAllLoading) {
      dispatch({ type: ACTION_TYPES.INITIALIZE_APP });
    }
  }, []);

  if (isAllLoading) {
    return <Loading />;
  }

  return (
    <main className="content overflow-hidden">
      <Navbar />
      <Home>{children}</Home>
      <Footer />
    </main>
  );
}

export default Main;

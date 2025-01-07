"use client";

import { Provider } from "react-redux";
import { NextUIProvider } from "@nextui-org/react";
import store from "@/store";

export default function ClientProvider({ children }) {
  return (
    <Provider store={store}>
      <NextUIProvider>{children}</NextUIProvider>
    </Provider>
  );
}

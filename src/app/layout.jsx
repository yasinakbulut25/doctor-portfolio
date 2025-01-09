import { Montserrat } from "next/font/google";
import "../styles/index.css";
import ClientProvider from "./ClientProvider";
import Main from "./main";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const BASE_URL = "http://localhost:3001/";

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="html-content !p-0 no-scrollbar">
      <body
        className={`${montserrat.className} relative antialiased bg-white overflow-x-hidden`}
      >
        <ClientProvider>
          <Main>{children}</Main>
        </ClientProvider>
      </body>
    </html>
  );
}

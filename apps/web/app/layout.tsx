import "normalize.css/normalize.css";
import "../styles/globals.css";
import "../styles/tokens.css";
import "../styles/app.css";
import s from "./layout.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      {/*
      <head /> will contain the components returned by the nearest parent
      head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
    */}
      <head />
      <body>
        <div className={s.root}>{children}</div>
      </body>
    </html>
  );
}

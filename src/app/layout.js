import Providers from "./providers";
import Menu from "@/components/layout/Menu";
import "./globals.css";

export const metadata = {
  title: "Collaborator Platform",
  description: "Platform for everyone to colloborate with github network",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Menu />
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}

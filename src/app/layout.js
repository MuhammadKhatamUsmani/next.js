import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "My Website",
  description: "Beginner Next.js Practice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}

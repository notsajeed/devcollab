import "./globals.css";

export const metadata = {
  title: "DevCollab Dashboard",
  description: "Centralized dashboard for all your dev profiles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black-100">{children}</body>
    </html>
  );
}

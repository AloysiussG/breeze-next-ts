import { Nunito } from "next/font/google";
import "@/app/globals.css";

const nunitoFont = Nunito({
  subsets: ["latin"],
  display: "swap",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={nunitoFont.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
};

export const metadata = {
  title: "Laravel",
};

export default RootLayout;

import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import MyNavbar from "@/components/Utilities/Navbar";


const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Semester 4 Project",
  description: "Semester 4 Project for the course Web Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <MyNavbar />
          <div className="w-[100%] px-6 py-2">{children}</div>
        </Providers>
      </body>
    </html>
  );
}

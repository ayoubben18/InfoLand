import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const roboto = Roboto({ weight: "500", subsets: ["latin"] });

export const metadata = {
  title: "InfoLand",
  description: "This is the homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

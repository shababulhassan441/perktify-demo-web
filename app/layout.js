import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomScripts from "@/scripts/CustomScripts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchheaderFooter } from "@/appwrite/data";
import { cookies } from "next/headers";


export const metadata = {
  title: "Storekwil",
  description: "Your Gateway to cutting-edge Innovative Web Solutions ",
};

export default async function RootLayout({ children }) {

  cookies();

  let data = null;

  try {
    data = await fetchheaderFooter();
  } catch (error) {
    console.error("Failed to fetch header/footer data:", error);
  }
  return (
    <html lang="en">
      <body
        className={``}
      >
        <Header />
        {children}
        <Footer footerData={data.footerData} />
        <CustomScripts />
      </body>
    </html>
  );
}

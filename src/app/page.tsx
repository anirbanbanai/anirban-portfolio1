import ButtomNavbar from "@/Components/ButtomNavbar";
import Homes from "@/Components/Home";
import MiddleSticy from "@/Components/MiddleSticy";
import Navbar from "@/Components/Navbar";
import "./globals.css";
export default function Home() {
  return (
    <main>
      <MiddleSticy />
      <Navbar />
      <ButtomNavbar />
      <Homes />
    </main>
  );
}


import { TicketProvider } from "./context/TicketContext";
import Home from "./Home/main-page";
import Header from "./components/Header";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link rel="stylesheet"
        href={"https://fonts.googleapis.com/css2?family=Alatsi&family=Road+Rage&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"}></Link>
      <Header />
      <TicketProvider>
        <Home />
      </TicketProvider>
    </div>
  );
}


import { TicketProvider } from "./context/TicketContext";
import Home from "./Home/main-page";
import Header from "./components/Header";

export default function Page() {
  return (
    <div>
      <Header />
      <TicketProvider>
        <Home />
      </TicketProvider>
    </div>
  );
}

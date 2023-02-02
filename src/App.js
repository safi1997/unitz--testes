import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <h1 data-testid="title-Home" className="mt-5">
          Fullstack Web Programming
          <div>
            <img
              src="https://hicoders.ch/wp-content/uploads/2022/03/11-Fullstack-Web-Programming.png"
              class="img-fluid w-50"
              alt="Responsive image"
            />
          </div>
        </h1>
        <p class="text-justify text-black ">
          I'm not sure yet, but I want to create a chat application, it should
          work fully like Facebook Messenger. But like I said, I'm not sure yet.
        </p>
        <h1 className="mt-3">Ziele </h1>
        <div>
          <img
            src="https://hicoders.ch/wp-content/uploads/2022/03/resim-kuculteme-hali-site-icin.png"
            class="img-fluid w-50"
            alt="Responsive image"
          />
        </div>

        <p class="text-justify text-black ">
          Hauptziel des Kurses ist, die aktive und effektive Nutzung der
          Java-Plattform zu vermitteln und diese in Marktnormen umzusetzen.
          Daneben werden auch andere Technologien und Tools vorgestellt. Ziele
          der Teilnehmende am Ende des Kurses: Vertieftes Verständnis der
          Java-Plattform Fähigkeit, die relevanten Tools in kleineren Projekten
          anzuwenden Grundkenntnisse der Fachterminologie in der
          Webprogrammierung
        </p>
      </main>
    </>
  );
}

export default App;

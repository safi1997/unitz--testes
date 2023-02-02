import React from "react";
import Navbar from "../components/Navbar";

function Features() {
  return (
    <div>
      <Navbar />
      <h1 data-testid="title-Features">Features Component</h1>
      <main className="container">
        <div class="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>
        <h2 className="">Get started straight away</h2>
        <p>
          Simply add a portfolio page or section to the Squarespace template of
          your choice. Or get inspired by our most popular portfolio website
          templates.
        </p>
        <div
          id="carouselExampleCaptions"
          style={{
            width: 500,
            height: 0,
          }}
        >
          <div class="carousel-indicators"></div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Features;

import React from 'react';
import Helloworld from "@/components/Helloworld";
import FlaskConnector from "@/components/FlaskConnector";
import AiResultViewer from "@/components/AIResultViewer";
import Contact from "@/components/Contact";

export default async function Home() {
  return (
    <main>
      <section className="h-screen flex items-center justify-center" id="Home">
        <Helloworld />
      </section>
      <section className="h-screen flex items-center justify-center" id="Python">
        <FlaskConnector />
      </section>
      <section className="h-screen flex items-center justify-center" id="AI">
        <AiResultViewer />
      </section>
      <section className="h-screen flex items-center justify-center" id="Contact">
        <Contact />
      </section>
    </main>
  );
}
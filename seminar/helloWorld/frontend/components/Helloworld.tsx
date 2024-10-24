import React from 'react';
import Title from "./Title";

export default function Helloworld(): JSX.Element {
  return (
    <div>
      <Title title={"Hello World"} />
      <div className="flex justify-center gap-8 pt-8 pb-48 m-auto">
        <p>Hello World</p>
        </div>
    </div>
  );
}
import React from 'react';
import { BsGithub } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import Title from "./Title";

export default function Contact(): JSX.Element {
  return (
    <div>
        <Title title="CONTACT" />
        <div className="flex justify-center gap-16 py-32">
          <a
            className="cursor-pointer hover:text-blue-600"
            href="https://github.com/seungboAn"
          >
            <BsGithub size={64} />
          </a>
          <a
            href="https://www.linkedin.com/in/seungbo-an"
            className="cursor-pointer hover:text-blue-600"
          >
            <CiLinkedin size={64} />
          </a>
        </div>
    </div>
  );
}

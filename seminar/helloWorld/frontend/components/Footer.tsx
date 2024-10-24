import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <footer className="text-white bg-black ">
      <div className="w-11/12 m-auto only:py-16 text-xs text-center  border-gray-300 border-t-[1px]">
        <span>{`Made by `}</span>
        <a className="underline " href="https://github.com/seungboAn">
          James An
        </a>
      </div>
    </footer>
  );
}

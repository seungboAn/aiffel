import React from 'react';

interface TitleProps {
  title: string;
}

export default function Title(props: TitleProps): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-2xl font-bold ">{props.title}</p>
      <span className="w-8 h-1 bg-blue-600 rounded-sm"></span>
    </div>
  );
}

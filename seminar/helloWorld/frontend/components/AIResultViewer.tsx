'use client';

import React from 'react';
import { useState } from "react";
import Image from "next/image";
import Title from "./Title";

export default function AiResultViewer(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string | null>(null);

  const fetchAiResult = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/getGenAI");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);  // Blob 객체를 URL로 변환
      setResult(url);
    } catch (error) {
      console.error("Error fetching AI result:", error);
      setResult("Failed to fetch result");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Title title={"AI"} />
      <div className="flex flex-col items-center justify-center gap-16 pt-8 pb-48 m-auto">
        <button 
          onClick={fetchAiResult}
          className={`bg-blue-500 text-white rounded ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
          disabled={loading}
          style={{ width: '250px', height: '50px' }}
        >
          {loading ? (
            <span>Loading...</span>
          ) : (
            <p className="m-0">생성된 이미지 가져오기</p>
          )}
        </button>
        {result ? (
          <Image
            src={result}
            alt="AI Generated"
            width={500}
            height={500}
            unoptimized={true}
        />
        ) : (
          <p>Hello World</p>
        )}
      </div>
    </div>
  );
}

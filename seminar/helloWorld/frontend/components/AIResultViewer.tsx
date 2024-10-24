'use client';

import React from 'react';
import { useState } from "react";
import Title from "./Title";
import Image from "next/image";

export default function AiResultViewer() {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const fetchAiResult = async () => {
    try {
      const response = await fetch("http://localhost:5000/getGenAI");
      setInputValue("");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
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
      <Title title={"AI 서비스"} />
      <div className="flex flex-col items-center justify-center gap-16 pt-8 pb-48 m-auto">
        <div className="flex items-center gap-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="메시지 AiffelGPT"
            className="border border-gray-300 rounded p-2"
            style={{ width: '250px', color: 'black',height: '50px'  }}
          />
          <button
            onClick={fetchAiResult}
            className={`bg-blue-500 text-white rounded ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={loading}
            style={{ width: '100px', height: '50px' }}
          >
            {loading ? (
              <span>Loading...</span>
            ) : (
              <p className="m-0">이미지 생성</p>
            )}
          </button>
        </div>
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
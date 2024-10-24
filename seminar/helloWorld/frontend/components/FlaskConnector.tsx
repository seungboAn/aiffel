'use client';

import React from 'react';
import { useState } from "react";
import Title from "./Title";

export default function FlaskConnector(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchMessage = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/getHelloworld");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error fetching message:", error);
      setMessage("Failed to fetch message");
    } finally {
      setLoading(false);
    }
  };
  const playGame = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/playGame", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ numbers: inputValue }),
      });
      setInputValue("");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setResult(data.message);
    } catch (error) {
      console.error("Error fetching message:", error);
      setResult("Failed to fetch message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center'>
        <div>
          <Title title={"웹 서비스 Frontend + Backend"} />
          <div className="flex flex-col items-center justify-center gap-8 pt-8 pb-48 m-auto">
            <button 
              onClick={fetchMessage}
              className={`bg-blue-500 text-white px-4 py-2 rounded ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
              disabled={loading}
              style={{ width: '250px', height: '50px' }} 
            >
              {loading ? (
                <span>Loading...</span>
              ) : (
                <p>Python에 데이터 요청하기</p>
              )}
            </button>
            {message ? (
              <p>{message}</p>
            ) : (
              <p>Hello World</p>
            )}
          </div>
        </div>
        <div>
          {/* <Title title={"웹 서비스 Frontend + Backend"} /> */}
          <div className="flex flex-col items-center justify-center gap-8 pt-8 pb-48 m-auto">
            <div className='flex items-center gap-4'>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="5자리 숫자를 입력하세요"
                className="border border-gray-300 rounded p-2"
                style={{ width: '250px', color: 'black', height: '50px' }}
              />
              <button 
                onClick={playGame}
                className={`bg-blue-500 text-white px-4 py-2 rounded ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
                style={{ width: '250px', height: '50px' }} 
              >
                {loading ? (
                  <span>Loading...</span>
                ) : (
                  <p>제출하기</p>
                )}
              </button>
            </div>
            {result ? (
              <p>{result}</p>
            ) : (
              <p>5자리 숫자를 입력하고 게임을 시작해 주세요.</p>
            )}
          </div>
        </div>
    </div>
  );
}
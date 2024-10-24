'use client';

import React from 'react';
import { useState } from "react";
import Title from "./Title";

export default function FlaskConnector(): JSX.Element {
  const [message, setMessage] = useState<string | null>(null);
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

  return (
    <div>
      <Title title={"Backend (Python)"} />
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
            <p>Python 결과 가져오기</p>
          )}
        </button>
        {message ? (
          <p>{message}</p>
        ) : (
          <p>Hello World</p>
        )}
      </div>
    </div>
  );
}
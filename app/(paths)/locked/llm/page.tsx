"use client";

import { useChat } from "ai/react";
import React, { useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "./atom-one-dark.css";

const useAutosizeTextArea = (
  textAreaRef: HTMLTextAreaElement | null,
  value: string
) => {
  useEffect(() => {
    if (textAreaRef) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      textAreaRef.style.height = "0px";
      const scrollHeight = textAreaRef.scrollHeight;

      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      textAreaRef.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);
};

export default function Page() {
  const { messages, input, setInput, handleInputChange, handleSubmit } =
    useChat({
      api: "/locked/llm/api",
    });

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useAutosizeTextArea(textAreaRef.current, input);
  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    setInput(val);
    // I dunno what this does but I'm gonna call it just to be safe.
    handleInputChange(evt);
  };
  const formRef = useRef<HTMLFormElement>(null);
  const onEnterPress = (e: React.KeyboardEvent) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      formRef.current?.requestSubmit();
    }
  };

  return (
    <main className="mx-3 flex flex-grow flex-col">
      <div className="stretch mx-auto flex w-full max-w-2xl flex-grow flex-col">
        <div className="fullscreen-with-bars flex-grow overflow-scroll text-sm">
          <div className="my-4">
            {messages.map((m) => (
              <div key={m.id} className="my-2 whitespace-pre-wrap">
                <div className="font-bold">
                  {m.role === "user" ? "USER" : "LLM"}
                </div>
                <Markdown rehypePlugins={[rehypeHighlight]} className="markdown">
                  {m.content}
                </Markdown>
              </div>
            ))}
          </div>
        </div>

        <form className="max-w-2xl" onSubmit={handleSubmit} ref={formRef}>
          <textarea
            className="w-full resize-none rounded border border-gray-300 bg-background p-2 text-sm focus:outline-none"
            value={input}
            placeholder="Say something..."
            onChange={handleChange}
            onKeyDown={onEnterPress}
            ref={textAreaRef}
            rows={1}
          />
        </form>
      </div>
    </main>
  );
}

"use client";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <>
      <ReactMarkdown
        children={content}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, "")}
                style={dracula}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
          img: (image) => (
            <Image
              src={image.src || ""}
              alt={image.alt || ""}
              width={760}
              height={500}
              className="w-full max-h-[400px]"
            />
          ),
        }}
      />
    </>
  );
}

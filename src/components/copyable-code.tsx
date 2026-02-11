"use client";

import { useState } from "react";
import { CopyIcon, CheckIcon } from "./icons";

interface CopyableCodeProps {
  code: string;
}

export const CopyableCode = ({ code }: CopyableCodeProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative mx-auto mt-12 max-w-lg rounded-md border border-border bg-muted p-4 pr-12">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
        aria-label="Copy code"
      >
        {copied ? (
          <CheckIcon className="h-4 w-4" />
        ) : (
          <CopyIcon className="h-4 w-4" />
        )}
      </button>
      <code className="block text-xs text-foreground md:text-sm">
        <span className="text-muted-foreground">$</span> {code}
      </code>
    </div>
  );
};

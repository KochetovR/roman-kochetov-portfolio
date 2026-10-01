"use client";

import { useEffect, useState } from "react";

type CopyButtonProps = {
  label: string;
  value: string;
};

function copyWithLegacyApi(value: string) {
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();
  const wasCopied = document.execCommand("copy");
  textarea.remove();
  return wasCopied;
}

export function CopyButton({ label, value }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) return;

    const timeout = window.setTimeout(() => setIsCopied(false), 1600);
    return () => window.clearTimeout(timeout);
  }, [isCopied]);

  const copyValue = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
    } catch {
      setIsCopied(copyWithLegacyApi(value));
    }
  };

  return (
    <button
      aria-label={`Copy ${label}`}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-secondary transition-colors hover:bg-muted hover:text-primary cursor-pointer"
      onClick={copyValue}
      title={isCopied ? "Copied" : `Copy ${label}`}
      type="button"
    >
      <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 24 24" width="20">
        <rect height="12" rx="2" stroke="currentColor" strokeWidth="1.75" width="12" x="8" y="8" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    </button>
  );
}

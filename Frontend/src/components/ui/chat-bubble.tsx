import * as React from "react";
import { cn } from "@/lib/utils";

interface ChatBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "sent" | "received";
  className?: string;
  children?: React.ReactNode;
}

interface ChatBubbleAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  fallback: string;
  className?: string;
}

interface ChatBubbleMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function ChatBubble({
  variant = "received",
  className,
  children,
  ...props
}: ChatBubbleProps) {
  return (
    <div
      className={cn(
        "flex w-max max-w-[80%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
        variant === "received" ? "mr-auto" : "ml-auto",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function ChatBubbleAvatar({
  src,
  fallback,
  className,
  ...props
}: ChatBubbleAvatarProps) {
  return (
    <div
      className={cn(
        "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-muted",
        className,
      )}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt="avatar"
          className="rounded-full"
          width={32}
          height={32}
        />
      ) : (
        <span className="text-sm font-medium">{fallback}</span>
      )}
    </div>
  );
}

export function ChatBubbleMessage({
  isLoading,
  className,
  children,
  ...props
}: ChatBubbleMessageProps) {
  return (
    <div
      className={cn("flex min-h-[20px] flex-col gap-1 break-words", className)}
      {...props}
    >
      {isLoading ? (
        <div className="flex gap-2">
          <div className="h-3 w-3 animate-bounce rounded-full bg-zinc-300 [animation-delay:-0.3s]" />
          <div className="h-3 w-3 animate-bounce rounded-full bg-zinc-300 [animation-delay:-0.15s]" />
          <div className="h-3 w-3 animate-bounce rounded-full bg-zinc-300" />
        </div>
      ) : (
        children
      )}
    </div>
  );
}

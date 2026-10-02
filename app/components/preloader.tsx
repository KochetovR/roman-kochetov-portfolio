export function Preloader() {
  return (
    <div className="flex items-center justify-center gap-2">
      <span className="size-3 rounded-full bg-white/80 animate-[preloader-bounce_0.9s_ease-in-out_infinite] [animation-delay:-0.3s] motion-reduce:animate-none" />
      <span className="size-3 rounded-full bg-white/80 animate-[preloader-bounce_0.9s_ease-in-out_infinite] [animation-delay:-0.15s] motion-reduce:animate-none" />
      <span className="size-3 rounded-full bg-white/80 animate-[preloader-bounce_0.9s_ease-in-out_infinite] motion-reduce:animate-none" />
    </div>
  );
}

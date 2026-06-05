export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
        <div className="font-display text-2xl tracking-[0.3em]">炭治郎</div>
        <p className="max-w-md text-sm text-muted-foreground">
          A tribute site. All characters and lore belong to Koyoharu Gotouge
          and Shueisha. Crafted with reverence.
        </p>
        <div className="hairline mt-4 w-40" />
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Set your heart ablaze · 心を燃やせ
        </p>
      </div>
    </footer>
  );
}

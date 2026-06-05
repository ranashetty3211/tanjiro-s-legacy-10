import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Breathing } from "@/components/Breathing";
import { Gallery } from "@/components/Gallery";
import { Quotes } from "@/components/Quotes";
import { Battles } from "@/components/Battles";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tanjiro Kamado — Demon Slayer Tribute" },
      {
        name: "description",
        content:
          "A cinematic tribute to Tanjiro Kamado: his story, Water Breathing forms, gallery, quotes, and the battles that led him to dawn.",
      },
      { property: "og:title", content: "Tanjiro Kamado — Demon Slayer Tribute" },
      {
        property: "og:description",
        content: "Cinematic dark Japanese tribute site. Story, breathing forms, gallery, quotes, battles.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Inter:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Story />
      <Breathing />
      <Gallery />
      <Quotes />
      <Battles />
      <Footer />
    </main>
  );
}

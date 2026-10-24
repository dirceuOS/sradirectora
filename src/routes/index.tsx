import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Daniela Pérez Borges | Empresaria, consejera y profesora" },
      { name: "description", content: "Empresaria inversionista, consejera de administración independiente y profesora de cátedra en el Tec de Monterrey." },
      { property: "og:title", content: "Daniela Pérez Borges" },
      { property: "og:description", content: "Empresaria inversionista, consejera independiente y profesora en el Tec de Monterrey." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/daniela.html"
      title="Daniela Pérez Borges"
      className="fixed inset-0 h-screen w-screen border-0"
    />
  );
}

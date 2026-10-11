import { PageHero, Notice } from "./Shared";

export function Policy({ title, sections }: { title: string; sections: { h: string; p: string }[] }) {
  return (
    <>
      <PageHero eyebrow="Policies" title={title} />
      <div className="mx-auto max-w-3xl space-y-8 px-4 py-16 sm:px-6">
        <Notice><strong>Draft for business review.</strong> This content is a placeholder and does not yet represent confirmed commitments.</Notice>
        {sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-2xl text-primary">{s.h}</h2>
            <p className="mt-2 text-muted-foreground">{s.p}</p>
          </section>
        ))}
      </div>
    </>
  );
}

export const policyHead = (title: string, description: string) => ({
  meta: [
    { title: `${title} — Sasyadhara Farms` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} — Sasyadhara Farms` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ],
});

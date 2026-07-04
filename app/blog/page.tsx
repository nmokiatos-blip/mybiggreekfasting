import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Essays from My Big Greek Fasting on fasting, ancestral health, hunger noise, sugar dependency, and food freedom."
};

const posts = [
  {
    title: "Fasting Is Not Starving",
    excerpt:
      "The difference between panic, punishment, and a body learning to run without constant input.",
    tag: "Fasting"
  },
  {
    title: "Greek Does Not Mean Recipes",
    excerpt:
      "Why this project uses Greek as ancestry, discipline, sunlight, sea, olive oil, and freedom.",
    tag: "Positioning"
  },
  {
    title: "Food Noise Is Not Your Personality",
    excerpt:
      "Cravings can feel like identity when the modern food environment has been training them for years.",
    tag: "Food Freedom"
  }
];

export default function BlogPage() {
  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title="Essays from outside the food prison."
        body="Direct writing on hunger, discipline, metabolic control, ancestral food, and the strange modern habit of eating all day."
      />
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="border border-limestone bg-marble p-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-laurel">{post.tag}</p>
              <h2 className="mt-4 font-display text-3xl font-black leading-tight text-deepAegean">
                {post.title}
              </h2>
              <p className="mt-4 leading-7 text-obsidian/72">{post.excerpt}</p>
              <Link href="/contact" className="mt-6 inline-flex font-black text-deepAegean">
                Follow for updates
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

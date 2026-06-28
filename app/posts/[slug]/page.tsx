import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, getPostSlugs, type ContentBlock, LEGEND } from "@/lib/posts";
import { ArticleSchema, BreadcrumbSchema } from "@/app/components/JsonLd";

const SITE_URL = "https://comentologia.online";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `${SITE_URL}/posts/${post.slug}`,
      images: [{ url: `${SITE_URL}/posts/${post.slug}/${post.coverImage}` }],
      siteName: "Comentologia",
      locale: "es_MX",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${SITE_URL}/posts/${post.slug}/${post.coverImage}`],
    },
  };
}

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export default async function PostPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ token?: string }>;
}) {
  const { slug } = await params;
  const { token } = await searchParams;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  if (post.exclusiveToken && token !== post.exclusiveToken) notFound();
  const isExclusive = !!(post.exclusiveToken && token === post.exclusiveToken);

    return (
      <div className="pt-28 pb-20">
        <ArticleSchema
          title={post.title}
          description={post.excerpt}
          imageUrl={`${SITE_URL}/posts/${post.slug}/${post.coverImage}`}
          datePublished={post.date}
          url={`${SITE_URL}/posts/${post.slug}`}
        />
        <BreadcrumbSchema
          items={[
            { name: "Inicio", url: SITE_URL },
            { name: post.title, url: `${SITE_URL}/posts/${post.slug}` },
          ]}
        />
        <article className="max-w-3xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-muted hover:text-primary transition-colors duration-200 mb-8"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Volver al inicio
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${post.color}`}
            >
              {post.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-gray-100 text-xs text-muted">
              {new Date(post.date).toLocaleDateString("es-MX", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          {isExclusive && (
            <div className="mb-6 px-5 py-3 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl text-center">
              <p className="font-serif text-lg font-semibold text-primary">
                Estás viendo contenido exclusivo de Comentología
              </p>
            </div>
          )}

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-3">
            {post.title}
          </h1>

          {post.subtitle && (
            <p className="text-xl text-muted font-sans mb-8">
              {post.subtitle}
            </p>
          )}

          <figure className="mb-10">
            <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src={`/posts/${post.slug}/${post.coverImage}`}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-contain"
                priority
                loading="eager"
              />
            </div>
            <figcaption className="text-xs text-muted/60 mt-1 text-center">
              {LEGEND}
            </figcaption>
          </figure>

          {!isExclusive && (
            <div className="my-10 text-center">
              <a
                href="https://buymeacoffee.com/mhwc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Acceder al contenido exclusivo por solo 2$
              </a>
            </div>
          )}

          <div className="space-y-10">
            {post.blocks.map((block, i) => (
              <BlockRenderer key={i} block={block} slug={post.slug} />
            ))}
          </div>

          {!isExclusive && (
            <div className="my-10 text-center">
              <a
                href="https://buymeacoffee.com/mhwc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Acceder al contenido exclusivo por solo 2$
              </a>
            </div>
          )}
        </article>
      </div>
    );
}

function BlockRenderer({
  block,
  slug,
}: {
  block: ContentBlock;
  slug: string;
}) {
  switch (block.type) {
    case "image":
      return (
        <figure>
          <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-sm">
            <Image
              src={`/posts/${slug}/${block.src}`}
              alt="Imagen del artículo"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain"
              loading="eager"
            />
          </div>
          <figcaption className="text-xs text-muted/60 mt-1 text-center">
            {LEGEND}
          </figcaption>
        </figure>
      );

    case "video":
      return (
        <figure>
          <div className="w-full rounded-xl overflow-hidden shadow-sm">
            <video
              src={`/posts/${slug}/${block.src}`}
              controls
              preload="metadata"
              playsInline
              className="w-full"
              title={LEGEND}
            />
          </div>
          <figcaption className="text-xs text-muted/60 mt-1 text-center">
            {LEGEND}
          </figcaption>
        </figure>
      );

    case "text":
      return (
        <section>
          {block.heading && (
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              {block.heading}
            </h2>
          )}
          <div className="space-y-4">
            {block.paragraphs.map((p, j) => (
              <p
                key={j}
                className="text-[15px] md:text-base leading-relaxed text-foreground/80"
              >
                {p}
              </p>
            ))}
          </div>
        </section>
      );

    case "transcript":
      return (
        <section className="bg-card border border-gray-100 rounded-xl p-5 md:p-6 shadow-sm">
          {block.heading && (
            <h3 className="font-serif text-xl font-bold text-foreground mb-5">
              {block.heading}
            </h3>
          )}
          <div className="space-y-5">
            {block.exchanges.map((exchange, j) => (
              <div key={j}>
                <span
                  className={`inline-block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                    exchange.speaker === "Marifer Centeno"
                      ? "text-accent"
                      : "text-muted"
                  }`}
                >
                  {exchange.speaker}
                </span>
                <p className="text-[15px] leading-relaxed text-foreground/80">
                  {exchange.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      );
  }
}

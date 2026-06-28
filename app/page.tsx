import Image from "next/image";
import Link from "next/link";
import { posts, LEGEND } from "@/lib/posts";

const trendingItems = [
  { id: 1, number: "01", title: "El video que rompió récords en redes" },
  { id: 2, number: "02", title: "Declaraciones que encendieron la polémica" },
  { id: 3, number: "03", title: "La reconciliación del año" },
  { id: 4, number: "04", title: "El look que todos están criticando" },
  { id: 5, number: "05", title: "Boda secreta: las pruebas que nadie vio" },
  { id: 6, number: "06", title: "El contrato millonario que sorprendió a todos" },
];

function PostCard({
  post,
}: {
  post: (typeof posts)[number];
}) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-card block"
    >
      <figure>
        <div
          className={`relative h-48 bg-gradient-to-br ${post.gradient}`}
        >
          <Image
            src={`/posts/${post.slug}/${post.coverImage}`}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
        <figcaption className="text-xs text-muted/60 mt-1 px-1 text-center">
          {LEGEND}
        </figcaption>
      </figure>
      <div className="p-5">
        <span
          className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold text-white ${post.color} mb-3`}
        >
          {post.category}
        </span>
        <h3 className="font-serif text-lg font-bold leading-snug mb-2 group-hover:text-primary transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative h-[80vh] min-h-[500px] w-full">
        <Image
          src="/portada.png"
          alt="Comentologia - Revista de Farándula y Espectáculos"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
                Farándula
              </span>
              <span className="px-3 py-1 rounded-full bg-accent text-white text-xs font-semibold">
                Espectáculos
              </span>
              <span className="px-3 py-1 rounded-full bg-gold text-white text-xs font-semibold">
                Tendencias
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Comentologia
            </h1>
            <p className="text-lg md:text-xl text-white/80 mt-3 max-w-2xl font-sans">
              Tu ventana al mundo del entretenimiento. Noticias, chismes y
              tendencias.
            </p>
            <p className="text-xs text-white/50 mt-2">
              {LEGEND}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 mb-8">
          <h2 className="font-serif text-3xl font-bold text-foreground flex items-center gap-3">
            <span className="w-1 h-8 bg-primary rounded-full" />
            Lo más viral
          </h2>
        </div>
        <div className="flex gap-6 overflow-x-auto px-4 pb-4 scrollbar-hide snap-x snap-mandatory">
          {trendingItems.map((item) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[280px] md:w-[320px] bg-card rounded-xl p-5 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all duration-200"
            >
              <span className="text-4xl md:text-5xl font-bold text-primary/20 font-serif">
                {item.number}
              </span>
              <p className="font-serif text-lg font-semibold mt-2 leading-snug">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-primary rounded-full" />
            Últimas noticias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.filter(p => !p.exclusiveToken && !p.hiddenFromHome).map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

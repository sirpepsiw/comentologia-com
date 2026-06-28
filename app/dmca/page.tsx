import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA",
  description:
    "Política DMCA de Comentologia. Procedimiento para notificaciones de infracción de derechos de autor y contra-notificaciones.",
  openGraph: {
    title: "DMCA",
    description:
      "Política DMCA de Comentologia. Procedimiento para notificaciones de infracción de derechos de autor.",
    url: "https://comentologia.online/dmca",
    siteName: "Comentologia",
    locale: "es_MX",
  },
};

export default function DMCAPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4">
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

        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
          Declaración de DMCA
        </h1>
        <p className="text-muted text-sm mb-10">
          Última actualización: 26 de mayo de 2026
        </p>

        <div className="space-y-8 text-[15px] leading-relaxed text-foreground/80">
          <section>
            <p>
              En <strong className="text-foreground">Comentologia</strong> respetamos
              los derechos de propiedad intelectual de terceros y cumplimos con la
              Ley de Derechos de Autor del Milenio Digital (DMCA). Esta política
              describe el procedimiento para presentar una notificación de infracción
              de derechos de autor, así como el proceso para presentar una
              contra-notificación.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              Notificación de Infracción
            </h2>
            <p className="mb-3">
              Si usted es el titular de los derechos de autor o está autorizado para
              actuar en nombre de uno, y cree que su obra protegida ha sido copiada
              o utilizada de una manera que constituye una infracción de derechos de
              autor, por favor notifique a nuestro Agente de DMCA proporcionando la
              siguiente información por escrito:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Una firma física o electrónica del titular de los derechos de autor
                o de la persona autorizada para actuar en su nombre.
              </li>
              <li>
                Identificación de la obra protegida objeto de la infracción, o si
                una sola notificación cubre múltiples obras, una lista
                representativa de dichas obras.
              </li>
              <li>
                Identificación del material infractor y suficiente información para
                permitirnos localizar el material (incluyendo la URL específica).
              </li>
              <li>
                Información de contacto: nombre, dirección, número de teléfono y
                correo electrónico.
              </li>
              <li>
                Una declaración de que usted cree de buena fe que el uso del
                material no está autorizado por el titular de los derechos de autor,
                su agente o la ley.
              </li>
              <li>
                Una declaración, bajo pena de perjurio, de que la información en la
                notificación es precisa y que usted está autorizado para actuar en
                nombre del titular de los derechos de autor.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              Contra-Notificación
            </h2>
            <p className="mb-3">
              Si usted cree que el material que fue eliminado o al que se negó el
              acceso fue eliminado por error o identificación incorrecta, puede
              presentar una contra-notificación. La contra-notificación debe incluir:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Su firma física o electrónica.
              </li>
              <li>
                Identificación del material que ha sido eliminado o al que se ha
                denegado el acceso, y la ubicación donde aparecía antes de la
                eliminación.
              </li>
              <li>
                Una declaración, bajo pena de perjurio, de que usted cree de buena
                fe que el material fue eliminado o denegado como resultado de un
                error o identificación incorrecta.
              </li>
              <li>
                Su nombre, dirección, número de teléfono y correo electrónico.
              </li>
              <li>
                Una declaración de que acepta la jurisdicción del tribunal federal
                en su distrito judicial, o si se encuentra fuera de los Estados
                Unidos, en cualquier distrito donde el proveedor de servicios pueda
                ser encontrado, y que aceptará la notificación del proceso de la
                persona que proporcionó la notificación original.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              Agente de DMCA
            </h2>
            <p className="mb-2">
              Todas las notificaciones y contra-notificaciones deben enviarse a
              nuestro Agente de DMCA designado:
            </p>
            <div className="bg-card border border-gray-200 rounded-xl p-5 mt-4 space-y-1 text-sm">
              <p><strong className="text-foreground">Comentologia</strong></p>
              <p>Atención: Agente de DMCA</p>
              <p>Correo electrónico: legadmca@comentologia.com</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              Política de Reincidentes
            </h2>
            <p>
              <strong className="text-foreground">Comentologia</strong> se reserva el
              derecho de desactivar o cancelar las cuentas de aquellos usuarios que
              sean considerados infractores reincidentes de derechos de autor, según
              lo determine <strong className="text-foreground">Comentologia</strong> a
              su sola discreción.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              Limitación de Responsabilidad
            </h2>
            <p>
              <strong className="text-foreground">Comentologia</strong> actúa como un
              proveedor de servicios en línea y no aloja, almacena ni distribuye
              directamente el contenido protegido por derechos de autor que los
              usuarios puedan cargar. Respondemos diligentemente a todas las
              notificaciones de infracción válidas de acuerdo con la DMCA.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

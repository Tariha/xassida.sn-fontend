import { about } from "@/config/pages"

export default function About() {
  return (
    <div className="container flex flex-col space-y-4 p-4 font-sans">
      <section>
        <h1 className="font-bold md:text-2xl">A Propos</h1>
        <p className="mt-2 text-sm md:text-lg">
          Bienvenue sur la version <strong>BETA</strong> de{" "}
          <strong>Xassida.sn </strong>
          {about.text}
        </p>
      </section>
      <section>
        <h1 className="font-bold md:text-2xl">Mentions</h1>
        <p className="mt-2 text-sm md:text-lg">
          Ce projet ne serait pas possible sans l&apos;aide de ces ressources ou
          technologies :
        </p>
      </section>
    </div>
  )
}

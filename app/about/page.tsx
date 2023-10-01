import { link } from "fs"

import { about } from "@/config/pages"

export default function About() {
  return (
    <div className="container flex flex-col space-y-4 py-4 font-sans">
      {about.map((ele) => (
        <section key={ele.header}>
          <h1 className="font-bold md:text-xl">{ele.header}</h1>
          <p className="mt-2 text-sm md:text-[16px]">{ele.text}</p>
          {ele.links?.map((link) => (
            <a
              target="_blank"
              rel="noreferrer"
              key={link.name}
              href={link.href}
              className="font-medium uppercase"
            >
              {link.name}
            </a>
          ))}
        </section>
      ))}
    </div>
  )
}

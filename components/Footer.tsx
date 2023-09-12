import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Separator } from "@/components/ui/separator"

const Footer = () => {
  return (
    <footer className="container py-4">
      <Separator />
      <div className="mt-4 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
          <h3 className="font-keania text-lg font-bold">Xassida.sn</h3>
          <div className="text-foreground/80">
            <p className="font-bold text-primary">
              Une expérience de lecture conviviale
            </p>
            <p className="text-justify">
              Notre application permet la lecture des versions numériques des
              xassidas classés par Tariha et Auteur avec transcription
              automatique. Les utilisateurs peuvent télécharger les xassidas au
              format PDF et bientôt profiter d&#39;audios des récitations.
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-bold">Naviguation</h3>
          <div className="grid grid-cols-2 gap-1 md:grid-cols-1">
            {siteConfig.nav.map((link) => (
              <Link href={link.href} key={link.href} passHref>
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-bold">Contributeurs</h3>
          <div className="primary text-foreground/80">
            <p className="font-bold text-primary">
              Aidez-nous à collecter des xassidas
            </p>
            <p className="text-justify">
              Nous sommes ravis que vous souhaitiez aider à collecter des
              Xassidas pour notre application. Votre contribution est précieuse
              pour nous aider à offrir une collection complète de Xassidas pour
              les utilisateurs de l’application
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default React.memo(Footer)

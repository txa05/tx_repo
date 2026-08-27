import { Metadata } from "next";
import { Suspense, ViewTransition } from "react";
import Link from "next/link";

import AboutMe from "@/components/pages/home/AboutMe";
import TechnologyGrid from "@/components/pages/home/technology/Grid";
import ExperienceGrid from "@/components/pages/home/experience/Grid";
import ProjectGrid from "@/components/pages/projects/Grid";
import { GetProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Início",
  description:
    "Portfólio de Tx: projetos, tecnologias e experiência prática em desenvolvimento de software.",
};

export default async function Home() {
  const { projects } = await GetProjects({ Featured: true });

  return (
    <div className="min-h-screen bg-neutral-950">
      <Suspense>
        <AboutMe />
      </Suspense>
      <Suspense>
        <TechnologyGrid />
      </Suspense>
      <Suspense>
        <ExperienceGrid />
      </Suspense>
      <ViewTransition name="project-grid" default="none" share="auto">
        <ProjectGrid Heading="Projetos em Destaque" projects={projects}>
          {projects.length > 0 ? (
            <div className="flex items-center justify-center p-10">
              <div className="group relative">
                <div className="absolute -inset-1 rounded-lg bg-blue-500 py-2 opacity-45 blur-md group-hover:bg-green-500 group-hover:blur-lg" />
                <Link
                  href="/projects"
                  transitionTypes={["nav-forward"]}
                  className="relative rounded-lg border-2 border-blue-500 bg-neutral-950 px-3 py-2 text-xl font-bold text-blue-100 group-hover:border-green-500 group-hover:text-green-100 active:scale-[0.97]"
                >
                  Ver todos os projetos
                </Link>
              </div>
            </div>
          ) : null}
        </ProjectGrid>
      </ViewTransition>
    </div>
  );
}

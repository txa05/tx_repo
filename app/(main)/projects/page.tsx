import { Metadata } from "next";

import Grid from "@/components/pages/projects/Grid";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos técnicos de Tx em sistemas, infraestrutura, backend e desenvolvimento web.",
};

import { GetProjects } from "@/data/projects";
import { ViewTransition } from "react";

export default async function Projects() {
  const { projects } = await GetProjects({ Featured: false });

  return (
    <div className="relative min-h-screen bg-neutral-950">
      <ViewTransition name="project-grid" default="none" share="auto">
        <Grid
          Heading="Projetos"
          Description="Projetos técnicos que representam a minha aprendizagem e experiência prática."
          projects={projects}
        />
      </ViewTransition>
    </div>
  );
}

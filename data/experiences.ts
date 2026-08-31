import "server-only";

import { type ExperiencesResponse } from "@/lib/objects";

export async function GetExperiences(): Promise<ExperiencesResponse> {
  return {
    experiences: [
      {
        id: 1,
        company: "Projetos Independentes e Académicos",
        start: "",
        tenure: "Experiência prática em desenvolvimento",
        positions: [
          {
            role: "Desenvolvimento de Software",
            start: "",
            work_done:
              "Desenvolvimento de projetos práticos envolvendo programação em C e C++, sistemas Linux, redes, processos, threads, shell, desenvolvimento web, bases de dados e infraestrutura.",
            projects: [
              { id: 1, name: "Minishell" },
              { id: 3, name: "Philosophers" },
              { id: 4, name: "Cub3D" },
              { id: 5, name: "ft_inception" },
              { id: 6, name: "PlayIt" },
              { id: 8, name: "Backend / API" },
            ],
          },
        ],
        technologies: [
          { id: 1, name: "C" },
          { id: 2, name: "C++" },
          { id: 3, name: "Linux" },
          { id: 4, name: "Docker" },
          { id: 5, name: "Next.js" },
          { id: 6, name: "PostgreSQL" },
        ],
      },
    ],
  };
}

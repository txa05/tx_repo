import "server-only";

import { type ProjectsResponse } from "@/lib/objects";

const technology = (id: number, name: string) => ({
  id,
  name,
});

const projects: ProjectsResponse["projects"] = [
  {
    id: 1,
    name: "Minishell",
    description:
      "Shell desenvolvido em C com processos, `fork`/`execve`, pipes, redirecionamentos, variáveis de ambiente, expansão de variáveis, sinais e gestão de processos.",
    featured: true,
    technologies: [
      technology(1, "C"),
    ],
  },
  {
    id: 2,
    name: "Push_swap",
    description:
      "Projeto de algoritmos em C para ordenação com um conjunto limitado de operações sobre stacks, explorando estruturas de dados e a otimização do número de operações.",
    featured: true,
    technologies: [technology(1, "C")],
  },
  {
    id: 3,
    name: "Philosophers",
    description:
      "Projeto em C sobre concorrência com `pthreads`, mutexes, sincronização entre threads e gestão de recursos partilhados.",
    featured: true,
    technologies: [technology(1, "C")],
  },
  {
    id: 4,
    name: "Cub3D",
    description:
      "Projeto de raycasting em C inspirado em Wolfenstein 3D, envolvendo matemática, rendering, mapas, texturas, eventos e biblioteca gráfica.",
    featured: true,
    technologies: [technology(1, "C")],
  },
  {
    id: 5,
    name: "ft_inception",
    description:
      "Projeto de infraestrutura com Docker e Docker Compose, configurando Nginx, WordPress/PHP-FPM e MariaDB, além de containers, redes e persistência de dados.",
    featured: true,
    technologies: [
      technology(22, "Docker"),
      technology(23, "Docker Compose"),
      technology(10, "MariaDB"),
    ],
  },
  {
    id: 6,
    name: "PlayIt",
    description:
      "Projeto pessoal em C++ com SFML para uma aplicação relacionada à reprodução de música, trabalhando com filesystem, carregamento de ficheiros, texturas, janela gráfica e áudio.",
    featured: true,
    technologies: [technology(2, "C++")],
  },
  {
    id: 8,
    name: "Backend / API",
    description:
      "Projetos de backend com Node.js, TypeScript e NestJS, explorando REST APIs, autenticação com JWT/OAuth e integração com bases de dados através do Prisma.",
    featured: true,
    technologies: [
      technology(4, "TypeScript"),
      technology(9, "Node.js"),
      technology(10, "NestJS"),
      technology(11, "JWT"),
      technology(12, "OAuth"),
      technology(13, "Prisma"),
    ],
  },
];

type Props = { Featured?: boolean };

export async function GetProjects({
  Featured = false,
}: Props): Promise<ProjectsResponse> {
  return {
    projects: Featured
      ? projects.filter((project) => project.featured)
      : projects,
  };
}

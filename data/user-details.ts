import "server-only";

const userDetails = {
  about:
    "Engenheiro de software, movido por uma afinidade latente em compreender os modelos de execução, a mecânica e a arquitetura interna dos sistemas além das camadas de abstração. Tenho construído experiência através de projetos em C, C++, desenvolvimento web e sistemas Linux, explorando desde processos, threads e gestão de memória até APIs, bases de dados e aplicações full-stack.\n\nA experiência prévia em automação e sistemas electromecânicos fundamentou a minha abordagem em software, melhorando a minha análise determinística de falhas, comportamento de sistemas sobre restrições do mundo real.",
};

export async function GetUserDetails() {
  return userDetails;
}

import React from "react";
import './projetos.css';
import { FaGithub } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

const projects = [
    {
        title: "My Control",
        image: "./images/mycontrol.jpg",
        description: "Aplicação feita com vibecoding, o mycontrol é um sistema para gestao pessoal, nele o usuario organiza, financias, habitos, agenda, calendario e rotina de treinos tudo no mesmo lugar. Dados sao salvos apenas em cache local",
        techs: ["Typescript","HTML","CSS"],
        github: "https://github.com/Davilucca22/Gestao-Pessoal",
        live: "https://mycontrol.lucca.dev.br",
    },
    {
        title: "Vitrine Virtual",
        image: "./images/vitrine.jpg",
        description: "Micro Saas voltado para comerciantes mostrarem seus produtos, conta com sistema de carrinho que ao finalizar, leva o usuario para o whatsapp da loja com os produtos escolhidos",
        techs: ["React","Tailwind","PostgreSQL","Node.js","Express"],
        github: "https://github.com/Davilucca22/vitrine-virtual",
        live: "https://vitrine.lucca.dev.br/vitrine?id_loja=4",
    },
    {
        title: "AgendaZ",
        video: "./video/Saas Barbearia.mp4",
        description: "Um sistema de agendamento voltado para comercios com autenticação, Cadastro de Serviços e funcionarios, Edição de perfil e indicadores mensais",
        techs: ["React","Tailwind","MongoDB","Node.js","Express"],
        github: "https://github.com/Davilucca22/Agenda-digital",
        live: "https://agendaz.lucca.dev.br",
    },
    {
        title: "Meu Portfólio",
        image: "./images/portifolio.png",
        description: "O presente site, desenvolvido para mostrar minhas habilidades, qualificações e projetos.",
        techs: ["HTML", "CSS", "JavaScript", "React"],
        github: "https://github.com/Davilucca22/meu-portifolio",
        live: "https://lucca.dev.br",
    },
];

export default function Projetos() {
    return (
        <div className="projects-grid">
            {projects.map((project, index) => (
                <article className="project-card" key={index}>
                    <div className="project-media">
                        {project.video ? (
                            <video
                                src={project.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                aria-label={`Demonstração do projeto ${project.title}`}
                            />
                        ) : (
                            <img
                                src={project.image}
                                alt={`Screenshot do projeto ${project.title}`}
                                loading="lazy"
                            />
                        )}
                    </div>
                    <div className="project-body">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-desc">{project.description}</p>
                        <div className="project-techs">
                            {project.techs.map((tech, i) => (
                                <span className="tech-badge" key={i}>{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                                aria-label={`Ver código no GitHub — ${project.title}`}
                            >
                                <FaGithub /> GitHub
                            </a>
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link project-link--live"
                                aria-label={`Ver projeto ao vivo — ${project.title}`}
                            >
                                <IoEyeSharp /> Ver Projeto
                            </a>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}
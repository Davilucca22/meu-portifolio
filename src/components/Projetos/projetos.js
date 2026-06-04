import React from "react";
import './projetos.css';
import { FaGithub } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

const projects = [
    {
        title: "Creatina Page",
        image: "./images/paginaCreatina.PNG",
        description: "Site desenvolvido para mostrar os benefícios e usos da Creatina.",
        techs: ["HTML", "CSS"],
        github: "https://github.com/Davilucca22/Creatine-Page",
        live: "https://creatine-page.vercel.app/",
    },
    {
        title: "Lista de Tarefas",
        image: "./images/listaDeTarefas.png",
        description: "Lista de tarefas com dados persistentes no localStorage e responsividade.",
        techs: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/Davilucca22/Lista-de-Tarefas",
        live: "https://lista-de-tarefas-liard-seven.vercel.app/",
    },
    {
        title: "Rede Social",
        video: "./video/videoProjetoBlog.mp4",
        description: "Blog completo com autenticação de usuário, pesquisa, curtidas, postagens, edição e exclusão.",
        techs: ["CSS", "React", "Node.js", "MongoDB"],
        github: "https://github.com/Davilucca22/Blog-com-node",
        live: "https://blog-com-node.vercel.app",
    },
    {
        title: "Site Dia dos Namorados",
        image: "./images/diadosnamorados.png",
        description: "Site para presentear quem você ama em datas comemorativas.",
        techs: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/Davilucca22/site-dia-dos-namorados",
        live: "https://site-dia-dos-namorados-umber.vercel.app/",
    },
    {
        title: "Meu Portfólio",
        image: "./images/portifolio.png",
        description: "O presente site, desenvolvido para mostrar minhas habilidades, qualificações e projetos.",
        techs: ["HTML", "CSS", "JavaScript", "React"],
        github: "https://github.com/Davilucca22/meu-portifolio",
        live: "https://meu-portifolio-dusky-five.vercel.app/",
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
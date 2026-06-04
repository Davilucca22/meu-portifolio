import React from "react";
import './Conhecimentos.css';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const skills = [
    {
        icon: <FaHtml5 />,
        iconColor: "#E34F26",
        title: "HTML",
        description: "Linguagem de marcação responsável pela estruturação do conteúdo na web. Define a hierarquia e o significado semântico dos elementos.",
    },
    {
        icon: <FaCss3Alt />,
        iconColor: "#1572B6",
        title: "CSS",
        description: "Linguagem para definir a apresentação visual de documentos HTML. Suporta Flexbox, Grid, animações e layouts responsivos para múltiplos dispositivos.",
    },
    {
        icon: <FaJs />,
        iconColor: "#F7DF1E",
        iconBg: "rgba(247, 223, 30, 0.12)",
        title: "JavaScript",
        description: "Linguagem de programação orientada a eventos e tipagem dinâmica. Base do desenvolvimento web moderno, utilizada tanto no front-end quanto no back-end.",
    },
    {
        icon: <FaNodeJs />,
        iconColor: "#339933",
        title: "Node.js",
        description: "Ambiente de execução JavaScript no servidor. Permite criar APIs RESTful, manipular arquivos e integrar bancos de dados com alta eficiência.",
    },
    {
        icon: <FaReact />,
        iconColor: "#61DAFB",
        iconBg: "rgba(97, 218, 251, 0.1)",
        title: "React",
        description: "Biblioteca JavaScript para criação de interfaces de usuário. Baseada em componentes reutilizáveis com Virtual DOM e suporte a aplicações SPA.",
    },
    {
        icon: <SiMongodb />,
        iconColor: "#47A248",
        title: "MongoDB",
        description: "Banco de dados NoSQL orientado a documentos. Armazena dados em formato BSON, ideal para aplicações modernas que exigem flexibilidade e escalabilidade.",
    },
    {
        icon: <SiTailwindcss />,
        iconColor: "#06B6D4",
        iconBg: "rgba(6, 182, 212, 0.1)",
        title: "Tailwind CSS",
        description: "Framework CSS utilitário que permite criar interfaces modernas e responsivas com rapidez e consistência visual, sem sair do HTML.",
    },
    {
        icon: <span className="text-icon">PA</span>,
        iconColor: "#742774",
        title: "Power Apps",
        description: "Plataforma Microsoft para criação de aplicações empresariais low-code. Ideal para automações, sistemas internos e integração com dados corporativos.",
    },
    {
        icon: <span className="text-icon">SP</span>,
        iconColor: "#0078D4",
        title: "SharePoint",
        description: "Plataforma Microsoft de colaboração para gerenciamento de documentos, portais corporativos e integração com ferramentas do Microsoft 365.",
    },
];

export default function Conhecimentos() {
    return (
        <div className="skills-grid">
            {skills.map((skill, index) => (
                <article className="skill-card" key={index}>
                    <div
                        className="skill-icon"
                        style={{
                            color: skill.iconColor,
                            background: skill.iconBg || `${skill.iconColor}1a`,
                        }}
                    >
                        {skill.icon}
                    </div>
                    <h3 className="skill-title">{skill.title}</h3>
                    <p className="skill-desc">{skill.description}</p>
                </article>
            ))}
        </div>
    );
}
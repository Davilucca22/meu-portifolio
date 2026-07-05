import React, { useEffect } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { FaCheck } from "react-icons/fa";
import "./planos.css";

export default function Planos() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container">
            <Header />
            <main className="planos-container">
                <div className="planos-header">
                    <span className="section-label">Investimento</span>
                    <h1 className="section-title">Planos para Landing Pages</h1>
                    <p>Escolha o plano ideal para dar vida ao seu projeto na web com design profissional, performance e foco em resultados.</p>
                </div>

                <div className="planos-grid">
                    {/* Starter */}
                    <div className="plano-card">
                        <h2 className="plano-title">Starter</h2>
                        <div className="plano-price">R$ 699,90</div>
                        <ul className="plano-features">
                            <li><FaCheck /> 1 Página</li>
                            <li><FaCheck /> Layout Profissional</li>
                            <li><FaCheck /> Responsivo (Desktop e Mobile)</li>
                            <li><FaCheck /> Botão para Contato</li>
                            <li><FaCheck /> SEO básico</li>
                            <li><FaCheck /> Hospedagem cloud com HTTPS e deploy automatizado</li>
                            <li><FaCheck /> Domínio por conta do cliente</li>
                        </ul>
                        <a href="https://wa.me/qr/ZZFAG3EVAASOA1" className="btn btn-outline plano-btn" target="_blank" rel="noreferrer">Quero o Starter</a>
                    </div>

                    {/* Profissional */}
                    <div className="plano-card destaque">
                        <div className="plano-badge">Mais Escolhido</div>
                        <h2 className="plano-title">Profissional</h2>
                        <div className="plano-price">R$ 1.299,90</div>
                        <ul className="plano-features">
                            <li><FaCheck /> Tudo do Starter</li>
                            <li><FaCheck /> Design Personalizado e Chamativo</li>
                            <li><FaCheck /> Animações Fluidas</li>
                            <li><FaCheck /> Formulário para envio de E-mail</li>
                            <li><FaCheck /> Integração com Google Maps (se fizer sentido)</li>
                            <li><FaCheck /> Integração com WhatsApp</li>
                            <li><FaCheck /> SEO mais completo</li>
                            <li><FaCheck /> Domínio .com.br incluso por 1 ano (renovação por conta do cliente)</li>
                            <li><FaCheck /> Configuração de DNS</li>
                        </ul>
                        <a href="https://wa.me/qr/ZZFAG3EVAASOA1" className="btn btn-primary plano-btn" target="_blank" rel="noreferrer">Quero o Profissional</a>
                    </div>

                    {/* Premium */}
                    <div className="plano-card">
                        <h2 className="plano-title">Premium</h2>
                        <div className="plano-price">R$ 2.490,00</div>
                        <ul className="plano-features">
                            <li><FaCheck /> Tudo do Profissional</li>
                            <li><FaCheck /> Copywriting Estratégico</li>
                            <li><FaCheck /> Ilustrações ou animações avançadas</li>
                            <li><FaCheck /> Painel Administrativo</li>
                            <li><FaCheck /> Integração com APIs externas</li>
                            <li><FaCheck /> Automações</li>
                            <li><FaCheck /> Dashboard Básico</li>
                        </ul>
                        <a href="https://wa.me/qr/ZZFAG3EVAASOA1" className="btn btn-outline plano-btn" target="_blank" rel="noreferrer">Quero o Premium</a>
                    </div>
                </div>

                <div className="planos-observacoes">
                    <h3>Observações Importantes</h3>
                    <ul>
                        <li>Todos os pacotes incluem 7 dias de suporte após a entrega do projeto.</li>
                        <li>O prazo de entrega é definido de acordo com o escopo e a complexidade do projeto.</li>
                        <li>Alterações solicitadas após o período de suporte poderão ser orçadas separadamente.</li>
                        <li>Planos de manutenção e atualização mensal estão disponíveis mediante contratação, com valores definidos conforme as necessidades do projeto.</li>
                        <li>O domínio é de propriedade do cliente.</li>
                        <li>O valor da hospedagem pode variar conforme a necessidade do projeto, quando aplicável.</li>
                        <li>O orçamento poderá ser reajustado caso haja alteração no escopo durante o desenvolvimento.</li>
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
}

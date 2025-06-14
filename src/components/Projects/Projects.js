import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import utillab from "../../Assets/Projects/utillab.png";
import wachannel from "../../Assets/Projects/wachannel.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projetos <strong className="purple">Profissionais e Pessoais</strong>
        </h1>
        <p style={{ color: "white" }}>
          Conheça alguns dos principais projetos que desenvolvi ao longo da
          minha carreira.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={utillab}
              isBlog={false}
              title="Utillab"
              description="O UtilLab (utillab.net) é uma plataforma online com ferramentas gratuitas para o dia a dia, como conversores de unidades, calculadoras, formatador de texto, contador de palavras e corretor gramatical com IA. Com interface simples e eficiente, foi desenvolvido em Next.js e integra recursos de inteligência artificial para oferecer resultados rápidos e inteligentes diretamente no navegador."
              demoLink="https://utillab.net"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wachannel}
              isBlog={false}
              title="WaChannel"
              description="Sistema baseado em chatwoot, com integração da evolution api para conectar ao WhatsApp. Permite atendimento, automação e gestão de conversas de forma eficiente."
              demoLink="https://omni.wachannel.com.br"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://media.seudinheiro.com/uploads/2020/09/hapvida-e-intermedica-e1610134787351.jpg"
              isBlog={false}
              title="SIGA"
              description="Sistema assistencial, otimizando o fluxo hospitalar. Funcionalidades: aprazamento, controle de equipamentos, diagnósticos, prescrição, checagem, formulários assistenciais, biometria, segurança via JWT."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://media.seudinheiro.com/uploads/2020/09/hapvida-e-intermedica-e1610134787351.jpg"
              isBlog={false}
              title="SIGA Login"
              description="Autenticação e autorização de usuários. Funcionalidades: login seguro, JWT, cache com Redis, permissões, WebSocket para biometria, gestão de sessões, mensageria, jobs automatizados."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://www.fieb.org.br/wp-content/themes/web-fieb/assets/images/logo.png"
              isBlog={false}
              title="Gestor de Termos e Aceites"
              description="Gerencia termos de uso e aceites para sistemas da FIEB. Funcionalidades: permissões por perfil, criptografia, renderização em sistemas externos, controle e histórico de aceites."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://www.notacontrol.com.br/home/assets/img/gescon1x.jpg"
              isBlog={false}
              title="GESCON"
              description="Sistema de gestão eletrônica de processos e documentos. Funcionalidades: consulta por CPF/processo, abertura online, redução de papel, status em tempo real, impressão de modelos e padronização de fluxo."
              demoLink="https://play.google.com/store/apps/details?id=com.gesconmobile&hl=pt_BR"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import "./Home.css";
import MegaScroll from "react-mega-scroll";
import logo_univille from "../public/images/univille.webp";
import Marquee from "react-fast-marquee";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./media_queries/media_queries.css";

function Home() {
  const page2Ref = useRef(null);
  const page3Ref = useRef(null);
  const page4Ref = useRef(null);
  const page5Ref = useRef(null);
  const page6Ref = useRef(null);
  const page7Ref = useRef(null);
  const [checkedScroll1, setCheckedScroll1] = useState(false);
  const [checkedScroll2, setCheckedScroll2] = useState(false);
  const [checkedScroll3, setCheckedScroll3] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [showRedThermometer, setShowRedThermometer] = useState(false);

  useEffect(() => {
    Aos.init();
    const timer = setTimeout(() => {
      page2Ref.current?.scrollIntoView({ behavior: "smooth" });
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <MegaScroll>
        <div className="pag-1">
          <div className="container-text-logo">
            <div className="logo">
              <img src={logo_univille} alt="logo-univille" />
            </div>
            <div className="title">
              <h1>
                FEMINICIDIO: <br /> Você esta segura?
              </h1>
            </div>
            <Marquee
              autoFill={true}
              pauseOnHover="boolean"
              speed="140"
              className="react-marquee"
              gradientColor="rgb(231, 231, 231)"
              gradient={true}
              gradientWidth={20}
              delay={1}
              loop={0}
            >
              <div className="body-cases">
                <div className="container-information">
                  <h1></h1>
                </div>
                <div className="container-information">
                  <h2>
                    No Brasil, em 2024, foram registrados 1.450 feminicídios e
                    2.485 homicídios dolosos de mulheres e lesões corporais
                    seguidas de morte.
                  </h2>
                  <button
                    className="btn-style"
                    onClick={() =>
                      window.open(
                        "https://agenciabrasil.ebc.com.br/direitos-humanos/noticia/2025-03/brasil-registra-1450-feminicidios-em-2024-12-mais-que-ano-anterior#:~:text=Dados%20do%20Relat%C3%B3rio%20Anual%20Socioecon%C3%B4mico,les%C3%B5es%20corporais%20seguidas%20de%20morte."
                      )
                    }
                  >
                    <h2>ACESSAR A FONTE</h2>
                  </button>
                </div>
                <div className="container-information">
                  <h2>
                    Dados do Fórum Brasileiro de Segurança Pública mostram que,
                    em 2023, mulheres negras foram 63,6% das vítimas de
                    feminicídio, 68,6% das vítimas das demais mortes
                    intencionais de mulheres e 52,5% das vítimas de estupro e
                    estupro de vulnerável.
                  </h2>
                  <button
                    className="btn-style"
                    onClick={() =>
                      window.open(
                        "https://fpabramo.org.br/focusbrasil/2024/11/26/mulheres-negras-sao-maioria-das-vitimas-de-feminicidio-violencia-armada-e-sexual-no-brasil/"
                      )
                    }
                  >
                    <h2>ACESSAR A FONTE</h2>
                  </button>
                </div>
                <div className="container-information">
                  <h2>
                    A violência principal é a ofensa verbal, seguida da ameaça
                    de violência física. Em 61% dos casos, o agressor é
                    conhecido da vítima, sendo principalmente companheiros e
                    ex-companheiros.
                  </h2>
                  <button
                    className="btn-style"
                    onClick={() =>
                      window.open(
                        "https://vestibular.uol.com.br/resumo-das-disciplinas/atualidades/feminicidio-brasil-e-o-5-pais-em-morte-violentas-de-mulheres-no-mundo.htm"
                      )
                    }
                  >
                    <h2>ACESSAR A FONTE</h2>
                  </button>
                </div>
                <div className="container-information">
                  <h2>
                    Na última década (2012-2022), ao menos 48.289 mulheres foram
                    assassinadas no Brasil. Somente em 2022, foram 3.806
                    vítimas, o que representa uma taxa de 3,5 casos para cada
                    grupo de 100 mil mulheres.
                  </h2>
                  <button
                    className="btn-style"
                    onClick={() =>
                      window.open(
                        "https://fontesegura.forumseguranca.org.br/homicidio-de-mulheres-no-brasil/"
                      )
                    }
                  >
                    <h2>ACESSAR A FONTE</h2>
                  </button>
                </div>
              </div>
            </Marquee>
          </div>
        </div>
        <div ref={page2Ref} className="pag-2">
          <div className="main-title-pg2">
            <h1>Marcos Históricos na Construção da Lei Maria da Penha</h1>
          </div>
          <VerticalTimeline>
            <VerticalTimelineElement
              style={{ color: "black" }}
              contentStyle={{ background: "#fff", color: "#000" }}
              contentArrowStyle={{
                borderRight: "7px solid  #fff",
              }}
              date="1983"
              iconStyle={{ background: "#FFFFFF", color: "#000" }}
            >
              <h3 className="vertical-timeline-element-title">
                Fatos que Deram Origem ao Caso
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Início das agressões contra Maria da Penha
              </h4>
              <p>
                Maria da Penha Maia Fernandes, biofarmacêutica cearense, começou
                a sofrer agressões do então marido, culminando em uma tentativa
                de homicídio que a deixou paraplégica.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              style={{ color: "black" }}
              date="1984"
              iconStyle={{ background: "#FFFFCC", color: "#000" }}
            >
              <h3 className="vertical-timeline-element-title">
                Início do Processo Judicial e Primeiras Denúncias
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Primeira denúncia e início do processo judicial
              </h4>
              <p>
                Maria da Penha denunciou o agressor à Justiça. O processo se
                arrastou por anos, com várias tentativas de recursos e lentidão
                judicial.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              style={{ color: "black" }}
              date="1998"
              iconStyle={{ background: "#FFFF66", color: "#000" }}
            >
              <h3 className="vertical-timeline-element-title">
                Internacionalização do Caso: Denúncia à OEA
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Denúncia à Comissão Interamericana de Direitos Humanos (CIDH)
              </h4>
              <p>
                Após quase duas décadas sem condenação efetiva do agressor,
                Maria da Penha, com apoio de ONGs, denunciou o Estado brasileiro
                à Organização dos Estados Americanos (OEA), por negligência,
                omissão e tolerância em relação à violência doméstica.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              style={{ color: "black" }}
              date="2001"
              iconStyle={{ background: "#FFD700", color: "#000" }}
            >
              <h3 className="vertical-timeline-element-title">
                Condenação Internacional do Brasil
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Condenação do Brasil pela OEA
              </h4>
              <p>
                A Comissão Interamericana de Direitos Humanos condenou o Brasil
                por falhar na proteção de Maria da Penha e recomendou ações para
                prevenir e punir a violência doméstica, além de compensação à
                vítima.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              style={{ color: "black" }}
              date="2002–2006"
              iconStyle={{ background: "#FFA500", color: "#000" }}
            >
              <h3 className="vertical-timeline-element-title">
                Elaboração e Tramitação do Projeto de Lei
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Elaboração e tramitação do projeto de lei
              </h4>
              <p>
                Com a pressão internacional e interna, o governo brasileiro,
                junto a entidades civis e especialistas, elaborou um projeto de
                lei para combater a violência doméstica. O projeto foi debatido
                e aprovado pelo Congresso Nacional.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              style={{ color: "black" }}
              date="2006"
              iconStyle={{ background: "#FF4500", color: "#000" }}
            >
              <h3 className="vertical-timeline-element-title">
                Sanção e Entrada em Vigor da Lei Maria da Penha
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Sanção da Lei Maria da Penha
              </h4>
              <p>
                O então presidente na época sancionou a Lei nº 11.340, conhecida
                como Lei Maria da Penha, que entrou em vigor em 22 de setembro
                de 2006, criando mecanismos para coibir e prevenir a violência
                doméstica e familiar contra a mulher.
              </p>
            </VerticalTimelineElement>
            <div>
              <h1 className="subtitle-cases">
                Casos de Grande Repercussão Após a Criação da Lei Maria da Penha
              </h1>
            </div>
            <VerticalTimelineElement
              style={{ color: "black" }}
              date="2010"
              iconStyle={{ background: "#FF4500", color: "#000" }}
            >
              <h3 className="vertical-timeline-element-title">
                Caso Eliza Samudio
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Violência de gênero e feminicídio com ampla repercussão nacional
              </h4>
              <p>
                A modelo Eliza Samudio foi assassinada em 2010, e o goleiro
                Bruno Fernandes foi condenado por seu envolvimento no crime. O
                caso destacou a gravidade da violência de gênero no Brasil e
                reforçou a necessidade de mecanismos de proteção, como a Lei
                Maria da Penha.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              style={{ color: "black" }}
              date="2018"
              iconStyle={{ background: "#FF4500", color: "#000" }}
            >
              <h3 className="vertical-timeline-element-title">
                Caso Tatiane Spitzner
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Feminicídio e violência doméstica registrada por câmeras de
                segurança
              </h4>
              <p>
                Tatiane Spitzner foi morta pelo marido, o advogado Luís Felipe
                Manvailer, em 2018, em Guarapuava (PR). O crime teve grande
                repercussão, pois imagens das agressões foram divulgadas
                publicamente. O caso impulsionou discussões sobre a efetividade
                da Lei Maria da Penha e a importância de medidas protetivas
                rápidas e eficazes.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
        <div className="pag-2"></div>
        <div className="pag-2"></div>
        <div ref={page3Ref}>
          <div className="pag-3">
            <div className="main-title">
              <h1>💜 Você não está sozinha.</h1>
              <h2>
                Você já parou para pensar se o seu relacionamento é saudável?
                Consegue perceber os sinais de um relacionamento abusivo? Muitas
                vezes, a violência doméstica e familiar não começa com agressões
                físicas, mas com palavras, ameaças, controle e humilhação
                silenciosa.
              </h2>
              <h2>
                Este questionário foi criado especialmente para ajudar você a
                identificar possíveis sinais de abuso no seu relacionamento. Ele
                é totalmente anônimo e seguro. Se identificar alguma situação de
                risco, saiba que há ajuda: ligue 190, podemos lhe ajudar!
                <br />
                <br />
                👉 Responda às perguntas a seguir com sinceridade.
              </h2>
            </div>
          </div>
        </div>
        <div ref={page3Ref}>
          <div className="pag-3">
            <div className="main-title-pg3">
              <h2>
                Cada resposta pode auxiliar a identificar se você está em uma
                relação abusiva ou segura. <br />
                <br />
                Sua vida vale muito. Sua voz importa.
              </h2>{" "}
              <br />
            </div>
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                Seu parceiro te critica ou humilha na frente de outras pessoas,
                mesmo que de forma “brincalhona” ou sutil?
              </label>
            </div>
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                Ele/a já fez comentários que diminuem sua autoestima ou seu
                valor?
              </label>
            </div>
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                Alguma vez ele/a já te isolou de amigos ou familiares, dizendo
                que “eles não são bons para você”?
              </label>
            </div>
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                Seu parceiro já pediu para que você não saia com certas pessoas
                ou em determinados horários?
              </label>
            </div>
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                Ele/a já tentou controlar suas redes sociais ou pediu suas
                senhas?
              </label>
            </div>
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                Seu parceiro já tentou controlar o que você veste ou como se
                comporta?
              </label>
            </div>
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  checked={checkedScroll1}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    setCheckedScroll1(isChecked);
                    if (isChecked) {
                      page4Ref.current?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                />
                Ele/a já te pressionou a fazer coisas que você não queria, como
                usar roupas específicas, bebidas, drogas ou sexo?
              </label>
              <div className="btn-container">
                <button
                  className="btn-style"
                  onClick={(e) => {
                    page4Ref.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Pular questões
                </button>
              </div>
            </div>
          </div>
        </div>
        <div ref={page4Ref}>
          <div className="pag-4">
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                Alguma vez ele/a já te xingou ou falou palavrões quando estavam
                sozinhos?
              </label>
            </div>
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                Você já sentiu medo de discutir ou expressar sua opinião para
                ele/a?
              </label>
            </div>
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                Seu parceiro já tentou manipular você usando chantagens
                emocionais (ex: “Se você me deixar, eu não aguento viver”)?
              </label>
            </div>
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                Ele/a já fez ameaças verbais, mesmo que vagas, do tipo “você vai
                se arrepender” ou “vai ver só”?
              </label>
            </div>
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                Alguma vez ele/a já destruiu ou quebrou seus pertences durante
                uma briga?
              </label>
            </div>
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                Ele/a já te impediu de trabalhar, estudar ou ter seu próprio
                dinheiro?
              </label>
            </div>
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                Seu parceiro já controlou seu telefone, ligou ou mandou
                mensagens sem parar para saber onde você estava?
              </label>
            </div>
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  checked={checkedScroll2}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    setCheckedScroll2(isChecked);
                    if (isChecked) {
                      page5Ref.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                />
                Ele/a já fez ameaças contra você ou contra sua família, mesmo
                que sem levar adiante?
              </label>
              <div className="btn-container">
                <button
                  className="btn-style"
                  onClick={(e) => {
                    page3Ref.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Retornar questões
                </button>
                <button
                  className="btn-style"
                  onClick={(e) => {
                    page5Ref.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Pular questões
                </button>
              </div>
            </div>
          </div>
        </div>
        <div ref={page5Ref}>
          <div className="pag-5">
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                Alguma vez ele/a já usou a força para segurar você contra sua
                vontade ou empurrou você?
              </label>
            </div>
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                Ele/a já te perseguiu, apareceu de surpresa no seu trabalho,
                escola ou casa para te controlar?
              </label>
            </div>
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                Seu parceiro já invadiu sua casa ou seu espaço pessoal sem sua
                permissão?
              </label>
            </div>
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                Ele/a já te ameaçou com objetos, como facas, paus ou outros
                instrumentos?
              </label>
            </div>
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                Você já foi agredida fisicamente, com socos, tapas ou chutes?
              </label>
            </div>
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                Alguma vez você precisou de atendimento médico por causa de
                agressões dele/a?
              </label>
            </div>
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                Seu parceiro já fez ameaças explícitas de morte contra você?
              </label>
            </div>
            <div className="container-label">
              <label>
                <input
                  type="checkbox"
                  checked={checkedScroll3}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    setCheckedScroll3(isChecked);
                    setIsChecked(e.target.checked);
                    if (isChecked) {
                      page6Ref.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                />
                Ele/a já tentou te sufocar, asfixiar ou estrangular?
              </label>
              <div className="btn-container">
                <button
                  className="btn-style"
                  onClick={(e) => {
                    page4Ref.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Retornar questões
                </button>
                <button
                  className="btn-style"
                  onClick={(e) => {
                    page6Ref.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Pular questões
                </button>
              </div>
            </div>
          </div>
        </div>
        <div ref={page6Ref} className="pag-6">
          <div className="container-label" style={{ color: "#fff" }}>
            <label>
              <input
                type="checkbox"
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              Alguma vez ele/a falou que “vai acabar com você” ou “te matar”?
            </label>
          </div>
          <div className="container-label" style={{ color: "#fff" }}>
            <label>
              <input
                type="checkbox"
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              Você sente que sua vida está em risco por causa do comportamento
              dele/a?
            </label>
            <div className="btn-container">
              <button
                className="btn-style"
                style={{ color: "#fff" }}
                onClick={(e) => {
                  page5Ref.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Retornar questões
              </button>
              <button
                className="btn-style"
                style={{ color: "#fff" }}
                onClick={(e) => {
                  page7Ref.current?.scrollIntoView({ behavior: "smooth" });
                  setShowRedThermometer(isChecked);
                }}
              >
                VEJA O RESULTADO
              </button>
            </div>
          </div>
        </div>
        <div
          ref={page7Ref}
          className={
            showRedThermometer ? "termometroVermelho" : "termometroVerde"
          }
        ></div>
      </MegaScroll>
    </>
  );
}

export default Home;

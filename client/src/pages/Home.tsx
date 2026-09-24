import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Heart,
  Instagram,
  Menu,
  MessageCircle,
  Package,
  Palette,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";

const referenceImage = "/manus-storage/prateleira-princesa_f85bc59c.jpeg";

const categories = ["Tudo", "Lembrancinhas", "Festas", "Quarto infantil"];

const portfolio = [
  {
    title: "Prateleira princesa",
    category: "Quarto infantil",
    tag: "Peça destaque",
    description: "Encanto e organização para deixar o quarto da sua pequena ainda mais especial.",
    className: "portfolio-feature",
    image: referenceImage,
    alt: "Prateleira princesa rosa para decoração de quarto infantil",
  },
  {
    title: "Festa princesa",
    category: "Festas",
    tag: "Decoração de aniversário",
    description: "Prateleiras, doces e detalhes que deixam a mesa do parabéns ainda mais encantadora.",
    className: "portfolio-sun",
    image: "/manus-storage/prateleira-festa-princesa_2e08e9ff.jpeg",
    alt: "Prateleiras rosas decorando uma mesa de aniversário com tema princesa",
  },
  {
    title: "Mimos de mesa",
    category: "Lembrancinhas",
    tag: "Para presentear",
    description: "Pequenos objetos, grandes sorrisos para levar da festa.",
    className: "portfolio-coral",
    alt: "Lembrancinha colorida de impressão 3D para festa",
  },
  {
    title: "Cantinho com nome",
    category: "Quarto infantil",
    tag: "Personalizável",
    description: "Decoração afetiva feita para combinar com cada universo.",
    className: "portfolio-sky",
    alt: "Placa decorativa personalizada para quarto infantil",
  },
];

const processSteps = [
  { number: "01", title: "Você imagina", text: "Manda o tema, a referência ou só aquela ideia que ainda está no papel." },
  { number: "02", title: "A gente cria", text: "Pensamos em cores, tamanho e acabamento para a peça ficar do seu jeito." },
  { number: "03", title: "A impressora transforma", text: "Camada por camada, sua ideia ganha forma com cuidado e precisão." },
  { number: "04", title: "Você celebra", text: "A peça chega pronta para fazer parte de um momento muito especial." },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Tudo");
  const [mobileOpen, setMobileOpen] = useState(false);

  const visiblePortfolio = activeCategory === "Tudo"
    ? portfolio
    : portfolio.filter((item) => item.category === activeCategory);

  return (
    <main className="site-shell">
      <div className="announcement-bar">
        <Sparkles size={14} strokeWidth={2.5} />
        <span>Peças feitas sob medida para celebrar o que é único</span>
        <Sparkles size={14} strokeWidth={2.5} />
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Prisma Studio, início">
          <span className="brand-mark"><span /><span /><span /><span /></span>
          <span className="brand-name">prisma<span>studio</span></span>
        </a>
        <nav className={`main-nav ${mobileOpen ? "is-open" : ""}`} aria-label="Navegação principal">
          <a href="#portfolio" onClick={() => setMobileOpen(false)}>Portfólio</a>
          <a href="#jeito" onClick={() => setMobileOpen(false)}>Nosso jeito</a>
          <a href="#contato" onClick={() => setMobileOpen(false)}>Faça seu pedido</a>
        </nav>
        <a href="#contato" className="header-cta">Quero criar <ArrowUpRight size={16} /></a>
        <button
          className="mobile-menu"
          type="button"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> impressão 3D com afeto</div>
          <h1>Ideias que<br /><em>ganham forma.</em></h1>
          <p className="hero-description">Lembrancinhas, detalhes para festas e decoração para quartos infantis — criados para fazer parte das suas melhores memórias.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#portfolio">Ver o que fazemos <ArrowDownRight size={18} /></a>
            <a className="text-link" href="#contato">Me conta sua ideia <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-note"><span className="note-avatars"><i>✦</i><i>♡</i><i>●</i></span><span>feito em pequenos lotes,<br />com atenção aos detalhes</span></div>
        </div>
        <div className="hero-art" aria-label="Peças da Prisma Studio">
          <div className="art-sun" />
          <div className="art-grid" />
          <div className="art-label art-label-top"><span>feito para<br /><strong>celebrar</strong></span><ArrowDownRight size={17} /></div>
          <div className="art-label art-label-bottom"><span>uma ideia<br /><strong>de cada vez</strong></span></div>
          <div className="hero-object hero-object-main">
            <div className="object-roof" />
            <div className="object-window"><span /><span /><span /></div>
            <div className="object-shelf"><b /><b /></div>
            <div className="object-body" />
          </div>
          <div className="hero-object hero-object-mini">
            <div className="mini-crown">✦</div>
            <div className="mini-body" />
            <div className="mini-foot mini-foot-left" /><div className="mini-foot mini-foot-right" />
          </div>
          <div className="art-sticker"><Star size={13} fill="currentColor" /><span>feito<br />com calma</span></div>
        </div>
        <div className="scroll-cue"><span>role para descobrir</span><ChevronDown size={16} /></div>
      </section>

      <section className="intro-strip">
        <div className="section-kicker">01 / de onde tudo começa</div>
        <div className="intro-statement">Não é só plástico.<br /><em>É parte da história.</em></div>
        <div className="intro-aside"><span className="line" /><p>Cada peça nasce de uma conversa, uma comemoração ou um cantinho que merece ficar ainda mais especial.</p></div>
      </section>

      <section className="portfolio-section" id="portfolio">
        <div className="section-heading">
          <div><div className="section-kicker">02 / um pouco do nosso universo</div><h2>Feito para<br /><em>ficar na memória.</em></h2></div>
          <p>Do primeiro rascunho ao último detalhe, criamos objetos que fazem o momento durar um pouquinho mais.</p>
        </div>
        <div className="filter-row" role="tablist" aria-label="Filtrar portfólio">
          {categories.map((category) => (
            <button key={category} type="button" className={activeCategory === category ? "filter-button active" : "filter-button"} onClick={() => setActiveCategory(category)} role="tab" aria-selected={activeCategory === category}>{category}</button>
          ))}
        </div>
        <div className="portfolio-grid">
          {visiblePortfolio.map((item, index) => (
            <article className={`portfolio-card ${item.className}`} key={item.title}>
              {item.image ? <img src={item.image} alt={item.alt} /> : <div className="product-illustration"><ProductIllustration variant={index} /></div>}
              <div className="card-overlay"><span>{item.tag}</span><ArrowUpRight size={19} /></div>
              <div className="card-caption"><div><h3>{item.title}</h3><p>{item.description}</p></div><span className="card-number">0{index + 1}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="promise-section" id="jeito">
        <div className="promise-visual"><div className="promise-circle"><Heart size={28} fill="currentColor" /><span>feito<br />com<br />afeto</span></div><div className="promise-orbit orbit-one" /><div className="promise-orbit orbit-two" /><span className="orbit-star star-one">✦</span><span className="orbit-star star-two">✦</span></div>
        <div className="promise-copy"><div className="section-kicker light">03 / o nosso jeito</div><h2>Detalhe por detalhe,<br /><em>ideia por ideia.</em></h2><p>Na Prisma Studio, a gente acredita que objetos pequenos podem carregar sentimentos enormes. Por isso, cuidamos de cada cor, cada curva e cada acabamento.</p><div className="promise-list"><div><Check size={17} /><span>Personalização de verdade</span></div><div><Check size={17} /><span>Produção em pequenos lotes</span></div><div><Check size={17} /><span>Feito no seu tempo, para o seu momento</span></div></div><a className="button button-light" href="#contato">Vamos criar juntos <ArrowUpRight size={17} /></a></div>
      </section>

      <section className="process-section">
        <div className="section-heading process-heading"><div><div className="section-kicker">04 / simples assim</div><h2>Da ideia à<br /><em>sua casa.</em></h2></div><span className="process-stamp">sem pressa<br /><strong>com propósito</strong></span></div>
        <div className="process-grid">{processSteps.map((step) => <div className="process-step" key={step.number}><span className="process-number">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></div>)}</div>
      </section>

      <section className="contact-section" id="contato">
        <div className="contact-intro"><div className="section-kicker light">05 / bora conversar?</div><h2>Sua ideia começa<br /><em>com um oi.</em></h2><p>Conta para a gente o que você está imaginando. Pode ser uma festa, um presente ou aquele cantinho que está pedindo um detalhe especial.</p><div className="contact-links"><span><MessageCircle size={17} /> atendimento personalizado</span><span><Package size={17} /> envio para todo o Brasil</span></div></div>
        <div className="contact-form whatsapp-cta">
          <div className="whatsapp-icon"><MessageCircle size={28} /></div>
          <h3>Vamos tirar sua ideia do papel?</h3>
          <p>Chame a Prisma Studio no WhatsApp e conte o tema da festa, a peça que você imaginou ou o cantinho que quer transformar.</p>
          <a className="button button-yellow" href="https://wa.me/5521972562395?text=Oi%20Prisma%20Studio!%20Quero%20pedir%20um%20or%C3%A7amento." target="_blank" rel="noreferrer">Pedir orçamento pelo WhatsApp <ArrowUpRight size={18} /></a>
          <span className="whatsapp-number">+55 21 97256-2395</span>
        </div>
      </section>

      <footer className="site-footer"><a className="brand brand-footer" href="#top"><span className="brand-mark"><span /><span /><span /><span /></span><span className="brand-name">prisma<span>studio</span></span></a><span>impressão 3D com afeto</span><a href="#top" className="back-top">voltar ao topo <ArrowUpRight size={15} /></a></footer>
    </main>
  );
}

function ProductIllustration({ variant }: { variant: number }) {
  if (variant === 1) return <div className="cake-topper"><span>parabéns</span><b>✦</b><i>♡</i></div>;
  if (variant === 2) return <div className="gift-stack"><span>♥</span><b>✦</b><i>+</i></div>;
  return <div className="name-sign"><span>meu</span><strong>cantinho</strong><i>✦</i></div>;
}

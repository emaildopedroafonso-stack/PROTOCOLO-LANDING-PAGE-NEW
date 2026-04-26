import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Brain, 
  Waves, 
  ArrowRight, 
  Heart,
  ChevronDown,
  Lock,
  Star,
  XCircle,
  Info,
  Headphones,
  Bed,
  Moon,
  Smartphone,
  Check
} from 'lucide-react';
import { useState } from 'react';

interface CustomWindow extends Window {
  fbq?: (type: string, name: string) => void;
}

declare const window: CustomWindow;

const CHECKOUT_URL = "https://pay.kiwify.com.br/FpGJrPt";
const VSL_URL = "https://www.youtube.com/embed/dM9Bg9TwQGo?autoplay=1&controls=1&rel=0&modestbranding=1";

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const trackLead = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead');
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-primary/20 overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-purple/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-brand-primary/10 blur-[150px] rounded-full"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center shadow-md shadow-brand-primary/20">
              <Waves className="text-brand-bg h-4 w-4" />
            </div>
            <span className="font-sans font-bold text-lg text-white tracking-tight">Protocolo 30M OFF™</span>
          </div>
          
          <a 
            href={CHECKOUT_URL}
            onClick={trackLead}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-primary text-brand-bg px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-brand-primary/20"
          >
            Obter Protocolo
          </a>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <header className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 tracking-tight"
          >
            Desacelere sua mente nos <span className="text-brand-primary">30 minutos</span> antes de dormir
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative mb-10 max-w-4xl mx-auto"
          >
            <p className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] mb-4">Assista e entenda como funciona</p>
            <div className="relative aspect-video bg-black rounded-[2rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 group">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src={VSL_URL}
                title="Protocolo 30M OFF VSL"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-brand-slate-light mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            O Protocolo 30M OFF™ é um eBook digital completo com um passo a passo simples para ajudar você a reduzir estímulos, organizar os pensamentos e criar um ritual de desaceleração antes de dormir — com áudios guiados bônus para facilitar a prática.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
          >
            {[
              "Guia completo em PDF passo a passo",
              "Bônus: Áudios guiados práticos",
              "Ritual simples de 30 minutos",
              "Acesso digital imediato"
            ].map((text, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white/80">
                <CheckCircle2 className="h-4 w-4 text-brand-primary flex-shrink-0" />
                {text}
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-4"
          >
            <a 
              href={CHECKOUT_URL}
              onClick={trackLead}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-primary text-brand-bg px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-brand-primary/20 group"
            >
              Quero começar o Protocolo 30M OFF™ <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-[10px] text-brand-slate-light uppercase tracking-widest font-bold">
              Acesso digital imediato • eBook completo em PDF • Áudios bônus inclusos
            </p>
          </motion.div>
        </div>
      </header>

      {/* NEW: O que é o Protocolo Section */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">O que é o Protocolo 30M OFF™?</h2>
          <div className="space-y-6 text-lg text-brand-slate-light leading-relaxed">
            <p>
              O Protocolo 30M OFF™ é um eBook digital completo criado para orientar você, passo a passo, na construção de um ritual noturno de desaceleração. Dentro do material, você aprende como preparar o ambiente, reduzir estímulos, usar técnicas simples de respiração, relaxamento corporal e visualização guiada para tornar os minutos antes de dormir mais leves e organizados.
            </p>
            <p>
              Além do guia completo em PDF, você recebe áudios bônus para acompanhar cada etapa do protocolo e facilitar a aplicação prática, especialmente nas primeiras noites.
            </p>
          </div>
          <div className="mt-12 bg-white/5 border border-white/10 p-8 rounded-[2rem] inline-block">
            <p className="text-2xl font-serif italic text-brand-primary">
              “O PDF ensina o método. Os áudios ajudam você a colocar em prática.”
            </p>
          </div>
        </div>
      </section>

      {/* 2. Identificação do Problema */}
      <section className="py-24 px-4 bg-brand-slate-dark/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Você deita cansado, mas sua mente parece não desligar?</h2>
            <p className="text-brand-slate-light max-w-3xl mx-auto">
              Para muitas pessoas, a hora de dormir é justamente o momento em que os pensamentos ficam mais intensos. Pendências, preocupações, conversas do dia, planos para amanhã e aquela sensação de alerta começam a ocupar espaço — mesmo quando o corpo já está cansado.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Pensamentos em looping",
                desc: "Você revive situações, antecipa problemas e sente que não consegue pausar a mente."
              },
              {
                title: "Corpo cansado, mente alerta",
                desc: "Mesmo com sono, parece difícil entrar em um estado real de relaxamento."
              },
              {
                title: "Celular como fuga",
                desc: "Você tenta se distrair rolando a tela, mas acaba mantendo a mente ainda mais estimulada."
              },
              {
                title: "Noites imprevisíveis",
                desc: "Cada noite vira uma tentativa diferente de conseguir descansar melhor."
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="bg-white/5 border border-white/5 p-8 rounded-[2rem] hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-brand-primary">
                  <XCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-brand-slate-light text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-center mt-16 text-lg italic text-brand-primary/80">
            “É por isso que tentar dormir 'na força' quase nunca ajuda. Antes de dormir melhor, muitas vezes você precisa aprender a desacelerar.”
          </p>
        </div>
      </section>

      {/* 3. Seção de Solução */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeIn} className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">O Protocolo 30M OFF™ transforma os 30 minutos antes de dormir em uma sequência simples de desaceleração</h2>
            <p className="text-xl text-brand-slate-light leading-relaxed">
              Em vez de esperar o sono aparecer do nada, você segue uma ordem guiada: prepara o ambiente, coloca os fones, reduz os estímulos e ouve os áudios na sequência certa.
            </p>
            
            <div className="bg-brand-primary/10 border border-brand-primary/20 p-8 rounded-[2rem]">
              <p className="text-2xl font-serif italic text-brand-primary">
                “Não é sobre fazer esforço para dormir. É sobre criar condições para que corpo e mente entendam que o dia acabou.”
              </p>
            </div>

            <a 
              href={CHECKOUT_URL}
              onClick={trackLead}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-brand-bg px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-primary transition-all group"
            >
              Quero criar minha rotina noturna <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 4. O que você vai precisar */}
      <section className="py-24 px-4 bg-brand-slate-dark/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Você só precisa de alguns minutos e um ambiente mais calmo</h2>
            <p className="text-brand-slate-light max-w-2xl mx-auto">
              O protocolo foi pensado para ser simples. Nada de equipamentos, técnicas complicadas ou experiência prévia.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Headphones />, title: "Fones de ouvido", desc: "Para acompanhar os áudios com mais imersão e menos distrações." },
              { icon: <Bed />, title: "Cama confortável", desc: "Um lugar onde você possa relaxar o corpo com segurança." },
              { icon: <Moon />, title: "Luzes fracas", desc: "Um ambiente mais escuro ajuda a reduzir estímulos visuais à noite." },
              { icon: <Smartphone />, title: "Modo não perturbe", desc: "Para evitar notificações e interrupções durante a prática." }
            ].map((item, i) => (
              <motion.div key={i} {...fadeIn} className="text-center p-8">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-primary">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                <p className="text-brand-slate-light text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Como funciona na prática */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Como o protocolo funciona na prática</h2>
            <p className="text-brand-slate-light max-w-2xl mx-auto">
              O guia completo em PDF mostra como aplicar a rotina nos 30 minutos antes de dormir. Depois de entender o passo a passo, você pode usar os áudios bônus para conduzir a prática com mais facilidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "Passo 1",
                title: "Leia o guia completo",
                desc: "Você começa pelo eBook em PDF, entendendo a lógica do protocolo, como preparar o ambiente e por que cada etapa ajuda na desaceleração."
              },
              {
                step: "Passo 2",
                title: "Prepare o ambiente",
                desc: "Com as orientações do material, você ajusta luzes, reduz distrações e cria um espaço mais favorável ao descanso."
              },
              {
                step: "Passo 3",
                title: "Aplique as 3 etapas",
                desc: "O método conduz você por respiração 4-7-8, relaxamento muscular progressivo e visualização do lugar seguro."
              },
              {
                step: "Passo 4",
                title: "Use os áudios bônus",
                desc: "Os áudios complementares ajudam a acompanhar cada etapa separadamente ou a prática completa em uma única faixa."
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/5 p-8 rounded-[2.5rem] relative"
              >
                <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest">{step.step}</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-4">{step.title}</h3>
                <p className="text-brand-slate-light text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5b. As 3 etapas centrais */}
      <section className="py-24 px-4 bg-brand-slate-dark/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">As 3 etapas centrais do Protocolo 30M OFF™</h2>
            <p className="text-brand-slate-light max-w-2xl mx-auto">
              No eBook, você aprende como e quando aplicar cada etapa. Os áudios bônus ajudam a executar a prática com mais facilidade.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                step: "Etapa 1",
                title: "Respiração 4-7-8",
                desc: "Uma prática simples de respiração para ajudar você a reduzir o ritmo, trazer a atenção para o presente e iniciar o processo de desaceleração.",
                footer: "Bônus: áudio guiado específico para esta etapa."
              },
              {
                step: "Etapa 2",
                title: "Relaxamento Muscular",
                desc: "Uma sequência de contração e relaxamento corporal para ajudar a soltar tensões físicas acumuladas ao longo do dia.",
                footer: "Bônus: áudio guiado específico para esta etapa."
              },
              {
                step: "Etapa 3",
                title: "Visualização do Lugar Seguro",
                desc: "Uma prática de visualização para direcionar a mente a imagens e sensações mais calmas, reduzindo o foco nos pensamentos acelerados.",
                footer: "Bônus: áudio guiado específico para esta etapa."
              }
            ].map((audio, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-10 rounded-[3rem] group hover:border-brand-primary/30 transition-all duration-500"
              >
                <div className="mb-6">
                  <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em]">{audio.step}</span>
                  <h3 className="text-2xl font-bold text-white mt-2">{audio.title}</h3>
                </div>
                <p className="text-brand-slate-light leading-relaxed mb-8">{audio.desc}</p>
                <div className="pt-6 border-t border-white/5">
                  <p className="text-xs font-serif italic text-brand-primary/80">{audio.footer}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white/5 inline-block p-6 rounded-3xl border border-white/5 max-w-2xl">
              <p className="text-sm text-brand-slate-light italic">
                “Bônus Extra: Além dos áudios separados, você também recebe uma prática completa que une as três etapas em uma única condução.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. O método sem pressão */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Você não precisa fazer perfeito. Só precisa dar play.</h2>
            <p className="text-brand-slate-light max-w-3xl mx-auto">
              Muita gente transforma a hora de dormir em mais uma cobrança: dormir rápido, parar de pensar, relaxar imediatamente. O Protocolo 30M OFF™ segue outro caminho: uma sequência simples, guiada e sem pressão para você apenas ouvir e acompanhar no seu ritmo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Sem esforço", desc: "Você não precisa controlar cada pensamento. A proposta é seguir a condução dos áudios com leveza." },
              { title: "Sem técnica difícil", desc: "Respiração, relaxamento e visualização são apresentados de forma simples, mesmo para iniciantes." },
              { title: "Com repetição", desc: "O guia recomenda usar todos os dias por 7 dias. A consistência é parte importante do protocolo." }
            ].map((block, i) => (
              <motion.div key={i} {...fadeIn} className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5">
                <h4 className="text-xl font-bold text-brand-primary mb-4">{block.title}</h4>
                <p className="text-brand-slate-light leading-relaxed">{block.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Benefícios */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">O que o Protocolo 30M OFF™ pode ajudar você a construir</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Rotina previsível", desc: "Você deixa de depender apenas da sorte e passa a ter uma sequência para seguir antes de dormir." },
              { title: "Menos estímulos", desc: "O protocolo incentiva escolhas simples que ajudam a reduzir distrações à noite." },
              { title: "Mais presença", desc: "As práticas guiadas ajudam você a sair do excesso de pensamentos e voltar a atenção para o corpo." },
              { title: "Desaceleração suave", desc: "A sequência torna a transição entre o dia agitado e o descanso muito mais leve." },
              { title: "Clareza mental", desc: "Ao repetir o ritual, você cria um momento de pausa, reduzindo a sensação de mente bagunçada." },
              { title: "Ritual repetível", desc: "Com áudios organizados, você sabe exatamente o que fazer todas as noites." }
            ].map((beneficio, i) => (
              <motion.div key={i} {...fadeIn} className="flex gap-6 p-8 bg-white/5 rounded-[2rem] border border-white/5">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{beneficio.title}</h4>
                  <p className="text-brand-slate-light text-sm leading-relaxed">{beneficio.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Para quem é / Não é */}
      <section className="py-24 px-4 bg-brand-slate-dark/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <motion.div {...fadeIn} className="bg-white/5 p-12 rounded-[3rem] border border-white/5">
            <h2 className="text-3xl font-bold text-white mb-8">O Protocolo 30M OFF™ é para você se…</h2>
            <ul className="space-y-4">
              {[
                "Você sente a mente acelerada principalmente à noite",
                "Você deita cansado, mas continua em estado de alerta",
                "Você quer reduzir estímulos antes de dormir",
                "Você busca uma rotina simples e guiada",
                "Você prefere ouvir uma condução em vez de relaxar sozinho",
                "Você quer criar um ritual noturno consistente",
                "Você consegue reservar 30 minutos por noite",
                "Você entende que a consistência é importante"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-slate-light">
                  <Check className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeIn} className="bg-white/5 p-12 rounded-[3rem] border border-white/5">
            <h2 className="text-3xl font-bold text-white mb-8">Talvez não seja para você se…</h2>
            <ul className="space-y-4 mb-8">
              {[
                "Você procura cura médica para ansiedade ou insônia",
                "Você espera promessas milagrosas ou garantidas",
                "Você não pretende aplicar a rotina recorrentemente",
                "Você não gosta de ouvir áudios guiados",
                "Você precisa de acompanhamento clínico individualizado"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-slate-light opacity-80">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-6 bg-red-500/10 rounded-2xl border border-red-500/20 flex items-start gap-3">
              <Info className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-red-100 leading-relaxed">
                Se você enfrenta sintomas intensos, persistentes ou sofrimento significativo, procure orientação de um profissional de saúde.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. O que você recebe */}
      <section className="py-24 px-4 bg-brand-slate-dark/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white">O que você recebe ao entrar no Protocolo 30M OFF™</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "eBook Protocolo 30M OFF™", desc: "O guia principal em PDF com o passo a passo completo para criar e aplicar sua rotina de desaceleração.", badge: "Material Principal" },
              { title: "Guia Comece Aqui", desc: "Um material introdutório simples para você entender rapidamente como iniciar a aplicação.", badge: "Orientação" },
              { title: "Áudio: Respiração 4-7-8", desc: "Uma condução guiada para acompanhar a primeira etapa do protocolo.", badge: "Bônus" },
              { title: "Áudio: Relaxamento Muscular", desc: "Uma condução guiada para facilitar a prática de relaxamento corporal.", badge: "Bônus" },
              { title: "Áudio: Visualização", desc: "Uma condução guiada para apoiar a prática de visualização e desaceleração mental.", badge: "Bônus" },
              { title: "Prática Completa 30M OFF™", desc: "Uma faixa extra que une as três etapas em uma única prática guiada.", badge: "Bônus" }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-3xl bg-white/5 relative group hover:border-brand-primary/40 transition-colors">
                <div className="absolute top-4 right-4 bg-brand-primary/10 text-brand-primary text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-md border border-brand-primary/20">
                  {item.badge}
                </div>
                <CheckCircle2 className="h-8 w-8 text-brand-primary mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-brand-slate-light mb-0 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Oferta */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-slate-dark to-brand-bg rounded-[4rem] p-12 md:p-20 text-center border border-white/5 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-2 bg-brand-primary opacity-50 shadow-[0_0_20px_rgba(212,175,55,0.4)]"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Comece hoje a construir uma rotina noturna mais tranquila</h2>
          <p className="text-lg text-brand-slate-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Você não precisa esperar mais uma noite difícil para começar a cuidar dos minutos antes de dormir. O Protocolo 30M OFF™ entrega uma sequência simples, guiada e acessível para ajudar você a desacelerar com mais clareza.
          </p>

          <div className="mb-12 flex flex-col items-center">
            <span className="text-brand-slate-light line-through text-lg opacity-50">De R$ 97,00</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white">R$</span>
              <span className="text-8xl font-black text-white tracking-tighter">29,90</span>
            </div>
            <p className="text-brand-primary font-black uppercase tracking-[0.4em] text-[10px] mt-4">Oferta de Lançamento</p>
          </div>

          <a 
            href={CHECKOUT_URL}
            onClick={trackLead}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-primary text-brand-bg px-12 py-6 rounded-full text-sm font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-brand-primary/20 mb-12"
          >
            Quero acessar o Protocolo 30M OFF™ <Lock className="h-4 w-4" />
          </a>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 opacity-40">
            {["Acesso imediato", "Pagamento seguro", "eBook Completo", "Áudios Bônus", "100% digital"].map((tag, i) => (
              <span key={i} className="text-[9px] font-bold uppercase tracking-widest text-white">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Garantia */}
      <section className="pb-24 px-4 text-center">
        <motion.div {...fadeIn} className="max-w-xl mx-auto p-12 bg-white/5 rounded-[3rem] border border-white/5">
          <ShieldCheck className="h-16 w-16 text-brand-primary mx-auto mb-8" />
          <h2 className="text-3xl font-bold text-white mb-6">7 Dias de Garantia</h2>
          <p className="text-brand-slate-light leading-relaxed">
            Se o protocolo não fizer sentido para você, basta solicitar o reembolso dentro do prazo de 7 dias após a compra. Decisão simples e sem riscos para sua rotina.
          </p>
        </motion.div>
      </section>

      {/* 13. FAQ */}
      <section id="faq" className="py-24 px-4 bg-brand-slate-dark/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Dúvidas Frequentes</h2>
            <div className="w-12 h-1 bg-brand-primary mx-auto"></div>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "O Protocolo 30M OFF™ cura ansiedade?",
                a: "Não. O protocolo não é tratamento médico, psicológico ou psiquiátrico. Ele é um conteúdo digital educativo de bem-estar composto por um eBook e áudios guiados que podem ajudar você a criar uma rotina mais calma."
              },
              {
                q: "Ele trata insônia?",
                a: "Não. O protocolo não é tratamento para insônia. Ele foi pensado como uma rotina guiada de desaceleração. Se você enfrenta dificuldade persistente para dormir, procure orientação profissional."
              },
              {
                q: "Quanto tempo leva para aplicar?",
                a: "A sequência completa dura aproximadamente 30 minutos. O eBook orienta o passo a passo, e os áudios bônus acompanham as 3 etapas de respiração, relaxamento e visualização."
              },
              {
                q: "Preciso fazer tudo até o fim?",
                a: "Não precisa transformar isso em cobrança. Se você adormecer durante a prática, tudo bem. A ideia é criar um ritual leve e sem pressão."
              },
              {
                q: "Preciso ter experiência com meditação?",
                a: "Não. O eBook explica tudo de forma simples e os áudios são guiados, pensados justamente para quem está começando."
              },
              {
                q: "Quando recebo o acesso?",
                a: "O acesso é digital e liberado imediatamente após a confirmação da compra."
              },
              {
                q: "Funciona para todo mundo?",
                a: "Cada pessoa responde de uma forma. O protocolo oferece uma sequência prática que pode contribuir para uma rotina mais tranquila, mas não promete resultados iguais para todos."
              },
              {
                q: "Por quantos dias devo usar?",
                a: "O guia recomenda usar todos os dias, no mesmo horário, por pelo menos 7 dias. A consistência é fundamental para sentir os efeitos do ritual."
              },
              {
                q: "Posso usar junto com terapia?",
                a: "Sim, como uma prática complementar de rotina e bem-estar. Mas ele não substitui o acompanhamento de um profissional de saúde."
              },
              {
                q: "O que eu preciso para começar?",
                a: "Fones de ouvido, uma cama ou superfície confortável, luzes baixas e o celular no modo não perturbe para ler o guia e ouvir os áudios."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white/5 rounded-3xl overflow-hidden border border-white/5 transition-all hover:bg-white/10">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center"
                >
                  <span className="font-bold text-white text-sm uppercase tracking-widest">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-brand-primary transition-transform duration-500 ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-brand-slate-light text-sm leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. CTA Final */}
      <section className="py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Hoje à noite você pode começar uma rotina diferente</h2>
          <p className="text-xl text-brand-slate-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Leia o eBook completo, coloque os fones, reduza as luzes e siga as etapas guiadas do Protocolo 30M OFF™.
          </p>
          <a 
            href={CHECKOUT_URL}
            onClick={trackLead}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-primary text-brand-bg px-12 py-6 rounded-full text-sm font-black uppercase tracking-widest hover:scale-110 transition-all shadow-2xl shadow-brand-primary/20"
          >
            Quero começar hoje
          </a>
          <p className="mt-8 text-[10px] text-brand-slate-light font-bold uppercase tracking-widest">Acesso imediato ao eBook + Áudios Bônus</p>
        </div>
      </section>

      {/* 15. Footer */}
      <footer className="py-16 bg-black px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <Waves className="text-brand-bg h-4 w-4" />
            </div>
            <span className="font-bold text-lg text-white tracking-tight">Descomplica360</span>
          </div>
          
          <p className="text-[10px] font-bold text-brand-slate-light uppercase tracking-[0.2em] max-w-2xl leading-relaxed opacity-60">
            O Protocolo 30M OFF™ é um conteúdo digital educativo de bem-estar e rotina noturna. Não substitui diagnóstico, tratamento médico, psicológico ou psiquiátrico. Em caso de sintomas intensos, procure orientação profissional.
          </p>

          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
            <a href="#" className="text-brand-slate-light hover:text-brand-primary">Privacidade</a>
            <a href="#" className="text-brand-slate-light hover:text-brand-primary">Termos</a>
          </div>
          
          <p className="text-[9px] text-brand-slate-light/40 uppercase tracking-widest">
            &copy; 2026 Descomplica360. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}



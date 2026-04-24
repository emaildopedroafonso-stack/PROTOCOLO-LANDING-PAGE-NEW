import { motion } from 'motion/react';
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
  Star
} from 'lucide-react';
import { useState } from 'react';

interface CustomWindow extends Window {
  fbq?: (type: string, name: string) => void;
}

declare const window: CustomWindow;

const CHECKOUT_URL = "https://pay.kiwify.com.br/FpGJrPt";

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

  const navItems = [
    { name: "Conteúdo", href: "#conteudo" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-primary/10">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center shadow-lg shadow-brand-primary/20">
              <Waves className="text-white h-6 w-6" />
            </div>
            <span className="font-sans font-bold text-xl text-brand-slate-dark tracking-tight">Descomplica360</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-xs font-bold uppercase tracking-widest text-brand-slate-light hover:text-brand-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <a 
            href={CHECKOUT_URL}
            onClick={trackLead}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-slate-dark text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-primary transition-all active:scale-95 shadow-lg shadow-slate-200"
          >
            Obter Protocolo
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block px-3 py-1 mb-6 rounded-full bg-brand-primary/10 text-brand-primary-dark text-[10px] font-bold uppercase tracking-widest"
            >
              Método Baseado em Evidências
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-brand-slate-dark leading-[1.1] mb-8"
            >
              Protocolo <span className="text-brand-primary italic font-serif font-normal">30m OFF</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-brand-slate-light mb-12 leading-relaxed"
            >
              Retome o controle da sua mente em apenas 30 minutos com técnicas cientificamente comprovadas pela psicologia e neurociência.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a 
                href={CHECKOUT_URL}
                onClick={trackLead}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-brand-slate-dark text-white px-10 py-5 rounded-2xl text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-brand-primary transition-all shadow-2xl shadow-slate-300 group"
              >
                Começar agora <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="text-[10px] text-brand-slate-light italic font-medium">
                Compra segura • Acesso imediato
              </div>
            </motion.div>
          </div>

          {/* Hero Visual Mockup - CSS Based */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            
            <div className="relative group">
              <div className="w-[300px] h-[400px] bg-white rounded-r-3xl shadow-[30px_50px_80px_-20px_rgba(0,0,0,0.2)] flex flex-col relative overflow-hidden border border-gray-100 transform -rotate-3 group-hover:rotate-0 transition-all duration-700">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-gray-200 to-transparent"></div>
                <div className="p-10 flex flex-col h-full bg-white">
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary mb-6">Protocolo Oficial</div>
                  <h2 className="text-5xl font-black leading-tight text-brand-slate-dark mb-auto tracking-tighter">
                    30m <br/> 
                    <span className="text-brand-primary font-serif italic font-normal">OFF</span>
                  </h2>
                  <div className="mt-auto">
                    <div className="h-1 w-12 bg-brand-primary mb-4"></div>
                    <p className="text-[10px] font-bold text-brand-slate-light uppercase tracking-widest leading-relaxed">Método Baseado em <br/>Evidências Científicas</p>
                  </div>
                </div>
              </div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-12 bg-white p-6 rounded-3xl shadow-2xl border border-gray-50 flex items-center gap-4 z-20 hidden sm:flex"
              >
                <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center">
                  <Heart className="h-5 w-5 text-brand-primary" strokeWidth={3} />
                </div>
                <div>
                  <p className="text-xs font-black text-brand-slate-dark tracking-widest uppercase">Protocolo</p>
                  <p className="text-[10px] text-brand-slate-light font-bold">Verificado</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits / Protocol Overview */}
      <section id="beneficios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] mb-4">O Protocolo</h2>
            <p className="text-3xl md:text-5xl font-bold text-brand-slate-dark tracking-tighter italic">Dividido em 4 fases estratégicas</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="h-6 w-6" />,
                title: "01. Preparação",
                time: "5 MINUTOS",
                desc: "Ativação do sistema nervoso parassimpático através do controle respiratório guiado."
              },
              {
                icon: <Waves className="h-6 w-6" />,
                title: "02. Desconexão",
                time: "10 MINUTOS",
                desc: "Desconexão digital total e reorganização mental via expressão escrita (Pennebaker)."
              },
              {
                icon: <Heart className="h-6 w-6" />,
                title: "03. Movimento",
                time: "10 MINUTOS",
                desc: "Liberação de endorfina com exercícios de baixo impacto e relaxamento progressivo."
              },
              {
                icon: <CheckCircle2 className="h-6 w-6" />,
                title: "04. Mindfulness",
                time: "5 MINUTOS",
                desc: "Foco no presente e respiração profunda para consolidar os efeitos relaxantes."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                className="group p-8 bg-brand-bg rounded-[2.5rem] border border-gray-50 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-500"
              >
                <div className="text-brand-primary mb-6 p-4 bg-white shadow-sm rounded-2xl group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <p className="text-[10px] font-black text-brand-primary mb-2 tracking-widest">{item.time}</p>
                <h3 className="text-lg font-bold text-brand-slate-dark mb-4">{item.title}</h3>
                <p className="text-brand-slate-light leading-relaxed text-xs font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content / Scientific Evidence Section */}
      <section id="conteudo" className="py-24 overflow-hidden px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeIn}>
            <div className="relative inline-block w-full">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop" 
                alt="Prática de meditação" 
                className="rounded-[3rem] w-full aspect-[4/5] object-cover shadow-3xl border-4 border-white"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-brand-slate-dark text-white p-10 rounded-[3rem] shadow-2xl hidden md:block">
                <p className="text-3xl font-bold italic tracking-tighter text-brand-primary">MenteSã</p>
                <p className="text-[10px] opacity-60 uppercase tracking-[0.3em] font-black mt-2">Ciência Aplicada</p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="space-y-12">
            <h2 className="text-4xl md:text-6xl font-bold text-brand-slate-dark leading-[1.1] tracking-tight">Embalsamado em <br/><span className="text-brand-primary italic font-serif font-normal underline decoration-brand-primary/20">Evidências.</span></h2>
            
            <div className="space-y-8">
              {[
                { name: "Hofmann & Gómez (2017)", topic: "Controle de respiração e Mindfulness" },
                { name: "Pennebaker (1997)", topic: "Eficácia da expressão escrita no estresse" },
                { name: "Jacobson (1938)", topic: "Relaxamento muscular progressivo" },
                { name: "Dishman & O'Connor (2009)", topic: "Neurobiologia do exercício no humor" }
              ].map((ref, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-1.5 h-12 bg-gray-100 rounded-full overflow-hidden flex-shrink-0">
                    <div className="w-full h-0 group-hover:h-full bg-brand-primary transition-all duration-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-slate-dark text-sm uppercase tracking-widest mb-1">{ref.name}</h4>
                    <p className="text-brand-slate-light text-sm italic">{ref.topic}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 flex flex-col gap-4">
              <a 
                href={CHECKOUT_URL}
                onClick={trackLead}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-primary text-white w-fit px-8 py-4 rounded-xl text-xs font-black uppercase tracking-[0.3em] hover:bg-brand-slate-dark transition-all shadow-xl shadow-brand-primary/20"
              >
                Começar agora <ArrowRight className="h-4 w-4" />
              </a>
              <p className="text-[10px] items-center flex gap-2 font-bold text-brand-slate-light uppercase tracking-widest pl-2">
                <ShieldCheck className="h-4 w-4 text-brand-primary" /> Garantia de 7 dias
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-24 bg-brand-slate-dark text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-white/10 text-brand-primary text-[10px] font-bold uppercase tracking-widest">
            Feedback Real
          </div>
          <h2 className="text-4xl font-bold mb-16">Histórias de Reequilíbrio</h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                text: "Técnicas que você pode fazer em qualquer lugar sem que ninguém perceba. Mudou meu dia a dia.",
                author: "Ana Souza",
                role: "Empresária"
              },
              {
                text: "Prático e direto ao ponto. Salvei o PDF no celular e uso sempre que sinto o aperto no peito no trabalho.",
                author: "Lucas Mendes",
                role: "Analista de Dados"
              },
              {
                text: "O visual é incrível e o conteúdo é transformador. Senti a diferença na primeira noite de sono.",
                author: "Carla Duarte",
                role: "Professora"
              }
            ].map((t, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                className="bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10 text-left hover:bg-white/10 transition-colors"
              >
                <div className="flex gap-1 mb-8">
                  {[1,2,3,4,5].map(s => <Star key={s} className="h-3 w-3 fill-brand-primary text-brand-primary" />)}
                </div>
                <p className="text-lg opacity-90 mb-8 leading-relaxed italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center font-bold text-slate-900">
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm tracking-tight">{t.author}</p>
                    <p className="text-[10px] opacity-40 uppercase font-bold tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-5xl mx-auto bg-white rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row border border-gray-100">
          <div className="p-16 md:w-3/5 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold text-brand-slate-dark mb-6">Comece sua jornada hoje.</h2>
              <p className="text-brand-slate-light mb-12 text-lg leading-relaxed italic">Tenha acesso vitalício ao ebook completo e bônus exclusivos de lançamento.</p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Ebook Alta Qualidade",
                  "Acesso Vitalício",
                  "Atualizações Grátis"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs font-bold text-brand-slate-dark uppercase tracking-widest">
                    <CheckCircle2 className="h-4 w-4 text-brand-primary" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 bg-brand-bg rounded-3xl border border-gray-100">
              <ShieldCheck className="h-10 w-10 text-brand-primary" />
              <div>
                <p className="text-[10px] font-black text-brand-slate-dark uppercase tracking-[0.2em] mb-1">Garantia Incondicional</p>
                <p className="text-xs text-brand-slate-light leading-relaxed">Você tem 7 dias para testar. Satisfação total ou seu investimento de volta.</p>
              </div>
            </div>
          </div>

          <div className="bg-brand-bg/50 p-16 md:w-2/5 flex flex-col items-center justify-center text-center border-l border-gray-100">
            <span className="text-brand-slate-light line-through text-lg mb-2">R$ 97,00</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-brand-slate-dark">R$</span>
              <span className="text-8xl font-black text-brand-slate-dark tracking-tighter">29,90</span>
            </div>
            <p className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.3em] mb-12 mt-4">Oferta de lançamento</p>
            
            <a 
              href={CHECKOUT_URL}
              onClick={trackLead}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-brand-slate-dark text-white py-6 rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-brand-primary hover:-translate-y-1 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3 active:scale-95"
            >
              Comprar Agora <Lock className="h-4 w-4" />
            </a>
            
            <div className="mt-12 flex gap-5 opacity-30 grayscale transition-all hover:grayscale-0 hover:opacity-100">
              <img src="https://logodownload.org/wp-content/uploads/2016/10/visa-logo.png" className="h-3" alt="Visa" />
              <img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo.png" className="h-3" alt="Mastercard" />
              <img src="https://logodownload.org/wp-content/uploads/2015/03/pix-logo.png" className="h-3" alt="Pix" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-slate-dark mb-4">Dúvidas Comuns</h2>
            <div className="w-12 h-1 bg-brand-primary mx-auto"></div>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "Como receberei o conteúdo?",
                a: "O envio é imediato. Você receberá o Protocolo em PDF direto no seu e-mail cadastrado na Kiwify."
              },
              {
                q: "Preciso de algum equipamento?",
                a: "Não. Todas as técnicas utilizam apenas seu corpo e respiração, focadas em controle mental."
              },
              {
                q: "O pagamento é realmente seguro?",
                a: "Sim, utilizamos a Kiwify, processador líder de mercado com criptografia bancária de ponta."
              }
            ].map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-3xl overflow-hidden transition-all hover:border-brand-primary/20">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-8 text-left flex justify-between items-center transition-colors hover:bg-brand-bg md:pr-12"
                >
                  <span className="font-bold text-brand-slate-dark text-sm uppercase tracking-widest">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-brand-slate-light transition-transform duration-500 ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="px-8 pb-8 text-brand-slate-light text-sm leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-100 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <Waves className="text-white h-4 w-4" />
            </div>
            <span className="font-bold text-lg text-brand-slate-dark tracking-tight">Descomplica360</span>
          </div>
          
          <p className="text-[10px] font-bold text-brand-slate-light uppercase tracking-[0.2em] text-center max-w-sm leading-relaxed">
            &copy; 2026 Descomplica360. Este produto não substitui acompanhamento médico especializado.
          </p>

          <div className="flex gap-10">
            <a href="#" className="text-[10px] font-black uppercase tracking-widest text-brand-slate-light hover:text-brand-primary">Privacidade</a>
            <a href="#" className="text-[10px] font-black uppercase tracking-widest text-brand-slate-light hover:text-brand-primary">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}



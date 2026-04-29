import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, Lock, ShieldCheck, Star, Clock, ArrowRight, Play, Info } from 'lucide-react';

// --- CONFIG ---
const CHECKOUT_URL = "https://pay.kiwify.com.br/FpGJrPt";

export default function App() {
  const [screen, setScreen] = useState(1);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [score, setScore] = useState(0);

  // Countdown timer for offer
  const [timeLeft, setTimeLeft] = useState(899); // 14:59

  useEffect(() => {
    if (screen === 8) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [screen]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const goTo = (n: number) => {
    setScreen(n);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectOption = (question: string, value: number) => {
    setAnswers(prev => ({ ...prev, [question]: value }));
    setTimeout(() => {
      const qNum = parseInt(question.replace('q', ''));
      if (qNum < 4) {
        goTo(qNum + 2);
      } else {
        startLoading();
      }
    }, 380);
  };

  const startLoading = () => {
    goTo(6);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setLoadingStep(step);
      if (step === 4) {
        clearInterval(interval);
        const finalScore = Object.values(answers).reduce((acc: number, val: number) => acc + val, 0);
        setScore(finalScore);
        setTimeout(() => goTo(7), 800);
      }
    }, 800);
  };

  // Result calculation logic
  const getProfile = () => {
    if (score >= 10) return {
      name: "Mente Hiperativa Nível 3",
      title: "Agitação Mental Crítica",
      sub: "Seu ritmo mental à noite é extremamente elevado",
      insight: "Sua mente opera em uma rotação tão alta que o corpo entra em estado de estresse tentando acompanhar. Você provavelmente sente que 'perdeu a chave' para desligar, o que interfere profundamente no seu ciclo de recuperação profunda. O protocolo será fundamental para 'forçar' essa desaceleração de forma suave."
    };
    if (score >= 7) return {
      name: "Mente Hiperativa Nível 2",
      title: "Agitação Mental Alta",
      sub: "Seu ritmo mental à noite está acima da média",
      insight: "Sua mente tem dificuldade em encerrar os processos do dia. Embora você consiga dormir, a qualidade do sono é comprometida porque o cérebro continua processando estímulos em segundo plano. O protocolo ajudará a criar a barreira necessária entre as preocupações e o descanso."
    };
    return {
      name: "Mente Hiperativa Nível 1",
      title: "Agitação Mental Moderada",
      sub: "Você apresenta sintomas iniciais de agitação noturna",
      insight: "Sua mente ainda consegue desacelerar, mas estímulos externos ou dias mais estressantes tiram você do eixo rapidamente. O protocolo servirá como uma proteção extra para garantir que todas as suas noites sejam de descanso real, e não apenas de 'apagão' por exaustão."
    };
  };

  const profile = getProfile();

  const progressPct = screen >= 2 && screen <= 5 ? ((screen - 1) / 4) * 100 : screen > 5 ? 100 : 0;

  return (
    <div className="relative min-h-screen text-text-brand overflow-x-hidden pb-20">
      <div className="stars" />
      
      {/* Progress Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 h-1 bg-white/5 transition-opacity duration-300 ${screen >= 2 && screen <= 6 ? 'opacity-100' : 'opacity-0'}`}>
        <div 
          className="h-full bg-gradient-to-r from-indigo-brand to-teal-brand transition-all duration-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]"
          style={{ width: `${progressPct}%` }}
        />
        {screen >= 2 && screen <= 5 && (
          <div className="fixed top-4 right-4 text-[10px] font-bold text-indigo-brand-light tracking-widest uppercase">
            Passo {screen - 1} de 4
          </div>
        )}
      </div>

      <div className="relative z-10 w-full px-4 mx-auto pt-20">
        <AnimatePresence mode="wait">
          
          {/* SCREEN 1: HERO */}
          {screen === 1 && (
            <motion.section 
              key="s1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto text-center py-10"
            >
              <div className="text-6xl mb-6 flex justify-center animate-float-custom">🌙</div>
              <div className="inline-flex items-center gap-2 bg-indigo-brand/10 border border-indigo-brand/30 rounded-full px-4 py-1.5 text-xs font-semibold text-indigo-brand-light tracking-wide uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-brand animate-pulse-custom" />
                Diagnóstico Gratuito · 2 minutos
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-white">
                Por que sua mente<br/><span className="text-indigo-brand-light">não para à noite?</span>
              </h1>
              <p className="text-text-muted text-lg mb-10 max-w-lg mx-auto">
                Responda 4 perguntas rápidas e descubra seu <strong className="text-white">perfil de mente acelerada</strong> — e o protocolo exato para desacelerar em 30 minutos.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {[
                  { n: "+2.400", l: "já fizeram" },
                  { n: "2 min", l: "para completar" },
                  { n: "100%", l: "gratuito" }
                ].map((s, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-center">
                    <span className="block font-serif text-xl font-bold text-indigo-brand-light">{s.n}</span>
                    <span className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">{s.l}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => goTo(2)}
                className="btn-primary-custom w-full max-w-sm text-lg py-5"
              >
                ✨ Descobrir meu perfil agora
              </button>
              <p className="mt-4 text-xs text-text-muted flex items-center justify-center gap-1.5">
                <Lock className="w-3 h-3" /> Sem cadastro · Resultado imediato
              </p>
            </motion.section>
          )}

          {/* SCREEN 2: Q1 */}
          {screen === 2 && (
            <QuizScreen 
              step={1}
              title="Como sua mente se comporta quando você deita para dormir?"
              options={[
                { icon: "🌀", title: "Pensamentos em looping", sub: "Fico repassando situações do dia, preocupações e conversas sem conseguir parar.", val: 3 },
                { icon: "⚡", title: "Alerta constante", sub: "Meu corpo está cansado, mas sinto que minha mente continua em modo 'ligado'.", val: 2 },
                { icon: "📱", title: "Fuga pelo celular", sub: "Acabo rolando a tela para me distrair, mas fico ainda mais estimulado.", val: 2 },
                { icon: "😴", title: "Demoro um pouco, mas consigo", sub: "Levo um tempo para relaxar, mas eventualmente o sono vem.", val: 1 }
              ]}
              onSelect={(val) => handleSelectOption('q1', val)}
              onBack={() => goTo(1)}
            />
          )}

          {/* SCREEN 3: Q2 */}
          {screen === 3 && (
            <QuizScreen 
              step={2}
              title="O que você normalmente faz nos 30 minutos antes de dormir?"
              options={[
                { icon: "📺", title: "Séries ou vídeos no celular", sub: "Fico assistindo conteúdo até sentir sono — às vezes até tarde da noite.", val: 3 },
                { icon: "💬", title: "Redes sociais e mensagens", sub: "Respondo mensagens, vejo stories e acabo perdendo a noção do tempo.", val: 3 },
                { icon: "🤔", title: "Fico pensando no dia seguinte", sub: "Planejo, me preocupo com tarefas e fico antecipando problemas.", val: 2 },
                { icon: "📖", title: "Leio ou faço algo calmo", sub: "Já tenho alguma rotina de desaceleração, mas poderia ser melhor.", val: 1 }
              ]}
              onSelect={(val) => handleSelectOption('q2', val)}
              onBack={() => goTo(2)}
            />
          )}

          {/* SCREEN 4: Q3 */}
          {screen === 4 && (
            <QuizScreen 
              step={3}
              title="Como você se sente ao acordar pela manhã?"
              options={[
                { icon: "😩", title: "Exausto, como se não tivesse dormido", sub: "Acordo cansado, com sensação de que o sono não foi reparador.", val: 3 },
                { icon: "😐", title: "Razoável, mas sem energia", sub: "Acordo, mas preciso de muito café para funcionar bem.", val: 2 },
                { icon: "😤", title: "Irritado ou ansioso logo cedo", sub: "Já acordo com a cabeça cheia e o humor afetado.", val: 2 },
                { icon: "🌅", title: "Descansado na maioria dos dias", sub: "Consigo dormir bem, mas quero melhorar ainda mais a qualidade.", val: 1 }
              ]}
              onSelect={(val) => handleSelectOption('q3', val)}
              onBack={() => goTo(3)}
            />
          )}

          {/* SCREEN 5: Q4 */}
          {screen === 5 && (
            <QuizScreen 
              step={4}
              title="Já tentou alguma técnica para relaxar antes de dormir?"
              options={[
                { icon: "❌", title: "Nunca tentei nada específico", sub: "Simplesmente deito e espero o sono aparecer — sem nenhuma rotina.", val: 3 },
                { icon: "🔄", title: "Já tentei, mas não mantive", sub: "Experimentei meditação ou respiração, mas não consegui criar o hábito.", val: 2 },
                { icon: "😕", title: "Tentei, mas não funcionou", sub: "Senti que as técnicas eram complicadas demais ou não se encaixavam na minha rotina.", val: 2 },
                { icon: "✅", title: "Tenho alguma prática, mas quero evoluir", sub: "Já faço algo, mas sinto que poderia ter um método mais estruturado.", val: 1 }
              ]}
              onSelect={(val) => handleSelectOption('q4', val)}
              onBack={() => goTo(4)}
            />
          )}

          {/* SCREEN 6: LOADING */}
          {screen === 6 && (
            <motion.section 
              key="s6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-md mx-auto text-center py-20"
            >
              <div className="loading-ring" />
              <h2 className="font-serif text-2xl font-bold text-white mb-2">Analisando seu perfil...</h2>
              <p className="text-text-muted animate-pulse mb-10">Calculando seu nível de mente acelerada</p>
              
              <div className="space-y-4 text-left">
                {[
                  { icon: "🧠", text: "Mapeando padrões de pensamento..." },
                  { icon: "📊", text: "Calculando índice de agitação mental..." },
                  { icon: "🎯", text: "Identificando seu perfil único..." },
                  { icon: "✨", text: "Preparando seu protocolo personalizado..." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: loadingStep > i ? 1 : 0, x: loadingStep > i ? 0 : -10 }}
                    className="flex items-center gap-3 py-2 border-b border-white/5 text-sm text-text-muted"
                  >
                    <span>{item.icon}</span> {item.text}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* SCREEN 7: RESULT */}
          {screen === 7 && (
            <motion.section 
              key="s7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto py-10"
            >
              <div className="text-center mb-12">
                <div className="badge mb-8"><span className="dot" /> Diagnóstico Concluído</div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Seu perfil foi identificado:</h2>
                
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-brand/20 to-violet-brand/20 border border-indigo-brand/40 rounded-full px-6 py-2.5 text-indigo-brand-light font-bold text-lg mb-10">
                  🧠 {profile.name}
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90">
                      <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
                      <motion.circle 
                        cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="364.4" 
                        initial={{ strokeDashoffset: 364.4 }}
                        animate={{ strokeDashoffset: 364.4 * (1 - (score * 100 / 12) / 100) }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="text-indigo-brand" 
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center font-bold text-3xl text-white">
                      {Math.round(score * 100 / 12)}
                    </span>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-1">{profile.title}</h3>
                    <p className="text-text-muted text-sm">{profile.sub}</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="card-custom">
                  <div className="text-[10px] font-black tracking-widest text-indigo-brand-light uppercase mb-6 flex items-center gap-2">
                    <Info className="w-3 h-3" /> O que isso significa
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed italic">
                    "{profile.insight}"
                  </p>
                </div>
                
                <div className="card-custom">
                  <div className="text-[10px] font-black tracking-widest text-indigo-brand-light uppercase mb-6">Seus indicadores</div>
                  <div className="space-y-4">
                    <StatBar label="Agitação mental" val={Math.min(95, score * 8)} color="bg-indigo-brand" />
                    <StatBar label="Dificuldade de desligar" val={Math.min(95, score * 7)} color="bg-violet-brand" />
                    <StatBar label="Impacto no sono" val={Math.min(95, score * 6)} color="bg-brand-red" />
                    <StatBar label="Potencial de melhora" val={94} color="bg-teal-brand" />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-text-muted mb-6">Baseado no seu perfil, encontramos a solução ideal para você 👇</p>
                <button 
                  onClick={() => goTo(8)}
                  className="btn-primary-custom text-lg px-12 py-5"
                >
                  🎯 Ver meu protocolo personalizado <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.section>
          )}

          {/* SCREEN 8: OFFER */}
          {screen === 8 && (
            <motion.section 
              key="s8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-5xl mx-auto py-10"
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gold-brand/10 border border-gold-brand/30 rounded-full px-4 py-1.5 text-xs font-bold text-gold-brand-light tracking-wide uppercase mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-brand animate-pulse" />
                  Protocolo Desbloqueado para Você
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  Seu protocolo personalizado<br/><span className="text-indigo-brand-light">está pronto</span>
                </h2>
                <p className="text-text-muted text-lg max-w-2xl mx-auto">
                  Com base no seu perfil <strong className="text-white">{profile.name}</strong>, o Protocolo 30M OFF™ foi desenvolvido exatamente para o seu padrão de agitação mental.
                </p>
              </div>

              {/* VSL */}
              <div className="vsl-wrap-custom mb-16">
                <iframe
                  src="https://www.youtube.com/embed/dM9Bg9TwQGo?rel=0&modestbranding=1&color=white&autoplay=1"
                  title="Protocolo 30M OFF™ — Como funciona"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="grid lg:grid-cols-2 gap-10 items-start mb-20">
                <div className="card-custom h-full">
                  <div className="text-[10px] font-black tracking-widest text-indigo-brand-light uppercase mb-8 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> O que você recebe
                  </div>
                  <ul className="space-y-6">
                    {[
                      { t: "eBook completo em PDF", d: "Guia passo a passo do protocolo noturno de 30 minutos" },
                      { t: "Áudio: Respiração 4-7-8", d: "Para reduzir o ritmo e trazer atenção ao presente" },
                      { t: "Áudio: Relaxamento Muscular", d: "Soltar tensões físicas acumuladas no dia" },
                      { t: "Áudio: Visualização", d: "Direcionar a mente a imagens calmas e seguras" },
                      { t: "🎁 Bônus: Prática Completa", d: "As 3 etapas unidas em uma única condução de áudio" },
                      { t: "Acesso digital imediato", d: "Disponível em qualquer dispositivo logo após a compra" }
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-teal-brand/10 border border-teal-brand/30 flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-brand" />
                        </div>
                        <div>
                          <strong className="block text-white text-sm mb-0.5">{item.t}</strong>
                          <span className="text-text-muted text-xs leading-relaxed">{item.d}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-indigo-brand/10 to-violet-brand/10 border border-indigo-brand/30 rounded-[2rem] p-10 text-center relative overflow-hidden group hover:border-indigo-brand/50 transition-colors">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Lock className="w-32 h-32" />
                    </div>
                    <div className="text-[10px] font-black tracking-[0.2em] text-gold-brand uppercase mb-6">Oferta desbloqueada para você</div>
                    <div className="text-text-muted text-sm line-through mb-1">De R$ 97,00</div>
                    <div className="font-serif text-6xl font-black text-white mb-2 flex items-center justify-center gap-1">
                      <span className="text-2xl font-bold text-gold-brand translate-y-[-12px]">R$</span>
                      29<span className="text-3xl font-bold translate-y-[-6px]">,90</span>
                    </div>
                    <p className="text-text-muted text-xs mb-10">Pagamento único · Acesso vitalício</p>

                    <a 
                      href={CHECKOUT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cta-custom w-full text-lg mb-6 group"
                    >
                      🌙 Quero começar hoje à noite <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="bg-gold-brand/10 border border-gold-brand/20 rounded-xl py-3 px-4 flex items-center justify-center gap-3 text-gold-brand-light text-sm font-bold animate-pulse">
                      <Clock className="w-4 h-4" /> Oferta reservada por: <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-3 grayscale opacity-60">
                      <img src="https://static.kiwify.com.br/kiwify-primary.png" className="h-4" alt="Kiwify" />
                      <div className="w-px h-3 bg-white/10" />
                      <span className="text-[9px] uppercase font-bold tracking-widest text-white">100% Seguro</span>
                    </div>
                  </div>

                  <div className="bg-teal-brand/5 border border-teal-brand/20 rounded-2xl p-6 flex gap-5 items-center">
                    <div className="w-12 h-12 rounded-full bg-teal-brand/10 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-7 h-7 text-teal-brand" />
                    </div>
                    <div>
                      <strong className="block text-white text-sm mb-1">Garantia Incondicional</strong>
                      <p className="text-xs text-text-muted leading-relaxed">
                        Se em 7 dias você não sentir diferença na sua rotina, devolvemos seu investimento. <span className="text-teal-brand font-semibold">Sem perguntas.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* TESTIMONIALS */}
              <div className="mb-24">
                <div className="text-center mb-10">
                  <span className="text-[10px] font-black tracking-widest text-text-muted uppercase">💬 Quem já aplicou recomenda</span>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { n: "Ana M.", r: "Professora, 34 anos", p: "AM", t: "Na primeira noite já senti diferença. Os áudios são incríveis — parece que minha mente finalmente recebeu permissão para parar." },
                    { n: "Carlos L.", r: "Engenheiro, 41 anos", p: "CL", t: "Eu ficava no celular até 1h da manhã todo dia. Depois do protocolo, consigo desligar às 22h sem esforço. Mudou minha vida." },
                    { n: "Renata S.", r: "Advogada, 29 anos", p: "RS", t: "Simples, direto e funciona. Não precisei de meditação complicada — só seguir os áudios na sequência certa já foi suficiente." }
                  ].map((item, i) => (
                    <div key={i} className="card-custom border-white/5 bg-white/[0.02]">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-gold-brand text-gold-brand" />)}
                      </div>
                      <p className="text-sm text-text-muted leading-relaxed mb-6 font-medium">"{item.t}"</p>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-brand to-violet-brand flex items-center justify-center text-[10px] font-bold text-white">{item.p}</div>
                        <div>
                          <span className="block text-white font-bold text-xs">{item.n}</span>
                          <span className="text-[10px] text-text-muted">{item.r}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FINAL CTA */}
              <div className="bg-white/5 border border-white/10 rounded-[4rem] p-16 text-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-brand/5 to-transparent pointer-events-none" />
                <div className="text-5xl mb-8">🌙</div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Hoje à noite você pode começar uma rotina diferente</h2>
                <p className="text-lg text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
                  Você já sabe qual é o problema. Agora você tem o protocolo exato para transformar sua relação com os minutos antes de dormir.
                </p>
                <a 
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-custom text-xl py-6 mx-auto group shadow-[0_20px_50px_rgba(245,158,11,0.3)]"
                >
                  🌙 Quero garantir minha vaga no Protocolo 30M OFF™ <Play className="w-6 h-6 fill-current" />
                </a>
                <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">Acesso imediato · Garantia de 7 dias · R$ 29,90</p>
              </div>

            </motion.section>
          )}

        </AnimatePresence>
      </div>

      {/* FOOTER */}
      <footer className="mt-20 py-10 border-t border-white/5 text-center px-4">
        <p className="text-[10px] text-text-muted uppercase tracking-[0.2em] mb-4">Protocolo 30M OFF™ © 2024 · Todos os direitos reservados</p>
        <p className="max-w-2xl mx-auto text-[9px] text-text-muted/60 leading-relaxed uppercase tracking-widest">
          Este site não faz parte do Facebook ou Google. Além disso, este site não é endossado pelo Facebook ou Google de qualquer maneira. Os produtos podem sofrer alterações sem aviso prévio. Este produto não substitui o aconselhamento profissional.
        </p>
      </footer>
    </div>
  );
}

// --- SUBCOMPONENTS ---

interface QuizScreenProps {
  step: number;
  title: string;
  options: { icon: string; title: string; sub: string; val: number }[];
  onSelect: (val: number) => void;
  onBack: () => void;
}

function QuizScreen({ step, title, options, onSelect, onBack }: QuizScreenProps) {
  return (
    <motion.section 
      key={`q${step}`}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-2xl mx-auto py-10"
    >
      <div className="flex gap-1.5 justify-center mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className={`h-1 rounded-full transition-all duration-500 ${s < step ? 'bg-teal-brand w-1.5' : s === step ? 'bg-indigo-brand w-6' : 'bg-white/10 w-1.5'}`} />
        ))}
      </div>
      <div className="text-[10px] font-black text-indigo-brand-light uppercase tracking-[0.2em] mb-3 text-center">Pergunta {step} de 4</div>
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-white text-center leading-tight mb-12">{title}</h2>

      <div className="space-y-4">
        {options.map((opt, i) => (
          <button 
            key={i}
            onClick={() => onSelect(opt.val)}
            className="quiz-option-custom group"
          >
            <span className="text-3xl mt-1">{opt.icon}</span>
            <div className="flex-1">
              <strong className="block text-white text-base mb-1 group-hover:text-indigo-brand-light transition-colors">{opt.title}</strong>
              <p className="text-xs text-text-muted leading-relaxed line-clamp-2">{opt.sub}</p>
            </div>
            <div className="w-5 h-5 rounded-full border-2 border-white/10 flex-shrink-0 mt-1 flex items-center justify-center group-hover:border-indigo-brand/50 transition-all">
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-brand opacity-0 group-hover:opacity-40" />
            </div>
          </button>
        ))}
      </div>

      <div className="text-center mt-12">
        <button onClick={onBack} className="btn-ghost-custom text-[10px] uppercase font-bold tracking-widest opacity-60 hover:opacity-100">
          ← Voltar
        </button>
      </div>
    </motion.section>
  );
}

function StatBar({ label, val, color }: { label: string; val: number; color: string }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-bold text-text-muted uppercase tracking-wider">
        <span>{label}</span>
        <span className="text-white">{val}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${val}%` }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className={`h-full rounded-full ${color} shadow-[0_0_10px_rgba(99,102,241,0.3)]`}
        />
      </div>
    </div>
  );
}

import { ref, computed } from 'vue';

export type Language = 'pt' | 'en';

const currentLang = ref<Language>('pt');

export const translations = {
  pt: {
    nav: {
      about: 'Origens',
      pillars: 'Pilares',
      app: 'App',
      groups: 'Comunidades',
      mission: 'Missão',
      team: 'Equipe',
      stories: 'Histórias',
      join: 'Juntar-se 🍀',
      volunteer: 'Ser Voluntário'
    },
    hero: {
      badge: '🌏 Iniciativa de Ensino de Inglês Voluntário',
      title: 'Our First Global Job',
      subtitle: 'Desenvolva confiança, pratique inglês e conquiste sua primeira vaga internacional com apoio da comunidade brasileira.',
      ctaPrimary: 'Entrar na Comunidade Grátis 🍀',
      ctaSecondary: 'Conhecer o App Oficial 🚀',
      stats: {
        members: 'Membros Ativos',
        cost: '100% Gratuito & Voluntário',
        practice: 'Sessões de Prática Semanais',
        focus: 'Foco em Confiança Real',
        weekly: 'Semanal'
      }
    },
    obstacles: {
      tag: 'A Realidade da Carreira Global',
      title: 'Inglês não é o seu maior obstáculo.',
      subtitle: 'Muitos profissionais qualificados travam no processo por motivos que vão muito além da gramática:',
      cardSolution: 'Como a OFGJ ajuda a superar isso',
      cards: [
        {
          icon: 'ShieldAlert',
          title: 'A Falta de Confiança',
          desc: 'Achamos que precisamos de um inglês impecável, quando na verdade precisamos da coragem de se comunicar com clareza.',
          color: 'from-amber-500/20 to-red-500/10'
        },
        {
          icon: 'Compass',
          title: 'Não Saber por Onde Começar',
          desc: 'Onde buscar vagas reais? Como formatar um currículo em inglês para ATS? Como se portar com recrutadores gringos?',
          color: 'from-blue-500/20 to-cyan-500/10'
        },
        {
          icon: 'Clock',
          title: 'Achar que "Ainda Não Está Pronto"',
          desc: 'Adiar a aplicação por anos esperando o "momento perfeito" que nunca chega se você não começar a praticar.',
          color: 'from-purple-500/20 to-indigo-500/10'
        },
        {
          icon: 'UserX',
          title: 'Tentar Fazer Tudo Sozinho',
          desc: 'Estudar no isolamento gera ansiedade e dúvida. Na comunidade você troca experiências com quem já chegou lá.',
          color: 'from-emerald-500/20 to-teal-500/10'
        }
      ],
      quote: '"Na maioria das vezes, o obstáculo não é a língua. É o medo de tentar. Na OFGJ, enfrentamos isso juntos."'
    },
    pillars: {
      tag: 'O Que Oferecemos',
      title: 'Tudo o que você precisa para dar o próximo passo',
      subtitle: 'Construído de forma colaborativa e gratuita para transformar o ecossistema profissional brasileiro.',
      exploreAction: 'Explore na Comunidade',
      items: [
        {
          icon: 'BookOpen',
          title: 'Conteúdos sobre Carreira Internacional',
          desc: 'Guia prático de currículo (Resume/LinkedIn), abordagens frias (Cold Messages), portfólios globais e expectativas salariais em Dólar/Euro.'
        },
        {
          icon: 'Briefcase',
          title: 'Vagas Internacionais Curadas',
          desc: 'Mapeamento constante de empresas globais amigáveis ao trabalho remoto com brasileiros e contratação via B2B/PJ.'
        },
        {
          icon: 'MessageSquare',
          title: 'Dicas de Recrutamento & Entrevistas',
          desc: 'Treinos práticos com as perguntas comportamentais mais frequentes em inglês e estratégias para negociação.'
        },
        {
          icon: 'Users',
          title: 'Networking Genuíno',
          desc: 'Conecte-se com devs, designers, gerentes de produto e especialistas que também buscam ou já atuam no exterior.'
        },
        {
          icon: 'Sparkles',
          title: 'Histórias Reais de Sucesso',
          desc: 'Relatos transparentes de quem superou a síndrome do impostor e conseguiu sua primeira vaga internacional.'
        }
      ]
    },
    appShowcase: {
      tag: 'Plataforma Oficial OFGJ',
      title: 'App Oficial OFGJ: Agenda de Aulas & Mini-Cursos',
      subtitle: 'Uma plataforma completa de gestão de aulas, tire-dúvidas voluntário, mini-cursos práticos e emissão de certificados de participação.',
      badge: '⚡ Web App • 100% Gratuito & Livre Acesso',
      ctaCardTitle: 'Plataforma Web Oficial OFGJ',
      ctaCardDesc: 'Ambiente centralizado para agendamento de aulas de conversação ao vivo, suporte voluntário com mentores, trilhas práticas de estudo e emissão de certificados.',
      ctaButton: 'Acessar Plataforma Web',
      clickToDirect: 'Acesso instantâneo sem necessidade de cadastro prévio',
      appUrl: 'https://app.ourfirstglobaljob.org',
      repoUrl: 'https://github.com/ourfirstglobaljob',
      repoButton: 'Código no GitHub',
      repoTag: 'Open Source',
      mockup: {
        item1Title: 'Agenda & Inscrição de Aulas',
        item1Sub: 'Aulas de Conversação Ao Vivo',
        item1Badge: 'Inscrito',
        item2Title: 'Tirar Dúvidas com Professores',
        item2Sub: 'Suporte de Mentores Voluntários',
        item2Badge: 'Ativo',
        item3Title: 'Mini-Cursos Práticos',
        item3Sub: 'Inglês para Entrevistas Globais',
        item3Badge: 'Trilha',
        item4Title: 'Certificados Simbólicos',
        item4Sub: 'Emissão de Conclusão do Curso',
        item4Badge: 'Disponível'
      },
      features: [
        {
          title: 'Agenda & Inscrição em Aulas',
          desc: 'Veja o calendário de aulas ao vivo, escolha os melhores horários e garanta sua inscrição com apenas um clique.'
        },
        {
          title: 'Tirar Dúvidas com Professores',
          desc: 'Espaço direto para fazer perguntas e receber suporte individualizado de professores e mentores voluntários.'
        },
        {
          title: 'Mini-Cursos Práticos',
          desc: 'Acesse módulos focados em conversação, preparação para entrevistas em inglês e construção de currículo global.'
        },
        {
          title: 'Certificados Simbólicos',
          desc: 'Ao concluir um mini-curso, receba e emita seu certificado simbólico de realização para comemorar seu progresso.'
        }
      ]
    },
    groups: {
      tag: 'Nossa Comunidade',
      title: 'Comunidade no WhatsApp & Telegram',
      subtitle: 'Entre nos nossos grupos abertos e 100% gratuitos para receber avisos de encontros de inglês, tirar dúvidas e fazer networking com profissionais brasileiros:',
      whatsappTitle: 'WhatsApp',
      whatsappBadge: 'Grupo Oficial',
      whatsappDesc: 'Avisos de encontros semanais, grupos de conversação, dicas rápidas de inglês e trocas diretas.',
      whatsappBtn: 'Entrar no WhatsApp 💬',
      whatsappFeatures: [
        'Avisos diretos de encontros ao vivo',
        'Networking com profissionais ativos',
        'Grupo focado, sem spam comercial'
      ],
      telegramTitle: 'Telegram',
      telegramBadge: 'Canal Oficial',
      telegramDesc: 'Materiais de apoio em PDF, dicas de carreira internacional, histórico sem limite e fórum de tópicos.',
      telegramBtn: 'Entrar no Telegram ✈️',
      telegramFeatures: [
        'Guias práticos de entrevista em PDF',
        'Histórico sem limite de conversas',
        'Tópicos organizados por tema'
      ],
      copyLink: 'Copiar Link do Grupo',
      copied: 'Link copiado!',
      freeBadge: '100% Gratuito',
      trustNote: 'Todos os nossos grupos são 100% gratuitos, colaborativos e com moderação ativa contra spam ou vendas.'
    },
    mission: {
      tag: 'Nosso Compromisso',
      title: 'Transparência em Primeiro Lugar',
      quote1: 'Nosso objetivo nunca foi prometer empregos.',
      quote1Sub: 'Fugimos de receitas mágicas, promessas irrealistas de salários e estratégias vazias.',
      quote2: 'Nosso objetivo é preparar pessoas para que elas estejam prontas quando a oportunidade aparecer.',
      quote2Sub: 'Focamos em preparo constante, comunidade unida e desenvolvimento de autonomia real.',
      motto: 'Practice • Grow • Go Global. 🍀',
      text: 'Se você acredita que o talento brasileiro merece mais espaço no mercado global, seja muito bem-vindo à nossa comunidade!'
    },
    stories: {
      tag: 'Comunidade em Ação',
      title: 'Quem já está construindo esse caminho',
      subtitle: 'Veja histórias reais de membros que desenvolveram confiança e conquistaram espaço global.',
      items: [
        {
          id: 1,
          initials: 'RL',
          name: 'Rafael Lima',
          role: 'Senior Frontend Engineer',
          companyLocation: '🇺🇸 US Startup Remote',
          quote: 'Eu passei 3 anos adiando aplicações por achar que meu inglês precisava ser perfeito. Nos treinos da OFGJ percebi que os recrutadores queriam entender minhas soluções, não um sotaque britânico. Conquistei minha primeira vaga em dólar há 6 meses!'
        },
        {
          id: 2,
          initials: 'CS',
          name: 'Camila Santos',
          role: 'Product Designer',
          companyLocation: '🇪🇺 European Tech Firm',
          quote: 'Fazer simulação de entrevista com outros brasileiros me tirou da zona de pânico. A comunidade me ajudou a ajustar meu portfólio em inglês e estruturar minhas respostas no formato STAR. Mudou minha carreira completamente.'
        },
        {
          id: 3,
          initials: 'MB',
          name: 'Mateus Barbosa',
          role: 'Backend Developer',
          companyLocation: '🇨🇦 Canadian SaaS',
          quote: 'O networking genuíno aqui não tem preço. Ninguém quer vender curso caro; todos se ajudam voluntariamente. Quando surgiu a indicação para a vaga, eu já estava pronto porque vinha treinando semanalmente.'
        }
      ]
    },
    modal: {
      title: 'Junte-se à Comunidade Our First Global Job',
      subtitle: 'Escolha como deseja participar dessa iniciativa voluntária gratuita:',
      typeMember: 'Quero Praticar & Buscar Minha 1ª Vaga Global',
      typeVolunteer: 'Quero Ser Voluntário / Facilitar Sessões de Inglês',
      nameLabel: 'Seu Nome Completo',
      emailLabel: 'Seu E-mail principal',
      roleLabel: 'Sua Área de Atuação',
      whatsappLabel: 'WhatsApp / Telegram (Opcional)',
      englishLevelLabel: 'Seu nível atual de inglês autoavaliado:',
      levelBasic: 'Iniciante (Tenho receio de falar)',
      levelIntermediate: 'Intermediário (Consigo entender, falta destravar)',
      levelAdvanced: 'Avançado / Fluente (Quero ajudar outros)',
      submit: 'Garantir Acesso à Comunidade 🍀',
      successTitle: 'Seja bem-vindo(a) à OFGJ! 🌏🍀',
      successDesc: 'Você faz parte dessa comunidade! Clique abaixo para entrar direto nos nossos canais no WhatsApp ou Telegram:',
      groupButton: 'Entrar no Canal / Grupo',
      nextLiveNotice: 'Próximo encontro de conversação ao vivo: Quinta-feira às 19h30 🇧🇷',
      closeWindow: 'Fechar janela',
      placeholders: {
        name: 'Ex: Ana Silva',
        email: 'seu.email@exemplo.com',
        role: 'Ex: Full Stack Dev / UX Designer',
        phone: '(11) 99999-9999'
      }
    },
    team: {
      tag: 'Liderança & Criadores',
      title: 'Responsáveis pelo Projeto',
      subtitle: 'Conheça os idealizadores, mentores e facilitadores voluntários dedicados a impulsionar o Our First Global Job.',
      prevLabel: 'Anterior',
      nextLabel: 'Próximo',
      members: [
        {
          id: 1,
          name: 'Janyel Lima',
          role: 'Idealizador & Tech Lead',
          badge: 'Fundador',
          location: 'Brasil 🇧🇷',
          bio: 'Engenheiro de Software apaixonado por comunidades open-source. Idealizou o Our First Global Job para conectar talentos brasileiros a oportunidades internacionais.',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
          github: 'https://github.com/janyel-lima',
          linkedin: 'https://linkedin.com',
          email: 'janyel@ourfirstglobaljob.org',
          tags: ['Full Stack', 'Tech Lead', 'Open Source']
        },
        {
          id: 2,
          name: 'Camila Rocha',
          role: 'Coordenadora de Comunidade & Mentora',
          badge: 'Comunidade',
          location: 'São Paulo, BR',
          bio: 'Especialista em recrutamento global e comunicação. Conduz simulações de entrevistas comportamentais e conecta membros aos grupos de estudo.',
          avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
          github: '',
          linkedin: 'https://linkedin.com',
          email: 'camila@ourfirstglobaljob.org',
          tags: ['Community', 'Career Coach', 'HR Tech']
        },
        {
          id: 3,
          name: 'Lucas Andrade',
          role: 'Facilitador Senior de Conversação',
          badge: 'Facilitador',
          location: 'Lisboa, PT / Remote',
          bio: 'Desenvolvedor Frontend sênior atuando no mercado dos EUA. Lidera encontros semanais de voz para destravar a fluência técnica e profissional.',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          email: 'lucas@ourfirstglobaljob.org',
          tags: ['Frontend', 'English Mentorship', 'Global Dev']
        },
        {
          id: 4,
          name: 'Mariana Silva',
          role: 'Head de UX & Experiência de Aprendizado',
          badge: 'Design',
          location: 'Belo Horizonte, BR',
          bio: 'Product Designer focada em acessibilidade e ed-tech. Responsável pelo design de interface e pela experiência amigável da plataforma.',
          avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          email: 'mariana@ourfirstglobaljob.org',
          tags: ['UX/UI', 'Design System', 'EdTech']
        },
        {
          id: 5,
          name: 'Gustavo Ferreira',
          role: 'Engenheiro de Dados & Mentor Voluntário',
          badge: 'Mentor Tech',
          location: 'Curitiba, BR',
          bio: 'Engenheiro de dados em empresa canadense. Apoia a estruturação dos mini-cursos práticos e trilhas de desenvolvimento profissional.',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          email: 'gustavo@ourfirstglobaljob.org',
          tags: ['Data Engineering', 'Mentorship', 'Cloud']
        }
      ]
    },
    footer: {
      description: 'Uma comunidade voluntária dedicada a ajudar profissionais brasileiros a desenvolverem confiança em inglês e conquistarem posições internacionais.',
      links: 'Navegação',
      community: 'Comunidade',
      volunteerAction: 'Seja um Facilitador Voluntário',
      motto: 'Practice • Grow • Go Global. 🍀',
      volunteerTerms: 'Termos Voluntários',
      codeOfConduct: 'Código de Conduta',
      volunteerHelp: 'É fluente em inglês ou já trabalha para fora? Venha apoiar outros brasileiros facilitando rodadas de conversação!',
      rights: 'Todos os direitos reservados. Feito com orgulho e voluntariado para o Brasil 🇧🇷'
    }
  },
  en: {
    nav: {
      about: 'Origins',
      pillars: 'Pillars',
      app: 'App',
      groups: 'Communities',
      mission: 'Mission',
      team: 'Team',
      stories: 'Stories',
      join: 'Join Us 🍀',
      volunteer: 'Become a Volunteer'
    },
    hero: {
      badge: '🌏 Volunteer English Teaching Initiative',
      title: 'Our First Global Job',
      subtitle: 'Build confidence, practice spoken English, and land your first international job backed by the Brazilian tech & professional community.',
      ctaPrimary: 'Join Free Community 🍀',
      ctaSecondary: 'Explore Official App 🚀',
      stats: {
        members: 'Active Members',
        cost: '100% Free & Volunteer',
        practice: 'Weekly Practice Sessions',
        focus: 'Focus on Real Confidence',
        weekly: 'Weekly'
      }
    },
    obstacles: {
      tag: 'The Global Career Reality',
      title: 'English is rarely your biggest obstacle.',
      subtitle: 'Many skilled professionals stall during international applications for reasons far beyond grammar:',
      cardSolution: 'How OFGJ helps overcome this',
      cards: [
        {
          icon: 'ShieldAlert',
          title: 'Lack of Confidence',
          desc: 'We think we need flawless English, when in reality we need the courage to communicate ideas with clarity.',
          color: 'from-amber-500/20 to-red-500/10'
        },
        {
          icon: 'Compass',
          title: 'Not Knowing Where to Start',
          desc: 'Where to find real global roles? How to format an ATS-ready resume in English? How to talk to foreign recruiters?',
          color: 'from-blue-500/20 to-cyan-500/10'
        },
        {
          icon: 'Clock',
          title: 'Thinking "I’m Not Ready Yet"',
          desc: 'Postponing applications for years waiting for a "perfect moment" that never arrives unless you start practicing.',
          color: 'from-purple-500/20 to-indigo-500/10'
        },
        {
          icon: 'UserX',
          title: 'Trying to Do It All Alone',
          desc: 'Studying in isolation fuels anxiety. In our community, you share struggles and insights with peers who made it.',
          color: 'from-emerald-500/20 to-teal-500/10'
        }
      ],
      quote: '"Most of the time, the obstacle isn\'t the language. It\'s the fear of putting yourself out there. At OFGJ, we face it together."'
    },
    pillars: {
      tag: 'What We Offer',
      title: 'Everything you need to step up globally',
      subtitle: 'Built collaboratively and completely free to empower the Brazilian professional ecosystem.',
      exploreAction: 'Explore in Community',
      items: [
        {
          icon: 'BookOpen',
          title: 'International Career Content',
          desc: 'Practical resume/LinkedIn guides, cold messaging blueprints, global portfolios, and compensation expectations in USD/EUR.'
        },
        {
          icon: 'Briefcase',
          title: 'Curated Global Job Listings',
          desc: 'Curated mapping of international remote-friendly companies hiring Brazilian professionals via contractor/B2B models.'
        },
        {
          icon: 'MessageSquare',
          title: 'Recruiting & Interview Coaching',
          desc: 'Hands-on practice sessions covering top behavioral interview questions in English and salary negotiation tips.'
        },
        {
          icon: 'Users',
          title: 'Genuine Peer Networking',
          desc: 'Connect directly with developers, designers, product managers, and specialists aspiring or working abroad.'
        },
        {
          icon: 'Sparkles',
          title: 'Real Journey Stories',
          desc: 'Transparent success stories from members who overcame imposter syndrome and landed their 1st remote job.'
        }
      ]
    },
    appShowcase: {
      tag: 'OFGJ Official Platform',
      title: 'Official OFGJ App: Class Schedule & Mini-Courses',
      subtitle: 'A complete hub for class scheduling, volunteer Q&A support, hands-on mini-courses, and issuing symbolic completion certificates.',
      badge: '⚡ Web App • 100% Free & Open Access',
      ctaCardTitle: 'Official OFGJ Web Platform',
      ctaCardDesc: 'Centralized environment for scheduling live conversation classes, volunteer mentor support, practical learning paths, and issuing completion certificates.',
      ctaButton: 'Access Web Platform',
      clickToDirect: 'Instant access without requiring prior sign-up',
      appUrl: 'https://app.ourfirstglobaljob.org',
      repoUrl: 'https://github.com/ourfirstglobaljob',
      repoButton: 'GitHub Repository',
      repoTag: 'Open Source',
      mockup: {
        item1Title: 'Class Schedule & Enrollment',
        item1Sub: 'Live Conversation Classes',
        item1Badge: 'Enrolled',
        item2Title: 'Q&A Support with Teachers',
        item2Sub: 'Volunteer Mentor Guidance',
        item2Badge: 'Active',
        item3Title: 'Practical Mini-Courses',
        item3Sub: 'English for Global Interviews',
        item3Badge: 'Track',
        item4Title: 'Symbolic Certificates',
        item4Sub: 'Course Completion Issuance',
        item4Badge: 'Available'
      },
      features: [
        {
          title: 'Schedule & Class Enrollment',
          desc: 'Check live class schedules, choose the best slots, and enroll with a single click.'
        },
        {
          title: 'Q&A with Volunteer Teachers',
          desc: 'Dedicated space to ask questions and receive one-on-one guidance from volunteer teachers.'
        },
        {
          title: 'Practical Mini-Courses',
          desc: 'Short learning paths focused on spoken English, interview prep, and global resumes.'
        },
        {
          title: 'Symbolic Certificates',
          desc: 'Upon completing a mini-course, issue your symbolic completion certificate to celebrate your progress.'
        }
      ]
    },
    groups: {
      tag: 'Our Community',
      title: 'WhatsApp & Telegram Groups',
      subtitle: 'Join our free and open community channels to get weekly practice session alerts, ask questions, and network with Brazilian professionals:',
      whatsappTitle: 'WhatsApp',
      whatsappBadge: 'Official Group',
      whatsappDesc: 'Weekly session alerts, conversation practice groups, quick English tips, and direct peer networking.',
      whatsappBtn: 'Join WhatsApp 💬',
      whatsappFeatures: [
        'Direct live practice session alerts',
        'Networking with working professionals',
        'Focused group, zero commercial spam'
      ],
      telegramTitle: 'Telegram',
      telegramBadge: 'Official Channel',
      telegramDesc: 'PDF study materials, international career guides, unlimited message history, and organized topic channels.',
      telegramBtn: 'Join Telegram ✈️',
      telegramFeatures: [
        'Practical interview guides in PDF',
        'Unlimited message history',
        'Organized topic threads'
      ],
      copyLink: 'Copy Group Link',
      copied: 'Link copied!',
      freeBadge: '100% Free',
      trustNote: 'All our community channels are 100% free, collaborative, and actively moderated against spam or commercial sales.'
    },
    mission: {
      tag: 'Our Commitment',
      title: 'Transparency Above All',
      quote1: 'Our goal has never been to promise jobs.',
      quote1Sub: 'We steer clear of magic formulas, unrealistic salary promises, and empty shortcuts.',
      quote2: 'Our goal is to prepare people so they are ready when opportunity strikes.',
      quote2Sub: 'We focus on steady practice, a supportive community, and real professional autonomy.',
      motto: 'Practice • Grow • Go Global. 🍀',
      text: 'If you believe Brazilian talent deserves a prominent place in the global market, welcome home!'
    },
    stories: {
      tag: 'Community Impact',
      title: 'Real Members Building Their Journey',
      subtitle: 'Check out authentic stories of professionals who grew confidence and achieved global remote work.',
      items: [
        {
          id: 1,
          initials: 'RL',
          name: 'Rafael Lima',
          role: 'Senior Frontend Engineer',
          companyLocation: '🇺🇸 US Startup Remote',
          quote: 'I postponed applications for 3 years thinking my English had to be flawless. In OFGJ practice sessions, I realized recruiters wanted to understand my problem-solving skills, not a British accent. I landed my first USD role 6 months ago!'
        },
        {
          id: 2,
          initials: 'CS',
          name: 'Camila Santos',
          role: 'Product Designer',
          companyLocation: '🇪🇺 European Tech Firm',
          quote: 'Mock interviewing with fellow Brazilians pulled me out of panic mode. The community helped refine my portfolio in English and structure my answers using STAR. It completely transformed my career trajectory.'
        },
        {
          id: 3,
          initials: 'MB',
          name: 'Mateus Barbosa',
          role: 'Backend Developer',
          companyLocation: '🇨🇦 Canadian SaaS',
          quote: 'The genuine networking here is priceless. Nobody is trying to sell expensive courses; everyone helps voluntarily. When a referral came up, I was already prepared because of weekly practice.'
        }
      ]
    },
    modal: {
      title: 'Join Our First Global Job Community',
      subtitle: 'Choose how you would like to participate in this free volunteer movement:',
      typeMember: 'I Want to Practice & Seek My 1st Global Role',
      typeVolunteer: 'I Want to Volunteer / Facilitate English Sessions',
      nameLabel: 'Full Name',
      emailLabel: 'Email Address',
      roleLabel: 'Professional Role',
      whatsappLabel: 'WhatsApp / Telegram (Optional)',
      englishLevelLabel: 'Self-assessed English Level:',
      levelBasic: 'Beginner (Hesitant to speak out loud)',
      levelIntermediate: 'Intermediate (Can understand, working on speaking fluency)',
      levelAdvanced: 'Advanced / Fluent (Excited to help facilitate)',
      submit: 'Get Access Now 🍀',
      successTitle: 'Welcome to OFGJ! 🌏🍀',
      successDesc: 'You are now part of our community! Click below to join our active WhatsApp or Telegram channels:',
      groupButton: 'Join WhatsApp / Telegram Channel',
      nextLiveNotice: 'Next live practice call: Thursday at 7:30 PM 🇧🇷',
      closeWindow: 'Close window',
      placeholders: {
        name: 'e.g., Jane Doe',
        email: 'your.email@example.com',
        role: 'e.g., Full Stack Dev / UX Designer',
        phone: '+1 (555) 000-0000'
      }
    },
    team: {
      tag: 'Leadership & Team',
      title: 'Who Makes It Happen',
      subtitle: 'Meet the creators, mentors, and volunteer facilitators dedicated to empowering the Our First Global Job community.',
      prevLabel: 'Previous',
      nextLabel: 'Next',
      members: [
        {
          id: 1,
          name: 'Janyel Lima',
          role: 'Founder & Tech Lead',
          badge: 'Founder',
          location: 'Brazil 🇧🇷',
          bio: 'Software Engineer passionate about open-source communities. Founded Our First Global Job to bridge Brazilian tech talent with global remote career opportunities.',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
          github: 'https://github.com/janyel-lima',
          linkedin: 'https://linkedin.com',
          email: 'janyel@ourfirstglobaljob.org',
          tags: ['Full Stack', 'Tech Lead', 'Open Source']
        },
        {
          id: 2,
          name: 'Camila Rocha',
          role: 'Community Coordinator & Mentor',
          badge: 'Community',
          location: 'São Paulo, BR',
          bio: 'International recruitment & interpersonal communication specialist. Coordinates networking events and mock English interview sessions.',
          avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
          github: '',
          linkedin: 'https://linkedin.com',
          email: 'camila@ourfirstglobaljob.org',
          tags: ['Community', 'Career Coach', 'HR Tech']
        },
        {
          id: 3,
          name: 'Lucas Andrade',
          role: 'Senior Conversation Facilitator',
          badge: 'Facilitator',
          location: 'Lisbon, PT / Remote',
          bio: 'Senior Frontend Developer working for US companies. Facilitates weekly voice sessions focused on unlocking technical interview speaking confidence.',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          email: 'lucas@ourfirstglobaljob.org',
          tags: ['Frontend', 'English Mentorship', 'Global Dev']
        },
        {
          id: 4,
          name: 'Mariana Silva',
          role: 'Head of UX & Learning Experience',
          badge: 'Design',
          location: 'Belo Horizonte, BR',
          bio: 'Product Designer focused on accessibility and educational tech. Leads design system and smooth user experience across the OFGJ ecosystem.',
          avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          email: 'mariana@ourfirstglobaljob.org',
          tags: ['UX/UI', 'Design System', 'EdTech']
        },
        {
          id: 5,
          name: 'Gustavo Ferreira',
          role: 'Data Engineer & Volunteer Mentor',
          badge: 'Tech Mentor',
          location: 'Curitiba, BR',
          bio: 'Data Engineer at a Canadian company. Supports hands-on mini-course curriculum design and career transition mentorship for developers.',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          email: 'gustavo@ourfirstglobaljob.org',
          tags: ['Data Engineering', 'Mentorship', 'Cloud']
        }
      ]
    },
    footer: {
      description: 'A volunteer community dedicated to helping Brazilian professionals build confidence in spoken English and succeed in global remote careers.',
      links: 'Navigation',
      community: 'Community',
      volunteerAction: 'Become a Volunteer Facilitator',
      motto: 'Practice • Grow • Go Global. 🍀',
      volunteerTerms: 'Volunteer Terms',
      codeOfConduct: 'Code of Conduct',
      volunteerHelp: 'Are you fluent in English or already working internationally? Come support fellow Brazilians by facilitating spoken practice sessions!',
      rights: 'All rights reserved. Built with pride and volunteer dedication for Brazil 🇧🇷'
    }
  }
};

export function useI18n() {
  const toggleLanguage = () => {
    currentLang.value = currentLang.value === 'pt' ? 'en' : 'pt';
  };

  const setLanguage = (lang: Language) => {
    currentLang.value = lang;
  };

  const t = computed(() => translations[currentLang.value]);

  return {
    lang: currentLang,
    t,
    toggleLanguage,
    setLanguage
  };
}

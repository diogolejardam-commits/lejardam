/**
 * LJO-SITE-116 — Chatbot FAQ orientativo · Preparação publicação
 * Sem backend · Sem API · Sem coleta de dados · Sem reserva automática
 */
(function () {
  'use strict';

  const FAQ_BASE = {
    meta: {
      fonte: 'LJO-SITE-103',
      pacote: 'LJO-SITE-116',
      versao: '1.1.0',
      ambiente: 'PREPARACAO_PUBLICA_LOCAL',
      motel: 'Le Jardam Motel',
      cidade: 'Trindade/GO',
      whatsapp_display: '(62) 3506-1912',
    },
    categorias: [
      { id: 'CAT-RES', nome: 'Reservas', icone: '📅' },
      { id: 'CAT-SUI', nome: 'Suítes', icone: '🛏️' },
      { id: 'CAT-HOR', nome: 'Horários', icone: '🕐' },
      { id: 'CAT-PAG', nome: 'Pagamento', icone: '💳' },
      { id: 'CAT-LOC', nome: 'Localização', icone: '📍' },
      { id: 'CAT-OUT', nome: 'Outros', icone: '❓' },
    ],
    faq: [
      {
        id: 'FAQ-001',
        categoria: 'CAT-RES',
        pergunta: 'Como faço uma reserva?',
        resposta:
          'Para reservar, fale com nossa equipe pelo WhatsApp (62) 3506-1912. Informe data, horário desejado e categoria de suíte preferida. A confirmação é feita pela equipe de atendimento — este assistente virtual não realiza reservas automáticas.',
      },
      {
        id: 'FAQ-002',
        categoria: 'CAT-RES',
        pergunta: 'Preciso reservar com antecedência?',
        resposta:
          'Recomendamos falar com nossa equipe pelo WhatsApp antes de vir, especialmente em fins de semana e feriados. A entrada sem reserva pode ocorrer, mas não há garantia de vaga sem confirmação da equipe.',
      },
      {
        id: 'FAQ-003',
        categoria: 'CAT-SUI',
        pergunta: 'Quantas suítes vocês possuem?',
        resposta:
          'O Le Jardam possui 17 suítes exclusivas, em categorias como Luxo, Luxo Especial, Gran Luxo, Master Luxo, Hot e Soft.',
      },
      {
        id: 'FAQ-004',
        categoria: 'CAT-SUI',
        pergunta: 'Quais comodidades estão inclusas?',
        resposta:
          'Dependendo da categoria: hidromassagem, ar-condicionado, TV, frigobar, amenities e ambientes climatizados. Suítes superiores incluem piscina privativa e sauna.',
      },
      {
        id: 'FAQ-005',
        categoria: 'CAT-HOR',
        pergunta: 'Qual o horário de funcionamento?',
        resposta: 'Atendimento 24 horas, todos os dias da semana, inclusive feriados.',
      },
      {
        id: 'FAQ-006',
        categoria: 'CAT-HOR',
        pergunta: 'Qual a permanência mínima?',
        resposta:
          'A permanência mínima varia conforme dia e horário. Consulte tarifas vigentes pelo WhatsApp para o período desejado.',
      },
      {
        id: 'FAQ-007',
        categoria: 'CAT-PAG',
        pergunta: 'Quais formas de pagamento aceitam?',
        resposta:
          'Aceitamos dinheiro, PIX, cartões de débito e crédito (consulte bandeiras disponíveis na recepção).',
      },
      {
        id: 'FAQ-008',
        categoria: 'CAT-LOC',
        pergunta: 'Onde fica o Le Jardam?',
        resposta:
          'Estamos em Trindade/GO, com fácil acesso e estacionamento privativo para clientes.',
      },
      {
        id: 'FAQ-009',
        categoria: 'CAT-LOC',
        pergunta: 'Tem estacionamento?',
        resposta:
          'Sim, oferecemos estacionamento privativo e discreto para maior privacidade dos hóspedes.',
      },
      {
        id: 'FAQ-010',
        categoria: 'CAT-OUT',
        pergunta: 'Posso cancelar ou remarcar?',
        resposta:
          'Cancelamentos e remarcações devem ser solicitados pelo WhatsApp com antecedência. Política conforme tarifa reservada.',
      },
      {
        id: 'FAQ-011',
        categoria: 'CAT-OUT',
        pergunta: 'É necessário documento na entrada?',
        resposta:
          'Sim, apresentação de documento oficial com foto é obrigatória para todos os hóspedes, conforme legislação vigente.',
      },
      {
        id: 'FAQ-012',
        categoria: 'CAT-OUT',
        pergunta: 'Falar com atendente humano',
        resposta:
          'Claro! Toque em "Continuar no WhatsApp" abaixo para orientação sobre como falar com nossa equipe de atendimento.',
        acao: 'whatsapp',
      },
    ],
  };

  function initLjChatbot() {
    const root = document.getElementById('lj-chatbot-root');
    if (!root) return;

    const messagesEl = document.getElementById('lj-chat-messages');
    const quickEl = document.getElementById('lj-chat-quick');
    const chatWindow = document.getElementById('lj-chat-window');
    const waModal = document.getElementById('lj-chat-wa-modal');
    const waPreview = document.getElementById('lj-chat-wa-preview');

    if (!messagesEl || !quickEl || !chatWindow || !waModal || !waPreview) return;

    let ultimaPergunta = '';

    function nowTime() {
      return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    }

    function addMessage(text, type = 'bot') {
      const div = document.createElement('div');
      div.className = `lj-chat-msg lj-chat-msg-${type}`;
      div.innerHTML = `${text}<div class="lj-chat-msg-time">${nowTime()}</div>`;
      messagesEl.appendChild(div);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function renderQuickButtons(items) {
      quickEl.innerHTML = '';
      items.forEach((item) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'lj-chat-quick-btn';
        btn.textContent = item.label;
        btn.addEventListener('click', item.action);
        quickEl.appendChild(btn);
      });
    }

    function resetToWelcome() {
      messagesEl.innerHTML = '';
      ultimaPergunta = '';
      showWelcome();
    }

    function showWelcome() {
      messagesEl.innerHTML = '';
      addMessage(
        'Olá! Sou o <strong>assistente virtual</strong> do <strong>Le Jardam Motel</strong>.<br><br>Escolha uma pergunta frequente abaixo ou fale com nossa equipe pelo WhatsApp.'
      );
      renderQuickButtons(
        FAQ_BASE.faq.slice(0, 6).map((f) => ({
          label: f.pergunta.length > 28 ? f.pergunta.slice(0, 28) + '…' : f.pergunta,
          action: () => selectFaq(f),
        }))
      );
      renderCategoryButtons();
    }

    function renderCategoryButtons() {
      const catBtn = document.createElement('button');
      catBtn.type = 'button';
      catBtn.className = 'lj-chat-quick-btn';
      catBtn.textContent = '📂 Ver categorias';
      catBtn.addEventListener('click', showCategories);
      quickEl.appendChild(catBtn);
    }

    function showCategories() {
      addMessage('Selecione uma categoria:', 'bot');
      renderQuickButtons(
        FAQ_BASE.categorias.map((c) => ({
          label: `${c.icone} ${c.nome}`,
          action: () => showFaqByCategory(c.id),
        }))
      );
    }

    function showFaqByCategory(catId) {
      const cat = FAQ_BASE.categorias.find((c) => c.id === catId);
      const items = FAQ_BASE.faq.filter((f) => f.categoria === catId);
      addMessage(`Perguntas sobre <strong>${cat.nome}</strong>:`, 'bot');
      renderQuickButtons(
        items.map((f) => ({
          label: f.pergunta,
          action: () => selectFaq(f),
        }))
      );
    }

    function selectFaq(faq) {
      ultimaPergunta = faq.pergunta;
      addMessage(faq.pergunta, 'user');

      setTimeout(() => {
        addMessage(faq.resposta, 'bot');
        if (faq.acao === 'whatsapp') {
          setTimeout(showWhatsAppModal, 600);
        }
        renderQuickButtons([
          { label: '↩ Outra pergunta', action: resetToWelcome },
          { label: '📱 WhatsApp', action: showWhatsAppModal },
        ]);
      }, 500);
    }

    function showWhatsAppModal() {
      waPreview.textContent = ultimaPergunta
        ? `Olá! Gostaria de informações sobre: ${ultimaPergunta}`
        : 'Olá! Gostaria de mais informações sobre o Le Jardam Motel.';
      waModal.classList.remove('lj-chat-hidden');
      addMessage(
        'Para atendimento personalizado e reservas, continue pelo WhatsApp oficial (62) 3506-1912 ou use os botões de WhatsApp do site.',
        'bot'
      );
    }

    function openChat() {
      chatWindow.classList.remove('lj-chat-hidden');
      if (!messagesEl.children.length) showWelcome();
    }

    function closeChat() {
      chatWindow.classList.add('lj-chat-hidden');
    }

    document.getElementById('lj-chat-toggle').addEventListener('click', openChat);
    document.getElementById('lj-chat-close').addEventListener('click', closeChat);
    document.getElementById('lj-chat-btn-whatsapp').addEventListener('click', showWhatsAppModal);
    document.getElementById('lj-chat-wa-close').addEventListener('click', () => waModal.classList.add('lj-chat-hidden'));

    console.info('[LJO-SITE-116] Assistente virtual FAQ · preparação publicação · sem backend');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLjChatbot);
  } else {
    initLjChatbot();
  }
})();

/**
 * ONG Tecer Esperança - Interatividade & Dinâmica
 * Vanilla JavaScript (ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. BANCO DE DADOS DINÂMICO DE PONTOS DE COLETA
  // =========================================================================
  const collectionPointsData = [
    {
      id: 1,
      name: "Supermercado Aurora - Unidade Higienópolis",
      region: "centro",
      category: "Supermercado Parceiro",
      address: "Av. Higienópolis, 1200 - Centro, Londrina / PR",
      hours: "Seg a Sáb: 08h às 22h | Dom: 08h às 20h",
      status: "Aberto para entrega"
    },
    {
      id: 2,
      name: "Shopping Boulevard Londrina - Portaria A",
      region: "shoppings",
      category: "Shopping Center",
      address: "Av. Theodoro Victorelli, 150 - Carlota, Londrina / PR",
      hours: "Seg a Sáb: 10h às 22h | Dom: 14h às 20h",
      status: "Aberto para entrega"
    },
    {
      id: 3,
      name: "Academia BioForma - Gleba Palhano",
      region: "sul",
      category: "Academia & Bem-Estar",
      address: "Rua Ayrton Senna da Silva, 555 - Gleba Palhano, Londrina / PR",
      hours: "Seg a Sex: 06h às 23h | Sáb: 08h às 16h",
      status: "Aberto para entrega"
    },
    {
      id: 4,
      name: "Colégio Harmonia - Recepção Principal",
      region: "centro",
      category: "Instituição de Ensino",
      address: "Rua Mato Grosso, 890 - Centro, Londrina / PR",
      hours: "Seg a Sex: 07h às 18h",
      status: "Aberto em dias úteis"
    },
    {
      id: 5,
      name: "Paróquia São Vicente de Paulo",
      region: "norte",
      category: "Igreja & Comunidade",
      address: "Av. Saul Elkind, 2140 - Conj. Vivaldi Leite, Londrina / PR",
      hours: "Terça a Domingo: 08h às 19h",
      status: "Aberto para entrega"
    },
    {
      id: 6,
      name: "Catuaí Shopping Londrina - Acesso Carrefour",
      region: "shoppings",
      category: "Shopping Center",
      address: "Rod. Celso Garcia Cid, km 377 - Gleba Palhano",
      hours: "Seg a Sáb: 10h às 22h | Dom: 14h às 20h",
      status: "Aberto para entrega"
    },
    {
      id: 7,
      name: "Lavanderia EcoVapor - Zona Oeste",
      region: "leste-oeste",
      category: "Lavanderia Parceira",
      address: "Av. Tiradentes, 1420 - Jardim Shangri-lá, Londrina / PR",
      hours: "Seg a Sex: 08h às 18h | Sáb: 08h às 12h",
      status: "Aberto para entrega"
    },
    {
      id: 8,
      name: "Farmácia DrogaMais - Aeroporto",
      region: "leste-oeste",
      category: "Farmácia Parceira",
      address: "Rua Santos, 610 - Jardim Santos Dumont, Londrina / PR",
      hours: "Todos os dias: 07h às 23h",
      status: "Aberto para entrega"
    },
    {
      id: 9,
      name: "Centro Comunitário Sol Nascente",
      region: "norte",
      category: "Espaço Social",
      address: "Rua Guaranis, 310 - Jardim do Sol, Londrina / PR",
      hours: "Seg a Sex: 08h30 às 17h30",
      status: "Aberto em dias úteis"
    }
  ];

  // =========================================================================
  // 2. BANCO DE DADOS DE NOTÍCIAS COMPLETAS PARA O MODAL
  // =========================================================================
  const newsData = {
    1: {
      category: "Campanha em Andamento",
      date: "24 de Maio de 2026",
      title: "Mutirão Aquecendo Vidas entrega mais de 3.400 casacos e cobertores na Zona Norte",
      content: `
        <p>No último sábado de baixas temperaturas, nossa equipe de voluntários realizou uma das maiores ações de acolhimento do ano. Com o termômetro marcando 7°C nas primeiras horas da manhã, nossa Loja Social itinerante atendeu mais de 600 famílias cadastradas nos bairros da Zona Norte de Londrina.</p>
        <p>Ao todo, foram distribuídos <strong>3.420 itens de frio</strong>, entre jaquetas acolchoadas, casacos de lã, calças de moletom forradas, mantas térmicas e cobertores novos arrecadados através da nossa campanha.</p>
        <p><em>"Ver os olhinhos das crianças brilhando ao escolherem o próprio casaco na cor preferida é o que move nosso coração"</em>, relatou Dona Cleide, voluntária há 7 anos no projeto.</p>
        <p>Agradecemos a todos os doadores, motoristas voluntários e parceiros que tornaram essa entrega viável com agilidade e amor.</p>
      `
    },
    2: {
      category: "Mobilização Comunitária",
      date: "18 de Maio de 2026",
      title: "Condomínios de Londrina batem recorde e arrecadam 5 toneladas de roupas em 2 semanas",
      content: `
        <p>A solidariedade entre vizinhos fez a diferença. Durante a gincana do desapego consciente, 14 condomínios residenciais de Londrina arrecadaram juntos mais de <strong>5.200 kg de roupas</strong> em ótimo estado de conservação.</p>
        <p>As caixas coletoras instaladas nas portarias e halls de entrada foram abastecidas diariamente por moradores que se engajaram na causa. Todo o volume recolhido já está no centro de triagem recebendo cuidados da equipe de curadoria.</p>
      `
    },
    3: {
      category: "Histórias do Voluntariado",
      date: "09 de Maio de 2026",
      title: "Conheça o Ateliê das Vovós: voluntárias recuperam zíperes e costuram carinho",
      content: `
        <p>Todas as terças e quintas-feiras à tarde, uma sala repleta de linhas coloridas, tesouras e máquinas de costura ganha vida em nossa sede central. O "Ateliê das Vovós" reúne 18 senhoras dedicadas a salvar peças com pequenos defeitos.</p>
        <p>Roupas que poderiam ser descartadas por causa de um botão faltando ou um zíper emperrado voltam a ficar impecáveis para vestir famílias com todo o respeito que merecem.</p>
      `
    },
    4: {
      category: "Ação Educacional",
      date: "28 de Abril de 2026",
      title: "Campanha Volta às Aulas Solidária: tênis e agasalhos para mais de 1.100 crianças",
      content: `
        <p>A falta de calçados adequados é uma das principais causas de absenteísmo escolar nos meses mais frios. Pensando nisso, nossa campanha atendeu estudantes de escolas públicas rurais e periféricas.</p>
        <p>Foram entregues kits contendo tênis confortáveis, 3 pares de meias novas e conjuntos de agasalho quente, assegurando dignidade e saúde aos pequenos alunos.</p>
      `
    }
  };

  // =========================================================================
  // 3. TOAST NOTIFICATIONS
  // =========================================================================
  function showToast(message, type = 'default') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'toast-success' : ''}`;
    
    const icon = type === 'success' ? '✓' : 'ℹ';
    toast.innerHTML = `<span><strong>${icon}</strong> ${message}</span>`;
    
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // =========================================================================
  // 4. HEADER SCROLL & MOBILE DRAWER
  // =========================================================================
  const siteHeader = document.getElementById('header');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }

    // Botão Voltar ao Topo
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  });

  document.getElementById('backToTop')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function openDrawer() {
    mobileDrawer?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer?.classList.remove('open');
    document.body.style.overflow = '';
  }

  mobileToggle?.addEventListener('click', openDrawer);
  drawerClose?.addEventListener('click', closeDrawer);
  drawerBackdrop?.addEventListener('click', closeDrawer);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
  // =========================================================================
  // 5. HERO SLIDER DINÂMICO
  // =========================================================================
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('#sliderDots .dot');
  const btnPrev = document.getElementById('sliderPrev');
  const btnNext = document.getElementById('sliderNext');
  let currentSlide = 0;
  let sliderInterval = null;

  function showSlide(index) {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    currentSlide = index;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlide);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  function startSlider() {
    sliderInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 6500);
  }

  function resetSlider() {
    clearInterval(sliderInterval);
    startSlider();
  }

  btnNext?.addEventListener('click', () => {
    showSlide(currentSlide + 1);
    resetSlider();
  });

  btnPrev?.addEventListener('click', () => {
    showSlide(currentSlide - 1);
    resetSlider();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      showSlide(idx);
      resetSlider();
    });
  });

  startSlider();

  // Pausar slider no hover do hero
  const heroSlider = document.getElementById('heroSlider');
  heroSlider?.addEventListener('mouseenter', () => clearInterval(sliderInterval));
  heroSlider?.addEventListener('mouseleave', () => startSlider());

  // Botões de atalho do Hero para PIX
  document.getElementById('btnSlidePix')?.addEventListener('click', () => {
    switchToTab('doar-pix');
    document.getElementById('como-doar')?.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('btnOpenPixHeader')?.addEventListener('click', () => {
    switchToTab('doar-pix');
    document.getElementById('como-doar')?.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('btnOpenPixMobile')?.addEventListener('click', () => {
    closeDrawer();
    switchToTab('doar-pix');
    document.getElementById('como-doar')?.scrollIntoView({ behavior: 'smooth' });
  });

  // =========================================================================
  // 6. SIMULADOR DE IMPACTO INTERATIVO (CALCULADORA DE AFETO)
  // =========================================================================
  const pieceRange = document.getElementById('pieceRange');
  const pieceDisplay = document.getElementById('pieceDisplay');
  const calcFamilies = document.getElementById('calcFamilies');
  const calcChildren = document.getElementById('calcChildren');
  const calcKg = document.getElementById('calcKg');
  const btnDoeAgoraCalc = document.getElementById('btnDoeAgoraCalc');

  function updateImpactCalculator(val) {
    if (!pieceDisplay) return;
    pieceDisplay.textContent = `${val} ${val === 1 ? 'peça' : 'peças'}`;
    
    // Estimativas reais da ONG
    const families = Math.max(1, Math.round(val / 5));
    const children = Math.max(1, Math.round(val / 3));
    const kg = (val * 0.4).toFixed(1);

    if (calcFamilies) calcFamilies.textContent = families;
    if (calcChildren) calcChildren.textContent = children;
    if (calcKg) calcKg.textContent = `${kg} kg`;
  }

  pieceRange?.addEventListener('input', (e) => {
    updateImpactCalculator(parseInt(e.target.value, 10));
  });

  btnDoeAgoraCalc?.addEventListener('click', () => {
    switchToTab('doar-roupas');
  });

  // =========================================================================
  // 7. CONTADORES NUMÉRICOS ANIMADOS (INTERSECTION OBSERVER)
  // =========================================================================
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsAnimated = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated) {
        statsAnimated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('impacto');
  if (statsSection) statsObserver.observe(statsSection);

  function animateCounters() {
    statNumbers.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 2000;
      const startTime = performance.now();

      function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing out cubic
        const ease = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(ease * target);
        
        counter.textContent = currentVal.toLocaleString('pt-BR');

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        } else {
          counter.textContent = target.toLocaleString('pt-BR');
        }
      }

      requestAnimationFrame(updateNumber);
    });
  }

  // =========================================================================
  // 8. ABAS DE DOAÇÃO (DOE AGORA)
  // =========================================================================
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  function switchToTab(tabId) {
    tabButtons.forEach(btn => {
      const match = btn.getAttribute('data-tab') === tabId;
      btn.classList.toggle('active', match);
      btn.setAttribute('aria-selected', match ? 'true' : 'false');
    });

    tabPanes.forEach(pane => {
      pane.classList.toggle('active', pane.id === `pane-${tabId}`);
    });
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      switchToTab(tabId);
    });
  });

  // Valores Rápidos do PIX
  const quickValBtns = document.querySelectorAll('.quick-val-btn');
  quickValBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      quickValBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const val = btn.getAttribute('data-val');
      showToast(`Valor de R$ ${val},00 selecionado! Use a chave PIX abaixo no seu banco.`);
    });
  });

  // Copiar Chave PIX
  const btnCopyPix = document.getElementById('btnCopyPix');
  const pixKeyInput = document.getElementById('pixKeyInput');
  const copyPixText = document.getElementById('copyPixText');

  btnCopyPix?.addEventListener('click', () => {
    if (!pixKeyInput) return;
    
    pixKeyInput.select();
    pixKeyInput.setSelectionRange(0, 99999);

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(pixKeyInput.value).then(() => {
        handlePixCopied();
      }).catch(() => {
        fallbackCopy();
      });
    } else {
      fallbackCopy();
    }
  });

  function fallbackCopy() {
    try {
      document.execCommand('copy');
      handlePixCopied();
    } catch (err) {
      showToast('Por favor, selecione e copie a chave manualmente: ' + pixKeyInput.value);
    }
  }

  function handlePixCopied() {
    if (copyPixText) copyPixText.textContent = 'Copiado!';
    btnCopyPix?.classList.add('btn-copied');
    showToast('Chave PIX copiada com sucesso para a área de transferência!', 'success');

    setTimeout(() => {
      if (copyPixText) copyPixText.textContent = 'Copiar Chave';
      btnCopyPix?.classList.remove('btn-copied');
    }, 3000);
  }
  // =========================================================================
  // 9. RENDERIZAÇÃO E FILTRO DINÂMICO DE PONTOS DE COLETA
  // =========================================================================
  const locationsGrid = document.getElementById('locationsGrid');
  const searchInput = document.getElementById('locationSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const regionButtons = document.querySelectorAll('.filter-pill');
  let currentRegion = 'todos';

  function renderLocations(filterText = '', region = 'todos') {
    if (!locationsGrid) return;
    locationsGrid.innerHTML = '';

    const cleanFilter = filterText.toLowerCase().trim();

    const filtered = collectionPointsData.filter(item => {
      const matchRegion = region === 'todos' || item.region === region;
      const matchText = cleanFilter === '' ||
        item.name.toLowerCase().includes(cleanFilter) ||
        item.address.toLowerCase().includes(cleanFilter) ||
        item.category.toLowerCase().includes(cleanFilter);
      return matchRegion && matchText;
    });

    if (filtered.length === 0) {
      locationsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: var(--white); border-radius: var(--radius-md); border: 1px dashed var(--sand-300);">
          <p style="font-size: 1.1rem; color: var(--earth-deep); font-weight: 700; margin-bottom: 8px;">Nenhum ponto encontrado com esse termo.</p>
          <p style="color: var(--text-muted); font-size: 0.95rem;">Tente buscar por "Centro", "Shopping" ou leve diretamente à nossa Sede Central.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'location-card';
      card.innerHTML = `
        <div class="loc-card-header">
          <span class="loc-category">${item.category}</span>
          <span class="loc-status-badge">${item.status}</span>
        </div>
        <h4 class="loc-title">${item.name}</h4>
        <address class="loc-address">${item.address}</address>
        <div class="loc-hours"><strong>Horário:</strong> ${item.hours}</div>
        <div class="loc-actions">
          <a href="https://maps.google.com/?q=${encodeURIComponent(item.name + ' ' + item.address)}" target="_blank" rel="noopener" class="loc-btn loc-btn-map">
            Como Chegar
          </a>
          <button class="loc-btn loc-btn-copy" data-address="${item.address}">
            Copiar Endereço
          </button>
        </div>
      `;
      locationsGrid.appendChild(card);
    });

    // Reanexar eventos de copiar endereço
    document.querySelectorAll('.loc-btn-copy').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const addr = e.currentTarget.getAttribute('data-address');
        if (navigator.clipboard) {
          navigator.clipboard.writeText(addr);
        }
        showToast(`Endereço copiado: "${addr}"`, 'success');
      });
    });
  }

  // Inicializar Grid
  renderLocations();

  // Input de Busca em tempo real
  searchInput?.addEventListener('input', (e) => {
    const val = e.target.value;
    if (clearSearchBtn) {
      clearSearchBtn.style.display = val.length > 0 ? 'block' : 'none';
    }
    renderLocations(val, currentRegion);
  });

  clearSearchBtn?.addEventListener('click', () => {
    if (searchInput) {
      searchInput.value = '';
      clearSearchBtn.style.display = 'none';
      renderLocations('', currentRegion);
      searchInput.focus();
    }
  });

  // Filtro por Região
  regionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      regionButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentRegion = btn.getAttribute('data-region');
      renderLocations(searchInput?.value || '', currentRegion);
    });
  });

  // =========================================================================
  // 10. MODAL DE NOTÍCIAS COMPLETAS
  // =========================================================================
  const newsModal = document.getElementById('newsModal');
  const newsModalBody = document.getElementById('newsModalBody');
  const closeNewsModal = document.getElementById('closeNewsModal');
  const newsModalBackdrop = document.getElementById('newsModalBackdrop');

  function openNewsArticle(articleId) {
    const article = newsData[articleId];
    if (!article || !newsModalBody) return;

    newsModalBody.innerHTML = `
      <div style="margin-bottom: 14px;">
        <span class="badge-terracotta">${article.category}</span>
        <span style="font-size: 0.85rem; color: var(--text-light); margin-left: 10px;">${article.date}</span>
      </div>
      <h2 style="font-family: var(--font-serif); font-size: 1.85rem; color: var(--earth-deep); line-height: 1.28; margin-bottom: 20px;">
        ${article.title}
      </h2>
      <div style="font-size: 1.02rem; color: var(--text-muted); line-height: 1.75; border-top: 1px solid var(--sand-200); padding-top: 20px;">
        ${article.content}
      </div>
      <div style="margin-top: 30px; display: flex; gap: 14px; flex-wrap: wrap;">
        <a href="#como-doar" class="btn btn-earth" onclick="document.getElementById('newsModal').classList.remove('open')">
          Apoiar Essa Causa
        </a>
        <button class="btn btn-sand" onclick="document.getElementById('newsModal').classList.remove('open')">
          Fechar Leitura
        </button>
      </div>
    `;

    newsModal?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  document.querySelectorAll('.btn-read-news').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-news-id') || 1;
      openNewsArticle(id);
    });
  });

  document.querySelectorAll('.news-item-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const id = card.getAttribute('data-news-id') || 2;
      openNewsArticle(id);
    });
  });

  closeNewsModal?.addEventListener('click', () => {
    newsModal?.classList.remove('open');
    document.body.style.overflow = '';
  });

  newsModalBackdrop?.addEventListener('click', () => {
    newsModal?.classList.remove('open');
    document.body.style.overflow = '';
  });

  // =========================================================================
  // 11. SUBMISSÃO DO FORMULÁRIO DE DOAÇÃO DE ROUPAS
  // =========================================================================
  const clothesForm = document.getElementById('clothesDonationForm');
  const donationSuccessModal = document.getElementById('donationSuccessModal');
  const closeDonationModal = document.getElementById('closeDonationModal');
  const closeSuccessBtn = document.getElementById('btnCloseSuccessModalBtn');
  const donationSuccessBackdrop = document.getElementById('donationSuccessBackdrop');
  const ticketCodeEl = document.getElementById('ticketCode');
  const btnSuccessWhatsappShare = document.getElementById('btnSuccessWhatsappShare');

  clothesForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const donorName = document.getElementById('donorName')?.value || 'Amigo Doador';
    const donorPhone = document.getElementById('donorPhone')?.value || '';
    const bagQuantity = document.getElementById('bagQuantity')?.value || '1 a 2 sacolas';
    const deliveryMethod = document.getElementById('deliveryMethod')?.value || 'ponto';
    const donorNeighborhood = document.getElementById('donorNeighborhood')?.value || 'Londrina';

    // Itens selecionados
    const selectedItems = [];
    document.querySelectorAll('input[name="itemType"]:checked').forEach(cb => {
      selectedItems.push(cb.value);
    });

    // Gerar Código de Ticket
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const ticket = `TC-2026-${randomNum}`;
    if (ticketCodeEl) ticketCodeEl.textContent = ticket;

    // Link WhatsApp dinâmico com mensagem formatada
    const deliveryText = deliveryMethod === 'coleta' 
      ? 'Solicitação de Coleta em Domicílio' 
      : (deliveryMethod === 'sede' ? 'Entrega na Sede Central' : 'Entrega em Ponto de Coleta');

    const msg = `Olá, ONG Tecer Esperança! Acabei de agendar uma doação no site.\n\n` +
      `*Protocolo:* ${ticket}\n` +
      `*Nome:* ${donorName}\n` +
      `*Telefone:* ${donorPhone}\n` +
      `*Bairro:* ${donorNeighborhood}\n` +
      `*Volume:* ${bagQuantity}\n` +
      `*Modalidade:* ${deliveryText}\n` +
      `*Itens:* ${selectedItems.join(', ')}`;

    if (btnSuccessWhatsappShare) {
      btnSuccessWhatsappShare.href = `https://wa.me/5543999990000?text=${encodeURIComponent(msg)}`;
    }

    donationSuccessModal?.classList.add('open');
    document.body.style.overflow = 'hidden';
    clothesForm.reset();
  });

  function closeDonationSuccess() {
    donationSuccessModal?.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeDonationModal?.addEventListener('click', closeDonationSuccess);
  closeSuccessBtn?.addEventListener('click', closeDonationSuccess);
  donationSuccessBackdrop?.addEventListener('click', closeDonationSuccess);

  // =========================================================================
  // 12. FORMULÁRIO DE PONTO PARCEIRO (EMPRESAS / CONDOMÍNIOS)
  // =========================================================================
  document.getElementById('partnerBoxForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const compName = document.getElementById('companyName')?.value;
    showToast(`Parabéns! Solicitação para "${compName}" enviada. Entraremos em contato para agendar a entrega da caixa coletora.`, 'success');
    e.target.reset();
  });

  // =========================================================================
  // 13. MODAL DE VOLUNTARIADO
  // =========================================================================
  const volunteerModal = document.getElementById('volunteerModal');
  const btnOpenVolunteer = document.getElementById('btnOpenVolunteerModal');
  const closeVolunteer = document.getElementById('closeVolunteerModal');
  const volunteerBackdrop = document.getElementById('volunteerModalBackdrop');
  const volunteerForm = document.getElementById('volunteerForm');

  btnOpenVolunteer?.addEventListener('click', () => {
    volunteerModal?.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  function closeVolunteerModal() {
    volunteerModal?.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeVolunteer?.addEventListener('click', closeVolunteerModal);
  volunteerBackdrop?.addEventListener('click', closeVolunteerModal);

  volunteerForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const vName = document.getElementById('vName')?.value || 'Voluntário';
    closeVolunteerModal();
    volunteerForm.reset();
    showToast(`Obrigado, ${vName}! Sua inscrição como voluntário foi recebida com carinho. Em breve entraremos em contato via WhatsApp!`, 'success');
  });

  // =========================================================================
  // 14. CARROSSEL DE DEPOIMENTOS
  // =========================================================================
  const testCards = document.querySelectorAll('.testimonial-card');
  const testPrev = document.getElementById('testPrev');
  const testNext = document.getElementById('testNext');
  const testDotsContainer = document.getElementById('testDots');
  let currentTest = 0;

  if (testDotsContainer && testCards.length > 0) {
    testCards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = `dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Depoimento ${i + 1}`);
      dot.addEventListener('click', () => showTestimonial(i));
      testDotsContainer.appendChild(dot);
    });
  }

  function showTestimonial(index) {
    if (index >= testCards.length) index = 0;
    if (index < 0) index = testCards.length - 1;
    currentTest = index;

    testCards.forEach((card, i) => {
      card.classList.toggle('active', i === currentTest);
    });

    const dots = testDotsContainer?.querySelectorAll('.dot');
    dots?.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentTest);
    });
  }

  testNext?.addEventListener('click', () => showTestimonial(currentTest + 1));
  testPrev?.addEventListener('click', () => showTestimonial(currentTest - 1));

  // Auto avanço de depoimentos a cada 8s
  setInterval(() => {
    showTestimonial(currentTest + 1);
  }, 8000);

  // =========================================================================
  // 15. ACCORDION FAQ
  // =========================================================================
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header?.addEventListener('click', () => {
      const wasActive = item.classList.contains('active');
      
      // Fecha todos
      accordionItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.accordion-header')?.setAttribute('aria-expanded', 'false');
      });

      // Abre o clicado se não estava ativo
      if (!wasActive) {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // =========================================================================
  // 16. FORMULÁRIO DE CONTATO DIRETO
  // =========================================================================
  document.getElementById('contactDirectForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName')?.value;
    showToast(`Obrigado pelo contato, ${name}! Sua mensagem foi encaminhada à coordenação e responderemos em até 24 horas úteis.`, 'success');
    e.target.reset();
  });

  // =========================================================================
  // 17. DOWNLOAD MOCK DE RELATÓRIO DE TRANSPARÊNCIA
  // =========================================================================
  window.downloadMockReport = function(reportName) {
    showToast(`Download simulado iniciado: "${reportName}.pdf" baixado com sucesso!`, 'success');
  };

  // =========================================================================
  // 18. SCROLL SPY PARA MENU ATIVO
  // =========================================================================
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let currentSection = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

});

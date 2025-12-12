// Leadership Bios Data
const LEADERSHIP_BIOS = {
  steven: {
    name: 'Steven Joseph Kane',
    title: 'Executive Director',
    bio: `
      <p class="mb-4"><strong>International Diplomat (UK):</strong> An international diplomat is a government official who represents their country's interests abroad, working to build and maintain relationships with other nations through negotiation, dialogue, and compromise. Their duties include protecting citizens, negotiating agreements on issues like trade and security, and fostering cultural understanding between countries.</p>
      <ul class="list-disc pl-5 space-y-2">
        <li>Member UK Trade Department (DBT) and Head of GBI (Great Britain Investment group).</li>
        <li>Administration Head of European Union Trade Department (DG Trade).</li>
      </ul>
    `
  },
  philip: {
    name: 'Sir Philip Steven Cabana',
    title: 'Director',
    bio: `
      <p class="mb-4">Sir Philip Steven Cabana's professional journey began in finance after he completed his studies in business and finance at Harvard University. Appointed as senior investment advisor at Kingdom Investment Corporation Limited (KICL). With a distinguished career that spans over four decades, Sir Philip Steven Cabana is a globally recognized expert in infrastructure investment, international finance, and strategic development.</p>
      <p class="mb-4">Throughout his career, he has developed an extensive network of international partners, ranging from government agencies and private-sector giants to influential non-governmental organizations. His work with the United Nations, multiple European and Asian royal families, and global business leaders has solidified his reputation as a skilled negotiator and relationship-builder in the realm of international investment.</p>
      <p class="mb-4">Under his strategic leadership, Kingdom Investment Corporation Limited (KICL) is unveiling a visionary development investment portfolio designed to foster sustainable economic growth and technological advancements.</p>
      <p>Mr. Cabana is also the Chairman on Board of Gold Dragon International Holdings Ltd., and the driving force behind introducing 'Global Unity Awards', a successful collaboration between GDIH and Humanitad.</p>
    `
  },
  david: {
    name: 'David Bangham',
    title: 'Director',
    bio: `
      <p class="mb-4">David Bangham is a qualified Associate of the Royal Institution of Chartered Surveyors (RICS) since 1968 and a Fellow since 1984. He became an Associate of the Chartered Institute of Arbitrators.</p>
      <p class="mb-4">He managed professional offices in Dar es Salaam and Nairobi, working with institutions like the World Bank, The United Nations, USAID, and ADB between 1975 and 1983. He later established the northern office of Baker Wilkins & Smith, providing cost consultancy and project management services in the construction and oil and gas industries both in the United Kingdom and overseas, particularly in Saudi Arabia and the UAE.</p>
      <p class="mb-4">In 2020, jointly with Steve Kane, David formed GBE International Limited, engaged as a global trading entity for the sale and purchase of fuel products and worldwide international real estate acquisitions.</p>
    `
  },
  babu: {
    name: 'Babu Ozhhiparakkal',
    title: 'CEO/MD, DMI Holdings',
    bio: `
      <p class="mb-4">Ozhhiparakkal Babu is a distinguished financial technology expert, global entrepreneur, and the visionary leader of the DMI Group of Companies. Serving as the CEO and Managing Director of DMI Holdings, he has been instrumental in driving the organization's international growth across finance, technology, energy, and humanitarian sectors.</p>
      <p class="mb-4">A pioneering figure in financial technology, Babu Ozhhiparakkal has led a global FTSE company as its founder and majority shareholder (77%), demonstrating exceptional capability in building, scaling, and managing high-impact international enterprises.</p>
      <p class="mb-4">In addition to his leadership at DMI Holdings, he also serves as the CEO and Managing Director of DMI—Gulf Petroleum UK, where he oversees major international energy and trading operations. He is also a registered Director with six other companies.</p>
    `
  },
  ben: {
    name: 'Ben John Manjaly',
    title: 'President',
    bio: `
      <p class="mb-4">Mr. Ben John serves as a distinguished Director at DMI Trading Corporation Limited (DMI Credit & Investment GMBH / DMI Investment Limited), bringing with him a strong legacy of global commitment, strategic vision, and humanitarian values.</p>
      <p class="mb-4">Beyond the corporate realm, Mr. Ben John is widely recognized for his impactful humanitarian work. He has played a vital role in global relief operations, poverty alleviation programs, community development projects, and initiatives supporting vulnerable populations.</p>
      <p class="mb-4">Through his leadership at DMI Trading Corporation, Mr. Ben John continues to bridge business excellence with social responsibility—advancing global growth while ensuring meaningful humanitarian impact. <a href="https://www.linkedin.com/in/dmigroups" target="_blank" rel="noopener noreferrer" style="color: #059669; text-decoration: underline;">Connect on LinkedIn</a></p>
    `
  },
  xavier: {
    name: 'Xavier Allessu',
    title: 'Director COO (Chief Operating Officer)',
    bio: `
      <p class="mb-4">Environmental Consultant & Visionary Leader behind the emerging green renaissance, serves as the CEO of Tropical Environmental Consultants Pvt Ltd. TECPL is not just a company — it is engineering the future.</p>
      <p class="mb-4">Under his leadership, the organization pioneers wellness and preventive health initiatives, advances waste-to-energy innovation, develops natural organic manure solutions, and drives programs aimed at poverty eradication and community upliftment.</p>
      <p class="mb-4">Xavier blends strategic business leadership with grassroots empowerment and a truly global perspective. His passion is to elevate quality of life — from farmers to families — with solutions built on technology, transparency, and unwavering commitment.</p>
    `
  }
};

// Leadership Principles Content
const LEADERSHIP_PRINCIPLES = [
  {
    icon: 'target',
    title: 'Vision with Purpose',
    description: 'We think beyond traditional solutions and set bold goals to address global challenges such as energy scarcity, pollution, climate change, hunger, and poverty.'
  },
  {
    icon: 'cpu',
    title: 'Technology with Responsibility',
    description: 'Our leaders ensure that every technology we implement is affordable, scalable, replicable, and ecologically safe.'
  },
  {
    icon: 'users',
    title: 'Partnership with Communities',
    description: 'We work with people, not on people. Whether it is farmers, city planners, local governments, or industry players, collaboration is central to our leadership.'
  },
  {
    icon: 'shield-check',
    title: 'Execution with Integrity',
    description: 'Our leadership is committed to transparent operations, ethical project execution, and a people-centered work culture.'
  }
];

// Leadership Impact Metrics
const LEADERSHIP_IMPACT = [
  'Deployment of patented hydro magnetic energy solutions',
  'Integrated farming systems supporting farmers and rural economies',
  'Large-scale waste transformation technologies',
  'Drinkable water and sanitation improvement programs',
  'Sustainable hospitality and eco-tourism facilities',
  'International collaborations with government and institutional bodies'
];

// Shared Value Metrics
const SHARED_VALUE = [
  'Cleaner rivers',
  'Healthier soil',
  'Empowered farmers',
  'Reduced carbon footprint',
  'Job creation',
  'Improved public health',
  'Enhanced community wellbeing'
];

// Collaboration Partners
const COLLABORATION_PARTNERS = [
  'Governments',
  'Municipal authorities',
  'Research institutions',
  'Industry partners',
  'Farmer cooperatives',
  'Local community organizations'
];

// State
let state = {
  mobileMenuOpen: false,
  activeModal: null
};

// Icon helper
function createIcon(name, color = '') {
  const iconEl = document.createElement('i');
  iconEl.setAttribute('data-lucide', name);
  if (color) iconEl.className = color;
  return iconEl;
}

// Scroll to section
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    state.mobileMenuOpen = false;
    updateMobileMenu();
  }
}

// Update mobile menu
function updateMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (state.mobileMenuOpen) {
    menu.classList.add('active');
  } else {
    menu.classList.remove('active');
  }
}

// Toggle mobile menu
function toggleMobileMenu() {
  state.mobileMenuOpen = !state.mobileMenuOpen;
  updateMobileMenu();
}

// Show modal
function showModal(leaderId) {
  state.activeModal = leaderId;
  renderModal();
}

// Hide modal
function hideModal() {
  state.activeModal = null;
  const modalOverlay = document.getElementById('modal-overlay');
  if (modalOverlay) {
    modalOverlay.remove();
  }
}

// Render modal
function renderModal() {
  if (!state.activeModal) return;
  
  const leader = LEADERSHIP_BIOS[state.activeModal];
  if (!leader) return;
  
  const modalHTML = `
    <div id="modal-overlay" class="modal-overlay animate-fade-up">
      <div class="modal-content">
        <div class="modal-header">
          <div style="display:flex;gap:1rem;align-items:center;">
            <img class="modal-avatar" src="img/${state.activeModal}.jpg" alt="${leader.name}">
            <div>
              <h3>${leader.name}</h3>
              <p>${leader.title}</p>
            </div>
          </div>
          <button class="modal-close" onclick="hideModal()">
            <i data-lucide="x" style="width: 24px; height: 24px;"></i>
          </button>
        </div>
        <div class="modal-body">
          ${leader.bio}
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  lucide.createIcons();
  
  // Close on overlay click
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'modal-overlay') {
      hideModal();
    }
  });
}

// Initialize app
function init() {
  const root = document.getElementById('root');
  
  root.innerHTML = `
    <div class="font-sans text-slate-900 bg-slate-50 relative">
      <!-- Navigation -->
      <nav>
        <div class="nav-container">
          <button class="nav-logo" onclick="scrollToSection('home')">
            <img src="T.png" alt="TECL logo" />
            <span></span>
          </button>
          
          <!-- Desktop Menu -->
          <div class="nav-menu">
            <button class="nav-link" onclick="scrollToSection('about')">About</button>
            <button class="nav-link" onclick="scrollToSection('vision')">Vision</button>
            <button class="nav-link" onclick="scrollToSection('sectors')">Sectors</button>
            <button class="nav-link" onclick="scrollToSection('leadership')">Leadership</button>
            <button class="nav-cta" onclick="scrollToSection('contact')">Contact</button>
          </div>

          <!-- Mobile Menu Button -->
          <button class="mobile-menu-btn" onclick="toggleMobileMenu()">
            <i data-lucide="menu" style="width: 28px; height: 28px;"></i>
          </button>
        </div>

        <!-- Mobile Menu Dropdown -->
        <div id="mobile-menu" class="mobile-menu">
          <button onclick="scrollToSection('about')">About</button>
          <button onclick="scrollToSection('vision')">Vision</button>
          <button onclick="scrollToSection('sectors')">Sectors</button>
          <button onclick="scrollToSection('leadership')">Leadership</button>
          <button class="nav-cta" onclick="scrollToSection('contact')">Contact Us</button>
        </div>
      </nav>

      <!-- Main Content -->
      <main>
        
        <!-- Hero Section -->
        <section id="home" style="min-height: 100vh; display: flex; flex-direction: column; justify-content: center; background-image: linear-gradient(135deg, rgba(15, 23, 42, 0.85), rgba(5, 150, 105, 0.8)), url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'); background-size: cover; background-position: center; background-attachment: fixed; color: white; text-align: center; padding: 0 1.5rem;">
          <div class="hero-content animate-fade-up">
            <span class="hero-badge">
              Environmental Consulting • Sustainability Solutions
            </span>
            <h1 class="hero-title">
              Tropical Environmental <br /> Consultants Limited
            </h1>
            <p class="hero-subtitle">
              Innovative and scalable solutions that improve quality of life, protect natural ecosystems, and support global climate goals.
            </p>
            <div class="hero-buttons">
              <button class="btn-primary" onclick="scrollToSection('about')">
                Discover Who We Are
              </button>
              <button class="btn-secondary" onclick="scrollToSection('sectors')">
                Our Expertise
              </button>
            </div>
          </div>
        </section>

        <!-- About Section -->
        <section id="about" style="background-color: white; padding: 5rem 1.5rem;">
          <div class="about-container">
            <div class="about-grid">
              
              <!-- Left Column -->
              <div class="about-text animate-fade-up">
                <div>
                  <span class="section-label">About Us</span>
                  <h2 class="section-title">Navigating the Challenges of Sustainability</h2>
                  <p class="about-description">
                    Tropical Environmental Consultants Limited is a UK-based environmental consulting firm dedicated to helping organisations navigate the challenges of sustainability, environmental compliance, and responsible land and resource management. Formerly operating as Chrysalis Care North West Limited, the company rebranded to reflect its expanded focus on environmental services and sustainable development solutions.
                  </p>
                  <p class="about-description" style="margin-top: 1.5rem;">
                    Tropical Environmental Consultants Limited (TECL) is a multinational environmental solution provider specializing in sustainable technologies, renewable energy, waste management, integrated farming, and circular economy-based industrial systems. TECL's mission is to deliver innovative, scalable, and affordable solutions that improve quality of life, protect natural ecosystems, and support global climate goals.
                  </p>
                </div>
                
                <div class="about-box">
                  <h3>Our Vision</h3>
                  <p>
                    We believe in creating long-term, positive environmental value through informed decision-making and responsible resource management. Our aim is to guide organisations in adopting sustainable practices that benefit both operational goals and the wider ecosystem.
                  </p>
                </div>

                <div>
                  <h3 style="font-size: 1.25rem; font-weight: bold; color: #0f172a; margin-bottom: 0.5rem;">Why Choose Us</h3>
                  <p style="color: #475569;">
                    With a committed leadership team and a flexible, project-focused operating model, TECL delivers personalised consulting support designed around client needs. We value transparency, integrity, and measurable results in every engagement.
                  </p>
                </div>
              </div>

              <!-- Right Column -->
              <div class="animate-float" style="position: relative;">
                <div style="position: absolute; inset: -1rem; background: linear-gradient(to right, #34d399, #3b82f6); border-radius: 1rem; opacity: 0.2; filter: blur(32px);"></div>
                
                <div class="what-we-do-card">
                  <div class="what-we-do-bg"></div>
                  
                  <h3 class="what-we-do-title">
                    <i data-lucide="activity"></i>
                    What We Do
                  </h3>

                  <ul class="what-we-do-list">
                    <li class="what-we-do-item animate-fade-up delay-100">
                      <div class="what-we-do-icon" style="background: rgba(16, 185, 129, 0.2); color: #34d399;">
                        <i data-lucide="file-search"></i>
                      </div>
                      <span>Environmental Impact Assessments</span>
                    </li>
                    <li class="what-we-do-item animate-fade-up delay-200">
                      <div class="what-we-do-icon" style="background: rgba(59, 130, 246, 0.2); color: #60a5fa;">
                        <i data-lucide="trash-2"></i>
                      </div>
                      <span>Waste-Management & Remediation</span>
                    </li>
                    <li class="what-we-do-item animate-fade-up delay-300">
                      <div class="what-we-do-icon" style="background: rgba(234, 179, 8, 0.2); color: #facc15;">
                        <i data-lucide="map"></i>
                      </div>
                      <span>Sustainable Land-Use Planning</span>
                    </li>
                    <li class="what-we-do-item animate-fade-up delay-400">
                      <div class="what-we-do-icon" style="background: rgba(239, 68, 68, 0.2); color: #f87171;">
                        <i data-lucide="shield-alert"></i>
                      </div>
                      <span>Environmental Risk Analysis</span>
                    </li>
                    <li class="what-we-do-item animate-fade-up delay-500">
                      <div class="what-we-do-icon" style="background: rgba(99, 102, 241, 0.2); color: #818cf8;">
                        <i data-lucide="scale"></i>
                      </div>
                      <span>Compliance Guidance (UK Regs)</span>
                    </li>
                    <li class="what-we-do-item animate-fade-up delay-600">
                      <div class="what-we-do-icon" style="background: rgba(20, 184, 166, 0.2); color: #2dd4bf;">
                        <i data-lucide="settings"></i>
                      </div>
                      <span>Resource Efficiency Advisory</span>
                    </li>
                  </ul>
                  
                  <p class="what-we-do-quote">
                    "Combining environmental expertise with practical, real-world implementation strategies."
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- Vision Section -->
        <section id="vision" style="background-color: #0f172a; color: white; padding: 5rem 1.5rem;">
          <div class="vision-container">
            <div class="vision-header animate-fade-up">
              <span class="section-label" style="color: #34d399;">Our Mandate</span>
              <h2 class="section-title" style="color: white;">Vision & Commitment</h2>
              <p>
                To align all core projects with UN Sustainable Development Goals (SDGs) and reduce hunger, homelessness, and poverty through systemic interventions.
              </p>
            </div>

            <div class="vision-grid">
              <div class="vision-card">
                <i data-lucide="zap" style="color: #34d399;"></i>
                <h3>Clean Energy</h3>
                <p>Advancing renewable technologies and sustainable power grids.</p>
              </div>
              <div class="vision-card">
                <i data-lucide="recycle" style="color: #60a5fa;"></i>
                <h3>Zero Waste</h3>
                <p>Championing circular economy and landfill-free systems.</p>
              </div>
              <div class="vision-card">
                <i data-lucide="heart" style="color: #fb7185;"></i>
                <h3>Healthy Communities</h3>
                <p>Improving public health through cleaner environments.</p>
              </div>
              <div class="vision-card">
                <i data-lucide="users" style="color: #fbbf24;"></i>
                <h3>Prosperity for All</h3>
                <p>Creating shared value and ethical economic growth.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Sectors Section -->
        <section id="sectors" style="background-color: #f8fafc; padding: 5rem 1.5rem;">
          <div class="sectors-container">
            <div class="sectors-header animate-fade-up">
              <span class="section-label" style="color: #2563eb;">Our Expertise</span>
              <h2 class="section-title">Key Sectors & Capabilities</h2>
            </div>

            <div class="sectors-grid">
              <div class="sector-card" style="border-color: #10b981;">
                <i data-lucide="zap" style="color: #059669;"></i>
                <h3>Renewable Energy</h3>
                <ul>
                  <li>Hydro Magnetic Energy Systems (Patented Technology)</li>
                  <li>Solar, Wind, Hydrogen & Hybrid Smart-Grid Models</li>
                  <li>Waste-to-Energy & Biogas Systems</li>
                  <li>Micro-grid & Off-grid Rural Electrification Solutions</li>
                </ul>
              </div>
              
              <div class="sector-card" style="border-color: #3b82f6;">
                <i data-lucide="trash-2" style="color: #2563eb;"></i>
                <h3>Waste Management</h3>
                <ul>
                  <li>Solid & Liquid Waste Treatment</li>
                  <li>Municipal and Industrial Waste Solutions</li>
                  <li>Plastic-to-Fuel, Plastics Recycling & Resource Recovery</li>
                  <li>Landfill-free Circular Waste Processing Models</li>
                </ul>
              </div>
              
              <div class="sector-card" style="border-color: #06b6d4;">
                <i data-lucide="droplet" style="color: #0891b2;"></i>
                <h3>Water & Sanitation</h3>
                <ul>
                  <li>Pure Drinking Water Disinfection & Filtration</li>
                  <li>Industrial and Sewage Treatment</li>
                  <li>Hydro-geological Resource Management</li>
                </ul>
              </div>
              
              <div class="sector-card" style="border-color: #84cc16;">
                <i data-lucide="sprout" style="color: #65a30d;"></i>
                <h3>Agriculture & Integrated Farming</h3>
                <ul>
                  <li>High-yield natural farming strategies</li>
                  <li>Organic manure production</li>
                  <li>Farmer support & buy-back systems</li>
                  <li>Country-of-origin branding for Indian agricultural products</li>
                </ul>
              </div>
              
              <div class="sector-card" style="border-color: #f43f5e;">
                <i data-lucide="heart-pulse" style="color: #e11d48;"></i>
                <h3>Healthy Living & Wellness</h3>
                <ul>
                  <li>Community-level wellness programs</li>
                  <li>Preventive health and nutrition initiatives</li>
                  <li>Ayurvedic wellness assessments & lifestyle interventions</li>
                </ul>
              </div>
              
              <div class="sector-card" style="border-color: #6366f1;">
                <i data-lucide="building-2" style="color: #4f46e5;"></i>
                <h3>Infrastructure & Hospitality</h3>
                <ul>
                  <li>Eco-tourism Projects</li>
                  <li>Green campus development</li>
                  <li>Sustainable hotels, resorts & smart-facility planning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>`;

        root.innerHTML += `
        <!-- Leadership Section -->
        <section id="leadership" style="background-color: white; padding: 5rem 1.5rem;">
          <div class="leadership-container">
            <div class="leadership-header animate-fade-up">
              <span class="section-label">Our Team</span>
              <h2 class="section-title">Visionary Leadership</h2>
              <p>
                The leadership of Tropical Environmental Consultants Limited (TECL) is guided by a visionary team of innovators, technologists, environmental scientists, social entrepreneurs, and strategic planners. Our leaders bring together decades of multidisciplinary experience in renewable energy, environmental engineering, waste management, agriculture, and sustainable infrastructure development.
              </p>
              <p style="margin-top: 1rem;">
                At the core of our leadership philosophy is the belief that businesses must not merely generate profit — they must <strong>generate purpose and positive impact</strong>. We focus on people, planet, and prosperity as interconnected responsibilities.
              </p>
            </div>

            <div class="leadership-grid">
              <button class="leader-card" onclick="showModal('steven')">
                <div class="leader-avatar"><img src="img/steven.jpg" alt="Steven Joseph Kane"></div>
                <h3>Steven Joseph Kane</h3>
                <p style="color: #059669;">Executive Director</p>
              </button>
              
              <button class="leader-card" onclick="showModal('philip')">
                <div class="leader-avatar"><img src="img/philip.jpg" alt="Sir Philip Steven Cabana"></div>
                <h3>Sir Philip S. Cabana</h3>
                <p style="color: #2563eb;">Director</p>
              </button>
              
              <button class="leader-card" onclick="showModal('david')">
                <div class="leader-avatar"><img src="img/david.jpg" alt="David Bangham"></div>
                <h3>David Bangham</h3>
                <p style="color: #059669;">Director</p>
              </button>
              
              <button class="leader-card" onclick="showModal('babu')">
                <div class="leader-avatar"><img src="img/babu.jpg" alt="Babu Ozhhiparakkal"></div>
                <h3>Babu Ozhhiparakkal</h3>
                <p style="color: #2563eb;">CEO/MD</p>
              </button>
              
              <button class="leader-card" onclick="showModal('ben')">
                <div class="leader-avatar"><img src="img/ben.jpg" alt="Ben John Manjaly"></div>
                <h3>Ben John Manjaly</h3>
                <p style="color: #059669;">President</p>
              </button>
              
              <button class="leader-card" onclick="showModal('xavier')">
                <div class="leader-avatar"><img src="img/xavier.jpg" alt="Xavier Allessu"></div>
                <h3>Xavier Allessu</h3>
                <p style="color: #2563eb;">Director COO</p>
              </button>
            </div>
            
            <!-- Leadership Principles Box -->
            <div class="leadership-principles-box animate-fade-up delay-200">
              <h3>Key Leadership Principles</h3>
              <div class="leadership-principles-grid">
                ${LEADERSHIP_PRINCIPLES.map(principle => `
                  <div class="leadership-principle-item">
                    <h4>
                      <i data-lucide="${principle.icon}"></i>
                      ${principle.title}
                    </h4>
                    <p>${principle.description}</p>
                  </div>
                `).join('')}
              </div>

              <!-- Leadership Impact -->
              <div class="leadership-impact-section">
                <h4>Leadership Impact</h4>
                <p style="color: #64748b; font-size: 0.875rem; margin-bottom: 1rem;">
                  Under the current leadership direction, TECL has initiated and/or is supporting:
                </p>
                <div class="leadership-impact-list">
                  ${LEADERSHIP_IMPACT.map(impact => `
                    <div class="leadership-impact-item">
                      <i data-lucide="check-circle"></i>
                      <span>${impact}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Shared Value -->
              <div class="shared-value-section">
                <h4>Our leaders measure success in <em>shared value</em>:</h4>
                <div class="shared-value-tags">
                  ${SHARED_VALUE.map(value => `
                    <span class="shared-value-tag">${value}</span>
                  `).join('')}
                </div>
              </div>

              <!-- Collaboration -->
              <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #e2e8f0;">
                <h4 style="font-size: 1.125rem; font-weight: bold; color: #cbcbcbff; margin-bottom: 1rem;">
                  Collaboration & Partnerships
                </h4>
                <p style="color: #78808cff; font-size: 0.875rem; margin-bottom: 1rem;">
                  TECL collaborates with:
                </p>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                  ${COLLABORATION_PARTNERS.map(partner => `
                    <span style="padding: 0.5rem 1rem; background: #f8fafc; color: #0f172a; border-radius: 0.5rem; font-size: 0.75rem; font-weight: 600; border: 1px solid #e2e8f0;">
                      ${partner}
                    </span>
                  `).join('')}
                </div>
                <p style="color: #64748b; font-size: 0.875rem; margin-top: 1rem; font-style: italic;">
                  Projects are designed for impact, replicability, and long-term sustainability rather than short-term commercial gains.
                </p>
              </div>

              <!-- People-Centered Culture -->
              <div style="margin-top: 2rem; background: white; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e2e8f0;">
                <h4 style="font-size: 1.125rem; font-weight: bold; color: #0f172a; margin-bottom: 1rem;">
                  People-Centered Organizational Culture
                </h4>
                <p style="color: #475569; font-size: 0.875rem; margin-bottom: 1rem;">
                  TECL leadership empowers every employee and stakeholder to become a contributor to environmental transformation. We encourage:
                </p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem; margin-bottom: 1rem;">
                  <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <i data-lucide="lightbulb" style="color: #10b981; width: 1rem; height: 1rem;"></i>
                    <span style="font-size: 0.875rem; color: #475569;">Innovation</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <i data-lucide="flask-conical" style="color: #10b981; width: 1rem; height: 1rem;"></i>
                    <span style="font-size: 0.875rem; color: #475569;">Research-driven thinking</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <i data-lucide="graduation-cap" style="color: #10b981; width: 1rem; height: 1rem;"></i>
                    <span style="font-size: 0.875rem; color: #475569;">Continuous learning</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <i data-lucide="wrench" style="color: #10b981; width: 1rem; height: 1rem;"></i>
                    <span style="font-size: 0.875rem; color: #475569;">Creative engineering</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <i data-lucide="briefcase" style="color: #10b981; width: 1rem; height: 1rem;"></i>
                    <span style="font-size: 0.875rem; color: #475569;">Socially responsible entrepreneurship</span>
                  </div>
                </div>
                <p style="color: #059669; font-size: 0.875rem; font-weight: 600; font-style: italic;">
                  We believe that leadership is not a title — it is a responsibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" style="background-color: #0f172a; color: white; padding: 5rem 1.5rem;">
          <div class="contact-container animate-fade-up">
            <h2>Let's Partner for a Resilient Future</h2>
            <p>
              Connect with our team to discuss your project and start creating shared value in our operational regions.
            </p>
            <a href="mailto:tropicalenergyconsultants@gmail.com" class="contact-btn">
              <i data-lucide="mail"></i> Contact Us Today
            </a>

            <div class="global-presence">
              <p>Global Presence</p>
              <div class="location-tags">
                <span class="location-tag">
                  <i data-lucide="globe"></i> India
                </span>
                <span class="location-tag">
                  <i data-lucide="globe"></i> United Kingdom
                </span>
                <span class="location-tag">
                  <i data-lucide="globe"></i> Netherlands
                </span>
                <span class="location-tag">
                  <i data-lucide="globe"></i> Germany
                </span>
                <span class="location-tag">
                  <i data-lucide="globe"></i> Middle East & Africa
                </span>
              </div>
            </div>

            <div style="margin-top: 3rem; padding-top: 2.5rem; border-top: 1px solid #334155;">
              <p style="font-size: 0.875rem; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; color: #94a3b8; margin-bottom: 1rem;">Company Information</p>
              <div style="font-size: 1rem; line-height: 1.75; color: #cbd5e1;">
                <p style="font-weight: 600; margin-bottom: 0.5rem;">TROPICAL ENVIRONMENTAL CONSULTANTS LIMITED</p>
                <p style="margin-bottom: 0.5rem;">Seneca House Links Point, Amy Johnson Way</p>
                <p style="margin-bottom: 1.5rem;">Blackpool, England, FY4 2FF</p>
                <p style="color: #94a3b8; font-size: 0.875rem;">Company number 12355526</p>
              </div>
            </div>
          </div>
          
          <footer>
            &copy; 2025 Tropical Environmental Consultants Limited (TECL). All Rights Reserved.
          </footer>
        </section>

      </main>
    </div>
  `;
  
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Handle escape key for modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.activeModal) {
      hideModal();
    }
  });
}

// Run on load
window.addEventListener('DOMContentLoaded', init);
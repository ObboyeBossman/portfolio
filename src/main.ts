import { PROFILE, PROJECTS, SKILL_CATEGORIES, ARCHITECTURE_CASE_STUDIES } from './data';

// ==========================================================================
// SVG Icon Helpers
// ==========================================================================
const ICONS = {
  external: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`,
  github: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
  lock: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
  check: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  info: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
  sun: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="12" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
  moon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
};

// ==========================================================================
// Render Functions
// ==========================================================================

function renderHeroStats(): void {
  const container = document.getElementById('heroStatsContainer');
  if (!container) return;

  container.innerHTML = PROFILE.stats.map(s => `
    <div class="stat-card">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
      <div class="stat-detail">${s.detail}</div>
    </div>
  `).join('');
}

function renderSkills(): void {
  const container = document.getElementById('skillsContainer');
  if (!container) return;

  const categoryIcons: Record<string, string> = {
    code: `<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>`,
    layout: `<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>`,
    mobile: `<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>`,
    database: `<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>`,
    cpu: `<rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>`
  };

  container.innerHTML = SKILL_CATEGORIES.map(category => `
    <div class="skill-category-card">
      <div class="skill-card-header">
        <div class="skill-icon-wrap">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            ${categoryIcons[category.icon] || categoryIcons.code}
          </svg>
        </div>
        <div>
          <h3 class="skill-category-title">${category.title}</h3>
        </div>
      </div>
      <p class="skill-category-desc">${category.description}</p>
      <ul class="skill-items-list">
        ${category.skills.map(skill => `
          <li class="skill-item">
            <div class="skill-item-left">
              <span class="skill-name">${skill.name}</span>
              ${skill.badge ? `<span class="skill-badge">${skill.badge}</span>` : ''}
            </div>
            <span class="skill-level">${skill.level}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

function renderProjects(filter: string = 'all'): void {
  const container = document.getElementById('projectsContainer');
  if (!container) return;

  const filtered = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  container.innerHTML = filtered.map(project => `
    <article class="project-card" data-category="${project.category}">
      <div class="project-badge-bar">
        <span class="project-badge ${project.featured ? 'badge-featured' : 'badge-private'}">
          ${project.featured ? 'Production Live' : 'Backend System'}
        </span>
        ${project.isPrivate ? `
          <span class="project-badge badge-private" title="Proprietary / Institutional Repository" style="display:inline-flex; align-items:center; gap:4px;">
            ${ICONS.lock} Institutional / Client
          </span>
        ` : `
          <span class="project-badge" style="background: rgba(6,182,212,0.15); color: var(--accent-secondary); border: 1px solid rgba(6,182,212,0.3);">
            Open Source
          </span>
        `}
      </div>

      <h3 class="project-title">${project.title}</h3>
      <div class="project-subtitle">${project.subtitle}</div>
      <p class="project-desc">${project.description}</p>

      <ul class="project-highlights-list">
        ${project.highlights.slice(0, 3).map(h => `
          <li>
            ${ICONS.check}
            <span>${h}</span>
          </li>
        `).join('')}
      </ul>

      <div class="project-tags">
        ${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>

      <div class="project-footer-actions">
        <div class="project-links">
          ${project.liveUrl ? `
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              <span>Live App</span>
              ${ICONS.external}
            </a>
          ` : ''}
          ${project.githubUrl ? `
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
              ${ICONS.github}
              <span>${project.isPrivate ? 'Repo Info' : 'Source'}</span>
            </a>
          ` : ''}
        </div>

        <button class="project-modal-btn" data-project-id="${project.id}">
          <span>Inspect Spec</span>
          ${ICONS.info}
        </button>
      </div>
    </article>
  `).join('');

  // Attach modal triggers
  container.querySelectorAll('.project-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLElement;
      const projectId = target.getAttribute('data-project-id');
      if (projectId) openProjectModal(projectId);
    });
  });
}

function renderArchitectureShowcase(): void {
  const tabsContainer = document.getElementById('archTabsContainer');
  const contentContainer = document.getElementById('archContentContainer');
  if (!tabsContainer || !contentContainer) return;

  let activeIndex = 0;

  function updateView(): void {
    const study = ARCHITECTURE_CASE_STUDIES[activeIndex];
    
    // Update tabs
    tabsContainer!.innerHTML = ARCHITECTURE_CASE_STUDIES.map((s, idx) => `
      <button class="arch-tab-btn ${idx === activeIndex ? 'active' : ''}" data-index="${idx}">
        ${s.title}
      </button>
    `).join('');

    // Attach click listeners to tabs
    tabsContainer!.querySelectorAll('.arch-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        const indexStr = target.getAttribute('data-index');
        if (indexStr !== null) {
          activeIndex = parseInt(indexStr, 10);
          updateView();
        }
      });
    });

    // Update content
    contentContainer!.innerHTML = `
      <div class="arch-info">
        <span class="arch-project-tag">System: ${study.project}</span>
        <h3>${study.title}</h3>
        <p class="arch-summary">${study.summary}</p>
        <ul class="arch-points-list">
          ${study.points.map(pt => `
            <li>
              ${ICONS.check}
              <span>${pt}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="arch-diagram-box">${study.diagram.trim()}</div>
    `;
  }

  updateView();
}

// ==========================================================================
// Modal Logic
// ==========================================================================

function openProjectModal(projectId: string): void {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const content = document.getElementById('modalDynamicContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <span class="project-badge ${project.featured ? 'badge-featured' : 'badge-private'}" style="margin-bottom: 12px; display: inline-block;">
      ${project.featured ? 'Production Architecture' : 'Backend System'}
    </span>
    <h2 style="font-size: 1.8rem; margin-bottom: 6px;">${project.title}</h2>
    <div style="color: var(--accent-secondary); font-weight: 600; margin-bottom: 18px;">${project.subtitle}</div>

    <div style="margin-bottom: 20px;">
      <h4 style="font-size: 1rem; margin-bottom: 6px; color: var(--accent-primary);">The Engineering Problem</h4>
      <p style="color: var(--text-secondary); font-size: 0.94rem; line-height: 1.6;">${project.architectureDetails.problem}</p>
    </div>

    <div style="margin-bottom: 20px;">
      <h4 style="font-size: 1rem; margin-bottom: 6px; color: var(--accent-primary);">Architectural Solution</h4>
      <p style="color: var(--text-secondary); font-size: 0.94rem; line-height: 1.6;">${project.architectureDetails.solution}</p>
    </div>

    <div style="margin-bottom: 20px;">
      <h4 style="font-size: 1rem; margin-bottom: 8px; color: var(--accent-primary);">Key Architectural Decisions</h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
        ${project.architectureDetails.keyDecisions.map(d => `
          <li style="font-size: 0.9rem; color: var(--text-secondary); display: flex; gap: 8px;">
            <span style="color: var(--accent-primary); font-weight: bold;">•</span>
            <span>${d}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    ${project.architectureDetails.schemaHighlights ? `
      <div style="margin-bottom: 24px;">
        <h4 style="font-size: 1rem; margin-bottom: 8px; color: var(--accent-primary);">Relational Schema Scope</h4>
        <div style="background: var(--bg-surface-elevated); padding: 12px 16px; border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 0.84rem; color: var(--text-muted); border: 1px solid var(--border-subtle);">
          ${project.architectureDetails.schemaHighlights}
        </div>
      </div>
    ` : ''}

    <div style="display: flex; gap: 12px; padding-top: 16px; border-top: 1px solid var(--border-subtle);">
      ${project.liveUrl ? `
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <span>Launch Live App</span>
          ${ICONS.external}
        </a>
      ` : ''}
      ${project.githubUrl ? `
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
          ${ICONS.github}
          <span>GitHub Repository</span>
        </a>
      ` : ''}
    </div>
  `;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal(): void {
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// ==========================================================================
// Toast Notification
// ==========================================================================

function showToast(message: string): void {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span style="color: var(--accent-primary);">${ICONS.check}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================================================
// Theme Management
// ==========================================================================

function initTheme(): void {
  const savedTheme = localStorage.getItem('bossman_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  const toggleBtn = document.getElementById('themeToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('bossman_theme', next);
      updateThemeIcon(next);
      showToast(`Switched to ${next} theme`);
    });
  }
}

function updateThemeIcon(theme: string): void {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;
  toggleBtn.innerHTML = theme === 'dark' ? ICONS.sun : ICONS.moon;
}

// ==========================================================================
// Interactive Handlers (Filter, Copy, Contact, GitHub Fetch)
// ==========================================================================

function initFilters(): void {
  const filterTabs = document.getElementById('projectFilterTabs');
  if (!filterTabs) return;

  filterTabs.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLElement;
      filterTabs.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      target.classList.add('active');

      const filter = target.getAttribute('data-filter') || 'all';
      renderProjects(filter);
    });
  });
}

function initCopyEmail(): void {
  const copyBtn = document.getElementById('copyEmailBtn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      showToast('Email copied to clipboard!');
    } catch {
      showToast(`Email: ${PROFILE.email}`);
    }
  });
}

function initContactForm(): void {
  const form = document.getElementById('contactForm') as HTMLFormElement | null;
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = (document.getElementById('contactName') as HTMLInputElement).value;
    const subject = (document.getElementById('contactSubject') as HTMLInputElement).value;
    const message = (document.getElementById('contactMessage') as HTMLTextAreaElement).value;

    const mailtoLink = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
    showToast('Opening your default mail client...');
    form.reset();
  });
}

async function fetchLiveGitHubStats(): Promise<void> {
  try {
    const res = await fetch(`https://api.github.com/users/${PROFILE.githubUsername}`);
    if (!res.ok) return;

    const data = await res.json();
    if (data.public_repos !== undefined) {
      const repoEl = document.getElementById('githubRepoCount');
      if (repoEl) repoEl.textContent = `${data.public_repos} Public Repositories`;
    }
    if (data.bio) {
      const bioEl = document.getElementById('githubBio');
      if (bioEl) bioEl.textContent = data.bio;
    }
    if (data.location) {
      const locEl = document.getElementById('githubLocation');
      if (locEl) locEl.textContent = data.location;
    }
    if (data.avatar_url) {
      const avatarEl = document.getElementById('githubAvatar') as HTMLImageElement | null;
      if (avatarEl) avatarEl.src = data.avatar_url;
    }
  } catch {
    // Graceful offline fallback (already rendered in HTML)
  }
}

function initMobileMenu(): void {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const sideDrawer = document.getElementById('sideDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  const closeBtn = document.getElementById('drawerCloseBtn');

  if (!menuBtn || !sideDrawer || !backdrop) return;

  function openDrawer(): void {
    sideDrawer!.classList.add('open');
    backdrop!.classList.add('open');
    sideDrawer!.setAttribute('aria-hidden', 'false');
    backdrop!.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer(): void {
    sideDrawer!.classList.remove('open');
    backdrop!.classList.remove('open');
    sideDrawer!.setAttribute('aria-hidden', 'true');
    backdrop!.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  sideDrawer.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sideDrawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

function initScrollSpy(): void {
  const desktopLinks = document.querySelectorAll('.nav-link');
  const drawerLinks = document.querySelectorAll('.drawer-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = (section as HTMLElement).offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id') || '';
      }
    });

    desktopLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });

    drawerLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

// ==========================================================================
// Initialization
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderHeroStats();
  renderSkills();
  renderProjects('all');
  renderArchitectureShowcase();
  initFilters();
  initCopyEmail();
  initContactForm();
  initMobileMenu();
  initScrollSpy();
  fetchLiveGitHubStats();

  // Modal close handlers
  document.getElementById('modalCloseBtn')?.addEventListener('click', closeProjectModal);
  document.getElementById('projectModal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeProjectModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });

  // Current year in footer
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear().toString();
});

import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "./styles/reset.css.js";

export class NavBarElement extends LitElement {
  @property({ attribute: "brand-text" })
  brandText?: string;

  @property({ attribute: "brand-href" })
  brandHref?: string;

  override render() {
    const isLightMode = document.body.classList.contains('light-mode');
    
    return html`
      <nav class="nav-header">
        <div class="nav-container">
          <div class="nav-left">
            <a href="${this.brandHref || '/index.html'}" class="nav-brand">
              ${this.brandText || 'SC2 Strategy'}
            </a>
            <button class="theme-toggle ${isLightMode ? 'light-mode' : ''}" 
                    aria-label="Toggle light/dark mode"
                    @click="${this._handleThemeToggle}">
              <svg class="theme-icon sun-icon">
                <use href="/icons/races.svg#icon-sun" />
              </svg>
              <svg class="theme-icon moon-icon">
                <use href="/icons/races.svg#icon-moon" />
              </svg>
            </button>
          </div>
          <ul class="nav-links">
            <li>
              <a href="/terran/terranBuilds.html" class="nav-link terran">
                <svg class="icon">
                  <use href="/icons/races.svg#icon-terran" />
                </svg>
                Terran
              </a>
            </li>
            <li>
              <a href="/protoss/protossBuilds.html" class="nav-link protoss">
                <svg class="icon">
                  <use href="/icons/races.svg#icon-protoss" />
                </svg>
                Protoss
              </a>
            </li>
            <li>
              <a href="/zerg/zergBuilds.html" class="nav-link zerg">
                <svg class="icon">
                  <use href="/icons/races.svg#icon-zerg" />
                </svg>
                Zerg
              </a>
            </li>
            <li>
              <a href="/forums.html" class="nav-link forum">
                <svg class="icon">
                  <use href="/icons/races.svg#icon-community" />
                </svg>
                Forums
              </a>
            </li>
          </ul>
        </div>
      </nav>
    `;
  }

  static styles = [
    reset.styles,
    css`
      :host {
        display: block;
        position: sticky;
        top: 0;
        z-index: 1000;
        width: 100%;
      }

      /* Navigation Bar Styles */
      .nav-header {
        background: linear-gradient(135deg, 
          rgba(101, 125, 163, 0.15) 0%, 
          rgba(34, 81, 211, 0.452) 100%);
        border-bottom: 2px solid var(--color-border-accent, #3b82f6);
        padding: var(--space-4, 1rem) 0;
        margin-bottom: var(--space-6, 1.5rem);
        box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        /* Remove positioning from here since it's on :host */
      }

      .nav-container {
        max-width: var(--max-width-content, 1200px);
        margin: 0 auto;
        padding: 0 var(--space-4, 1rem);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .nav-left {
        display: flex;
        align-items: center;
        gap: var(--space-4, 1rem);
      }

      .nav-brand {
        font-family: var(--font-family-heading, 'Orbitron', sans-serif);
        font-size: var(--font-size-2xl, 1.5rem);
        font-weight: var(--font-weight-bold, 700);
        color: var(--color-text-primary, #f8fafc);
        text-decoration: none;
        text-shadow: 0 0 8px rgba(59, 130, 246, 0.4);
      }

      .nav-brand:hover {
        color: var(--color-accent-blue, #3b82f6);
        text-shadow: 0 0 12px rgba(59, 130, 246, 0.6);
      }

      .theme-toggle {
        position: relative;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid var(--color-border-accent);
        background: var(--color-background-card);
        cursor: pointer;
        transition: all var(--transition-normal);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .theme-toggle:hover {
        background: var(--color-background-hover);
        border-color: var(--color-accent-blue);
        box-shadow: 0 0 12px rgba(59, 130, 246, 0.3);
        transform: scale(1.05);
      }

      .theme-toggle:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
      }

      .theme-icon {
        position: absolute;
        width: 20px;
        height: 20px;
        color: var(--color-text-primary);
        transition: all var(--transition-normal);
      }

      /* Default state (dark mode) - show sun icon */
      .sun-icon {
        opacity: 1;
        transform: rotate(0deg) scale(1);
      }

      .moon-icon {
        opacity: 0;
        transform: rotate(180deg) scale(0.5);
      }

      /* Light mode state - show moon icon */
      .light-mode .sun-icon {
        opacity: 0;
        transform: rotate(-180deg) scale(0.5);
      }

      .light-mode .moon-icon {
        opacity: 1;
        transform: rotate(0deg) scale(1);
      }

      .nav-links {
        display: flex;
        gap: var(--space-6);
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .nav-link {
        display: flex;
        align-items: center;
        gap: var(--space-2);
        padding: var(--space-2) var(--space-4);
        border-radius: var(--border-radius-md);
        text-decoration: none;
        font-weight: var(--font-weight-medium);
        transition: all var(--transition-normal);
        border: 1px solid transparent;
      }

      .nav-link:hover {
        background-color: var(--color-background-hover);
        border-color: var(--color-border-accent);
        transform: translateY(-1px);
      }

      /* Race-specific nav link colors */
      .nav-link.terran {
        color: #ef4444;
      }

      .nav-link.protoss {
        color: #3b82f6;
      }

      .nav-link.zerg {
        color: #8b5cf6;
      }

      .nav-link.forum {
        color: var(--color-accent-gold);
      }

      .icon {
        width: 2em;
        height: 2em;
        vertical-align: top;
      }

      /* Responsive Layout */
      @media (max-width: 768px) {
        .nav-header {
          padding: var(--space-2) 0;
          margin-bottom: var(--space-3);
        }
        
        .nav-container {
          flex-direction: column;
          gap: var(--space-2);
        }
        
        .nav-left {
          gap: var(--space-2);
        }
        
        .nav-brand {
          font-size: var(--font-size-xl);
        }
        
        .theme-toggle {
          width: 36px;
          height: 36px;
        }
        
        .theme-icon {
          width: 18px;
          height: 18px;
        }
        
        .nav-links {
          gap: var(--space-2);
          flex-wrap: wrap;
          justify-content: center;
        }
      }

      @media (max-width: 480px) {
        .nav-header {
          padding: var(--space-1) 0;
          margin-bottom: var(--space-2);
        }
        
        .nav-brand {
          font-size: var(--font-size-lg);
        }
        
        .theme-toggle {
          width: 32px;
          height: 32px;
        }
        
        .theme-icon {
          width: 16px;
          height: 16px;
        }
        
        .nav-links {
          gap: var(--space-1);
        }
        
        .nav-link {
          padding: var(--space-1) var(--space-2);
          font-size: var(--font-size-sm);
        }
        
        .nav-link .icon {
          width: 1.25rem;
          height: 1.25rem;
        }
      }
    `
  ];

  override connectedCallback() {
    super.connectedCallback();
    // Listen for theme changes and update icons
    document.body.addEventListener('theme:toggle', this._updateThemeIcons);
    // Update icons on initial load
    this._updateThemeIcons();
    // Load saved theme preference on initial load
    this._loadSavedTheme();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    document.body.removeEventListener('theme:toggle', this._updateThemeIcons);
  }

  private _updateThemeIcons = () => {
    this.requestUpdate();
  }

  private _loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
    } else if (savedTheme === 'dark') {
      document.body.classList.remove('light-mode');
    }
    this.requestUpdate();
  }

  private _handleThemeToggle(event: Event) {
    event.preventDefault();
    
    // Toggle the current state
    const isCurrentlyLight = document.body.classList.contains('light-mode');
    
    // Create and dispatch the custom event
    const customEvent = new CustomEvent('theme:toggle', {
      detail: { isLightMode: !isCurrentlyLight },
      bubbles: true
    });
    
    document.body.dispatchEvent(customEvent);
    
    // Apply the theme change
    if (!isCurrentlyLight) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
    
    // Update the component
    this.requestUpdate();
  }
}
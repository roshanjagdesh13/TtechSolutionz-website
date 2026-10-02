import React from 'react';
import { TtechLogo } from './TtechLogo';
import {
  Code2,
  ArrowUp,
  Cpu,
  Heart,
  Mail,
  Phone,
  MessageSquare,
  Globe,
  ShieldCheck,
  Facebook,
  Instagram,
} from 'lucide-react';
import type { AppSection } from '../types';

interface FooterProps {
  onSelectSection: (section: AppSection) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectSection,
  onOpenConsultation,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020612] text-slate-400 border-t border-slate-900 pt-16 pb-12 relative overflow-hidden">
      {/* Background circuit ambient */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-900/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <TtechLogo size="lg" showTagline={true} />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mt-3">
              <strong>Ttech SOLUTIONS</strong> is an engineering-first software and digital design agency. We specialize in enterprise .NET Core architectures, high-velocity React web applications, conversion-driven SaaS platforms, and bespoke UI/UX design.
            </p>
            <div className="text-xs text-cyan-400 font-mono">
              &quot;Ideas to Intelligent Solutions&quot;
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://wa.me/923489763998?text=Hello%20Ttech%20SOLUTIONS,%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors flex items-center gap-2 text-xs font-mono font-medium"
                aria-label="WhatsApp: +92 348 9763998"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>+92 348 9763998</span>
              </a>
              <a
                href="mailto:contact@ttechsolutions.dev"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Email: contact@ttechsolutions.dev"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Social Media Links */}
            <div className="pt-4">
              <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-3">
                Follow Us
              </h5>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61571396923454"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-950/30 transition-all"
                  aria-label="Follow Ttech Solutionz on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/ttechsolutionz/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-pink-500/40 hover:bg-pink-950/30 transition-all"
                  aria-label="Follow Ttech Solutionz on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/TtechSolutionz"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100 hover:border-slate-600 hover:bg-slate-800 transition-all"
                  aria-label="Follow Ttech Solutionz on X (Twitter)"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Agency Services Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onSelectSection('services')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  Software Development (.NET)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('services')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  Web Applications &amp; SAAS
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('services')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  Website Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('services')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  Full Stack Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('services')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  AI Automation &amp; Agents
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('services')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  UI/UX Design &amp; Figma to Web
                </button>
              </li>
            </ul>
          </div>

          {/* Tech Stacks */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-4">
              Technology Stack
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onSelectSection('dotnet-stack')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer font-mono"
                >
                  .NET 9 Core / C#
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('dotnet-stack')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer font-mono"
                >
                  React 19 &amp; Next.js
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('dotnet-stack')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer font-mono"
                >
                  Entity Framework Core
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('dotnet-stack')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer font-mono"
                >
                  Node.js / Express / Python
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('dotnet-stack')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer font-mono"
                >
                  PHP 8 / Laravel 11
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('dotnet-stack')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer font-mono"
                >
                  Microsoft Azure &amp; Docker
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Tools & CTAs */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-4">
              Client Tools
            </h4>
            <ul className="space-y-2.5 text-xs mb-4">
              <li>
                <button
                  onClick={() => onSelectSection('estimator')}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer font-medium"
                >
                  Project Cost Estimator →
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('ai-scoper')}
                  className="text-purple-400 hover:text-purple-300 transition-colors cursor-pointer font-medium"
                >
                  AI Technical Scoper →
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('portfolio')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  Featured Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('testimonials')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  Client Reviews &amp; SLA
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('faq')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  Process &amp; Pricing FAQ
                </button>
              </li>
            </ul>

            <button
              onClick={onOpenConsultation}
              className="w-full py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all shadow-md shadow-cyan-600/20 cursor-pointer"
            >
              Start Your Project
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Ttech SOLUTIONS. All rights reserved.</span>
            <span>·</span>
            <span className="text-cyan-400 font-medium">Think. Transform. Trust.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-500">
              Clean Code Architecture · On-Time Delivery · 24/7 Support
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

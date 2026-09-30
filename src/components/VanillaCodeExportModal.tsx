import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  FileCode, 
  Sparkles, 
  Terminal, 
  Globe, 
  Github,
  BookOpen
} from 'lucide-react';
import { vanillaHTMLCode, vanillaCSSCode, vanillaJSCode } from '../data/vanillaCodeTemplates';

interface VanillaCodeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const VanillaCodeExportModal: React.FC<VanillaCodeExportModalProps> = ({
  isOpen,
  onClose,
  darkMode,
}) => {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js' | 'guide'>('html');
  const [copiedFile, setCopiedFile] = useState<string | null>(null);

  if (!isOpen) return null;

  const getActiveCode = () => {
    switch (activeTab) {
      case 'html': return vanillaHTMLCode;
      case 'css': return vanillaCSSCode;
      case 'js': return vanillaJSCode;
      default: return '';
    }
  };

  const handleCopy = (filename: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedFile(filename);
    setTimeout(() => setCopiedFile(null), 2000);
  };

  const handleDownloadFile = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadAll = () => {
    handleDownloadFile('index.html', vanillaHTMLCode);
    setTimeout(() => handleDownloadFile('style.css', vanillaCSSCode), 300);
    setTimeout(() => handleDownloadFile('script.js', vanillaJSCode), 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div
        className={`max-w-5xl w-full rounded-2xl border shadow-2xl overflow-hidden flex flex-col max-h-[92vh] ${
          darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Modal Top Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <FileCode className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base font-display text-white">
                Vanilla HTML5, CSS3 & JavaScript Code Exporter
              </h3>
              <p className="text-[11px] text-emerald-400 font-mono">
                Clean, standalone, zero-dependency files ready for GitHub Pages & Vercel
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadAll}
              className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 hover:bg-emerald-400"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download All (3 Files)</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Selection Navigation */}
        <div className="bg-slate-950 border-b border-slate-800 px-4 flex items-center justify-between overflow-x-auto">
          <div className="flex items-center gap-2">
            {[
              { id: 'html', label: 'index.html' },
              { id: 'css', label: 'style.css' },
              { id: 'js', label: 'script.js' },
              { id: 'guide', label: '📖 Run & Deploy Guide' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-4 text-xs font-mono border-b-2 font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-emerald-400 text-emerald-400 bg-slate-900/60'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab !== 'guide' && (
            <div className="flex items-center gap-2 py-2">
              <button
                onClick={() => handleCopy(`${activeTab}.${activeTab === 'js' ? 'js' : activeTab}`, getActiveCode())}
                className="px-3 py-1 text-xs rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1 font-mono"
              >
                {copiedFile ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedFile ? 'Copied!' : 'Copy Code'}</span>
              </button>
              <button
                onClick={() => handleDownloadFile(activeTab === 'html' ? 'index.html' : activeTab === 'css' ? 'style.css' : 'script.js', getActiveCode())}
                className="px-3 py-1 text-xs rounded-lg border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 flex items-center gap-1 font-mono"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save File</span>
              </button>
            </div>
          )}
        </div>

        {/* Modal Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto font-mono text-xs leading-relaxed flex-grow">
          {activeTab === 'guide' ? (
            <div className="space-y-6 text-sm font-sans">
              
              {/* Step 1: Local Setup */}
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-950/60 space-y-3">
                <h4 className="text-base font-bold font-display text-emerald-400 flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  <span>1. How to Run Locally</span>
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li>Create a new folder named <code className="text-emerald-400 font-mono bg-slate-900 px-1.5 py-0.5 rounded">portfolio</code> on your computer.</li>
                  <li>Save the three files: <code className="text-emerald-400 font-mono">index.html</code>, <code className="text-emerald-400 font-mono">style.css</code>, and <code className="text-emerald-400 font-mono">script.js</code> in this folder.</li>
                  <li>Create an <code className="text-emerald-400 font-mono">assets/</code> subfolder and put your <code className="text-emerald-400 font-mono">resume.pdf</code> inside it.</li>
                  <li><strong>Option A (Simple):</strong> Double click <code className="text-emerald-400 font-mono">index.html</code> to open directly in any browser (Chrome, Edge, Firefox).</li>
                  <li><strong>Option B (Recommended):</strong> Open the folder in <strong>VS Code</strong>, right-click <code className="text-emerald-400 font-mono">index.html</code> and click <strong>"Open with Live Server"</strong>.</li>
                </ol>
              </div>

              {/* Step 2: Deploy to GitHub Pages (100% Free) */}
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-950/60 space-y-3">
                <h4 className="text-base font-bold font-display text-emerald-400 flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <span>2. How to Deploy to GitHub Pages (Free Hosting)</span>
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li>Log in to <a href="https://github.com" target="_blank" rel="noreferrer" className="text-emerald-400 underline">GitHub.com</a> and create a new public repository named <code className="text-emerald-400 font-mono">portfolio</code>.</li>
                  <li>Upload <code className="text-emerald-400 font-mono">index.html</code>, <code className="text-emerald-400 font-mono">style.css</code>, <code className="text-emerald-400 font-mono">script.js</code>, and the <code className="text-emerald-400 font-mono">assets/</code> folder.</li>
                  <li>Go to <strong>Settings</strong> → <strong>Pages</strong> in your GitHub repository.</li>
                  <li>Under <strong>Branch</strong>, select <code className="text-emerald-400 font-mono">main</code> (or <code className="text-emerald-400 font-mono">master</code>) and folder <code className="text-emerald-400 font-mono">/ (root)</code>, then click <strong>Save</strong>.</li>
                  <li>Your live site will be live at: <code className="text-emerald-400 font-mono">https://[your-username].github.io/portfolio/</code>!</li>
                </ol>
              </div>

              {/* Step 3: Deploy to Vercel */}
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-950/60 space-y-3">
                <h4 className="text-base font-bold font-display text-emerald-400 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>3. How to Deploy to Vercel (1-Click Free Hosting)</span>
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li>Go to <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-emerald-400 underline">Vercel.com</a> and sign in with your GitHub account.</li>
                  <li>Click <strong>"Add New..." → "Project"</strong> and select your GitHub repository.</li>
                  <li>Leave settings default and click <strong>"Deploy"</strong>.</li>
                  <li>In 10 seconds, your portfolio will receive a custom live URL like <code className="text-emerald-400 font-mono">https://venkateswararao-portfolio.vercel.app</code> with free automatic HTTPS!</li>
                </ol>
              </div>

            </div>
          ) : (
            <pre className="text-slate-300 bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto">
              <code>{getActiveCode()}</code>
            </pre>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/70 flex justify-between items-center text-xs">
          <span className="text-slate-400 font-mono">
            {activeTab === 'guide' ? 'Documentation Guide' : `Showing: ${activeTab === 'html' ? 'index.html' : activeTab === 'css' ? 'style.css' : 'script.js'}`}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

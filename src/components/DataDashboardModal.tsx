import React, { useState } from 'react';
import { 
  X, 
  BarChart3, 
  TrendingUp, 
  Download, 
  Database, 
  Table, 
  Github, 
  Play, 
  Copy, 
  Check, 
  FileText 
} from 'lucide-react';

interface DataDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const DataDashboardModal: React.FC<DataDashboardModalProps> = ({
  isOpen,
  onClose,
  darkMode,
}) => {
  const [activeTab, setActiveTab] = useState<'demo' | 'code'>('demo');
  const [timeRange, setTimeRange] = useState<'Quarter 1' | 'Quarter 2' | 'Full Year'>('Full Year');
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const dataset = [
    { month: 'Jan', placementCalls: 45, dsaProblems: 50, projectsCompleted: 1 },
    { month: 'Feb', placementCalls: 62, dsaProblems: 65, projectsCompleted: 2 },
    { month: 'Mar', placementCalls: 85, dsaProblems: 80, projectsCompleted: 2 },
    { month: 'Apr', placementCalls: 110, dsaProblems: 95, projectsCompleted: 3 },
    { month: 'May', placementCalls: 140, dsaProblems: 120, projectsCompleted: 4 },
    { month: 'Jun', placementCalls: 175, dsaProblems: 145, projectsCompleted: 4 }
  ];

  const pythonScript = `# Data Analytics & Metrics Visualizer (Python & Pandas)
import pandas as pd
import matplotlib.pyplot as plt

# 1. Load Student Placement & Academic Data
data = {
    'Month': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    'PlacementCalls': [45, 62, 85, 110, 140, 175],
    'DsaProblemsSolved': [50, 65, 80, 95, 120, 145],
    'ProjectsCompleted': [1, 2, 2, 3, 4, 4]
}

df = pd.DataFrame(data)

# 2. Exploratory Metrics & Summary
print("--- DATASET SUMMARY ---")
print(df.describe())

# 3. Generate Visualization
plt.figure(figsize=(10, 5))
plt.plot(df['Month'], df['PlacementCalls'], marker='o', color='#38bdf8', label='Placement Calls')
plt.plot(df['Month'], df['DsaProblemsSolved'], marker='s', color='#10b981', label='DSA Problems')
plt.title("Student Skill Growth vs. Placement Opportunities")
plt.xlabel("Timeline")
plt.ylabel("Volume")
plt.legend()
plt.grid(True, linestyle='--', alpha=0.5)
plt.savefig("analytics_output.png")
print("Report generated and saved as analytics_output.png")
`;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div
        className={`w-full max-w-4xl max-h-[92vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden ${
          darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Header */}
        <div className={`p-4 sm:p-5 border-b flex items-center justify-between ${
          darkMode ? 'border-slate-800 bg-slate-900/60' : 'border-slate-200 bg-slate-100/60'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg font-display">
                Data Analytics & Exploration Dashboard
              </h3>
              <p className="text-xs text-slate-400">
                Interactive Visual Exploratory Analysis & Metrics Reporting Tool (Python/Pandas/Charts)
              </p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className={`flex border-b px-6 ${darkMode ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
          <button
            onClick={() => setActiveTab('demo')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 flex items-center gap-2 cursor-pointer ${
              activeTab === 'demo' ? 'border-emerald-400 text-emerald-400' : 'border-transparent text-slate-400'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Interactive Visual Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 flex items-center gap-2 cursor-pointer ${
              activeTab === 'code' ? 'border-emerald-400 text-emerald-400' : 'border-transparent text-slate-400'
            }`}
          >
            <Github className="w-3.5 h-3.5" />
            <span>Python / Pandas Source Code</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {activeTab === 'demo' ? (
            <div className="space-y-6">
              {/* Stat KPIs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl border bg-slate-900/60 border-slate-800">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Total Placement Inquiries</span>
                  <div className="text-2xl font-bold font-mono text-sky-400 mt-1">617 Leads</div>
                  <span className="text-[10px] text-emerald-400">+28% month-over-month</span>
                </div>
                <div className="p-4 rounded-xl border bg-slate-900/60 border-slate-800">
                  <span className="text-[10px] font-mono uppercase text-slate-400">DSA Practice Solved</span>
                  <div className="text-2xl font-bold font-mono text-emerald-400 mt-1">555 Problems</div>
                  <span className="text-[10px] text-slate-400">LeetCode + GeeksforGeeks</span>
                </div>
                <div className="p-4 rounded-xl border bg-slate-900/60 border-slate-800">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Average Placement Match</span>
                  <div className="text-2xl font-bold font-mono text-indigo-400 mt-1">89.4%</div>
                  <span className="text-[10px] text-slate-400">Across 3 core domains</span>
                </div>
              </div>

              {/* Visual Bars Chart */}
              <div className="p-5 rounded-2xl border bg-slate-900/60 border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-300">
                    Monthly Progression Metrics
                  </h4>
                  <div className="flex gap-2">
                    <span className="flex items-center gap-1.5 text-xs text-sky-400">
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span> Opportunities
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> DSA Solved
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  {dataset.map(row => (
                    <div key={row.month} className="space-y-1">
                      <div className="flex justify-between text-xs text-slate-300">
                        <span className="font-mono font-bold">{row.month}</span>
                        <span className="text-slate-400 font-mono">
                          Calls: <strong className="text-sky-400">{row.placementCalls}</strong> | DSA: <strong className="text-emerald-400">{row.dsaProblems}</strong>
                        </span>
                      </div>
                      <div className="h-4 w-full bg-slate-950 rounded-full overflow-hidden flex gap-1 p-0.5 border border-slate-800">
                        <div
                          className="h-full bg-gradient-to-r from-sky-500 to-sky-400 rounded-full"
                          style={{ width: `${(row.placementCalls / 200) * 100}%` }}
                        />
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                          style={{ width: `${(row.dsaProblems / 200) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Table */}
              <div className="p-4 rounded-2xl border bg-slate-900/60 border-slate-800">
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-300 mb-3">
                  Raw Processed Tabular Data (Pandas DataFrame)
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 font-mono">
                        <th className="pb-2">Month</th>
                        <th className="pb-2">Placement Leads</th>
                        <th className="pb-2">DSA Solved</th>
                        <th className="pb-2">Projects Deployed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-mono">
                      {dataset.map(r => (
                        <tr key={r.month} className="text-slate-300">
                          <td className="py-2 font-bold text-white">{r.month}</td>
                          <td className="py-2 text-sky-400">{r.placementCalls}</td>
                          <td className="py-2 text-emerald-400">{r.dsaProblems}</td>
                          <td className="py-2 text-indigo-400">{r.projectsCompleted}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">analysis_pipeline.py</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(pythonScript);
                    setCopiedCode(true);
                    setTimeout(() => setCopiedCode(false), 2000);
                  }}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied Script!' : 'Copy Python Script'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 overflow-x-auto max-h-[450px]">
                <code>{pythonScript}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

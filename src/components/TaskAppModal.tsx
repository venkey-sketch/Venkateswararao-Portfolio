import React, { useState, useEffect } from 'react';
import { 
  X, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  Circle, 
  ListTodo, 
  Tag, 
  Calendar, 
  Github, 
  FileCode, 
  Copy, 
  Check, 
  Play, 
  BookOpen 
} from 'lucide-react';

interface Task {
  id: string;
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  category: 'Study' | 'Coding' | 'Project' | 'Personal';
  completed: boolean;
  dueDate: string;
}

interface TaskAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const TaskAppModal: React.FC<TaskAppModalProps> = ({
  isOpen,
  onClose,
  darkMode,
}) => {
  const [activeTab, setActiveTab] = useState<'demo' | 'code'>('demo');
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Practice 2 LeetCode Tree problems (DFS/BFS)', priority: 'High', category: 'Coding', completed: true, dueDate: 'Today' },
    { id: '2', title: 'Complete Flask REST API authentication module', priority: 'High', category: 'Project', completed: false, dueDate: 'Tomorrow' },
    { id: '3', title: 'Revise DBMS Normalization (1NF to BCNF)', priority: 'Medium', category: 'Study', completed: false, dueDate: 'Thursday' },
    { id: '4', title: 'Update GitHub README and push code commits', priority: 'Low', category: 'Project', completed: true, dueDate: 'Done' }
  ]);
  const [newTitle, setNewTitle] = useState('');
  const [newPriority, setNewPriority] = useState<'High' | 'Medium' | 'Low'>('Medium');
  const [newCategory, setNewCategory] = useState<'Study' | 'Coding' | 'Project' | 'Personal'>('Coding');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const newTask: Task = {
      id: Date.now().toString(),
      title: newTitle.trim(),
      priority: newPriority,
      category: newCategory,
      completed: false,
      dueDate: 'Upcoming'
    };
    setTasks([newTask, ...tasks]);
    setNewTitle('');
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const taskHtmlCode = `<!-- Task Management Web App (Clean HTML, CSS & Vanilla JS) -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Task Manager - B. Venkateswararao</title>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #fff; padding: 2rem; }
    .card { max-width: 500px; margin: auto; background: #1e293b; padding: 1.5rem; border-radius: 12px; }
    .task { display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; border-bottom: 1px solid #334155; }
    .done { text-decoration: line-through; opacity: 0.6; }
    input, button { padding: 0.5rem; border-radius: 6px; border: 1px solid #475569; background: #0f172a; color: #fff; }
    button { background: #38bdf8; color: #000; font-weight: bold; cursor: pointer; }
  </style>
</head>
<body>
  <div class="card">
    <h2>Daily Task Manager</h2>
    <div style="display:flex; gap:0.5rem; margin-bottom:1rem;">
      <input id="taskInput" placeholder="New task..." style="flex:1;">
      <button onclick="addTask()">Add</button>
    </div>
    <div id="taskList"></div>
  </div>
  <script>
    let tasks = JSON.parse(localStorage.getItem('my_tasks') || '[]');
    function render() {
      const list = document.getElementById('taskList');
      list.innerHTML = tasks.map((t, i) => \`
        <div class="task \${t.done ? 'done' : ''}">
          <span onclick="toggleTask(\${i})">\${t.title}</span>
          <button onclick="deleteTask(\${i})" style="background:#ef4444; color:#fff;">X</button>
        </div>
      \`).join('');
      localStorage.setItem('my_tasks', JSON.stringify(tasks));
    }
    function addTask() {
      const input = document.getElementById('taskInput');
      if (input.value) { tasks.push({ title: input.value, done: false }); input.value = ''; render(); }
    }
    function toggleTask(i) { tasks[i].done = !tasks[i].done; render(); }
    function deleteTask(i) { tasks.splice(i, 1); render(); }
    render();
  </script>
</body>
</html>`;

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
            <div className="w-10 h-10 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30">
              <ListTodo className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg font-display">
                Task Management Web App
              </h3>
              <p className="text-xs text-slate-400">
                Responsive Daily Productivity & Task Tracking Application
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
              activeTab === 'demo' ? 'border-teal-400 text-teal-400' : 'border-transparent text-slate-400'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Interactive Live App</span>
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 flex items-center gap-2 cursor-pointer ${
              activeTab === 'code' ? 'border-teal-400 text-teal-400' : 'border-transparent text-slate-400'
            }`}
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub Code & Implementation</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {activeTab === 'demo' ? (
            <div className="max-w-2xl mx-auto space-y-6">
              {/* Add Task Form */}
              <form onSubmit={handleAddTask} className="p-4 rounded-2xl border bg-slate-900/60 border-slate-800 space-y-3">
                <input
                  type="text"
                  placeholder="What task needs to be completed?"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white text-xs outline-none focus:border-teal-400"
                />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex gap-2">
                    <select
                      value={newPriority}
                      onChange={(e) => setNewPriority(e.target.value as any)}
                      className="p-1.5 rounded-lg border border-slate-700 bg-slate-950 text-xs text-slate-300"
                    >
                      <option value="High">🔴 High Priority</option>
                      <option value="Medium">🟡 Medium Priority</option>
                      <option value="Low">🟢 Low Priority</option>
                    </select>

                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as any)}
                      className="p-1.5 rounded-lg border border-slate-700 bg-slate-950 text-xs text-slate-300"
                    >
                      <option value="Coding">💻 Coding</option>
                      <option value="Project">🚀 Project</option>
                      <option value="Study">📚 Study</option>
                      <option value="Personal">👤 Personal</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-teal-500 hover:bg-teal-400 text-slate-950 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Task</span>
                  </button>
                </div>
              </form>

              {/* Filter Tabs */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {(['all', 'active', 'completed'] as const).map(f => (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize cursor-pointer ${
                        filter === f ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30' : 'text-slate-400 hover:bg-slate-800'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
                <span className="text-xs text-slate-400">
                  {tasks.filter(t => t.completed).length} / {tasks.length} Completed
                </span>
              </div>

              {/* Task List */}
              <div className="space-y-2">
                {filteredTasks.map(t => (
                  <div
                    key={t.id}
                    className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 transition-all ${
                      t.completed ? 'bg-slate-950/40 border-slate-800/50 opacity-60' : 'bg-slate-900/60 border-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <button onClick={() => toggleTask(t.id)} className="cursor-pointer">
                        {t.completed ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : <Circle className="w-5 h-5 text-slate-500 hover:text-teal-400" />}
                      </button>
                      <div>
                        <span className={`text-xs font-medium block ${t.completed ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                          {t.title}
                        </span>
                        <div className="flex gap-2 mt-1">
                          <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                            t.priority === 'High' ? 'bg-rose-500/20 text-rose-300' : t.priority === 'Medium' ? 'bg-amber-500/20 text-amber-300' : 'bg-emerald-500/20 text-emerald-300'
                          }`}>
                            {t.priority}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            📁 {t.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => deleteTask(t.id)}
                      className="p-1.5 rounded-lg hover:bg-rose-500/20 text-slate-500 hover:text-rose-400 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Single-file standalone demo (index.html)</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(taskHtmlCode);
                    setCopiedCode(true);
                    setTimeout(() => setCopiedCode(false), 2000);
                  }}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 overflow-x-auto max-h-[450px]">
                <code>{taskHtmlCode}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Play, CornerDownLeft, Sparkles, Shield, RefreshCw } from 'lucide-react';
import { TERMINAL_COMMANDS, PROFILE } from '../data/portfolioData';

export default function Terminal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'AGY CYBER SHELL v2.4 (Security Operations Environment)' },
    { type: 'system', text: 'Type "help" or click quick commands below to explore portfolio.' },
    { type: 'command', text: 'whoami' },
    { type: 'output', text: TERMINAL_COMMANDS.whoami }
  ]);
  const [isScanning, setIsScanning] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const terminalLogsRef = useRef(null);

  // Scroll ONLY the internal terminal console window, NOT the browser page!
  useEffect(() => {
    if (terminalLogsRef.current) {
      terminalLogsRef.current.scrollTop = terminalLogsRef.current.scrollHeight;
    }
  }, [history, isScanning]);

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'command', text: cmdText }];

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (trimmed.startsWith('nmap')) {
      setIsScanning(true);
      setHistory(newHistory);
      setInput('');
      
      setTimeout(() => {
        setHistory(prev => [
          ...prev,
          {
            type: 'output',
            text: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-07-30
Nmap scan report for target (127.0.0.1)
Host is up (0.00018s latency).
Not shown: 996 closed tcp ports
PORT     STATE SERVICE     VERSION
22/tcp   open  ssh         OpenSSH 9.6 (protocol 2.0)
80/tcp   open  http        Nginx 1.24 (Vite Dev Server)
514/udp  open  syslog      Snort NIDS Log Collector
8089/tcp open  splunkd     Splunk Enterprise v9.2.1 SOC Manager
9200/tcp open  elasticsearch Elastic Security Node

Nmap done: 1 IP address (1 host up) scanned in 1.42 seconds.`
          }
        ]);
        setIsScanning(false);
      }, 1200);
      return;
    }

    const response = TERMINAL_COMMANDS[trimmed] || `Command not found: '${trimmed}'. Type 'help' for a list of valid commands.`;
    setHistory([...newHistory, { type: 'output', text: response }]);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  const quickCmds = ['whoami', 'skills', 'projects', 'soc-lab', 'certs', 'nmap 127.0.0.1', 'mitre', 'clear'];

  return (
    <section id="terminal" className="py-16 cyber-bg-pattern">
      <div className={`max-w-5xl mx-auto px-4 sm:px-6 transition-all duration-300 ${isMaximized ? 'fixed inset-4 z-50 max-w-none h-[95vh]' : ''}`}>
        
        {/* Terminal Box Wrapper */}
        <div className="rounded-xl glass-card border border-slate-700/80 shadow-2xl overflow-hidden scanline">
          
          {/* Terminal Window Header Bar */}
          <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>yash@soc-terminal: ~ (zsh)</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMaximized(!isMaximized)}
                className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
                title="Toggle Maximize"
              >
                {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Quick Command Toolbar */}
          <div className="bg-slate-950/80 border-b border-slate-800/80 px-4 py-2 flex items-center gap-2 overflow-x-auto text-xs font-mono">
            <span className="text-slate-500 font-semibold uppercase text-[10px] tracking-wider whitespace-nowrap flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-emerald-400" /> Quick Cmds:
            </span>
            {quickCmds.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all whitespace-nowrap"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Console Output Body */}
          <div
            ref={terminalLogsRef}
            className="p-4 sm:p-6 bg-slate-950/95 font-mono text-xs sm:text-sm h-[380px] sm:h-[450px] overflow-y-auto space-y-3 leading-relaxed text-slate-200"
          >
            {history.map((item, idx) => (
              <div key={idx}>
                {item.type === 'system' && (
                  <p className="text-slate-500 border-l-2 border-slate-700 pl-2 py-0.5">{item.text}</p>
                )}

                {item.type === 'command' && (
                  <div className="flex items-center gap-2 text-emerald-400 pt-1">
                    <span className="text-cyan-400">yash@soc-terminal:~$</span>
                    <span>{item.text}</span>
                  </div>
                )}

                {item.type === 'output' && (
                  <pre className="text-slate-300 whitespace-pre-wrap font-mono pl-4 text-xs sm:text-sm leading-relaxed border-l border-emerald-500/20 py-1">
                    {item.text}
                  </pre>
                )}
              </div>
            ))}

            {/* Scanning Indicator */}
            {isScanning && (
              <div className="flex items-center gap-2 text-amber-400 font-mono py-2 pl-4">
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Scanning 127.0.0.1 ports (SYN Packet Probing)...</span>
              </div>
            )}
          </div>

          {/* Command Prompt Input Bar */}
          <form onSubmit={handleSubmit} className="bg-slate-900/90 border-t border-slate-800 p-3 flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-xs sm:text-sm font-bold flex items-center gap-1">
              <span className="text-cyan-400">yash@soc-terminal:~$</span>
            </span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type 'help', 'skills', 'projects', 'nmap'..."
              className="flex-1 bg-transparent font-mono text-xs sm:text-sm text-slate-100 placeholder-slate-600 focus:outline-none"
            />
            <button
              type="submit"
              className="px-3 py-1.5 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/30 text-xs font-mono flex items-center gap-1"
            >
              <span>EXEC</span>
              <CornerDownLeft className="w-3 h-3" />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export const PROFILE = {
  name: "Yash Panjwani",
  title: "Cybersecurity & Security Operations Engineer",
  subTitle: "SOC Level 1 Certified • Threat Hunter • Security Automation Engineer",
  location: "Lovely Professional University | Phagwara, Punjab & Mathura, UP",
  status: "OPERATIONAL (TryHackMe Top 1%)",
  securityClearance: "B.Tech CSE Undergrad ('23-'27)",
  phone: "+91-9389608887",
  email: "yashpanjwani128@gmail.com",
  metrics: [
    { label: "TryHackMe Global Rank", value: "Top 1%" },
    { label: "TryHackMe Active Streak", value: "130+ Days" },
    { label: "LeetCode Algorithmic Solved", value: "150+ Qs" },
    { label: "HackerRank Achievement", value: "Gold Badge" }
  ],
  bio: "Computer Science & Engineering student specializing in SOC & SIEM architectures, threat triage automation, and incident response playbooks. Experienced in building Wazuh SIEM labs monitoring Active Directory, Linux, & AWS CloudTrail, authoring custom MITRE ATT&CK detection rules for Kerberoasting & Mimikatz, and developing AI-powered SOC dashboards.",
  socials: {
    github: "https://github.com/yashh127",
    linkedin: "https://www.linkedin.com/in/yashpanjwani7/",
    email: "yashpanjwani128@gmail.com",
    phone: "+91-9389608887",
    pgpFingerprint: "9389 6088 87YP YASH PANJ WANI 128G MAIL COM"
  }
};

export const PROJECTS = [
  {
    id: "home-soc-aegis",
    title: "Home SOC Lab & A.E.G.I.S. Cyber Ops Platform",
    category: "SOC & SIEM",
    badge: "Featured SIEM Lab",
    shortDesc: "Wazuh SIEM lab monitoring Active Directory, Linux & AWS CloudTrail telemetry with J.A.R.V.I.S. AI voice alerts & custom Kerberoasting/Mimikatz detection rules.",
    fullDesc: "Built an enterprise-grade Wazuh SIEM lab ingesting telemetry across Active Directory domain controllers, Linux endpoints, and AWS CloudTrail logs. Authored custom detection rules targeting identity attacks like Kerberoasting and Mimikatz. Developed Python replay scripts and an interactive React SOC dashboard integrated with J.A.R.V.I.S. AI voice alerts for high-severity incident notifications.",
    tags: ["Wazuh", "Active Directory", "AWS CloudTrail", "Docker", "Python", "React", "Mimikatz Detection"],
    mitreTechniques: ["T1558.003 (Kerberoasting)", "T1003.001 (LSASS Memory / Mimikatz)", "T1078 (Valid Accounts)"],
    highlights: [
      "Monitored multi-OS endpoints (Active Directory, Ubuntu Linux, AWS CloudTrail) inside a containerized Docker architecture.",
      "Authored custom detection rules for credential dumping (Mimikatz) and Kerberoasting ticket requests.",
      "Developed Python attack replay scripts and built a React SOC dashboard featuring J.A.R.V.I.S. AI voice alerts."
    ],
    architecture: {
      sources: ["Active Directory DC", "Linux Auditd", "AWS CloudTrail Telemetry"],
      ingestion: "Wazuh Agent & Manager Cluster",
      analytics: "Custom Sigma / Wazuh Rules Engine",
      response: "React SOC Dashboard + J.A.R.V.I.S. AI Voice Alerts"
    },
    githubUrl: "https://github.com/yashh127/Home-SOC-Lab-AEGIS",
    liveDemo: "https://github.com/yashh127/Home-SOC-Lab-AEGIS"
  },
  {
    id: "phishing-triage-workbench",
    title: "Automated Phishing Triage & SecOps Workbench",
    category: "Automation & CTI",
    badge: "Automation",
    shortDesc: "Python email parser performing SPF/DKIM verification, IP tracing, defanging, and auto-generating YARA & Sigma rules mapped to MITRE ATT&CK.",
    fullDesc: "Created an automated SecOps triage platform for suspicious email ingestion. Parses raw email headers, evaluates SPF/DKIM/DMARC authentication, performs automated IP tracing and threat intel correlation, defangs malicious links, computes file hashes, and auto-generates custom YARA and Sigma rules for immediate SOC deployment.",
    tags: ["Python", "FastAPI", "YARA", "Sigma", "JavaScript", "HTML/CSS", "Threat Triage"],
    mitreTechniques: ["T1566.001 (Spearphishing Attachment)", "T1566.002 (Spearphishing Link)", "T1204 (User Execution)"],
    highlights: [
      "Automated extraction of header metadata, SPF/DKIM validation, and origin IP geolocation tracing.",
      "Auto-generates deployment-ready YARA and Sigma detection signatures mapped to MITRE ATT&CK.",
      "Web interface featuring one-click link defanging, SHA-256/MD5 file hashing, and PDF export reports."
    ],
    architecture: {
      sources: ["Raw EML / MSG Files", "Email Headers"],
      ingestion: "FastAPI Async Parser Endpoint",
      analytics: "SPF/DKIM Evaluator & Threat Intel Lookup",
      response: "Auto YARA/Sigma Rule Generator & HTML/PDF Report"
    },
    githubUrl: "https://github.com/yashh127/Automated-Phishing-Triage-Workbench",
    liveDemo: "https://github.com/yashh127/Automated-Phishing-Triage-Workbench"
  },
  {
    id: "secure-vault-password-manager",
    title: "Secure Vault Password Manager & Audit Engine",
    category: "Cryptography & Dev",
    badge: "Security Tooling",
    shortDesc: "Local AES-256 encrypted password vault with Web Dashboard, REST API, one-click copy, and automated password health auditor.",
    fullDesc: "Engineered a zero-knowledge local password management application using AES-256 symmetric encryption and PBKDF2 key derivation. Built a web dashboard and REST API backend for searching and copying credentials, paired with a password health auditing engine that scans for weak, reused, or expired credentials.",
    tags: ["Python", "Flask", "Cryptography", "AES-256", "JavaScript", "HTML/CSS", "Git"],
    mitreTechniques: ["T1555 (Credentials from Password Stores)", "T1110 (Brute Force Protection)"],
    highlights: [
      "Local AES-256 credential encryption ensuring zero-knowledge storage.",
      "Web dashboard & REST API for credential searching, one-click clipboard copying, and auto-generation.",
      "Password health auditor flagging weak passwords, duplicate credentials, and stale secrets."
    ],
    architecture: {
      sources: ["Encrypted SQLite / JSON Store"],
      ingestion: "Flask REST API & Cryptography Engine",
      analytics: "Password Health Auditor (Entropy Scanner)",
      response: "Web Dashboard & Secure Copy API"
    },
    githubUrl: "https://github.com/yashh127/Secure-Vault-Password-Manager",
    liveDemo: "https://github.com/yashh127/Secure-Vault-Password-Manager"
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Tools & SIEM Platforms",
    icon: "ShieldAlert",
    color: "emerald",
    skills: [
      { name: "Wazuh SIEM & EDR", level: 92 },
      { name: "Splunk & Log Analysis", level: 88 },
      { name: "Wireshark Packet Capture", level: 90 },
      { name: "Snort / YARA Signatures", level: 86 },
      { name: "Nmap & Autopsy Forensics", level: 85 }
    ]
  },
  {
    title: "Technical Security Competencies",
    icon: "Search",
    color: "amber",
    skills: [
      { name: "SIEM Operations & Log Ingestion", level: 94 },
      { name: "Incident Response & Playbooks", level: 90 },
      { name: "Active Directory Security & Kerberoasting", level: 88 },
      { name: "MITRE ATT&CK Framework Mapping", level: 92 },
      { name: "Network Security & Packet Triage", level: 87 }
    ]
  },
  {
    title: "Programming & Automation",
    icon: "Terminal",
    color: "cyan",
    skills: [
      { name: "Python (Automation, FastAPI, Flask)", level: 92 },
      { name: "C / C++ (Algorithms & DSA)", level: 88 },
      { name: "Bash & Linux Shell Scripting", level: 85 },
      { name: "SQL & MySQL Database", level: 86 },
      { name: "HTML / CSS / JavaScript & React", level: 88 }
    ]
  },
  {
    title: "Cloud & Infrastructure",
    icon: "Cloud",
    color: "rose",
    skills: [
      { name: "Linux Administration (RHEL/Ubuntu)", level: 90 },
      { name: "AWS Cloud & CloudTrail Telemetry", level: 84 },
      { name: "Docker Containerization", level: 85 },
      { name: "Git Version Control", level: 90 },
      { name: "Analytical Problem-Solving", level: 95 }
    ]
  }
];

export const INCIDENT_CASE_STUDY = {
  title: "Simulated Incident Response: Kerberoasting & Phishing Triage",
  subtitle: "Real-world SecOps playbook executed in Yash's Home SOC Lab",
  steps: [
    {
      phase: "01. Phishing Email Detection & Header Analysis",
      time: "00:00:15",
      tactic: "Initial Access (T1566)",
      status: "TRIAGED",
      desc: "Phishing Workbench parsed suspicious EML attachment on endpoint. SPF/DKIM checks failed for spoofed domain.",
      evidence: "Header Return-Path mismatch. SPF: Fail. DKIM: Invalid. Malicious URL defanged.",
      action: "Executed automated Python triage script; generated Sigma rule for domain blocking."
    },
    {
      phase: "02. Active Directory Kerberoasting Detection",
      time: "00:02:30",
      tactic: "Credential Access (T1558.003)",
      status: "ALERT FIRED",
      desc: "Wazuh SIEM generated a high-priority alert for Event ID 4769 (Kerberos Service Ticket Requested with RC4 encryption).",
      evidence: "User: srv_sql | Service Name: MSSQLSvc/dc01.corp.local | Encryption Type: 0x17 (RC4)",
      action: "Wazuh rule #100204 triggered J.A.R.V.I.S. AI voice notification to SOC dashboard."
    },
    {
      phase: "03. Mimikatz LSASS Dump Rule Trigger",
      time: "00:04:15",
      tactic: "Credential Dumping (T1003.001)",
      status: "CONTAINED",
      desc: "Sysmon Rule detected privilege escalation attempt matching Mimikatz sekurlsa::logonpasswords execution.",
      evidence: "TargetProcess: C:\\Windows\\System32\\lsass.exe | GrantedAccess: 0x1410",
      action: "Isolated target workstation container via Docker network disconnect rule."
    },
    {
      phase: "04. YARA & Sigma Rule Deployment",
      time: "00:12:00",
      tactic: "Remediation & Hardening",
      status: "RESOLVED",
      desc: "Pushed newly generated YARA memory signatures across endpoints and hardened Active Directory SPN accounts.",
      evidence: "0 further Kerberoasting ticket requests observed. SPN password rotated to 32-char complex secret.",
      action: "Incident Ticket #AEGIS-102 closed successfully. Incident report exported."
    }
  ]
};

export const CERTIFICATIONS = [
  {
    id: "thm-soc-level-1",
    name: "SOC Level 1 Learning Path | TryHackMe",
    issuer: "TryHackMe",
    status: "Verified (65h 29m)",
    date: "Aug 14, 2026",
    badgeColor: "emerald",
    desc: "Comprehensive defensive security training covering SIEM monitoring, log analysis, phishing triage, memory forensics, incident response playbooks, and threat intelligence."
  },
  {
    id: "tryhackme-ai-sec",
    name: "AI Security | TryHackMe",
    issuer: "TryHackMe",
    status: "Verified",
    date: "Jul 2026",
    badgeColor: "emerald",
    desc: "AI vulnerabilities, prompt injection defense, LLM security guidelines, and securing AI-driven pipelines."
  },
  {
    id: "tryhackme-sec101",
    name: "Cybersecurity 101 | TryHackMe",
    issuer: "TryHackMe",
    status: "Verified",
    date: "Jul 2026",
    badgeColor: "emerald",
    desc: "Fundamental cyber concepts, networking, web application security, offensive/defensive basics, and threat modeling."
  },
  {
    id: "tryhackme-pre-sec",
    name: "Pre Security | TryHackMe",
    issuer: "TryHackMe",
    status: "Verified",
    date: "Mar 2026",
    badgeColor: "cyan",
    desc: "Cybersecurity fundamentals, network basics, web foundations, and operating system security."
  },
  {
    id: "nptel-cloud",
    name: "Cloud Computing | NPTEL",
    issuer: "NPTEL / IIT",
    status: "Verified",
    date: "Oct 2025",
    badgeColor: "cyan",
    desc: "Cloud architecture, virtual machines, distributed storage, AWS services, and cloud network security."
  },
  {
    id: "deloitte-simulation",
    name: "Cyber Job Simulation | Deloitte",
    issuer: "Deloitte",
    status: "Verified",
    date: "Sep 2025",
    badgeColor: "amber",
    desc: "Practical corporate cyber triage, forensic log analysis, client incident reporting, and security assessment."
  },
  {
    id: "dsa-cpp-lpu",
    name: "Data Structures & Algorithms in C++",
    issuer: "Lovely Professional University",
    status: "Verified",
    date: "Jul 2025",
    badgeColor: "emerald",
    desc: "2-month intensive training in C++ data structures, algorithmic complexity, problem solving, and optimization."
  }
];

export const ACHIEVEMENTS = [
  {
    title: "TryHackMe Top 1% Global Rank",
    desc: "Maintained a 130+ day continuous learning streak ranking among the top 1% cybersecurity learners worldwide.",
    badge: "130+ Day Streak"
  },
  {
    title: "SOC Level 1 Learning Path Certified",
    desc: "Completed 65+ hours of hands-on Security Operations Center (SOC) analysis, SIEM triage, and incident response.",
    badge: "65+ Hours Practical"
  },
  {
    title: "150+ LeetCode Problem Solved",
    desc: "Demonstrated strong algorithmic problem-solving skills across data structures, dynamic programming, and logic.",
    badge: "150+ Solved"
  },
  {
    title: "HackerRank Gold Level Badge",
    desc: "Earned Gold status in problem solving and coding competitions on HackerRank.",
    badge: "Gold Badge"
  }
];

export const EDUCATION = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "Bachelor of Technology: Computer Science and Engineering",
    period: "Aug 2023 – Jul 2027"
  },
  {
    institution: "Rajiv International School",
    location: "Mathura, Uttar Pradesh",
    degree: "Intermediate (Class XII)",
    score: "Percentage: 76%",
    period: "Apr 2022 – Mar 2023"
  },
  {
    institution: "St. Dominic's Sr Sec. School",
    location: "Mathura, Uttar Pradesh",
    degree: "Matriculation (Class X)",
    score: "Percentage: 72%",
    period: "Apr 2020 – Mar 2021"
  }
];

export const TERMINAL_COMMANDS = {
  help: `Available Commands:
  whoami       - Display Yash Panjwani's profile & credentials
  skills       - Print technical skills, tools & programming languages
  projects     - List key projects with GitHub URLs
  soc-lab      - Detailed breakdown of A.E.G.I.S. & Wazuh SIEM lab
  certs        - Show verified certs (Including THM SOC Level 1 - 65h 29m)
  achieve      - View TryHackMe Top 1%, LeetCode 150+, & Gold Badge stats
  edu          - Display education (Lovely Professional University B.Tech)
  nmap [target]- Run simulated port scanner on 127.0.0.1
  mitre        - View MITRE ATT&CK detection rules (Kerberoasting, Mimikatz)
  contact      - Display Yash's email, phone, LinkedIn & GitHub
  clear        - Clear terminal screen`,

  whoami: `Yash Panjwani | Cybersecurity Operations Engineer (SOC Level 1 Certified)
Status: OPERATIONAL (TryHackMe Top 1% • 130+ Day Streak)
Education: B.Tech Computer Science & Engineering @ Lovely Professional University ('23-'27)
GitHub: https://github.com/yashh127`,

  skills: `=== YASH PANJWANI'S SKILLS MATRIX ===
[+] Languages: Python, C/C++, SQL, Bash, HTML/CSS/JS
[+] Tools    : Wazuh, Splunk, Wireshark, Snort, YARA, Autopsy, Nmap, Linux, AWS, Docker, MySQL
[+] Security : SIEM Triage, SOC L1 Analysis, Incident Response, Active Directory, MITRE ATT&CK`,

  projects: `=== YASH PANJWANI'S FEATURED PROJECTS & GITHUB LINKS ===
1. Home SOC Lab & A.E.G.I.S. Cyber Ops Platform
   -> GitHub: https://github.com/yashh127/Home-SOC-Lab-AEGIS
2. Automated Phishing Triage & SecOps Workbench
   -> GitHub: https://github.com/yashh127/Automated-Phishing-Triage-Workbench
3. Secure Vault Password Manager
   -> GitHub: https://github.com/yashh127/Secure-Vault-Password-Manager`,

  "soc-lab": `=== HOME SOC LAB & A.E.G.I.S. ARCHITECTURE ===
GitHub Link -> https://github.com/yashh127/Home-SOC-Lab-AEGIS
Telemetry   -> Active Directory Domain Controller, Linux Syslog, AWS CloudTrail
SIEM Engine -> Wazuh Cluster + Custom Detection Rules
Rules Authored -> Kerberoasting (T1558.003), Mimikatz LSASS Dump (T1003.001)`,

  certs: `=== YASH PANJWANI'S CERTIFICATIONS ===
[✓] SOC Level 1 Learning Path | TryHackMe (Aug '26 - 65h 29m) [ID: THM-FYZC19LIH2]
[✓] AI Security | TryHackMe (Jul '26)
[✓] Cybersecurity 101 | TryHackMe (Jul '26)
[✓] Pre Security | TryHackMe (Mar '26)
[✓] Cloud Computing | NPTEL (Oct '25)
[✓] Cyber Job Simulation | Deloitte (Sep '25)
[✓] Data Structures & Algorithms in C++ | LPU (Jul '25)`,

  achieve: `=== ACHIEVEMENTS & STATS ===
[★] TryHackMe : Top 1% Globally with 130+ Day Streak
[★] Certified  : TryHackMe SOC Level 1 Learning Path (65 Hours 29 Minutes)
[★] LeetCode   : 150+ Data Structures & Algorithmic Problems Solved
[★] HackerRank : Gold Level Badge`,

  edu: `=== EDUCATION ===
• Lovely Professional University (Phagwara, Punjab)
  B.Tech Computer Science & Engineering (Aug '23 - Jul '27)
• Rajiv International School (Mathura, UP) - Intermediate (76%)
• St. Dominic's Sr Sec. School (Mathura, UP) - Matriculation (72%)`,

  mitre: `=== MITRE ATT&CK DETECTION RULES AUTHORED ===
- T1558.003 (Kerberoasting) -> Rule #100204 (RC4 Encrypted Ticket Requests)
- T1003.001 (Mimikatz Dump) -> Sysmon Rule (LSASS Process Access 0x1410)
- T1566.001 (Phishing)      -> Email Header SPF/DKIM Mismatch Auto-Parser`,

  contact: `=== DIRECT CONTACT INFORMATION ===
Name    : Yash Panjwani
Email   : yashpanjwani128@gmail.com
Mobile  : +91-9389608887
LinkedIn: https://www.linkedin.com/in/yashpanjwani7/
GitHub  : https://github.com/yashh127`
};

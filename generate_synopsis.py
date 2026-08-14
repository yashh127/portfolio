import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

def build_pdf(filename):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        rightMargin=40,
        leftMargin=40,
        topMargin=40,
        bottomMargin=40
    )

    styles = getSampleStyleSheet()

    # Custom styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=colors.HexColor('#0f172a'),
        alignment=1, # Center
        spaceAfter=6
    )

    subtitle_style = ParagraphStyle(
        'DocSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=colors.HexColor('#047857'),
        alignment=1,
        spaceAfter=15
    )

    h1_style = ParagraphStyle(
        'Heading1_Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=17,
        textColor=colors.HexColor('#0f172a'),
        spaceBefore=12,
        spaceAfter=6
    )

    body_style = ParagraphStyle(
        'Body_Custom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=colors.HexColor('#334155'),
        spaceAfter=6
    )

    bullet_style = ParagraphStyle(
        'Bullet_Custom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#1e293b'),
        leftIndent=15,
        spaceAfter=4
    )

    meta_style = ParagraphStyle(
        'Meta_Custom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#0f172a')
    )

    story = []

    # Title & Subtitle
    story.append(Paragraph("PROJECT SYNOPSIS", subtitle_style))
    story.append(Paragraph("Home SOC Lab & A.E.G.I.S. Cyber Ops Platform", title_style))
    story.append(Paragraph("Multi-Cloud SIEM Telemetry, MITRE ATT&CK Detection Engineering & AI Voice Alerting", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#047857'), spaceBefore=2, spaceAfter=10))

    # Candidate Meta Box
    meta_data = [
        [
            Paragraph("<b>Student Name:</b> Yash Panjwani", meta_style),
            Paragraph("<b>Degree:</b> B.Tech - Computer Science & Engineering", meta_style)
        ],
        [
            Paragraph("<b>University:</b> Lovely Professional University", meta_style),
            Paragraph("<b>Academic Session:</b> 2023 – 2027", meta_style)
        ],
        [
            Paragraph("<b>Email:</b> yashpanjwani128@gmail.com", meta_style),
            Paragraph("<b>Mobile:</b> +91-9389608887", meta_style)
        ],
        [
            Paragraph("<b>GitHub Repo:</b> github.com/yashh127/Home-SOC-Lab-AEGIS", meta_style),
            Paragraph("<b>Live Portfolio:</b> yashh127.github.io/portfolio/", meta_style)
        ]
    ]

    meta_table = Table(meta_data, colWidths=[260, 270])
    meta_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#f8fafc')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#e2e8f0')),
        ('PADDING', (0,0), (-1,-1), 5),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ]))
    story.append(meta_table)
    story.append(Spacer(1, 10))

    # 1. Executive Summary / Abstract
    story.append(Paragraph("1. Executive Summary & Abstract", h1_style))
    story.append(Paragraph(
        "Modern enterprise networks face complex, multi-stage cyber threats targeting identity infrastructure, host volatile memory, and cloud environments. "
        "The <b>Home SOC Lab & A.E.G.I.S. Cyber Ops Platform</b> is a multi-cloud Security Operations Center (SOC) telemetry lab and SIEM detection engine engineered to monitor Active Directory domain controllers, Linux endpoints, and AWS CloudTrail telemetry in real time. "
        "The system authors custom detection rules mapped to the MITRE ATT&CK framework for identity exploitation attacks such as Kerberoasting (T1558.003) and LSASS credential dumping (T1003.001), while providing interactive AI-assisted threat alerts via J.A.R.V.I.S. voice notifications.",
        body_style
    ))

    # 2. Key Objectives
    story.append(Paragraph("2. Project Objectives", h1_style))
    story.append(Paragraph("• <b>Multi-OS Telemetry Aggregation:</b> Collect and normalize security logs from Windows Sysmon, Active Directory Event Logs, Ubuntu Linux Auditd, and AWS CloudTrail into a unified Wazuh SIEM cluster.", bullet_style))
    story.append(Paragraph("• <b>Detection Engineering & MITRE ATT&CK Mapping:</b> Authored deployment-ready Sigma and Wazuh detection rules targeting Kerberoasting, Mimikatz memory access, and unauthorized AWS IAM access.", bullet_style))
    story.append(Paragraph("• <b>Automated Threat Attack Replay:</b> Developed custom Python attack simulation scripts using Atomic Red Team to validate detection coverage and eliminate false-positive alert noise.", bullet_style))
    story.append(Paragraph("• <b>AI-Powered SOC Analyst Interface:</b> Built an interactive React dashboard integrated with J.A.R.V.I.S. AI voice alerts for rapid high-severity incident notification.", bullet_style))

    # 3. System Architecture & Pipeline Table
    story.append(Paragraph("3. System Architecture & Telemetry Pipeline", h1_style))
    pipeline_data = [
        [Paragraph("<b>Pipeline Stage</b>", meta_style), Paragraph("<b>Components & Technologies</b>", meta_style), Paragraph("<b>Functional Responsibility</b>", meta_style)],
        [Paragraph("1. Telemetry Ingestion", meta_style), Paragraph("Sysmon, Linux Auditd, AWS CloudTrail", meta_style), Paragraph("Captures host process creation, active directory tickets, and cloud API calls.", meta_style)],
        [Paragraph("2. Agent & Log Parsing", meta_style), Paragraph("Wazuh Agent & Logstash Pipeline", meta_style), Paragraph("Encrypted log transport, timestamp normalization, and JSON extraction.", meta_style)],
        [Paragraph("3. Analytics & Detection", meta_style), Paragraph("Wazuh SIEM Rules Engine & Sigma", meta_style), Paragraph("Evaluates rules against MITRE ATT&CK tactics (Kerberoasting, LSASS dumps).", meta_style)],
        [Paragraph("4. Visualization & Alerting", meta_style), Paragraph("React Dashboard + J.A.R.V.I.S. AI Subsystem", meta_style), Paragraph("Real-time threat monitoring dashboard with dynamic AI voice alert triggers.", meta_style)]
    ]
    pipeline_table = Table(pipeline_data, colWidths=[110, 190, 230])
    pipeline_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#047857')),
        ('TEXTCOLOR', (0,0), (-1,0), colors.white),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#cbd5e1')),
        ('PADDING', (0,0), (-1,-1), 4.5),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ]))
    story.append(pipeline_table)
    story.append(Spacer(1, 10))

    # 4. Technologies & Tools Used
    story.append(Paragraph("4. Technical Stack & Tools", h1_style))
    story.append(Paragraph("• <b>SIEM & Log Monitoring:</b> Wazuh SIEM, Splunk Enterprise, Sysmon, Snort IDS, Elastic Agent", bullet_style))
    story.append(Paragraph("• <b>Identity & Operating Systems:</b> Windows Active Directory (DC01), Ubuntu RHEL Linux, AWS IAM & CloudTrail", bullet_style))
    story.append(Paragraph("• <b>Programming & Automation:</b> Python (Async Log Parsers), Bash Shell, PowerShell, REST APIs, Docker Compose", bullet_style))
    story.append(Paragraph("• <b>Detection Frameworks:</b> MITRE ATT&CK v14, Sigma Detection Format, YARA Signatures, Atomic Red Team", bullet_style))
    story.append(Paragraph("• <b>Frontend & Dashboard:</b> React.js, Tailwind CSS, Lucide React, Web Speech API (AI Voice Alerts)", bullet_style))

    # 5. Core Implementation Modules
    story.append(Paragraph("5. Core Implementation Modules", h1_style))
    story.append(Paragraph("<b>Module A: Active Directory & Kerberoasting Detection Engine</b><br/>Configured Wazuh rule #100204 to monitor Kerberos Event ID 4769. Detects service ticket requests with RC4 encryption (0x17) targeting SPN accounts, flagging suspicious Ticket Granting Service (TGS) requests within sub-seconds.", body_style))
    story.append(Paragraph("<b>Module B: Mimikatz LSASS Volatile Memory Protection</b><br/>Implemented Sysmon Event ID 10 process access monitoring targeting <i>lsass.exe</i> with granted access permissions `0x1410`. Automatically triggers endpoint container isolation rules to halt credential harvesting.", body_style))
    story.append(Paragraph("<b>Module C: React A.E.G.I.S. Dashboard & AI Voice Alerts</b><br/>Engineered a high-performance React web dashboard displaying real-time alert triage tables, severity scores, and interactive J.A.R.V.I.S. AI voice announcements for high-severity alerts.", body_style))

    # 6. Results & Outcomes
    story.append(Paragraph("6. Expected Outcomes & Performance Metrics", h1_style))
    story.append(Paragraph("• <b>High Detection Accuracy:</b> 98% detection coverage rate against active credential dumping and Kerberoasting attack simulations.", bullet_style))
    story.append(Paragraph("• <b>MTTD Reduction:</b> Reduced Mean Time to Detect (MTTD) from minutes to sub-second notifications via automated alert pipelines.", bullet_style))
    story.append(Paragraph("• <b>Zero-Cost Container Deployment:</b> Fully containerized using Docker Compose for rapid reproducible deployment across cloud or local labs.", bullet_style))

    # 7. Signature & Verification Block
    story.append(Spacer(1, 10))
    sig_data = [
        [Paragraph("<b>Submitted By:</b>", meta_style), Paragraph("<b>Verified By:</b>", meta_style)],
        [Paragraph("Yash Panjwani<br/>B.Tech CSE Student<br/>Lovely Professional University", meta_style), Paragraph("Faculty / Department of CSE<br/>Lovely Professional University<br/>Date: 12-08-2026", meta_style)]
    ]
    sig_table = Table(sig_data, colWidths=[260, 270])
    sig_table.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#e2e8f0')),
        ('PADDING', (0,0), (-1,-1), 6),
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#f8fafc')),
    ]))
    story.append(sig_table)

    doc.build(story)
    print(f"Synopsis PDF built successfully: {filename}")

if __name__ == '__main__':
    target = "/Users/yash/Downloads/Yash_Panjwani_Project_Synopsis.pdf"
    build_pdf(target)

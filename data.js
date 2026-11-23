// CPE102 viewbook content.
// Text here is the team's own writing: edit wording only on purpose.
// house = one of the six CPE102 colours: red, blue, green, yellow, orange, gray.
// terminal = shell sessions shown in a week (from our lab reports).

const CPE102 = {
  "course": {
    "code": "CPE102",
    "section": "SEC C // INTER A",
    "room": "CPE 1114",
    "semester": "Semester 1/2026",
    "title": "Engineering Exploration"
  },
  "team": [
    {
      "name": "Huffle",
      "role": "Design & Fabrication",
      "id": "TEAM 01",
      "image": "media/team/huffle.webp",
      "house": "yellow"
    },
    {
      "name": "Ice",
      "role": "Embedded Systems",
      "id": "TEAM 02",
      "image": "media/team/ice.webp",
      "house": "blue"
    },
    {
      "name": "Nyan",
      "role": "Software & Vision",
      "id": "TEAM 03",
      "image": "media/team/nyan.webp",
      "house": "red"
    },
    {
      "name": "P",
      "role": "The Linux Man",
      "id": "TEAM 04",
      "image": "media/team/p.webp",
      "house": "orange"
    }
  ],
  "weeks": [
    {
      "week": 1,
      "date": "Aug 7",
      "title": "What Engineers Do?",
      "subtitle": "Class Introduction",
      "house": "red",
      "instructor": "CPE102 Faculty Team",
      "image": "media/w01/class.webp",
      "preview": "How engineers turn ambiguity into systems, teams, and working solutions.",
      "tags": [
        "Mindset",
        "Teamwork",
        "Project 1"
      ],
      "learned": [
        "Engineering starts with identifying constraints and real user needs.",
        "Color-house teams introduce structured collaboration.",
        "Project 1 requires both gesture control and autonomous sorting."
      ],
      "takeaways": [
        "A successful engineer separates the problem from the first proposed solution.",
        "Manual and autonomous modes demand very different sensing, control, and safety decisions."
      ],
      "review": [
        "Explain the engineering design cycle.",
        "Compare 1X manual and 5X autonomous scoring.",
        "Sketch the first robot mission map."
      ],
      "interactive": true,
      "embeds": [
        {
          "type": "youtube",
          "src": "https://www.youtube.com/embed/D9I35Rqo04E",
          "title": "Engineering Exploration — Part 1"
        },
        {
          "type": "youtube",
          "src": "https://www.youtube.com/embed/RM04n0-QtNo",
          "title": "Engineering Exploration — Part 2"
        }
      ],
      "photos": [
        "media/w01/class.webp",
        "media/w01/huffle.webp",
        "media/w01/ice.webp",
        "media/w01/nyan.webp",
        "media/w01/p.webp"
      ],
      "slides": "media/slides/w01-syllabus.pdf"
    },
    {
      "week": 2,
      "date": "Aug 14",
      "title": "Working Foundation",
      "subtitle": "People, purpose, and planning",
      "house": "red",
      "image": "media/w02/problem.webp",
      "preview": "Build a repeatable framework for decisions, ownership, goals, and teamwork.",
      "tags": [
        "RACI",
        "SMART",
        "DISC"
      ],
      "learned": [
        "Think Right / Work Right / Work With People is a whole-system framework.",
        "RACI clarifies responsibility and SMART turns ideas into measurable goals.",
        "DISC and Skill–Will help match tasks to working styles."
      ],
      "takeaways": [
        "Most project failures begin with the wrong problem statement, not poor execution.",
        "Explicit ownership prevents both duplicated work and neglected tasks."
      ],
      "review": [
        "Create a RACI for a mini project.",
        "Rewrite one goal using SMART criteria.",
        "Identify the root cause in a failed task."
      ],
      "interactive": true,
      "embeds": [
        {
          "type": "canva",
          "src": "https://www.canva.com/design/DAHSOx45IYA/bV7GlOv5wkKOKl2DjIQRGA/view?embed",
          "title": "Working Foundation Deck"
        }
      ],
      "photos": [
        "media/w02/problem.webp",
        "media/w02/goals-board.webp",
        "media/w02/p-ice-1.webp",
        "media/w02/p-ice-2.webp",
        "media/w02/nyan-huffle.webp",
        "media/w02/huffle-1.webp",
        "media/w02/huffle-2.webp",
        "media/w02/ice.webp",
        "media/w02/nyan-1.webp",
        "media/w02/nyan-2.webp",
        "media/w02/p.webp"
      ],
      "slides": "media/slides/w02.pdf"
    },
    {
      "week": 3,
      "date": "Aug 21",
      "title": "Computer Aided Design",
      "subtitle": "From sketch to physical prototype",
      "house": "blue",
      "image": "media/w03/cad.webp",
      "preview": "Translate concepts into precise 2D drawings and manufacturable 3D assemblies.",
      "tags": [
        "CAD",
        "Onshape",
        "ISO 128"
      ],
      "learned": [
        "2D and 3D CAD serve drawing and fabrication needs differently.",
        "Third-angle orthographic views communicate shape consistently.",
        "Onshape supports parts, assemblies, and technical drawings.",
        "Laser cutting and 3D printing require manufacturing-aware dimensions."
      ],
      "takeaways": [
        "A dimension must reflect a manufacturing process, not just visual preference.",
        "Clear drawings reduce assumptions across software and mechanical teams."
      ],
      "review": [
        "Explain third-angle projection.",
        "Identify standard ISO 128 line types.",
        "Describe the part → assembly → drawing workflow."
      ],
      "photos": [
        "media/w03/cad.webp",
        "media/w03/ice.webp"
      ],
      "slides": "media/slides/w03.pdf"
    },
    {
      "week": 4,
      "date": "Aug 28",
      "title": "Basic Embedded Systems",
      "subtitle": "Code meets hardware",
      "house": "green",
      "image": "media/w04/ice-1.webp",
      "preview": "Read signals, control actuators, and build reliable ESP32 prototypes.",
      "tags": [
        "ESP32",
        "Arduino",
        "PWM"
      ],
      "learned": [
        "Ohm's law links voltage, current, and resistance: V = IR.",
        "Digital signals switch states; analog signals vary continuously.",
        "PWM duty cycle controls effective output power.",
        "ADC converts potentiometer voltage into software-readable values."
      ],
      "takeaways": [
        "Serial monitoring makes invisible hardware behavior observable.",
        "H-bridges allow reversible motor control but demand safe switching logic."
      ],
      "review": [
        "Calculate V, I, or R with Ohm's law.",
        "Explain duty cycle.",
        "Describe the role of an H-bridge."
      ],
      "photos": [
        "media/w04/ice-1.webp",
        "media/w04/ice-2.webp",
        "media/w04/huffle-nyan-1.webp",
        "media/w04/huffle-nyan-2.webp",
        "media/w04/p.webp"
      ],
      "slides": "media/slides/w04.pdf"
    },
    {
      "week": 5,
      "date": "Sep 4",
      "title": "Intelligent Systems",
      "subtitle": "AI, ML, and machine vision",
      "house": "yellow",
      "image": "media/w05/p.webp",
      "preview": "Train classifiers and isolate objects under changing visual conditions.",
      "tags": [
        "Teachable Machine",
        "OpenCV",
        "HSV"
      ],
      "learned": [
        "Teachable Machine can classify gestures, stones, and handwritten digits.",
        "HSV separates hue from illumination better than raw RGB values.",
        "Masking isolates regions; blur, erosion, and dilation improve contours."
      ],
      "takeaways": [
        "Good datasets and stable lighting often matter more than complex models.",
        "Vision pipelines should include preprocessing and clear fallback behavior."
      ],
      "review": [
        "Compare RGB and HSV.",
        "List five OpenCV processing stages.",
        "Explain median blur and dilation."
      ],
      "interactive": true,
      "photos": [
        "media/w05/p.webp",
        "media/w05/nyan.webp"
      ],
      "slides": "media/slides/w05.pdf"
    },
    {
      "week": 6,
      "date": "Sep 11",
      "title": "Natural Language Processing",
      "subtitle": "Turning text into intent",
      "house": "yellow",
      "preview": "Transform raw language into a structured chatbot response pipeline.",
      "tags": [
        "NLP",
        "Chatbot",
        "Intent"
      ],
      "learned": [
        "NLP systems clean and normalize language before interpretation.",
        "Intent recognition maps text to an expected action or category.",
        "Responses may use rules, a model, or a hybrid."
      ],
      "takeaways": [
        "Useful chatbots validate intent and handle unknown inputs gracefully.",
        "Preprocessing choices directly affect downstream recognition."
      ],
      "review": [
        "Draw a chatbot pipeline.",
        "Define intent and entity.",
        "Suggest a fallback response."
      ],
      "slides": "media/slides/w06.pdf"
    },
    {
      "week": 7,
      "date": "Sep 25",
      "title": "Programming Concept",
      "subtitle": "Happy Coding",
      "house": "green",
      "image": "media/w04/p.webp",
      "preview": "Build algorithmic confidence through variables, logic, loops, and functions.",
      "tags": [
        "Arduino IDE",
        "Algorithms",
        "Functions"
      ],
      "learned": [
        "Variables store state, conditions route decisions, and loops repeat work.",
        "Functions divide behavior into reusable units.",
        "Decomposition makes robot integration easier to test and debug."
      ],
      "takeaways": [
        "Write the smallest testable behavior before composing the full program.",
        "Readable control flow prevents integration bugs."
      ],
      "review": [
        "Explain variables and scope.",
        "Trace a loop by hand.",
        "Decompose a robot task into functions."
      ],
      "slides": "media/slides/w07.pptx"
    },
    {
      "week": 8,
      "date": "Oct 2",
      "title": "The First Project Competition",
      "subtitle": "Gemstone sorting arena",
      "house": "orange",
      "image": "media/w08/robot.webp",
      "preview": "Six drafts, 5-minute runs, and engineering decisions under competition pressure.",
      "tags": [
        "Era-One",
        "Robot",
        "AprilTag"
      ],
      "learned": [
        "Era-One evolved from six drafts toward a gripper on sponge and two-wheel base.",
        "Mechanical limits can block camera views and target access.",
        "The competition exposed trade-offs among grip, speed, localization, and repeatability."
      ],
      "takeaways": [
        "A working prototype is not a reason to stop measuring.",
        "The simplest mechanism may be the most robust in a 5-minute arena."
      ],
      "review": [
        "Compare the six prototype drafts.",
        "Explain UDP safety behavior.",
        "Describe one mechanical trade-off."
      ],
      "interactive": true,
      "embeds": [
        {
          "type": "canva",
          "src": "https://www.canva.com/design/DAHWrklRSLo/LsiZexLrxwpjdmv28GT0QA/view?embed",
          "title": "Green Team Robot Deck"
        },
        {
          "type": "pdf",
          "src": "media/docs/era-one-progress-report.pdf",
          "title": "Era-One Progress Report"
        }
      ],
      "photos": [
        "media/w08/robot.webp",
        "media/w08/robot-green.webp",
        "media/w08/robot-top.webp",
        "media/w08/arena.webp",
        "media/w08/arm-gripper.webp",
        "media/w08/tracking.webp"
      ]
    },
    {
      "week": 9,
      "date": "Oct 9",
      "title": "Midterm Exams",
      "subtitle": "The Three Challenges",
      "house": "gray",
      "image": "media/w09/midterm-7.webp",
      "preview": "Apply fundamental skills in timed practical challenges, then form the final project team.",
      "tags": [
        "Midterm",
        "Practical",
        "Teams"
      ],
      "learned": [
        "The three challenges test integrated hardware, software, and engineering reasoning.",
        "Final teams consist of 3–4 members with TA mentorship.",
        "The final problem is open-ended and team-selected."
      ],
      "takeaways": [
        "The strongest teams define roles before choosing technologies.",
        "Practical testing rewards preparation and safe recovery plans."
      ],
      "review": [
        "Restate the midterm rubric.",
        "Define three team roles.",
        "Write a first risk log."
      ],
      "interactive": true,
      "photos": [
        "media/w09/midterm-7.webp",
        "media/w09/midterm-1.webp",
        "media/w09/midterm-2.webp",
        "media/w09/midterm-3.webp",
        "media/w09/midterm-4.webp",
        "media/w09/midterm-5.webp",
        "media/w09/midterm-6.webp"
      ]
    },
    {
      "week": 10,
      "date": "Oct 30",
      "title": "Game Development",
      "subtitle": "GameJam #40",
      "house": "orange",
      "image": "media/w10/game-design.webp",
      "preview": "Build a two-player CPE102 game in Unity 6.0 LTS for itch.io.",
      "tags": [
        "Unity",
        "GameJam",
        "itch.io"
      ],
      "learned": [
        "Unity 6.0 LTS is the development baseline for the jam.",
        "The game must support two local players and relate to CPE102.",
        "Fast prototyping and playtesting reveal interaction bugs early."
      ],
      "takeaways": [
        "A focused game loop is more compelling than many unfinished features.",
        "Shared-screen games need immediate visual feedback."
      ],
      "review": [
        "List Unity scene and prefab roles.",
        "Explain a local multiplayer loop.",
        "Name one playtest finding."
      ],
      "interactive": true,
      "embeds": [
        {
          "type": "game",
          "src": "https://nyannnnnn.itch.io/rythym-clash",
          "title": "Rhythm Clash",
          "cover": "media/w10/rhythm-clash.webp"
        },
        {
          "type": "game",
          "src": "https://jeopardizedcheese.itch.io/split-paths",
          "title": "Split Paths",
          "cover": "media/w10/split-paths.webp"
        }
      ],
      "photos": [
        "media/w10/game-design.webp",
        "media/w10/image0.webp",
        "media/w10/image.webp",
        "media/w10/image2.webp",
        "media/w10/image3.webp",
        "media/w10/image4.webp",
        "media/w10/image151.webp"
      ]
    },
    {
      "week": 11,
      "date": "Nov 6",
      "title": "Network Security",
      "subtitle": "Defending connected systems",
      "house": "blue",
      "preview": "Understand confidentiality, integrity, availability, threats, and basic defense.",
      "tags": [
        "CIA Triad",
        "Phishing",
        "2FA"
      ],
      "learned": [
        "CIA means Confidentiality, Integrity, and Availability.",
        "Phishing and ransomware remain common entry points.",
        "2FA and unique password hygiene reduce account risk."
      ],
      "takeaways": [
        "Security is a design constraint from the beginning, not a final patch.",
        "Least privilege limits damage when a component is compromised."
      ],
      "review": [
        "Define the CIA triad.",
        "Compare phishing and ransomware.",
        "List four password defenses."
      ],
      "interactive": true,
      "embeds": [
        {
          "type": "link",
          "src": "https://www.hackthissite.org/",
          "title": "Open Hack This Site"
        }
      ]
    },
    {
      "week": 12,
      "date": "Nov 13",
      "title": "Operating Systems",
      "subtitle": "Virtual machines and remote servers",
      "house": "blue",
      "preview": "Run Ubuntu Server headlessly and administer it securely over SSH.",
      "tags": [
        "VMware",
        "Ubuntu",
        "SSH"
      ],
      "learned": [
        "VMware provides an isolated environment for OS experiments.",
        "Ubuntu Server can operate without a graphical desktop.",
        "OpenSSH enables terminal-based remote administration."
      ],
      "takeaways": [
        "A server is managed as a text-driven, observable system.",
        "Network configuration and authentication must be verified together."
      ],
      "review": [
        "Explain virtualization.",
        "Write a basic ssh command.",
        "List one reason to disable GUI workloads."
      ],
      "interactive": true,
      "slides": "media/slides/w12-part1.pdf",
      "docs": [
        {
          "src": "media/slides/w12-part2.pdf",
          "title": "Slides — Part 2"
        },
        {
          "src": "media/docs/w12-os-lab.pdf",
          "title": "Lab — Operating Systems"
        },
        {
          "src": "media/docs/w12-web-server-lab.pdf",
          "title": "Lab — Web Server"
        }
      ],
      "terminal": [
        {
          "title": "Install OpenSSH and start the server",
          "host": "vmware@vmware-ubuntu: ~",
          "lines": [
            {
              "prompt": "vmware@vmware-ubuntu:~$",
              "cmd": "sudo apt update && sudo apt install openssh-server -y"
            },
            {
              "prompt": "vmware@vmware-ubuntu:~$",
              "cmd": "sudo systemctl status ssh"
            },
            {
              "out": "○ ssh.service - OpenBSD Secure Shell server"
            },
            {
              "out": "     Active: inactive (dead)"
            },
            {
              "out": "TriggeredBy: ● ssh.socket"
            },
            {
              "prompt": "vmware@vmware-ubuntu:~$",
              "cmd": "sudo systemctl enable --now ssh"
            },
            {
              "prompt": "vmware@vmware-ubuntu:~$",
              "cmd": "ip a"
            },
            {
              "out": "2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> ..."
            },
            {
              "out": "    inet 192.168.84.129/24 ... scope global ens33"
            }
          ]
        },
        {
          "title": "Connect from the Windows host",
          "host": "Command Prompt — C:\\Users\\Third",
          "lines": [
            {
              "prompt": "C:\\Users\\Third>",
              "cmd": "ssh vmware@192.168.84.129"
            },
            {
              "err": "ssh: connect to host 192.168.84.129 port 22: Connection refused"
            },
            {
              "prompt": "C:\\Users\\Third>",
              "cmd": "ssh vmware@192.168.84.129/24"
            },
            {
              "err": "ssh: Could not resolve hostname 192.168.84.129/24: No such host is known."
            },
            {
              "prompt": "C:\\Users\\Third>",
              "cmd": "ssh vmware@192.168.84.129 -p 22"
            },
            {
              "out": "vmware@192.168.84.129's password:"
            },
            {
              "out": "Welcome to Ubuntu 26.04.1 LTS (GNU/Linux 7.0.0-43-generic x86_64)"
            }
          ]
        },
        {
          "title": "Set up the LAMP web server",
          "host": "root@vmware-ubuntu: ~",
          "lines": [
            {
              "prompt": "vmware@vmware-ubuntu:~$",
              "cmd": "sudo su -"
            },
            {
              "prompt": "root@vmware-ubuntu:~#",
              "cmd": "apt install apache2 mysql-server"
            },
            {
              "prompt": "root@vmware-ubuntu:~#",
              "cmd": "apt install php libapache2-mod-php php-mysql -y"
            },
            {
              "prompt": "root@vmware-ubuntu:~#",
              "cmd": "dpkg --get-selections apa* php* mysql*"
            },
            {
              "out": "apache2        install"
            },
            {
              "out": "php8.5         install"
            },
            {
              "out": "mysql-server   install"
            },
            {
              "prompt": "root@vmware-ubuntu:~#",
              "cmd": "a2enmod userdir"
            },
            {
              "prompt": "root@vmware-ubuntu:~#",
              "cmd": "systemctl reload apache2"
            }
          ]
        },
        {
          "title": "Create a MySQL user for phpMyAdmin",
          "host": "mysql — vmware-ubuntu",
          "lines": [
            {
              "prompt": "vmware@vmware-ubuntu:~$",
              "cmd": "sudo mysql"
            },
            {
              "prompt": "mysql>",
              "cmd": "CREATE USER 'obamna'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';"
            },
            {
              "out": "Query OK, 0 rows affected"
            },
            {
              "prompt": "mysql>",
              "cmd": "GRANT ALL PRIVILEGES ON *.* TO 'obamna'@'localhost' WITH GRANT OPTION;"
            },
            {
              "out": "Query OK, 0 rows affected"
            }
          ]
        }
      ]
    },
    {
      "week": 13,
      "date": "Nov 20",
      "title": "Project Progress Presentations",
      "subtitle": "Pitch the plan and the evidence",
      "house": "orange",
      "preview": "Deliver a 10-minute pitch plus 5-minute Q&A with a balanced, evidence-led story.",
      "tags": [
        "Pitch",
        "Rubric",
        "Final Project"
      ],
      "learned": [
        "A strong pitch covers Title/Team, Problem/Method/Tech Stack, and milestone progress.",
        "Speaking time should be distributed evenly across members.",
        "Milestone evidence is compared against the original plan."
      ],
      "takeaways": [
        "Progress is meaningful only when connected to a target and measured risk.",
        "A Q&A is part of the presentation, not an interruption."
      ],
      "review": [
        "Outline the three-slide structure.",
        "Map milestones against the plan.",
        "Practice a 5-minute Q&A."
      ],
      "interactive": true,
      "embeds": [
        {
          "type": "canva",
          "src": "https://www.canva.com/design/DAHayoCBCbo/J2Kjn13w3H77zZJSfVat8A/view?embed",
          "title": "Final Project Progress Deck"
        }
      ],
      "photos": [
        "media/w13/progress.webp"
      ]
    },
    {
      "week": 14,
      "date": "Nov 23",
      "title": "Game Day",
      "subtitle": "Game tournament for extra points",
      "house": "yellow",
      "preview": "A fun little time for our subject: we gamed together in a tournament for extra points.",
      "tags": [
        "Tournament",
        "Extra Points",
        "Gaming"
      ],
      "interactive": false,
      "about": "No lecture and no engineering insights this week. Game Day is just a fun little time for our subject, where everyone games together in a tournament for extra points."
    },
    {
      "week": 15,
      "date": "Dec 11",
      "title": "Final Exam & Viewbook",
      "subtitle": "Review and submit",
      "house": "gray",
      "preview": "Consolidate calculations, standards, AI, security, Linux, and viewbook polish.",
      "tags": [
        "Final Exam",
        "Review",
        "Submission"
      ],
      "learned": [
        "The final review spans Ohm’s law, PWM, ISO 128, HSV/RGB, CIA, and Linux/SSH.",
        "Final submission requires a coherent semester narrative with evidence.",
        "Checklists convert review topics into active recall."
      ],
      "takeaways": [
        "A useful viewbook explains choices and insights, not just activities.",
        "Final polish means consistency across text, images, links, and credits."
      ],
      "review": [
        "Solve an Ohm’s law problem.",
        "Compare HSV and RGB.",
        "List three Linux/SSH commands."
      ],
      "interactive": true
    },
    {
      "week": 16,
      "date": "Dec 14",
      "title": "Final Project Poster Presentations",
      "subtitle": "Live demo and report",
      "house": "green",
      "preview": "Present the final system through a poster, live demonstration, and engineering report.",
      "tags": [
        "Poster",
        "Demo",
        "Report"
      ],
      "learned": [
        "Poster sessions combine concise visual explanation with direct audience discussion.",
        "The live demo verifies the final system under real conditions.",
        "The report captures requirements, decisions, testing, and outcomes."
      ],
      "takeaways": [
        "Evidence should connect requirements, implementation, testing, and team roles.",
        "A credible final result includes limitations and future work."
      ],
      "review": [
        "Summarize the final report structure.",
        "Prepare a 90-second demo script.",
        "Identify one limitation and next step."
      ]
    }
  ],
  "midterm": {
    "videos": [
      {
        "src": "media/week08/VID_20260929_052359.mp4",
        "poster": "media/week08/VID_20260929_052359.jpg"
      },
      {
        "src": "media/week08/VID_20260929_052543.mp4",
        "poster": "media/week08/VID_20260929_052543.jpg"
      },
      {
        "src": "media/week08/VID_20260929_053132.mp4",
        "poster": "media/week08/VID_20260929_053132.jpg"
      }
    ],
    "gallery": [
      "media/w08/robot.webp",
      "media/w08/robot-green.webp",
      "media/w08/tracking.webp",
      "media/w08/arm-gripper.webp",
      "media/w08/robot-top.webp"
    ],
    "report": "media/docs/era-one-progress-report.pdf"
  }
};

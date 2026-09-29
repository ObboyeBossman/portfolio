export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'fullstack' | 'database' | 'mobile';
  tags: string[];
  description: string;
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  isPrivate?: boolean;
  featured: boolean;
  architectureDetails: {
    problem: string;
    solution: string;
    keyDecisions: string[];
    schemaHighlights?: string;
  };
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: { name: string; level: string; badge?: string }[];
}

export interface DeveloperProfile {
  name: string;
  legalName: string;
  title: string;
  roleDescription: string;
  institution: string;
  location: string;
  email: string;
  githubUsername: string;
  githubUrl: string;
  altGithubUsername?: string;
  altGithubUrl?: string;
  bio: string;
  stats: { label: string; value: string; detail: string }[];
}

export const PROFILE: DeveloperProfile = {
  name: "Bossman Abraham",
  legalName: "Bossman Abraham N. O.",
  title: "Full-Stack Engineer & Mobile / Systems Architect",
  roleDescription: "Building robust web platforms, cross-platform Flutter mobile applications, and resilient cloud architectures.",
  institution: "Takoradi Technical University (TTU)",
  location: "Takoradi, Ghana",
  email: "obboyebossman@gmail.com",
  githubUsername: "ObboyeBossman",
  githubUrl: "https://github.com/ObboyeBossman",
  altGithubUsername: "Bossman-Obboye",
  altGithubUrl: "https://github.com/Bossman-Obboye",
  bio: "ICT & Systems Analysis scholar and software engineer with extensive cross-platform experience. Dual-focused on intuitive, responsive user experiences (Next.js, Flutter, Dart, TypeScript) and backend/cloud data integrity (PostgreSQL, Firebase Firestore, Supabase, Prisma, and automated audit trails).",
  stats: [
    { label: "Production Platforms", value: "5+", detail: "Web, Mobile & Backend" },
    { label: "Core Stack", value: "Next.js + Flutter", detail: "TS, Dart, SQL & Firebase" },
    { label: "Institution", value: "TTU", detail: "ICT & Systems Analysis" },
    { label: "Code Footprint", value: "4M+ Lines", detail: "Across GitHub Repos" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "attendsys",
    title: "AttendSys",
    subtitle: "University Attendance Management Platform",
    category: "fullstack",
    tags: ["Next.js 16", "TypeScript", "Supabase", "PostgreSQL", "Cloudflare R2", "Tailwind v4", "PWA"],
    description: "An enterprise-grade university attendance management system engineered for Takoradi Technical University to track, verify, and audit student lecture presence with granular role-based security.",
    highlights: [
      "4-Tier RBAC with strict row-level security: Super Admin, Lecturer, Course Rep, and Student",
      "Comprehensive 3-year seed data pipeline simulating 3 academic years, 6 semesters, 170+ students, and 10 lecturers",
      "Live session check-ins, automated attendance dispute workflows, and immutable audit logging",
      "Cloudflare R2 integration for high-speed, cost-effective asset and document storage",
      "Installable Progressive Web App (PWA) optimized for mobile lecture hall usage"
    ],
    liveUrl: "https://attendsystem.vercel.app",
    githubUrl: "https://github.com/ObboyeBossman/attendsys",
    isPrivate: true,
    featured: true,
    architectureDetails: {
      problem: "Traditional paper-based lecture attendance at universities is prone to proxy signing, manual tallying errors, and lacks instantaneous dispute resolution.",
      solution: "Engineered a secure, cloud-native attendance platform with session code verification, automated percentage thresholds, and an audit trail for faculty oversight.",
      keyDecisions: [
        "Used Supabase (PostgreSQL) with Row-Level Security (RLS) to enforce group-scoped access control directly at the database tier",
        "Configured Cloudflare R2 via S3-compatible SDK for scalable dispute evidence storage",
        "Architected Next.js 16 App Router with server actions and edge caching for sub-100ms response times"
      ],
      schemaHighlights: "Tables: users, roles, academic_years, semesters, groups, courses, timetables, sessions, attendance_records, disputes, audit_logs."
    }
  },
  {
    id: "cac-hymnbook-firebase",
    title: "Official CAC Hymnbook App",
    subtitle: "Cross-Platform Flutter & Cloud Firestore Mobile App",
    category: "mobile",
    tags: ["Flutter", "Dart", "Firebase Firestore", "Firebase Core", "Riverpod", "Hive Cache"],
    description: "An offline-first cross-platform church hymnbook mobile application engineered with Flutter, integrating Google Firebase Cloud Firestore for real-time hymn updates and local Hive box synchronization.",
    highlights: [
      "Real-time Cloud Firestore synchronization paired with Hive local storage for 100% offline access in areas with poor internet connectivity",
      "Riverpod reactive state management with custom generator architecture (`flutter_riverpod` + `riverpod_annotation`)",
      "Adaptive typography using `auto_size_text` and Cupertino UI styling for seamless reading across both iOS and Android",
      "Active network listener (`connectivity_plus` & `internet_connection_checker`) ensuring zero-freeze sync state transitions"
    ],
    githubUrl: "https://github.com/Bossman-Obboye/Official_CAC_Hymnbook_App",
    isPrivate: false,
    featured: true,
    architectureDetails: {
      problem: "Congregants frequently attend services in sanctuary environments or remote branches with intermittent or non-existent cellular reception, causing traditional cloud-dependent apps to hang.",
      solution: "Engineered an offline-first Flutter architecture with local Hive caching as the single source of truth for the UI, hydrating and syncing from Cloud Firestore whenever online.",
      keyDecisions: [
        "Utilized Riverpod provider scopes to decouple Firebase stream listeners from UI widgets",
        "Implemented local Hive indexed boxes allowing instant search across hundreds of hymns in under 16ms",
        "Built automatic retry logic on network reconnection with connection state listeners"
      ],
      schemaHighlights: "Firestore Collections: hymns (hymn_no, title, verses, chorus, category, language_twi, audio_url), favorites, sync_meta."
    }
  },
  {
    id: "firebase-crud-flutter",
    title: "Flutter Firebase Cloud Engine",
    subtitle: "Dynamic NoSQL Data Management",
    category: "mobile",
    tags: ["Flutter", "Dart", "Firebase Core", "Cloud Firestore", "NoSQL", "Async UI"],
    description: "Production-ready demonstration of full CRUD operations with Flutter and Firebase Cloud Firestore, implementing real-time streaming listeners, optimistic UI updates, and error toast feedback.",
    highlights: [
      "Full NoSQL collection CRUD: Real-time queries, atomic doc creation, partial updates, and soft/hard deletions",
      "StreamBuilder patterns for continuous bidirectional cloud data binding",
      "Asynchronous validation and client feedback using `fluttertoast` and unique record generators"
    ],
    githubUrl: "https://github.com/Bossman-Obboye/Firebase_CRUD",
    isPrivate: false,
    featured: false,
    architectureDetails: {
      problem: "Demonstrating clean separation between presentation layers and NoSQL cloud data providers without tight coupling.",
      solution: "Built modular Firebase data services in Dart that encapsulate Firestore collections and provide clean streams to the Flutter UI layer.",
      keyDecisions: [
        "Implemented isolated Firestore collection references with type-safe document mapping",
        "Integrated exception boundaries that gracefully catch cloud write timeouts and network drops"
      ]
    }
  },
  {
    id: "cacihub",
    title: "CACI Hub Web & PWA",
    subtitle: "Church Assembly Community Interface",
    category: "fullstack",
    tags: ["TypeScript", "Next.js", "Prisma", "SQLite / Supabase", "Zustand", "Mobile-First UI"],
    description: "A centralized community, administration, and communication platform created for Christ Apostolic Church International (Assakae Central Assembly).",
    highlights: [
      "Tactile mobile-first architecture targeted at 375px viewports with spring-physics transitions (cubic-bezier)",
      "High-speed single-route Zustand router providing instant app-like navigation without page flickers",
      "Robust member lifecycle management with soft deletes, recovery windows, and immutable audit logs",
      "Targeted SMS & broadcast messaging system supporting E.164 phone normalization (233XXXXXXXXX)",
      "Prisma schema with 14 relational models handling departments, families, attendance, and finances"
    ],
    liveUrl: "https://cacihub-web.vercel.app",
    githubUrl: "https://github.com/ObboyeBossman/cacihub",
    isPrivate: false,
    featured: true,
    architectureDetails: {
      problem: "Church leadership needed an easy-to-use mobile tool for non-technical administrators to manage thousands of congregants, track attendance, and deliver rapid pastoral broadcasts.",
      solution: "Built a responsive, touch-optimized web application with native tactile feedback, 16px font zoom safeguards, and local SQLite/Prisma sync.",
      keyDecisions: [
        "Implemented Zustand state router with back navigation stack for silky-smooth transitions",
        "Enforced phone normalization and duplicate prevention at the schema level",
        "Adopted soft delete architecture preserving historical attendance even if members relocate"
      ],
      schemaHighlights: "Tables: members, groups, attendance_events, broadcasts, pastoral_notes, financial_records, audit_trail."
    }
  },
  {
    id: "caci-mobile-flutter",
    title: "CACI Hub Native Mobile App",
    subtitle: "Enterprise Flutter & Biometric App",
    category: "mobile",
    tags: ["Flutter", "Dart", "Supabase Flutter", "Riverpod", "Local Auth", "FL Chart", "QR Scanner"],
    description: "Full native mobile application for CACI Church Assembly built in Flutter, equipped with biometric authentication (fingerprint / Face ID), interactive demographic charts, and QR code member verification.",
    highlights: [
      "Biometric security integration using `local_auth` protecting confidential administrative & pastoral records",
      "Real-time demographic analytics and attendance visualization using `fl_chart`",
      "Camera-powered QR code check-in via `qr_flutter` and camera permissions",
      "Secure key storage via `flutter_secure_storage` and local caching with Hive"
    ],
    githubUrl: "https://github.com/ObboyeBossman/caci-hub",
    isPrivate: true,
    featured: true,
    architectureDetails: {
      problem: "Church administrators require instant, secure access to confidential records while moving around sanctuary halls without typing long passwords repeatedly.",
      solution: "Implemented device-level biometrics with cryptographic session tokens and local offline attendance logging.",
      keyDecisions: [
        "Integrated `local_auth` biometric challenge before decrypting Supabase session tokens from `flutter_secure_storage`",
        "Designed responsive tablet & smartphone layouts using `responsive_framework`"
      ]
    }
  },
  {
    id: "mistore-flutter",
    title: "MiStore Mobile Inventory",
    subtitle: "Handheld Retail & Barcode Scanner App in Flutter",
    category: "mobile",
    tags: ["Flutter", "Dart", "Retail Operations", "Barcode Scanner", "State Management", "Mobile POS"],
    description: "Handheld mobile retail assistant built in Flutter as the companion to MiStore. Enables store attendants to scan items, check real-time stock levels, record shelf audits, and issue digital sales slips.",
    highlights: [
      "Camera-integrated barcode reading and product SKU search for retail floor attendants",
      "Instant inventory sync with the central Next.js/Payload CMS store backend",
      "Compact mobile-optimized user flow designed for rapid one-handed handheld device operations"
    ],
    githubUrl: "https://github.com/Bossman-Obboye/MiStore-Flutter",
    isPrivate: true,
    featured: true,
    architectureDetails: {
      problem: "Floor staff in retail stores need immediate price and stock lookups without walking back and forth to stationary POS terminals.",
      solution: "Engineered a lightweight Flutter mobile client with instant barcode resolution and local lookup tables.",
      keyDecisions: [
        "Architected reactive state binding between local item scans and remote product catalogs",
        "Enforced zero-lag layout rendering on budget Android devices"
      ]
    }
  },
  {
    id: "nx-commerce-flutter",
    title: "NX-Commerce Mobile App",
    subtitle: "Cross-Platform Retail Shopping UI in Flutter",
    category: "mobile",
    tags: ["Flutter", "Dart", "E-Commerce", "Custom Widgets", "Material 3", "Animations"],
    description: "A comprehensive e-commerce mobile shopping interface created in Flutter, featuring category browsing, persistent shopping bag state, animated product cards, and smooth checkout navigation.",
    highlights: [
      "Custom Flutter widgets implementing modern Material 3 design tokens and micro-animations",
      "Dynamic cart state management with real-time total calculations and promo discounts",
      "Adaptive grid and list views for responsive display across iOS and Android form factors"
    ],
    githubUrl: "https://github.com/Bossman-Obboye/NX-Commerce",
    isPrivate: false,
    featured: false,
    architectureDetails: {
      problem: "Creating an engaging and high-conversion mobile shopping experience with minimal frame drops on both Android and iOS.",
      solution: "Built a declarative, widget-driven UI architecture with lazy-loaded image caches and decoupled state stores.",
      keyDecisions: [
        "Utilized optimized Slivers and CustomScrollView for stutter-free scrolling over long product catalogs",
        "Separated UI components into atomic widgets for maximum reusability"
      ]
    }
  },
  {
    id: "aai-unity-farms",
    title: "AAI Unity Farms",
    subtitle: "Agri-Tech & Farm Commerce Platform",
    category: "fullstack",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "E-Commerce", "Responsive Web"],
    description: "A modern commercial web application engineered for a premier Ghanaian poultry and agricultural venture, showcasing inventory, livestock catalogs, and wholesale procurement.",
    highlights: [
      "Custom product catalog tailored for perishable poultry and farm harvest batches",
      "Fast, accessible product discovery with responsive layout for rural and urban buyers",
      "Direct WhatsApp and call-to-order integration suited for local market purchasing habits",
      "Clean TypeScript architecture ready for payment gateway integration (Paystack/Mobile Money)"
    ],
    liveUrl: "https://aai-unity-farms.vercel.app",
    githubUrl: "https://github.com/ObboyeBossman/aai-unity-farms",
    isPrivate: true,
    featured: true,
    architectureDetails: {
      problem: "Agricultural businesses in West Africa often struggle with fragmented direct-to-consumer sales and opaque pricing for live poultry and bulk produce.",
      solution: "Created an online storefront optimized for high conversion via Mobile Money and instant WhatsApp chat ordering.",
      keyDecisions: [
        "Optimized image delivery for low-bandwidth mobile connections across rural Ghana",
        "Modular product category components for fast seasonal inventory updates"
      ]
    }
  },
  {
    id: "mistore",
    title: "MiStore Retail & Inventory Hub",
    subtitle: "Full-Stack Retail Tracking & Payload CMS",
    category: "fullstack",
    tags: ["Next.js", "TypeScript", "Payload CMS", "Tailwind CSS", "Inventory Management"],
    description: "An inventory and sales tracking web platform engineered for small retail stores, featuring automated stock monitoring, sales reconciliation, and digital receipts.",
    highlights: [
      "Real-time stock auditing and low-inventory threshold notifications",
      "Headless Payload CMS integration for dynamic product catalogs and order management",
      "Companion mobile Flutter app (`MiStore-Flutter`) for in-store barcode scanning and handheld sales"
    ],
    liveUrl: "https://mistore-psi.vercel.app",
    githubUrl: "https://github.com/Bossman-Obboye/mistore",
    isPrivate: true,
    featured: true,
    architectureDetails: {
      problem: "Small retailers struggle with manual paper ledger errors, stock shrinkage, and lack of real-time sales visibility across shifts.",
      solution: "Engineered a unified inventory hub linking a Next.js/Payload CMS web portal with a handheld Flutter mobile client for floor staff.",
      keyDecisions: [
        "Used Payload CMS with TypeScript for end-to-end type safety between database collections and frontend components",
        "Configured edge-cached inventory API endpoints for rapid checkout speeds"
      ]
    }
  },
  {
    id: "ttu-hostel-finder",
    title: "TTU Campus Hostel Finder",
    subtitle: "Student Accommodation & Paystack Booking Portal",
    category: "fullstack",
    tags: ["PHP", "MySQL", "Paystack API", "JavaScript", "PWA Service Worker", "Responsive UI"],
    description: "Campus-wide student accommodation portal built for Takoradi Technical University, allowing students to browse verified private hostels, book rooms, and pay security deposits securely online.",
    highlights: [
      "Direct Paystack payment gateway integration for automated Mobile Money (MTN/Telecel/AirtelTigo) booking fees",
      "Comprehensive multi-role dashboards: Student, Hostel Manager, and Institutional Super Admin",
      "Offline-capable PWA service worker (`sw.js`) and mobile-optimized inspection schedules"
    ],
    githubUrl: "https://github.com/ObboyeBossman/ttu_hostel_finder",
    isPrivate: true,
    featured: false,
    architectureDetails: {
      problem: "TTU tertiary students traditionally walk through surrounding communities to find vacant rooms, facing inflated agent charges and double-booking scams.",
      solution: "Built a verified hostel directory with real-time room availability, photo galleries, and digital payment receipts.",
      keyDecisions: [
        "Integrated Paystack webhook verification ensuring bookings confirm only upon confirmed bank/MoMo settlement",
        "Automated password reset and SMS notification pipelines for managers and students"
      ]
    }
  },
  {
    id: "brayline-cms",
    title: "Brayline Enterprise CMS & Backend",
    subtitle: "Relational Data Management & SQL Engine",
    category: "database",
    tags: ["PLpgSQL", "PostgreSQL", "Database Design", "TypeScript", "Data Integrity"],
    description: "Backend database schemas, procedures, and administration tooling built for high-throughput data operations, constraint enforcement, and audit verification.",
    highlights: [
      "Extensive PLpgSQL stored procedures, triggers, and automated constraint checks",
      "Enterprise audit logging ensuring zero untracked state mutations",
      "Optimized relational indexing for complex analytical queries and multi-join reporting"
    ],
    githubUrl: "https://github.com/ObboyeBossman/brayline-cms-backend",
    isPrivate: false,
    featured: false,
    architectureDetails: {
      problem: "Handling high concurrency data writes without race conditions and data corruption across administrative dashboards.",
      solution: "Engineered database-level constraints and stored procedures in PLpgSQL to enforce business logic before queries touch application code.",
      keyDecisions: [
        "Wrote database functions in PLpgSQL for ACID transaction security",
        "Implemented row versioning and mutation timestamps"
      ]
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Mobile Development (Flutter)",
    icon: "mobile",
    description: "Cross-platform mobile applications for Android & iOS.",
    skills: [
      { name: "Flutter (v3.x)", level: "Advanced", badge: "Core" },
      { name: "Dart", level: "Advanced", badge: "Core" },
      { name: "Flutter Riverpod", level: "Advanced", badge: "State" },
      { name: "Hive & Offline Sync", level: "Advanced" },
      { name: "Biometric Auth (local_auth)", level: "Proficient" },
      { name: "FL Chart & QR Scanning", level: "Proficient" }
    ]
  },
  {
    title: "Cloud & Databases",
    icon: "database",
    description: "Cloud NoSQL, relational modeling, and secure database engines.",
    skills: [
      { name: "Firebase (Firestore, Core)", level: "Advanced", badge: "Cloud NoSQL" },
      { name: "PostgreSQL", level: "Advanced", badge: "Core SQL" },
      { name: "PLpgSQL (Triggers, Functions)", level: "Advanced", badge: "Specialty" },
      { name: "Supabase (Auth, RLS, DB)", level: "Advanced" },
      { name: "Prisma ORM & SQLite", level: "Proficient" },
      { name: "Cloudflare R2 (S3 API)", level: "Proficient" }
    ]
  },
  {
    title: "Frontend & Full-Stack Web",
    icon: "layout",
    description: "Modern web frameworks, state managers, and styling utilities.",
    skills: [
      { name: "Next.js (App Router 15/16)", level: "Advanced", badge: "Core" },
      { name: "TypeScript / JavaScript", level: "Advanced" },
      { name: "Tailwind CSS (v3 / v4)", level: "Advanced" },
      { name: "Paystack Payment Gateway", level: "Proficient" },
      { name: "Progressive Web Apps (PWA)", level: "Proficient" },
      { name: "PHP & REST APIs", level: "Proficient" }
    ]
  },
  {
    title: "Systems Analysis & Engineering",
    icon: "cpu",
    description: "Academic & practical software engineering standards from TTU.",
    skills: [
      { name: "Systems Analysis & Design", level: "Advanced", badge: "TTU Focus" },
      { name: "Role-Based Access Control (RBAC)", level: "Advanced" },
      { name: "Offline-First Architectures", level: "Advanced" },
      { name: "Immutable Audit Trails", level: "Advanced" },
      { name: "Database Normalization (1NF-3NF)", level: "Advanced" },
      { name: "Git & Multi-Account DevOps", level: "Proficient" }
    ]
  }
];

export const ARCHITECTURE_CASE_STUDIES = [
  {
    id: "case-offline-firebase",
    title: "Offline-First Mobile Architecture with Firestore & Hive",
    project: "Official CAC Hymnbook App",
    summary: "How the Flutter Hymnbook achieves zero-lag rendering and 100% offline uptime by decoupling UI from cloud latency using local Hive boxes and background Firestore synchronization.",
    diagram: `
[ Flutter UI (Riverpod ProviderScope) ]
       │
       ▼  (Instant Read / Write <16ms)
[ Local Hive Box (Indexed Storage) ]
       │
       ▲  (Background Bi-directional Sync)
[ Connectivity Listener (Plus / Checker) ]
       │  (Only triggers when online)
       ▼
[ Google Firebase Cloud Firestore ]
  ├── Realtime Hymn Updates
  ├── Categories & Languages (English / Twi)
  └── Global Audio Assets
`,
    points: [
      "Zero network spinners on app launch: UI paints instantly from local Hive boxes",
      "Background stream listens to Cloud Firestore snapshots and updates cache seamlessly",
      "Network-state resilience ensures congregants never face blank screens during church services"
    ]
  },
  {
    id: "case-rbac",
    title: "Multi-Role RBAC & Row Level Security",
    project: "AttendSys",
    summary: "How AttendSys isolates administrative privileges, prevents unauthorized access, and protects student attendance integrity using PostgreSQL RLS.",
    diagram: `
[ Browser Client ]
       │
       ▼  (JWT Bearer with Role Claim)
[ Next.js Edge / Server Actions ]
       │
       ▼  (Auth Context: role, user_id, group_id)
[ Supabase PostgreSQL ]
  ├── RLS Policy: Super Admin -> Full Institution CRUD
  ├── RLS Policy: Lecturer    -> Read/Write assigned courses & active sessions
  ├── RLS Policy: Course Rep  -> Temporary check-in creation for live sessions
  └── RLS Policy: Student     -> Read own attendance & submit dispute tickets
`,
    points: [
      "Zero reliance on client-side authorization: all permissions validated at the database layer with Row Level Security",
      "Dynamic token claims mapping user roles to specific academic groups and cohort levels",
      "Tamper-proof session check-in codes with timed expiration windows"
    ]
  },
  {
    id: "case-audit",
    title: "Immutable Audit Trail & Recovery",
    project: "CACI Hub & AttendSys",
    summary: "Implementing zero-data-loss architecture using database triggers, soft deletes, and immutable JSONB audit log tables.",
    diagram: `
[ Member / User Mutation Request ]
       │
       ▼
[ Prisma / Supabase Transaction ]
  ├── Write Updated Record (deletedAt timestamp for removals)
  │
  └── TRIGGER / AFTER Hook:
        └── INSERT INTO audit_logs (
              id, table_name, record_id, actor_id,
              action_type, old_data, new_data, created_at
            )
`,
    points: [
      "Every status change, member archive, or attendance dispute is stamped with the actor's ID and timestamp",
      "Soft delete pattern preserves historical relational linkages so reports never break",
      "Full rollback capability for administrative errors without manual database restores"
    ]
  },
  {
    id: "case-seeding",
    title: "Realistic 3-Year Institutional Data Simulator",
    project: "AttendSys",
    summary: "Building an automated TypeScript seed engine that generates three academic years of coherent university cohorts and historical attendance.",
    diagram: `
[ scripts/seed-full.ts ]
  ├── 1. Generates 3 Academic Years & 6 Semesters (5 archived, 1 active)
  ├── 2. Seeds 10 Lecturers & 12 Program Groups (Levels 100 - 300)
  ├── 3. Enrolls 170+ Students with generated institutional emails
  ├── 4. Simulates 10 Sessions per course per archived semester
  └── 5. Generates realistic distribution: ~75% present, ~10% late, ~15% absent
`,
    points: [
      "Provides realistic stress testing for analytical queries, aggregation formulas, and charts",
      "Includes realistic edge cases: attendance disputes, course changes, and password reset workflows",
      "Reproducible with a single CLI command: \`npx tsx scripts/seed-full.ts\`"
    ]
  }
];

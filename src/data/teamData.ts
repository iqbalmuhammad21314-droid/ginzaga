import { TeamMember } from '../types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'iqbal-nurhafidz',
    name: 'Mochamad Iqbal Nurhafidz',
    role: 'Front-End',
    department: 'Pengembangan Front-End',
    location: 'Bandung, Indonesia',
    yearsOfExperience: 3,
    bio: 'Fokus pada pengembangan antarmuka web modern yang responsif dan berkinerja tinggi. Berpengalaman membangun aplikasi dengan React, TypeScript, dan Tailwind CSS.',
    quote: 'Antarmuka yang baik adalah antarmuka yang terasa efektif, intuitif, dan cepat.',
    skills: ['React', 'TypeScript', 'Next.js', 'HTML & CSS', 'Tailwind CSS', 'Testing (Jest, RTL)'],
    tools: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite', 'Jest'],
    photoUrl: '/assets/iqbal.jfif',
    email: 'miqbalnurhafidz@gmail.com',
    socials: {
      linkedin: 'https://linkedin.com/in/',
      github: 'https://github.com/',
      twitter: 'https://twitter.com/',
      website: 'https://'
    },
    keyHighlights: [
      'Membangun aplikasi SPA responsif dengan React dan TypeScript yang mendukung pengalaman pengguna lancar',
      'Mengembangkan dan memelihara component library berbasis design tokens untuk konsistensi UI',
      'Mengoptimalkan performa front-end (bundling, lazy-loading, dan perbaikan Core Web Vitals)'
    ],
    education: [
      { degree: 'S1 Teknik Informatika', institution: 'Universitas Komputer Indonesia (UNIKOM)', years: '2023 - sekarang' }
    ],
    experience: [
      { title: 'Front-End Developer Intern', company: 'iCraftDS ', years: '2026', notes: 'Mengembangkan fitur front-end dan mendukung pembentukan design system.' }
    ],
    organizations: [
      { role: 'Anggota', organization: 'Himpunan Mahasiswa Teknik Informatika UNIKOM', years: '2024 - sekarang' }
    ],
    projects: [
      {
        title: 'PENGEMBANGAN SISTEM KASIR DAN MANAJEMEN INVENTORI (POINT OF SALES) BERBASIS WEB UNTUK KEDAI KOPI',
        category: 'Point of Sale (POS)',
        description: 'Merancang dan membangun sistem kasir berbasis web untuk kedai kopi, mencakup transaksi penjualan, manajemen stok, laporan penjualan, serta integrasi metode pembayaran dan printer struk.',
        year: '2025',
        metrics: 'Mempercepat proses checkout hingga 60% dan mengurangi kesalahan stok hingga 90%',
        tags: ['React', 'TypeScript', 'POS', 'Inventory']
      },
      {
        title: 'Audit & Peningkatan Aksesibilitas',
        category: 'Aksesibilitas',
        description: 'Melakukan audit aksesibilitas end-to-end dan menerapkan perbaikan untuk mencapai WCAG AA pada alur pengguna kritis.',
        year: '2026',
        metrics: 'Mencapai WCAG AA pada 5 alur utama; menurunkan masalah navigasi keyboard hingga 80%',
        tags: ['A11y', 'Lighthouse', 'Testing']
      }
    ]
  },
  {
    id: 'fariz-rahman-hakim',
    name: 'Fariz Rahman Hakim',
    role: 'UI/UX',
    department: 'Desain & Pengalaman Pengguna',
    location: 'Bandung, Indonesia',
    yearsOfExperience: 3,
    bio: 'Saya adalah mahasiswa Teknik Informatika yang memiliki ketertarikan pada UI/UX Design dan pengembangan produk digital. Saya senang mengubah ide menjadi tampilan antarmuka yang sederhana, informatif, dan mudah digunakan. Saat mengerjakan sebuah desain, saya berusaha memahami kebutuhan pengguna sebelum menentukan solusi yang tepat.',
    quote: 'Menciptakan desain yang sederhana, fungsional, dan mudah digunakan.',
    skills: ['UX Research', 'Prototyping', 'Figma', 'Design Systems', 'Aksesibilitas'],
    tools: ['Figma', 'Miro', 'Framer', 'Principle'],
    photoUrl: '/assets/fariz.jpeg',
    email: '',
    socials: { linkedin: 'https://linkedin.com/in/', twitter: 'https://twitter.com/', website: 'https://' },
    keyHighlights: [
      'Berhasil mengembangkan antarmuka website Fidzzmedia yang responsif',
      'Mengimplementasikan katalog produk dan alur pemesanan pada platform web',
      'Mengintegrasikan tampilan frontend dengan sistem autentikasi dan fitur aplikasi'
    ],
    projects: [
      {
        title: 'Fidzzmedia Web Platform',
        category: 'Web Development',
        description: 'Platform web untuk digitalisasi pemesanan produk pakaian dan merchandise custom. Dikembangkan untuk membantu pelanggan melihat katalog, melakukan pemesanan, serta memantau proses produksi secara lebih terstruktur.',
        year: '2026',
        metrics: 'Proses pemesanan lebih terstruktur dan mudah diakses',
        tags: ['WebDevelopment', 'Frontend', 'ResponsiveUI']
      },
      {
        title: 'CloudNote',
        category: 'Cloud Application',
        description: 'Aplikasi pencatatan berbasis cloud yang dirancang untuk membantu pengguna menyimpan, mengelola, dan mengakses catatan secara lebih praktis.',
        year: '2026',
        metrics: 'Mempermudah pengelolaan dan akses catatan secara terpusat',
        tags: ['CloudComputing', 'WebApplication', 'Database']
      }
    ],
    education: [
      { degree: 'S1 Teknik Informatika', institution: 'Universitas Komputer Indonesia (UNIKOM)', years: '2023 - sekarang' }
    ],
    experience: [
      { title: 'UI/UX Intern', company: 'iCraftDS', years: '2026', notes: 'Prototyping, user testing, dan pembuatan design system.' }
    ],
    organizations: [
      { role: 'Anggota', organization: 'Organisasi siswa', years: '2022 - 2023' }
    ]
  },
  {
    id: 'rizky-raditya',
    name: 'Mochamad Rizky Raditya Pratama',
    role: 'Back-End Developer',
    department: 'Pengembangan Back-End',
    location: 'Bandung, Indonesia',
    yearsOfExperience: 2,
    bio: 'Berfokus pada perancangan arsitektur sistem, pengelolaan database relasional, dan pengembangan API yang andal. Memiliki pengalaman bekerja dengan ekosistem PHP (Laravel) serta analisis data menggunakan Python.',
    quote: 'Layanan backend dan struktur data yang baik adalah fondasi dari pengalaman pengguna yang stabil dan terukur.',
    skills: ['PHP', 'Laravel', 'API Design', 'MySQL', 'Python', 'System Architecture'],
    tools: ['Laravel', 'MySQL', 'Postman', 'Python', 'Git'],
    photoUrl: '/assets/rizky.jpeg',
    email: 'radityar500@gmail.com',
    socials: { linkedin: 'www.linkedin.com/in/mochamad-rizky-raditya-763156292', github: 'https://github.com/rizkyraditya1625' },
    keyHighlights: [
      'Membangun arsitektur backend, sistem autentikasi, dan API transaksi terproteksi untuk platform web Fidzzmedia',
      'Merancang skema database relasional dan Data Flow Diagram (DFD) untuk aplikasi reservasi tiket BuSinAja',
      'Menyusun spesifikasi teknis dan implementasi model machine learning (MobileNetV2) untuk prototipe IoT pemilah sampah'
    ],
    education: [
      {
        degree: 'S1 Teknik Informatika',
        institution: 'Universitas Komputer Indonesia (UNIKOM)',
        years: '2023 - sekarang'
      }
    ],
    experience: [
      { title: 'Junior Backend Engineer', company: 'TechNusantara', years: '2022 - 2023' },
      { title: 'Fullstack Developer Intern', company: 'iCraftDS', years: '2026' }
    ],
    organizations: [
      { role: 'Anggota', organization: 'Organisasi siswa', years: '2021 - 2023' }
    ],
    projects: [
      {
        title: 'Platform Web Konveksi Fidzzmedia',
        category: 'Pengembangan Backend',
        description: 'Pengembangan infrastruktur backend untuk platform konveksi, meliputi implementasi sistem routing, pengamanan akses halaman transaksi, dan manajemen autentikasi berbasis sesi.',
        year: '2026',
        metrics: 'Membangun fungsionalitas inti untuk mendukung alur pemesanan digital end-to-end, pelacakan produksi real-time, dan riwayat pesanan',
        tags: ['Backend Development', 'API Design', 'PHP', 'Laravel', 'Web Security']
      },
      {
        title: 'Aplikasi Reservasi Tiket BuSinAja',
        category: 'Arsitektur Sistem & Database',
        description: 'Perancangan arsitektur sistem menyeluruh, pemodelan Data Flow Diagram (DFD), dan penyusunan skema relasi tabel database untuk aplikasi pemesanan tiket bus.',
        year: '2025',
        metrics: 'Memodelkan struktur data logis untuk mendukung integrasi pemesanan tiket dan jadwal keberangkatan',
        tags: ['System Architecture', 'Database Design', 'DFD', 'Relational Database']
      },
      {
        title: 'Prototipe IoT Pemilah Sampah Eco-Sort',
        category: 'Machine Learning & IoT',
        description: 'Penyusunan proposal teknis dan pengembangan sistem untuk prototipe alat pemilah sampah otomatis menggunakan Raspberry Pi dan arsitektur pendeteksi objek MobileNetV2.',
        year: '2026',
        metrics: 'Mengintegrasikan kemampuan komputasi perangkat keras dengan model klasifikasi objek',
        tags: ['Python', 'Machine Learning', 'MobileNetV2', 'Raspberry Pi']
      }
    ]
  }
];

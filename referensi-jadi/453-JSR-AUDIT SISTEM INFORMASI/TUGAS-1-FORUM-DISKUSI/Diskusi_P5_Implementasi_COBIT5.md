# Forum Diskusi Pertemuan 5 — Implementasi COBIT 5
## Audit Sistem Informasi (453) | Roki Anjas — 11250066

---

## Topik Diskusi: Penerapan COBIT 5 dan Perbedaannya dengan COBIT 4

### Pendapat Saya

Pertemuan ini membuka wawasan tentang bagaimana COBIT berevolusi dari versi 4 ke versi 5, khususnya dalam hal metodologi perhitungan maturity level yang jauh lebih terstruktur. COBIT 5 memperkenalkan beberapa konsep baru yang menjadi fondasi bagi COBIT 2019, yaitu Capability Level berbasis ISO/IEC 15504 dan rating scale N/P/L/F.

Yang paling mencolok adalah pergeseran paradigma dari **IT Governance** (COBIT 4) menjadi **Enterprise Governance of IT** (COBIT 5). Ini berarti COBIT 5 tidak lagi memandang TI secara terpisah, melainkan sebagai bagian integral dari tata kelola organisasi secara keseluruhan.

### Evolusi Domain: COBIT 4 vs COBIT 5

Perubahan domain dari COBIT 4 ke COBIT 5 sangat signifikan:

| COBIT 4 | → | COBIT 5 |
|---------|:-:|---------|
| PO (Planning & Organize) | → | APO (Align, Plan & Organize) |
| AI (Acquire & Implement) | → | BAI (Build, Acquire & Implement) |
| DS (Deliver & Support) | → | DSS (Deliver, Service & Support) |
| ME (Monitor & Evaluate) | → | MEA (Monitor, Evaluate & Assess) |
| *(tidak ada)* | → | **EDM (Evaluate, Direct & Monitor)** |

Penambahan domain **EDM** adalah perubahan paling penting karena ini memisahkan aktivitas **governance** (EDM) dari aktivitas **management** (APO, BAI, DSS, MEA). Pemisahan ini sesuai dengan prinsip COBIT 5 yang menegaskan bahwa tata kelola dan manajemen adalah dua hal yang berbeda.

### Metodologi Perhitungan COBIT 5

Perhitungan maturity level COBIT 5 lebih kompleks dibandingkan COBIT 4:

**Langkah 1: Indeks Kuesioner**
```
Indeks Kuesioner = Σ Jawaban Kuesioner / Σ Pertanyaan (Domain Proses)
```

**Langkah 2: Maturity Index**
```
Maturity Index = (% WP Aktual / WP Standar) × Indeks Kuesioner
```

**Langkah 3: Maturity Level**
```
Maturity Level = Σ Maturity Index / Jumlah Sub-domain
```

**Langkah 4: Rating**
```
% Ketercapaian = (Maturity Level / Skala Maksimal) × 100%
Rating: N (0-15%), P (>15-50%), L (>50-85%), F (>85-100%)
```

Konsep **Weight Point (WP) Standar** adalah pembeda utama COBIT 5. WP memberikan bobot yang terstandar (0.33) untuk setiap level capability, sehingga perhitungan menjadi lebih objektif dan terukur dibandingkan COBIT 4 yang hanya menggunakan rata-rata biasa.

### Analisis Studi Kasus Universitas Karya Digital

Dari studi kasus yang dibahas, beberapa temuan penting:

1. **Maturity Level keseluruhan = 2.875** dengan rating L (Largely Achieved, 57.50%). Ini berarti organisasi sudah menjalankan proses TI dengan cukup baik tapi belum optimal.

2. **BAI05 (Pemberdayaan Perubahan) memiliki skor terendah (2.55)**. Ini sangat umum di perguruan tinggi karena resistensi terhadap perubahan sistem akademik sering kali tinggi, baik dari dosen maupun staf administrasi.

3. **GAP seragam (1.125)** di semua sub-domain, menunjukkan bahwa masalah bersifat sistemik — bukan pada satu area tertentu, melainkan pada keseluruhan proses yang perlu distandarisasi.

### Perbandingan Kritis: COBIT 4 vs COBIT 5

| Aspek | COBIT 4 | COBIT 5 |
|-------|---------|---------|
| Fokus | IT Governance | Enterprise Governance of IT |
| Domain | 4 domain, 34 proses | 5 domain, 37 proses |
| Skala Kuesioner | 0–5 | 1–5 (Likert) |
| Perhitungan | Rata-rata sederhana | WP Standar + Maturity Index |
| Rating | Tidak ada | N/P/L/F |
| Capability Level | Maturity Level langsung | Melalui rating scale |
| Prinsip | Tidak eksplisit | 5 prinsip |

### Kapan Menggunakan COBIT 5?

Menurut pendapat saya, COBIT 5 cocok digunakan ketika:
- Organisasi sudah pernah diaudit dengan COBIT 4 dan ingin meningkatkan kedalaman analisis
- Diperlukan pemisahan governance dan management yang jelas
- Organisasi membutuhkan standar rating (N/P/L/F) untuk benchmarking
- Skala organisasi menengah hingga besar

Namun untuk organisasi yang baru memulai, COBIT 2019 mungkin lebih tepat karena sudah mengakomodasi semua fitur COBIT 5 plus fleksibilitas design factors.

---

*Referensi: ISACA. (2012). COBIT 5: A Business Framework for the Governance and Management of Enterprise IT. ISACA.*

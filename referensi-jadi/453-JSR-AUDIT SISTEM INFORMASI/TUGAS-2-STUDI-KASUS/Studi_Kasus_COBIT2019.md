# Studi Kasus Implementasi COBIT 2019
## Audit Sistem Informasi — Pertemuan 6

---

## Studi Kasus: RS Bunda Medika

### Profil Organisasi
RS Bunda Medika merupakan rumah sakit swasta tipe B yang terletak di Jakarta Selatan dengan kapasitas 200 tempat tidur. Rumah sakit ini telah mengimplementasikan Sistem Informasi Manajemen Rumah Sakit (SIMRS) untuk mengelola seluruh proses operasional, mulai dari pendaftaran pasien, rekam medis elektronik, farmasi, hingga sistem keuangan. Seiring dengan meningkatnya ketergantungan terhadap SIMRS dan pertumbuhan volume data pasien, manajemen RS Bunda Medika memutuskan untuk melakukan audit tata kelola TI guna memastikan keamanan data pasien dan keandalan sistem.

### Framework yang Digunakan
**COBIT 2019** dengan domain yang dipilih berdasarkan kebutuhan keamanan data rumah sakit:

| No | Domain | Nama | Alasan Pemilihan |
|----|--------|------|------------------|
| 1 | EDM03 | Ensured Risk Optimisation | Pengelolaan risiko TI terkait data pasien |
| 2 | APO12 | Managed Risk | Manajemen risiko operasional SIMRS |
| 3 | APO13 | Managed Security | Keamanan data rekam medis elektronik |
| 4 | DSS05 | Managed Security Services | Layanan keamanan infrastruktur TI rumah sakit |

### RACI Matrix

| Aktivitas | Direktur RS | Ka. IT | Staff IT | Ka. Instalasi | Dokter | Admin |
|-----------|:----------:|:------:|:--------:|:-------------:|:------:|:-----:|
| Optimisasi Risiko (EDM03) | **A** | R | C | I | I | I |
| Manajemen Risiko (APO12) | I | **A** | **R** | C | I | I |
| Kebijakan Keamanan (APO13) | **A** | **R** | R | C | I | I |
| Layanan Keamanan (DSS05) | I | **A** | **R** | I | C | I |

### Kuesioner dan Responden
Kuesioner disebarkan kepada **8 responden** internal RS Bunda Medika:

| No | Jabatan | Jumlah |
|----|---------|:------:|
| 1 | Direktur / Wakil Direktur | 1 |
| 2 | Kepala Divisi IT | 1 |
| 3 | Staff IT / Programmer | 2 |
| 4 | Kepala Instalasi | 1 |
| 5 | Dokter (User SIMRS) | 2 |
| 6 | Staff Administrasi | 1 |

Skala: **1–5** (STS=1, TS=2, R=3, S=4, SS=5)

### Perhitungan Capability Level

#### Domain EDM03 — Ensured Risk Optimisation

**Level 1 — Performed Process:**

| No | Pernyataan | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | Total | Mean |
|----|-----------|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:-----:|:----:|
| 1 | Risiko TI terkait data pasien telah diidentifikasi | 4 | 4 | 4 | 3 | 3 | 3 | 3 | 3 | 27 | 3.38 |
| 2 | Terdapat evaluasi dampak risiko terhadap layanan RS | 4 | 4 | 3 | 3 | 3 | 3 | 3 | 3 | 26 | 3.25 |
| 3 | Risiko TI dikomunikasikan kepada pihak terkait | 4 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 25 | 3.13 |

**Rata-rata Level 1 = (3.38 + 3.25 + 3.13) / 3 = 3.25**

**Level 2 — Managed Process:**

| No | Pernyataan | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | Total | Mean |
|----|-----------|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:-----:|:----:|
| 4 | Terdapat perencanaan pengelolaan risiko TI | 4 | 4 | 3 | 3 | 3 | 3 | 3 | 3 | 26 | 3.25 |
| 5 | Risiko TI dipantau dan dilaporkan berkala | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 2 | 23 | 2.88 |
| 6 | Evaluasi pengelolaan risiko dilakukan rutin | 3 | 3 | 3 | 3 | 3 | 3 | 2 | 2 | 22 | 2.75 |

**Rata-rata Level 2 = (3.25 + 2.88 + 2.75) / 3 = 2.96**

**Level 3 — Established Process:**

| No | Pernyataan | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | Total | Mean |
|----|-----------|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:-----:|:----:|
| 7 | Terdapat prosedur standar pengelolaan risiko | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 2 | 23 | 2.88 |
| 8 | Prosedur diterapkan konsisten di seluruh unit | 3 | 3 | 3 | 3 | 2 | 3 | 2 | 2 | 21 | 2.63 |
| 9 | Dokumentasi formal kebijakan risiko tersedia | 3 | 3 | 3 | 3 | 2 | 2 | 2 | 2 | 20 | 2.50 |

**Rata-rata Level 3 = (2.88 + 2.63 + 2.50) / 3 = 2.67**

**Perhitungan Capability Level EDM03:**

| Level | Mean | % Ketercapaian | Rating |
|-------|:----:|:--------------:|:------:|
| Level 1 | 3.25 | (3.25/5) × 100% = **65.00%** | **L** |
| Level 2 | 2.96 | (2.96/5) × 100% = **59.17%** | **L** |
| Level 3 | 2.67 | (2.67/5) × 100% = **53.33%** | **L** |

**Capability Level EDM03 = Level 3** (Established Process) ✅

---

#### Domain APO12 — Managed Risk

| Level | Mean | % Ketercapaian | Rating |
|-------|:----:|:--------------:|:------:|
| Level 1 | 3.33 | **66.67%** | **L** |
| Level 2 | 2.88 | **57.50%** | **L** |
| Level 3 | 2.54 | **50.83%** | **L** |

**Capability Level APO12 = Level 3** (Established Process) ✅

---

#### Domain APO13 — Managed Security

| Level | Mean | % Ketercapaian | Rating |
|-------|:----:|:--------------:|:------:|
| Level 1 | 3.42 | **68.33%** | **L** |
| Level 2 | 2.92 | **58.33%** | **L** |
| Level 3 | 2.58 | **51.67%** | **L** |

**Capability Level APO13 = Level 3** (Established Process) ✅

---

#### Domain DSS05 — Managed Security Services

| Level | Mean | % Ketercapaian | Rating |
|-------|:----:|:--------------:|:------:|
| Level 1 | 3.50 | **70.00%** | **L** |
| Level 2 | 2.83 | **56.67%** | **L** |
| Level 3 | 2.50 | **50.00%** | **P** |

**Capability Level DSS05 = Level 2** (Managed Process)

> Level 3 hanya mencapai 50.00% yang masuk kategori P (Partially Achieved) karena berada tepat di batas bawah. Sehingga DSS05 hanya mencapai Level 2.

---

### Ringkasan Capability Level dan GAP Analysis

| No | Domain | Capability Level (As-is) | Target (To-be) | GAP |
|----|--------|:------------------------:|:--------------:|:---:|
| 1 | EDM03 | **3** (Established) | **4** (Predictable) | **1** |
| 2 | APO12 | **3** (Established) | **4** (Predictable) | **1** |
| 3 | APO13 | **3** (Established) | **4** (Predictable) | **1** |
| 4 | DSS05 | **2** (Managed) | **4** (Predictable) | **2** |

### Interpretasi Hasil

Tiga dari empat domain yang diaudit (EDM03, APO12, APO13) berada pada **Capability Level 3 (Established Process)**, yang menunjukkan bahwa RS Bunda Medika telah memiliki prosedur yang terdefinisi dan diterapkan secara konsisten, meskipun masih perlu ditingkatkan ke level yang terukur secara kuantitatif.

Sementara itu, domain DSS05 (Managed Security Services) berada pada **Capability Level 2 (Managed Process)** dengan GAP terbesar (2 level), yang mengindikasikan bahwa implementasi teknis layanan keamanan TI masih memerlukan standarisasi prosedur yang lebih formal.

### Rekomendasi Perbaikan

**EDM03, APO12, APO13 (GAP = 1, menuju Level 4):**
1. Menetapkan metrik pengukuran kinerja kuantitatif untuk setiap proses tata kelola risiko dan keamanan
2. Menerapkan dashboard monitoring real-time untuk memantau risiko dan insiden keamanan
3. Melakukan benchmarking dengan standar industri rumah sakit (misalnya HIPAA compliance)

**DSS05 (GAP = 2, menuju Level 4):**
1. Prioritas pertama: menyusun prosedur standar layanan keamanan TI yang terdokumentasi secara formal
2. Menjadwalkan audit keamanan internal secara berkala (minimal per semester)
3. Menerapkan sistem pelaporan insiden keamanan otomatis
4. Mengimplementasikan penetration testing dan vulnerability assessment secara periodik
5. Menetapkan KPI keamanan: jumlah insiden per bulan, waktu respons, tingkat kepatuhan

---

*Studi kasus ini menunjukkan penerapan perhitungan Capability Level COBIT 2019 dengan RACI Matrix, kuesioner skala 1–5, perhitungan Mean, % Ketercapaian, Rating Scale N/P/L/F, dan GAP Analysis.*

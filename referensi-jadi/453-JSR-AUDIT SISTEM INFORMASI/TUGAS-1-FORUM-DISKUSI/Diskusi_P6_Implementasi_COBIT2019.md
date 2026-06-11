# Forum Diskusi Pertemuan 6 — Implementasi COBIT 2019
## Audit Sistem Informasi (453) | Roki Anjas — 11250066

---

## Topik Diskusi: COBIT 2019 — Framework Terkini untuk Audit SI

### Pendapat Saya

COBIT 2019 merupakan versi terbaru dan paling komprehensif dari framework COBIT yang dikembangkan oleh ISACA. Dirilis pada akhir 2018, COBIT 2019 membawa perubahan paradigma yang signifikan dibandingkan pendahulunya. Bagi saya sebagai praktisi di bidang IT, framework ini terasa paling relevan karena dirancang untuk mengakomodasi dinamika teknologi masa kini termasuk cloud computing, big data, dan transformasi digital.

Hal yang paling menonjol dari COBIT 2019 adalah pengenalan **design factors** yang memungkinkan setiap organisasi menyesuaikan implementasi framework sesuai konteks dan kebutuhannya. Ini menjawab kritik terhadap COBIT 5 yang dianggap terlalu rigid dan one-size-fits-all.

### Pembaruan pada COBIT 2019

Beberapa pembaruan kunci dibandingkan COBIT 5:

| Aspek | COBIT 5 | COBIT 2019 |
|-------|---------|------------|
| Prinsip | 5 prinsip | **6 prinsip** |
| Proses | 37 proses | **40 proses** (5 Gov + 35 Mgmt) |
| Basis Capability | ISO/IEC 15504 | **CMMI** |
| Customization | Terbatas | **Design Factors** |
| Integrasi | Standalone | **Mengintegrasikan ITIL, TOGAF, CMMI** |

### RACI Matrix — Mendefinisikan Peran dengan Jelas

Salah satu komponen yang menurut saya paling powerful dalam COBIT 2019 adalah **RACI Matrix**. Dalam praktik nyata di perusahaan tempat saya bekerja, saya sering melihat tumpang tindih tanggung jawab yang menyebabkan inefisiensi. RACI memberikan kerangka yang sangat jelas:

- **R (Responsible)** — Siapa yang mengerjakan? Ini adalah pelaksana teknis yang secara langsung menyelesaikan tugas.
- **A (Accountable)** — Siapa yang bertanggung jawab atas keputusan? Hanya boleh ada satu orang per aktivitas. Orang ini memberikan arahan dan menanggung akibat dari hasil aktivitas.
- **C (Consulted)** — Siapa yang dimintai pendapat? Komunikasi dua arah — pendapatnya dipertimbangkan sebelum pengambilan keputusan.
- **I (Informed)** — Siapa yang perlu diberitahu? Komunikasi satu arah — hanya diberi tahu tentang hasil atau perkembangan.

Contoh penerapan RACI untuk kebijakan keamanan TI di sebuah perusahaan:

| Aktivitas | Direktur | Ka. IT | Staff IT | Ka. Divisi | User |
|-----------|:--------:|:------:|:--------:|:----------:|:----:|
| Kebijakan Keamanan | **A** | **R** | R | C | I |
| Monitoring Risiko | I | **A** | **R** | C | I |
| Backup Data | I | **A** | **R** | I | I |
| Pelatihan User | I | **R** | C | **A** | I |

### Perhitungan Capability Level COBIT 2019

Perhitungan capability level pada COBIT 2019 memiliki langkah yang lebih terstruktur:

**Langkah 1:** Hitung skor total per pertanyaan dari seluruh responden
**Langkah 2:** Hitung Mean (rata-rata) per pertanyaan
**Langkah 3:** Hitung % Ketercapaian per pertanyaan
```
% Ketercapaian = (Mean / Skor Maksimal) × 100%
```
**Langkah 4:** Hitung rata-rata % ketercapaian per level
**Langkah 5:** Tentukan rating berdasarkan threshold:

| Rating | Rentang | Makna |
|:------:|:-------:|-------|
| **N** | 0–15% | Not Achieved — proses hampir tidak ada |
| **P** | >15–50% | Partially Achieved — ada tapi belum memadai |
| **L** | >50–85% | Largely Achieved — cukup baik tapi butuh peningkatan |
| **F** | >85–100% | Fully Achieved — sudah optimal |

**Langkah 6:** Tentukan Capability Level = Level tertinggi yang mencapai minimal rating **L**

Yang membedakan COBIT 2019 dari COBIT 5 adalah penggunaan **CMMI (Capability Maturity Model Integration)** sebagai basis penilaian, bukan lagi ISO/IEC 15504. CMMI dikenal lebih fleksibel dan sudah diakui secara internasional dalam berbagai industri.

### Analisis Studi Kasus RS Bunda Medika

Studi kasus COBIT 2019 pada RS Bunda Medika memberikan beberapa pembelajaran berharga:

1. **3 dari 4 domain mencapai Level 3 (Established Process)** — EDM03, APO12, APO13. Ini menunjukkan praktik keamanan dan risiko yang sudah cukup baik untuk sebuah rumah sakit.

2. **DSS05 hanya mencapai Level 2** karena Level 3 mendapat % ketercapaian tepat 50% yang masuk rating P (bukan L). Ini menarik karena menunjukkan bahwa **1% saja bisa menentukan perbedaan level** — pentingnya setiap detail dalam audit.

3. **RACI Matrix** sangat berguna dalam konteks rumah sakit karena ada banyak stakeholder (Direktur, Ka. IT, Dokter, Perawat, Admin) yang perannya harus jelas.

### Design Factors — Keunggulan COBIT 2019

Konsep design factors memungkinkan customization yang tidak ada di COBIT 5:
- **Strategi enterprise** — bagaimana TI mendukung strategi bisnis
- **Tujuan enterprise** — alignment TI dengan tujuan organisasi
- **Profil risiko** — tingkat risiko yang dihadapi
- **Isu terkait TI** — masalah spesifik yang dihadapi
- **Threat landscape** — ancaman keamanan yang relevan
- **Compliance requirements** — regulasi yang harus dipatuhi
- **Peran IT** — support, factory, turnaround, atau strategic
- **Sourcing model** — internal, outsource, atau hybrid

### Refleksi Pribadi

Sebagai seorang web developer yang juga menangani aspek keamanan dan infrastruktur, saya merasa COBIT 2019 adalah framework yang paling relevan untuk audit SI saat ini. Kemampuannya untuk di-customize melalui design factors membuatnya applicable untuk berbagai jenis organisasi, dari startup hingga korporasi besar. Untuk project akhir kelompok kami, kami pun memilih COBIT 2019 karena menawarkan kerangka analisis yang paling komprehensif dan up-to-date.

---

*Referensi: ISACA. (2018). COBIT 2019 Framework: Governance and Management Objectives. ISACA.*
*Referensi: Algiffary, M.A., et al. (2023). Audit Keamanan SIM-RS Menggunakan Framework COBIT 2019. JACOST, 4(1).*

# Forum Diskusi Pertemuan 7 — Review & Sintesis Semua Materi
## Audit Sistem Informasi (453) | Roki Anjas — 11250066

---

## Topik Diskusi: Sintesis Materi Audit SI Pertemuan 1–7

### Pendapat Saya

Pertemuan ke-7 ini menjadi momen refleksi yang sangat penting karena kita diminta untuk menyintesis seluruh materi yang telah dipelajari dari pertemuan 1 hingga 6. Setelah melalui perjalanan dari konsep dasar audit SI hingga implementasi tiga versi COBIT, saya mendapatkan pemahaman yang utuh tentang bagaimana audit sistem informasi bekerja dalam konteks nyata.

### Peta Besar Materi Audit SI

Jika saya harus menggambarkan keseluruhan materi dalam satu alur logis, maka urutannya adalah:

```
Konsep Dasar Audit SI (P1)
    ↓
Tata Kelola TI & Maturity Model (P2)
    ↓
Framework COBIT — Teori (P3)
    ↓
Implementasi COBIT 4 (P4) → COBIT 5 (P5) → COBIT 2019 (P6)
    ↓
Sintesis & Kesiapan Audit Nyata (P7)
```

Alur ini menunjukkan bahwa mata kuliah Audit SI dirancang secara progresif: dari **"apa itu audit?"** hingga **"bagaimana melakukan audit?"**. Pendekatan ini sangat efektif untuk membangun kompetensi secara bertahap.

### Perbandingan Komprehensif Tiga Versi COBIT

Setelah mempelajari ketiga versi COBIT secara mendalam, berikut adalah perbandingan yang menurut saya paling kritis untuk dipahami:

| Aspek | COBIT 4 (2005) | COBIT 5 (2012) | COBIT 2019 (2018) |
|-------|:--------------:|:--------------:|:-----------------:|
| **Fokus** | IT Governance | Enterprise Gov. of IT | Adaptive & Flexible |
| **Domain** | 4 (PO, AI, DS, ME) | 5 (EDM, APO, BAI, DSS, MEA) | 5 (sama + 3 proses baru) |
| **Proses** | 34 | 37 | 40 |
| **Prinsip** | Tidak eksplisit | 5 | 6 |
| **Skala Kuesioner** | 0–5 | 1–5 | 1–5 (Likert) |
| **Perhitungan** | Rata-rata | WP Standar + Index | Mean + % Ketercapaian |
| **Rating** | Tidak ada | N/P/L/F | N/P/L/F |
| **Basis** | — | ISO/IEC 15504 | CMMI |
| **Customization** | Tidak ada | Terbatas | Design Factors |

### Evolusi Perhitungan: Dari Sederhana ke Terstruktur

Salah satu insight terpenting dari 7 pertemuan ini adalah bagaimana perhitungan maturity/capability level berevolusi:

**COBIT 4 — Pendekatan Rata-rata Sederhana**
```
Maturity Level = Rata-rata skor responden per domain
→ Mudah dihitung tapi kurang presisi
```

**COBIT 5 — Pendekatan WP Standar**
```
Indeks Kuesioner → Maturity Index → Maturity Level → Rating
→ Lebih presisi tapi perhitungan lebih kompleks
```

**COBIT 2019 — Pendekatan Berlapis (Multi-Level Assessment)**
```
Skor → Mean → % Ketercapaian per Level → Rating per Level → Capability Level
→ Paling presisi karena menilai setiap level secara independen
```

Yang membuat COBIT 2019 unggul adalah konsep **penilaian per level**. Tidak seperti COBIT 4 yang langsung menentukan level dari rata-rata, COBIT 2019 menilai apakah setiap level (1, 2, 3, dst.) benar-benar tercapai sebelum naik ke level berikutnya. Ini lebih akurat dan mencegah "inflasi maturity".

### Konsep Kritis yang Harus Dikuasai

Berdasarkan review seluruh materi, berikut konsep yang menurut saya paling kritis untuk dikuasai menjelang quiz dan UTS:

**1. Maturity Level 0–5:**
- 0 = Non Existent, 1 = Initial, 2 = Repeatable, 3 = Defined, 4 = Managed, 5 = Optimised
- Level 4 ditandai dengan **pengukuran kuantitatif**, Level 5 dengan **best practice penuh**

**2. Rating Scale N/P/L/F:**
- N = 0–15%, P = >15–50%, L = >50–85%, F = >85–100%
- Capability Level = level tertinggi yang minimal mencapai **L** (Largely Achieved)

**3. RACI Matrix:**
- R = mengerjakan, A = bertanggung jawab (hanya 1 per aktivitas), C = dimintai pendapat, I = diberitahu

**4. GAP Analysis:**
- GAP = To-be (Expected) – As-is (Current)
- Selalu positif (target harus lebih tinggi dari kondisi saat ini)

**5. Model Tata Kelola:**
- ITIL = IT Service Management
- COSO = Kontrol Internal & Pelaporan Keuangan (5 komponen)
- ISO/IEC 17789 = Keamanan Informasi (CIA Triad)
- COBIT = Tata Kelola TI Komprehensif

### Refleksi: Apa yang Berubah dari Pemahaman Saya?

Sebelum mengikuti mata kuliah ini, saya mengira audit SI hanya tentang "mengecek apakah sistem aman". Ternyata audit SI jauh lebih luas dari itu — mencakup:

1. **Governance vs Management** — Dua sisi mata uang yang harus seimbang
2. **Maturity sebagai spektrum** — Bukan hitam-putih "baik/buruk", tapi kontinum dari level 0 sampai 5
3. **Framework sebagai kompas** — COBIT memberikan arah, bukan jawaban absolut
4. **GAP sebagai peluang** — Gap bukan kegagalan, tapi peta jalan menuju perbaikan
5. **RACI untuk akuntabilitas** — Tata kelola hanya efektif jika peran dan tanggung jawab jelas

### Kesiapan untuk Project Akhir

Semua materi dari P1-P7 menjadi fondasi yang kuat untuk project akhir kelompok kami. Kami memilih **COBIT 2019** untuk mengaudit PT. Murni Solusindo Nusantara karena:
- Framework paling up-to-date dan komprehensif
- Capability level berbasis CMMI yang diakui internasional  
- Rating scale N/P/L/F yang memberikan granularitas penilaian
- RACI matrix yang membantu mendefinisikan responden berdasarkan peran

Saya merasa percaya diri bahwa pemahaman dari 7 pertemuan ini sudah cukup solid untuk melaksanakan project audit SI yang berkualitas.

---

*Referensi:*
*- Weber, R. (1999). Information System Control and Audit. Prentice-Hall.*
*- Swastika, I.P.A. (2016). Audit Sistem Informasi dan Tata Kelola TI. Andi Offset.*
*- ISACA. (2018). COBIT 2019 Framework: Governance and Management Objectives.*
*- Syuhada, A.M. (2021). Kajian Perbandingan COBIT 5 dengan COBIT 2019. Syntax Literate, 6(1).*

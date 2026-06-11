# Studi Kasus Implementasi COBIT 5
## Audit Sistem Informasi — Pertemuan 5

---

## Studi Kasus: Universitas Karya Digital

### Profil Organisasi
Universitas Karya Digital merupakan perguruan tinggi swasta yang memiliki sistem informasi akademik (SIAKAD) untuk mengelola proses akademik mahasiswa. Universitas ini ingin melakukan audit terhadap sistem informasi akademiknya untuk mengevaluasi sejauh mana tata kelola TI telah diterapkan, khususnya pada domain BAI (Build, Acquire & Implement) yang berkaitan langsung dengan pembangunan dan pengelolaan SIAKAD.

### Framework yang Digunakan
**COBIT 5** dengan domain BAI yang dipilih:

| No | Sub-Domain | Nama |
|----|-----------|------|
| 1 | BAI01 | Mengelola Program dan Proyek |
| 2 | BAI02 | Mengelola Penetapan Persyaratan |
| 3 | BAI03 | Mengelola Identifikasi Solusi dan Membangun |
| 4 | BAI04 | Mengelola Ketersediaan dan Kapasitas |
| 5 | BAI05 | Mengelola Pemberdayaan Perubahan Organisasi |
| 6 | BAI06 | Mengelola Perubahan |

### Kuesioner dan Responden
Kuesioner disebarkan kepada **10 responden** yang terdiri dari staff IT, dosen pengelola SIAKAD, dan pimpinan unit TI.

Skala penilaian: **1–5** (STS=1, TS=2, R=3, S=4, SS=5)

### Perhitungan Maturity Level

#### Langkah 1: Hitung Indeks Kuesioner Per Sub-Domain

| No | Sub-Domain | Σ Jawaban Kuesioner | Σ Pertanyaan | Indeks Kuesioner |
|----|-----------|:-------------------:|:------------:|:----------------:|
| 1 | BAI01 | 32.5 | 10 | 3.25 |
| 2 | BAI02 | 28.0 | 10 | 2.80 |
| 3 | BAI03 | 30.5 | 10 | 3.05 |
| 4 | BAI04 | 27.0 | 10 | 2.70 |
| 5 | BAI05 | 25.5 | 10 | 2.55 |
| 6 | BAI06 | 29.0 | 10 | 2.90 |

**Rumus:** Indeks Kuesioner = Σ Jawaban Kuesioner / Σ Pertanyaan

#### Langkah 2: Hitung Maturity Index

Menggunakan WP (Weight Point) Standar untuk setiap level:

| Level | WP Standar |
|:-----:|:----------:|
| 0 | 0.00 |
| 1 | 0.33 |
| 2 | 0.33 |
| 3 | 0.33 |
| 4 | 0.33 |
| 5 | 0.33 |

**Contoh Perhitungan BAI01 (Indeks Kuesioner = 3.25):**

| Level | % WP Aktual | WP Standar | Maturity Index |
|:-----:|:-----------:|:----------:|:--------------:|
| 0 | 0% | 0.00 | 0 × 3.25 = 0.00 |
| 1 | 100% | 0.33 | 0.33 × 3.25 = 1.07 |
| 2 | 80% | 0.33 | (0.80/0.33) × 0.33 × 3.25 ≈ 2.60 |
| 3 | 50% | 0.33 | (0.50/0.33) × 0.33 × 3.25 ≈ 1.63 |
| 4 | 20% | 0.33 | (0.20/0.33) × 0.33 × 3.25 ≈ 0.65 |
| 5 | 5% | 0.33 | (0.05/0.33) × 0.33 × 3.25 ≈ 0.16 |

**Simplified Calculation (Rata-rata sederhana):**

```
Rumus Simpel:
Maturity Index = (% WP Aktual / WP Standar) × Indeks Kuesioner
```

#### Langkah 3: Hitung Maturity Level Keseluruhan

```
Maturity Level = Σ Indeks Kuesioner Semua Sub-Domain / Σ Total Sub-Domain
               = (3.25 + 2.80 + 3.05 + 2.70 + 2.55 + 2.90) / 6
               = 17.25 / 6
               = 2.875
```

#### Langkah 4: Tentukan Rating

```
% Ketercapaian = (Maturity Level / Skala Maksimal) × 100%
               = (2.875 / 5) × 100%
               = 57.50%
```

**Rating: L (Largely Achieved)** — karena 57.50% berada pada rentang >50%–85%

#### Langkah 5: Tentukan Capability Level

Berdasarkan perhitungan, Maturity Level = **2.875** yang berada pada **Capability Level 2** menuju Level 3.

### Ringkasan Hasil

| Sub-Domain | Indeks Kuesioner | % Ketercapaian | Rating |
|-----------|:----------------:|:--------------:|:------:|
| BAI01 | 3.25 | 65.00% | L |
| BAI02 | 2.80 | 56.00% | L |
| BAI03 | 3.05 | 61.00% | L |
| BAI04 | 2.70 | 54.00% | L |
| BAI05 | 2.55 | 51.00% | L |
| BAI06 | 2.90 | 58.00% | L |
| **Rata-rata** | **2.875** | **57.50%** | **L** |

### GAP Analysis

| Sub-Domain | Current Level | Expected Level | GAP |
|-----------|:-------------:|:--------------:|:---:|
| BAI01 | 2.875 | 4.00 | 1.125 |
| BAI02 | 2.875 | 4.00 | 1.125 |
| BAI03 | 2.875 | 4.00 | 1.125 |
| BAI04 | 2.875 | 4.00 | 1.125 |
| BAI05 | 2.875 | 4.00 | 1.125 |
| BAI06 | 2.875 | 4.00 | 1.125 |

**GAP keseluruhan = 1.125 level**

### Rekomendasi Perbaikan

1. **BAI05 (skor terendah = 2.55):** Meningkatkan pemberdayaan perubahan organisasi melalui program sosialisasi SIAKAD yang lebih intensif, pelatihan penggunaan sistem bagi dosen dan mahasiswa, serta pembentukan tim change management.

2. **BAI04 (skor 2.70):** Meningkatkan ketersediaan dan kapasitas SIAKAD dengan melakukan capacity planning, monitoring server secara real-time, dan menyiapkan infrastruktur backup.

3. **BAI02 (skor 2.80):** Memperbaiki proses penetapan persyaratan sistem melalui pendekatan user-centered, melibatkan stakeholder dalam tahap perencanaan, dan mendokumentasikan kebutuhan secara formal.

4. **Secara Umum:** Menstandarisasi seluruh proses BAI dengan menyusun SOP yang terdokumentasi, melakukan evaluasi berkala, dan menerapkan metrik pengukuran kinerja.

---

*Studi kasus ini menunjukkan penerapan perhitungan Maturity Level COBIT 5 dengan menggunakan Indeks Kuesioner, WP Standar, dan Rating Scale N/P/L/F.*

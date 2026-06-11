# Forum Diskusi Pertemuan 4 — Implementasi COBIT 4
## Audit Sistem Informasi (453) | Roki Anjas — 11250066

---

## Topik Diskusi: Penerapan COBIT 4 dalam Audit Tata Kelola TI

### Pendapat Saya

Pertemuan ini memberikan pemahaman yang sangat konkret tentang bagaimana framework COBIT 4 diterapkan secara praktis dalam melakukan audit sistem informasi. Jika pada pertemuan sebelumnya kita membahas konsep dan teori, maka di sini kita mulai "mengotori tangan" dengan perhitungan maturity level yang sesungguhnya.

COBIT 4.1, yang dirilis tahun 2005, merupakan versi COBIT yang fokus pada **tata kelola TI (IT Governance)**. Meskipun sudah ada versi yang lebih baru (COBIT 5 dan 2019), pemahaman terhadap COBIT 4 tetap penting karena banyak organisasi, terutama di Indonesia, yang masih menggunakan framework ini sebagai acuan audit.

### Struktur Domain COBIT 4

COBIT 4 memiliki 4 domain utama dengan total 34 proses:

| Domain | Singkatan | Jumlah Proses | Fokus |
|--------|:---------:|:-------------:|-------|
| Planning & Organize | PO | 10 | Perencanaan dan pengorganisasian TI |
| Acquire & Implement | AI | 7 | Pengadaan dan implementasi solusi TI |
| Deliver & Support | DS | 13 | Pengelolaan layanan dan dukungan TI |
| Monitor & Evaluate | ME | 4 | Pemantauan dan evaluasi kinerja TI |

Yang menarik dari domain COBIT 4 adalah pembagiannya yang sangat jelas mengikuti siklus hidup pengelolaan TI: mulai dari perencanaan (PO), pengadaan (AI), operasional (DS), hingga evaluasi (ME).

### Metodologi Perhitungan Maturity Level

Perhitungan maturity level dalam COBIT 4 relatif sederhana dibandingkan versi berikutnya:

1. **Susun kuesioner** dengan skala 0–5 (sesuai 6 level maturity)
2. **Sebar ke responden** (direkomendasikan minimal 20 responden)
3. **Hitung rata-rata** skor per sub-domain dari seluruh responden
4. **Hitung rata-rata domain** = rata-rata semua sub-domain dalam satu domain
5. **Tentukan maturity level** berdasarkan rentang nilai (0–5)
6. **Hitung GAP** = Expected Level – Current Level

Rumus dasarnya sangat straightforward:
```
Maturity Level per Domain = Σ Rata-rata Sub-domain / Jumlah Sub-domain
GAP = Expected Maturity – Current Maturity
```

### Analisis Studi Kasus

Dari studi kasus PT. Citra Mandiri Teknologi yang kita bahas, beberapa insight menarik:

1. **Seluruh domain mencapai Level 3 (Defined Process)** dengan rata-rata keseluruhan 2.84. Ini menunjukkan bahwa perusahaan sudah memiliki prosedur yang jelas, namun belum memiliki pengukuran kuantitatif yang terstandar.

2. **GAP terbesar ada di ME2 (Monitor & Evaluate Internal Control)** sebesar 1.45. Ini umum terjadi karena banyak perusahaan menghabiskan energi untuk pengembangan (PO, AI) dan operasional (DS) tetapi mengabaikan aspek monitoring dan evaluasi.

3. **GAP terkecil ada di PO6 (Communicate Management Aims)** sebesar 0.75, yang menunjukkan bahwa komunikasi arah dan tujuan manajemen TI sudah relatif baik.

### Kekuatan dan Keterbatasan COBIT 4

**Kekuatan:**
- Perhitungan sederhana dan mudah dipahami
- Cocok sebagai langkah awal audit bagi organisasi yang belum pernah diaudit
- Skala maturity 0–5 yang intuitif

**Keterbatasan:**
- Tidak memiliki rating scale (N/P/L/F) seperti COBIT 5 dan 2019
- Tidak ada RACI matrix formal
- Tidak membedakan antara governance dan management
- Kurang fleksibel untuk diadaptasi ke kebutuhan spesifik organisasi

### Relevansi di Dunia Kerja

Dari pengalaman saya bekerja di bidang IT, saya melihat bahwa banyak perusahaan menengah yang cocok menggunakan COBIT 4 karena kesederhanaan perhitungannya. Namun untuk organisasi yang lebih mature dan memiliki kebutuhan compliance internasional, sebaiknya langsung menggunakan COBIT 2019 yang lebih komprehensif.

---

*Referensi: IT Governance Institute. (2007). COBIT 4.1: Framework, Control Objectives, Management Guidelines, Maturity Models. ISACA.*

# Studi Kasus Implementasi COBIT 4
## Audit Sistem Informasi — Pertemuan 4

---

## Studi Kasus: PT. Citra Mandiri Teknologi

### Profil Perusahaan
PT. Citra Mandiri Teknologi merupakan perusahaan yang bergerak di bidang penyedia layanan teknologi informasi untuk sektor perbankan. Perusahaan ini memiliki sekitar 150 karyawan dan mengelola infrastruktur TI untuk beberapa bank daerah di Indonesia. Seiring dengan bertambahnya jumlah klien dan kompleksitas layanan, manajemen merasa perlu melakukan audit terhadap tata kelola TI perusahaan untuk memastikan kualitas layanan tetap terjaga.

### Framework yang Digunakan
**COBIT 4.1** dengan 4 domain utama:
- **PO** (Planning & Organize)
- **AI** (Acquire & Implement)
- **DS** (Deliver & Support)
- **ME** (Monitor & Evaluate)

### Domain dan Sub-Domain yang Dipilih

| No | Domain | Sub-Domain | Nama |
|----|--------|-----------|------|
| 1 | PO | PO6 | Communicate Management Aims and Direction |
| 2 | PO | PO7 | Manage IT Human Resources |
| 3 | PO | PO8 | Manage Quality |
| 4 | DS | DS7 | Educate and Train Users |
| 5 | ME | ME1 | Monitor and Evaluate IT Performance |
| 6 | ME | ME2 | Monitor and Evaluate Internal Control |

### Kuesioner
Kuesioner disebarkan kepada **20 responden** internal perusahaan dengan skala penilaian **0–5** sesuai Maturity Level COBIT 4.

| Skala | Level | Deskripsi |
|:-----:|-------|-----------|
| 0 | Non Existent | Tidak ada mekanisme sama sekali |
| 1 | Initial | Ada inisiatif tapi masih ad hoc |
| 2 | Repeatable | Sudah ada kebiasaan terpola tapi belum formal |
| 3 | Defined | Sudah ada prosedur jelas dan terkomunikasikan |
| 4 | Managed | Ada indikator pengukuran kinerja kuantitatif |
| 5 | Optimised | Best practice diterapkan secara utuh |

### Hasil Kuesioner dan Perhitungan

#### Tabulasi Rata-rata Per Sub-Domain

| No | Sub-Domain | Rata-rata Skor 20 Responden |
|----|-----------|:---------------------------:|
| 1 | PO6 | 3.25 |
| 2 | PO7 | 2.90 |
| 3 | PO8 | 3.10 |
| 4 | DS7 | 2.75 |
| 5 | ME1 | 2.85 |
| 6 | ME2 | 2.55 |

#### Perhitungan Maturity Level Per Domain

**Domain PO (Planning & Organize):**
```
Nilai Domain PO = Rata-rata (PO6 + PO7 + PO8)
                = (3.25 + 2.90 + 3.10) / 3
                = 9.25 / 3
                = 3.08
```
**Maturity Level Domain PO = 3.08** → Level 3 (Defined Process)

**Domain DS (Deliver & Support):**
```
Nilai Domain DS = Rata-rata (DS7)
                = 2.75 / 1
                = 2.75
```
**Maturity Level Domain DS = 2.75** → Level 3 (Defined Process)

**Domain ME (Monitor & Evaluate):**
```
Nilai Domain ME = Rata-rata (ME1 + ME2)
                = (2.85 + 2.55) / 2
                = 5.40 / 2
                = 2.70
```
**Maturity Level Domain ME = 2.70** → Level 3 (Defined Process)

#### Maturity Level Keseluruhan

```
Maturity Level = Rata-rata semua domain
               = (3.08 + 2.75 + 2.70) / 3
               = 8.53 / 3
               = 2.84
```

**Maturity Level Keseluruhan = 2.84** → **Level 3 (Defined Process)**

### GAP Analysis

| No | Sub-Domain | Current Level | Expected Level | GAP |
|----|-----------|:-------------:|:--------------:|:---:|
| 1 | PO6 | 3.25 | 4.00 | 0.75 |
| 2 | PO7 | 2.90 | 4.00 | 1.10 |
| 3 | PO8 | 3.10 | 4.00 | 0.90 |
| 4 | DS7 | 2.75 | 4.00 | 1.25 |
| 5 | ME1 | 2.85 | 4.00 | 1.15 |
| 6 | ME2 | 2.55 | 4.00 | 1.45 |

**GAP terbesar:** ME2 (Monitor & Evaluate Internal Control) = **1.45**
**GAP terkecil:** PO6 (Communicate Management Aims) = **0.75**

### Rekomendasi Perbaikan

1. **ME2 (GAP 1.45):** Memperjelas tanggung jawab individu dalam pengendalian internal, melakukan evaluasi berkala terhadap mekanisme kontrol yang ada, dan mendokumentasikan hasil evaluasi secara formal.

2. **DS7 (GAP 1.25):** Mengembangkan program pelatihan yang terstruktur untuk pengguna, menyusun kurikulum pelatihan TI yang terstandar, dan mengalokasikan anggaran khusus untuk pendidikan karyawan.

3. **ME1 (GAP 1.15):** Menetapkan KPI yang terukur untuk memonitor kinerja TI secara berkala, dan menyusun laporan kinerja TI yang rutin kepada manajemen.

4. **PO7 (GAP 1.10):** Melakukan pemetaan kompetensi SDM TI, menyusun rencana pengembangan karier, dan melakukan rekrutmen berbasis kebutuhan.

---

*Studi kasus ini menunjukkan penerapan perhitungan Maturity Level COBIT 4 dengan metode rata-rata skor kuesioner per sub-domain dan domain.*

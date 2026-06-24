# BAB II PEMBAHASAN

## A. Framework yang Digunakan

Framework yang digunakan dalam penelitian ini adalah COBIT (Control Objectives for Information and Related Technologies) 2019. COBIT 2019 merupakan versi penyempurnaan dari COBIT 5 yang lebih fleksibel, adaptif, dan dirancang untuk dapat disesuaikan (tailored) dengan kebutuhan spesifik organisasi, termasuk institusi pendidikan seperti sekolah.

Pembaruan utama pada COBIT 2019 dibandingkan dengan COBIT 5 adalah perubahan skema penilaian kematangan (maturity assessment). COBIT 2019 mengadopsi konsep *Capability Level* berbasis CMMI (Capability Maturity Model Integration) yang memiliki skala penilaian dari 0 hingga 5, menggantikan skema *Maturity Level* 0 hingga 5 pada COBIT 5 yang berfokus pada atribut proses yang lebih generik.

**Tabel 2.1** Capability Level COBIT 2019 (Level 0–5)
| Level | Nama | Deskripsi Singkat |
|---|---|---|
| 0 | Incomplete | Proses tidak berjalan atau kurang memiliki kemampuan dasar. |
| 1 | Performed | Proses kurang lebih mencapai tujuannya, namun belum terstandarisasi. |
| 2 | Managed | Proses mencapai tujuannya melalui kegiatan dasar yang dikelola secara lengkap. |
| 3 | Established | Proses telah terdefinisi dengan baik dan kinerja diukur secara kualitatif. |
| 4 | Predictable | Proses telah terdefinisi dan kinerjanya diukur secara kuantitatif. |
| 5 | Optimizing | Proses terdefinisi, diukur kuantitatif, dan mengalami perbaikan berkelanjutan. |

Dalam metode evaluasi COBIT 2019, perhitungan Capability Level dinilai berdasarkan persentase tingkat pemenuhan aktivitas pada setiap tingkatan (*Rating Scale*). Skala ini membantu mengukur seberapa jauh aktivitas manajemen TI telah diimplementasikan dalam sebuah domain.

**Tabel 2.2** Rating Scale Ketercapaian
| Notasi | Singkatan | Deskripsi | Persentase Pemenuhan |
|:---:|---|---|:---:|
| N | Not Achieved | Proses tidak diimplementasikan dengan baik | 0% – 15% |
| P | Partially Achieved | Proses diimplementasikan sebagian kecil | > 15% – 50% |
| L | Largely Achieved | Proses diimplementasikan sebagian besar | > 50% – 85% |
| F | Fully Achieved | Proses diimplementasikan sepenuhnya | > 85% – 100% |

## B. Domain dan Sub-Domain yang Digunakan

Dari keseluruhan 40 proses (domain) yang ditawarkan oleh COBIT 2019, penelitian ini memfokuskan evaluasi pada 5 domain yang merepresentasikan area kritikal dalam pengelolaan sistem dan operasional teknologi informasi di lingkungan SD IT Al-huda Kelapa Gading.

**Tabel 2.3** Domain COBIT 2019 yang Dipilih
| Kode Domain | Nama Domain | Fokus Penilaian di Lingkungan SD IT |
|:---:|---|---|
| APO07 | Managed Human Resources | Evaluasi terhadap kompetensi TIK guru, pelatihan staf, dan pembinaan sumber daya manusia dalam pemanfaatan teknologi pendidikan. |
| BAI09 | Managed Assets | Manajemen perangkat keras (inventaris PC Lab, server) dan lisensi perangkat lunak untuk menunjang KBM dan sistem sekolah. |
| DSS01 | Managed Operations | Tata kelola kegiatan operasional harian seperti penjadwalan fasilitas Lab Komputer, pemantauan sistem jaringan, dan backup data. |
| DSS03 | Managed Problems | Prosedur mitigasi dan eskalasi penanganan masalah teknis yang terjadi selama KBM atau saat ujian berbasis CBT. |
| DSS05 | Managed Security Services | Mekanisme keamanan informasi untuk melindungi kerahasiaan data siswa, data administrasi sekolah (Dapodik, BOSP), dan keamanan jaringan lokal. |

Berdasarkan struktur organisasi di SD IT Al-huda Kelapa Gading, pemetaan peran dan tanggung jawab masing-masing entitas dalam pelaksanaan tata kelola TI didefinisikan menggunakan *RACI Matrix* (Responsible, Accountable, Consulted, Informed). Pemetaan ini mendistribusikan aktivitas secara spesifik kepada Kepala Sekolah, Wakil Kepala Sekolah (Waka), Kepala Tata Usaha, Operator Sekolah, Guru, Bendahara BOSP, dan Pustakawan.

**Tabel 2.4** RACI Matrix
| Domain / Aktivitas | Kepala Sekolah | Waka | Kepala TU | Operator Sekolah | Guru | Bendahara | Pustakawan |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| APO07 — Managed HR | A | C | C | R | I | C | I |
| BAI09 — Managed Assets | A | C | R | R | I | C | C |
| DSS01 — Managed Operations | A | I | R | R | I | I | I |
| DSS03 — Managed Problems | A | C | R | R | C | I | I |
| DSS05 — Managed Sec. Services | A | C | R | R | I | I | I |

> **Gambar 2.1** Alur Metodologi Penelitian

## C. Capability Level dan GAP

Pengukuran Capability Level dilakukan dengan menghitung persentase ketercapaian dari hasil rata-rata jawaban kuesioner. Evaluasi ini dilakukan menggunakan prinsip kalkulasi agregasi tingkat aktivitas (*Level 1*, *Level 2*, dan *Level 3*) pada setiap domain. *Rating Scale* N, P, L, atau F ditentukan berdasarkan perhitungan *Mean* dibagi skala maksimum (5).

> **Gambar 2.2** Radar Chart Capability Level 5 Domain COBIT 2019

### 1. Perhitungan APO07 — Managed Human Resources

**Tabel 2.5** Hasil Perhitungan Capability Level APO07
| Level Proses | Persentase Capaian | Rating | Keterangan |
|---|:---:|:---:|---|
| Level 1 (Performed) | 62.50% | L | Sebagian besar aktivitas identifikasi kompetensi telah berjalan. |
| Level 2 (Managed) | 52.50% | L | Perencanaan dan dukungan untuk pelatihan TIK mulai dikelola. |
| Level 3 (Established) | 44.17% | P | SOP dan indikator kinerja pelatihan belum terstandardisasi formal. |

Berdasarkan hasil perhitungan, Capability Level (kondisi *as-is*) untuk domain APO07 berada pada **Level 2 (Managed Process)**, dikarenakan Level 1 dan Level 2 mendapatkan rating *Largely Achieved* (L), namun gagal memenuhi batas minimal *Largely Achieved* (>50%) di Level 3 dengan nilai 44.17% (rating P).

### 2. Perhitungan BAI09 — Managed Assets

**Tabel 2.6** Hasil Perhitungan Capability Level BAI09
| Level Proses | Persentase Capaian | Rating | Keterangan |
|---|:---:|:---:|---|
| Level 1 (Performed) | 65.83% | L | Inventarisasi perangkat dan pencatatan kerusakan sudah baik. |
| Level 2 (Managed) | 55.00% | L | Pengawasan dan evaluasi kelayakan aset telah dikelola secara berkala. |
| Level 3 (Established) | 45.83% | P | Sistem inventaris digital dan SOP pemeliharaan belum diterapkan menyeluruh. |

Capability Level untuk domain BAI09 mencapai **Level 2 (Managed Process)**. Persentase pencapaian Level 2 cukup baik (55.00%), namun Level 3 belum memenuhi persyaratan standar pengelolaan yang stabil (rating P).

### 3. Perhitungan DSS01 — Managed Operations

**Tabel 2.7** Hasil Perhitungan Capability Level DSS01
| Level Proses | Persentase Capaian | Rating | Keterangan |
|---|:---:|:---:|---|
| Level 1 (Performed) | 65.83% | L | Operasional dasar dan penjadwalan Lab Komputer berjalan lancar. |
| Level 2 (Managed) | 56.67% | L | Evaluasi kinerja fasilitas dan prosedur backup mulai terstruktur. |
| Level 3 (Established) | 46.67% | P | Belum ada prosedur uji coba pemulihan data dan SOP resmi secara institusi. |

Capability Level untuk domain DSS01 saat ini berada di **Level 2 (Managed Process)**. Kesenjangan terjadi pada pelaksanaan manajemen sistem terpusat dan kurangnya uji coba reguler pada data backup yang telah dilakukan (rating P pada Level 3).

### 4. Perhitungan DSS03 — Managed Problems

**Tabel 2.8** Hasil Perhitungan Capability Level DSS03
| Level Proses | Persentase Capaian | Rating | Keterangan |
|---|:---:|:---:|---|
| Level 1 (Performed) | 65.83% | L | Respons terhadap kendala di kelas atau Lab sudah tanggap. |
| Level 2 (Managed) | 56.67% | L | Analisis awal terhadap insiden yang berulang sudah dievaluasi sebagian. |
| Level 3 (Established) | 46.67% | P | Standar waktu respons (SLA) dan dokumentasi log penyelesaian belum tersedia formal. |

Sama dengan domain sebelumnya, Capability Level untuk DSS03 berada di **Level 2 (Managed Process)**. Operator dan staf teknis sangat reaktif terhadap masalah yang timbul, namun tindakan proaktif yang diukur dengan parameter SLA belum didokumentasikan (rating P pada Level 3).

### 5. Perhitungan DSS05 — Managed Security Services

**Tabel 2.9** Hasil Perhitungan Capability Level DSS05
| Level Proses | Persentase Capaian | Rating | Keterangan |
|---|:---:|:---:|---|
| Level 1 (Performed) | 67.50% | L | Proteksi akses dasar (password, antivirus) sudah berjalan sangat baik. |
| Level 2 (Managed) | 52.50% | L | Pengawasan akses ke data sensitif (nilai, Dapodik) dibatasi dengan cukup ketat. |
| Level 3 (Established) | 44.17% | P | Sosialisasi keamanan rutin dan audit internal sistem informasi belum diagendakan. |

Capability Level untuk DSS05 berada di **Level 2 (Managed Process)**. Meskipun kesadaran keamanan di tahap operasional dasar tinggi (67.50% pada Level 1), kebijakan institusional dalam bentuk keamanan siber internal dan perlindungan data belum dilembagakan (rating P pada Level 3).

> **Gambar 2.3** GAP Analysis — As-is vs To-be per Domain

**Tabel 2.10** Ringkasan Capability Level dan GAP Analysis
| No | Domain COBIT 2019 | Capability Level Saat Ini (As-is) | Target Level Diharapkan (To-be) | GAP (Kesenjangan) |
|:---:|---|:---:|:---:|:---:|
| 1 | APO07 — Managed HR | Level 2 | Level 4 | 2 Level |
| 2 | BAI09 — Managed Assets | Level 2 | Level 4 | 2 Level |
| 3 | DSS01 — Managed Operations | Level 2 | Level 4 | 2 Level |
| 4 | DSS03 — Managed Problems | Level 2 | Level 4 | 2 Level |
| 5 | DSS05 — Managed Sec. Services | Level 2 | Level 4 | 2 Level |

> **Gambar 2.4** Persentase Ketercapaian per Level per Domain

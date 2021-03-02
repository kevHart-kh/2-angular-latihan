export class Note {
  id: number;
  judul: String;
  tanggal: Date;
  isi: String;
  isFavorite: Boolean;

  constructor(
    _judul: String,
    _tanggal: Date,
    _isi: String,
    _isFavorite: Boolean
  ) {
    this.judul = _judul;
    this.tanggal = _tanggal;
    this.isi = _isi;
    this.isFavorite = _isFavorite;
  }
}

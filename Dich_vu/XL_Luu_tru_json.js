var File = require("fs");
var Thu_muc_Du_lieu = "../Dich_vu/Du_lieu";
var Cong_nghe = "json";

class XL_Luu_tru {
    Doc_Danh_sach(Loai_Doi_tuong) {
        var Danh_sach = [];
        var Duong_dan = Thu_muc_Du_lieu + "//" + Loai_Doi_tuong;
        var Danh_sach_Ten_Tap_tin = File.readdirSync(Duong_dan, "UTF-8")
        Danh_sach_Ten_Tap_tin.forEach(Ten => {
            if (Ten.toLowerCase().endsWith(Cong_nghe)) {
                var Chuoi = File.readFileSync(Duong_dan + "//" + Ten, "UTF-8")
                var Doi_tuong = JSON.parse(Chuoi);
                Danh_sach.push(Doi_tuong)
            }
        });
        return Danh_sach;
    }
    Ghi_moi_Doi_tuong(Loai_Doi_tuong, Doi_tuong) {
        var Kq = ""
        try {
            var Duong_dan = Thu_muc_Du_lieu + "//" + Loai_Doi_tuong + "//" + Doi_tuong.Ten_Dang_nhap + "." + Cong_nghe
            var Chuoi = JSON.stringify(Doi_tuong)
            File.writeFileSync(Duong_dan, Chuoi, "UTF-8")
        } catch (Loi) {
            Kq = Loi
        }

        return Kq
    }
    Ghi_moi_Rau(Loai_rau, Rau) {
        var kq = ""
        try {
            var Duong_dan = Thu_muc_Du_lieu + "//" + Loai_rau + "//" + Rau.Ma_so + "." + Cong_nghe;
            var Chuoi = JSON.stringify(Rau);
            File.writeFileSync(Duong_dan, Chuoi, "UTF-8")
        } catch (Loi) {
            kq = Loi;
        }
        return kq;
    }
    Cap_nhat_Doi_tuong(Loai_Doi_tuong, Doi_tuong) {
        return this.Ghi_moi_Rau(Loai_Doi_tuong, Doi_tuong);
    }
    Xoa_Doi_tuong(Loai_Doi_tuong, Doi_tuong) {
        var Kq = "";
        try {
            var Duong_dan = Thu_muc_Du_lieu + "//" + Loai_Doi_tuong + "//" + Doi_tuong.Ma_so + "." + Cong_nghe
            var Duong_dan_Xoa = Thu_muc_Du_lieu + "//" + Loai_Doi_tuong + "//Xoa//" + Doi_tuong.Ma_so + "." + Cong_nghe
            File.unlinkSync(Duong_dan)
            var Chuoi = JSON.stringify(Doi_tuong)
            File.writeFileSync(Duong_dan_Xoa, Chuoi, "UTF-8")

        } catch (Loi) {
            Kq = Loi;
        }

        return Kq
    }

}
var Luu_tru = new XL_Luu_tru();
module.exports = Luu_tru;
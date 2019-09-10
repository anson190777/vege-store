var http = require("http");
var port = 3000;
var File = require("fs");
var Xu_ly_Tham_so = require("querystring");
var Luu_tru = require("./XL_Luu_tru_json.js")
var Du_lieu_Ung_dung = Khoi_dong_Du_lieu_Ung_dung();
var DV_Ban_Rau = http.createServer(
    (Yeu_cau, Dap_ung) => {
        var Chuoi_Nhan = "";
        var Chuoi_Kq = "";
        var Dia_chi = Yeu_cau
            .url
            .replace("/", "")
        var Tham_so = Xu_ly_Tham_so.parse(Dia_chi)
        var Loai_Doi_tuong = Tham_so.Loai_Doi_tuong
        var Ma_so_Xu_ly = Tham_so.Ma_so_Xu_ly
        var Ngay_Hien_hanh = new Date()
        Yeu_cau.on('data', (chunk) => {
            Chuoi_Nhan += chunk
        })
        Yeu_cau.on('end', () => {
            if (Ma_so_Xu_ly == "KHOI_DONG_DU_LIEU_QUAN_LY") {
                var Du_lieu = {}
                Du_lieu.Danh_sach_Rau = Du_lieu_Ung_dung.Danh_sach_Rau
                Du_lieu.Danh_sach_Nguoi_dung = Du_lieu_Ung_dung.Danh_sach_Nguoi_dung
                Du_lieu.Quan_ly = Du_lieu_Ung_dung.Quan_ly
                Chuoi_Kq = JSON.stringify(Du_lieu)
            } else if (Ma_so_Xu_ly == "KHOI_DONG_DU_LIEU_CUA_HANG") {
                var Du_lieu = {};
                Du_lieu.Thong_tin_Cua_hang = Du_lieu_Ung_dung.Cua_hang;
                Chuoi_Kq = JSON.stringify(Du_lieu);
            } else if (Ma_so_Xu_ly == "KHOI_DONG_DU_LIEU_NGUOI_DUNG") {
                var Du_lieu = {}
                Du_lieu.Danh_sach_Nguoi_dung = Du_lieu_Ung_dung.Danh_sach_Nguoi_dung
                Du_lieu.Thong_tin_Cua_hang = Du_lieu_Ung_dung.Cua_hang
                Chuoi_Kq = JSON.stringify(Du_lieu)
                console.log(Chuoi_Kq)

            } else if (Ma_so_Xu_ly == "KHOI_DONG_DU_LIEU_NHAN_VIEN") {

                var Du_lieu = {}
                Du_lieu.Danh_sach_Rau = Du_lieu_Ung_dung.Danh_sach_Rau;
                Du_lieu.Thong_tin_Cua_hang = Du_lieu_Ung_dung.Cua_hang;
                Chuoi_Kq = JSON.stringify(Du_lieu)

            } else if (Ma_so_Xu_ly == "KHOI_DONG_DU_LIEU_KHACH_HANG") {

                var Du_lieu = {};
                Du_lieu.Danh_sach_Rau = Du_lieu_Ung_dung.Danh_sach_Rau;
                Chuoi_Kq = JSON.stringify(Du_lieu)

            } else if (Ma_so_Xu_ly == "GHI_MOI_NGUOI_DUNG") {
                var Nguoi_dung = JSON.parse(Chuoi_Nhan)
                var Kq = Luu_tru.Ghi_moi_Doi_tuong("Nguoi_dung", Nguoi_dung)
                if (Kq == "") {
                    var Danh_sach_Nguoi_dung = Du_lieu_Ung_dung.Danh_sach_Nguoi_dung.find(x => x.Ten_Dang_nhap == Nguoi_dung.Ten_Dang_nhap)
                    Du_lieu_Ung_dung.Danh_sach_Nguoi_dung.push(Nguoi_dung)
                } else
                    Dien_thoai = {
                        'Ma_so_Loi': "LOI_CAP_NHAT"
                    }
                Chuoi_Kq = JSON.stringify(Nguoi_dung)
            } else if (Ma_so_Xu_ly == "GHI_MOI_RAU") {
                var Rau = JSON.parse(Chuoi_Nhan)
                var Kq = Luu_tru.Ghi_moi_Rau("Rau", Rau)
                if (Kq == "") {
                    var Ung_dung_Rau = Du_lieu_Ung_dung.Danh_sach_Rau.find(x => x.Ma_so == Rau.Ma_so)
                    Du_lieu_Ung_dung.Danh_sach_Rau.push(Rau)
                } else
                    Rau = {
                        'Ma_so_Loi': "LOI_CAP_NHAT"
                    }
                Chuoi_Kq = JSON.stringify(Rau)
            } else if (Ma_so_Xu_ly == "CAP_NHAT_RAU") {
                var Rau = JSON.parse(Chuoi_Nhan)
                var Kq = Luu_tru.Cap_nhat_Doi_tuong("Rau", Rau)
                if (Kq == "") {
                    var Rau_Ung_dung = Du_lieu_Ung_dung.Danh_sach_Rau.find(x => x.Ma_so == Rau.Ma_so)
                    Rau_Ung_dung.Don_gia_Ban = Rau.Don_gia_Ban
                } else
                    Rau = {
                        'Ma_so_Loi': "LOI_CAP_NHAT"
                    }

                Chuoi_Kq = JSON.stringify(Rau)
            } else if (Ma_so_Xu_ly == "XOA_RAU") {
                var Rau = JSON.parse(Chuoi_Nhan)
                var Kq = Luu_tru.Xoa_Doi_tuong("Rau", Rau)
                if (Kq == "") {
                    Du_lieu_Ung_dung.Danh_sach_Rau.forEach((rau, index) => {
                        if (rau.Ma_so == Rau.Ma_so)
                            Du_lieu_Ung_dung.Danh_sach_Rau.splice(index, 1);
                    });
                    Rau = Du_lieu_Ung_dung;

                } else
                    Rau = {
                        'Ma_so_Loi': "LOI_CAP_NHAT"
                    }
                Chuoi_Kq = JSON.stringify(Rau)
            } else if (Ma_so_Xu_ly == "DANG_NHAP_HE_THONG_QUAN_LY") {
                var Ten = Tham_so.Ten_Dang_nhap;
                var pwd = Tham_so.Mat_khau;
                if (Du_lieu_Ung_dung.Quan_ly.Ten_Dang_nhap == Ten
                    && Du_lieu_Ung_dung.Quan_ly.Mat_khau == pwd) {
                    var Doi_tuong = {
                        Ho_ten: `${Du_lieu_Ung_dung.Quan_ly.Ho_ten}`,
                        Ma_so: `${Du_lieu_Ung_dung.Quan_ly.Ma_so}`,
                        Ma_so_Loi: ''
                    }
                    Chuoi_Kq = JSON.stringify(Doi_tuong);
                } else {
                    var Rau = {
                        'Ma_so_Loi': "Đăng nhập bị lỗi"
                    }
                    Chuoi_Kq = JSON.stringify(Rau)
                }

            } else if (Ma_so_Xu_ly == "CAP_NHAT_GIAO_HANG") {
                var Rau = JSON.parse(Chuoi_Nhan);
                var Kq = Luu_tru.Cap_nhat_Doi_tuong("Rau", Rau);
                if (Kq == "") {
                    var Rau_Ung_dung = Du_lieu_Ung_dung.Danh_sach_Rau.find(x => x.Ma_so == Rau.Ma_so);
                    Rau_Ung_dung.Danh_sach_Phieu_dat_hang = Rau.Danh_sach_Phieu_dat_hang

                } else
                    Rau = {
                        'Ma_so_Loi': "LOI_CAP_NHAT"
                    };

                Chuoi_Kq = JSON.stringify(Rau)
            } else if (Ma_so_Xu_ly == "THEM_PHIEU_DAT_HANG") {
                var Rau = JSON.parse(Chuoi_Nhan)
                var Kq = Luu_tru.Cap_nhat_Doi_tuong("Rau", Rau)
                if (Kq == "") {
                    var Rau_Ung_dung = Du_lieu_Ung_dung.Danh_sach_Rau.find(x => x.Ma_so == Rau.Ma_so);
                    Rau_Ung_dung.Danh_sach_Phieu_dat_hang = Rau.Danh_sach_Phieu_dat_hang;

                } else{
                    Rau = {
                        'Ma_so_Loi': "LOI_CAP_NHAT"
                    }
                }

                Chuoi_Kq = JSON.stringify(Rau);
            }
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.end(Chuoi_Kq)

        })
    });

DV_Ban_Rau.listen(port);

function Khoi_dong_Du_lieu_Ung_dung() {
    var Loai_Doi_tuong = "Rau";
    var Du_lieu = {};
    Du_lieu.Danh_sach_Rau = Luu_tru.Doc_Danh_sach(Loai_Doi_tuong)
    Loai_Doi_tuong = "Nguoi_dung"
    Du_lieu.Danh_sach_Nguoi_dung = Luu_tru.Doc_Danh_sach(Loai_Doi_tuong)
    Du_lieu.Cua_hang = {
        'Ten': "SSS BÁN RAU",
        'Ma_so': "CH_1",
        'Dien_thoai': "01628010342",
        'Mail': "anson1907@gmail.com",
        'Dia_chi': "227 Nguyễn Văn Cừ Quận 5 Tp Hồ Chí Minh Việt Nam",
        'footer': "HCMUS T-AIM Copyright©  2018"
    };
    Du_lieu.Quan_ly = {};
    Du_lieu.Danh_sach_Nguoi_dung.forEach(Nguoi_dung => {
        if (Nguoi_dung.Nhom_Nguoi_dung.Ma_so == "QUAN_LY") {
            Du_lieu.Quan_ly.Ten = Nguoi_dung.Ten;
            Du_lieu.Quan_ly.Ma_so = Nguoi_dung.Ma_so;
            Du_lieu.Quan_ly.Ten_Dang_nhap = Nguoi_dung.Ten_Dang_nhap
            Du_lieu.Quan_ly.Mat_khau = Nguoi_dung.Mat_khau
            Du_lieu.Quan_ly.Nhom_Nguoi_dung = {}
            Du_lieu.Quan_ly.Nhom_Nguoi_dung.Ten = Nguoi_dung.Nhom_Nguoi_dung.Ten
            Du_lieu.Quan_ly.Nhom_Nguoi_dung.Ma_so = Nguoi_dung.Nhom_Nguoi_dung.Ma_so
        }
    });
    return Du_lieu;
}
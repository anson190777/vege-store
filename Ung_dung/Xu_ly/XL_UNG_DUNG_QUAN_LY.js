class XL_DU_LIEU {


    static Khoi_dong_Du_lieu(Ham_Xu_ly_Sau_khi_Khoi_dong) {
        var Chuoi_Tham_so = "Ma_so_Xu_ly=KHOI_DONG_DU_LIEU_QUAN_LY"
        Kich_Hoat_Xu_ly_JSON(Chuoi_Tham_so, "", (Du_lieu) => {
            Ham_Xu_ly_Sau_khi_Khoi_dong(Du_lieu)
        })

    }
    static Cap_nhat_Rau(Rau) {
        var Chuoi_Tham_so = "Ma_so_Xu_ly=CAP_NHAT_RAU"
        var Chuoi_Goi = JSON.stringify(Rau)
        Kich_Hoat_Xu_ly_JSON(Chuoi_Tham_so, Chuoi_Goi, (Doi_tuong) => {
            if (Doi_tuong.Ma_so_Loi) {
                localStorage.Ma_so_Loi = Doi_tuong.Ma_so_Loi
                location.href = "MH_Loi_He_thong.html"
            }

        })

    }
    static Xoa_Rau(Rau) {
        var Chuoi_Tham_so = "Ma_so_Xu_ly=XOA_RAU"
        var Chuoi_Goi = JSON.stringify(Rau)
        Kich_Hoat_Xu_ly_JSON(Chuoi_Tham_so, Chuoi_Goi, (Doi_tuong) => {
            if (Doi_tuong.Ma_so_Loi) {
                localStorage.Ma_so_Loi = Doi_tuong.Ma_so_Loi
                location.href = "MH_Loi_He_thong.html"
            }

        })

    }
    static Ghi_moi_Rau(Rau) {
        var Chuoi_Tham_so = "Ma_so_Xu_ly=GHI_MOI_RAU"
        var Chuoi_Goi = JSON.stringify(Rau)
        console.log(Chuoi_Goi)
        Kich_Hoat_Xu_ly_JSON(Chuoi_Tham_so, Chuoi_Goi, (Doi_tuong) => {
            if (Doi_tuong.Ma_so_Loi) {
                localStorage.Ma_so_Loi = Doi_tuong.Ma_so_Loi
                location.href = "MH_Loi_He_thong.html"
            }

        })

    }
}

class XL_RAU {

    static Tao_The_hien(Rau, Th_Cha) {
        var The_hien = document.createElement("tr")
        Th_Cha.appendChild(The_hien)
        var Tong_so_luong_giao = 0
        var Tong_so_luong_chua_giao = 0
        Rau.Danh_sach_Phieu_dat_hang.forEach(Phieu => {

            if (Phieu.Trang_thai == "DA_GIAO") {
                Tong_so_luong_giao += Phieu.So_luong
            } else {
                Tong_so_luong_chua_giao += Phieu.So_luong
            }

        })

        var noi_dung = "";
        noi_dung += '<td style="width: 300px ;height: 200px;"><img src="../../Dich_vu/Du_lieu/Images/' + Rau.Ma_so + '.png" alt="" class="img-responsive" style="width:50%"></td>'
        noi_dung += '<td>' + Rau.Ten + '</td>'
        noi_dung += '<td>' + Rau.Nhom_rau.Ten + '</td>'
        noi_dung += '<td>' + Tao_Chuoi_The_hien_So_thuc_duong(Rau.Don_gia_Ban, 0) + 'đ</td>'

        noi_dung += '<td>' + Tong_so_luong_giao + '</td>'
        noi_dung += '<td>' + Tong_so_luong_chua_giao + '</td>'

        The_hien.innerHTML = noi_dung;
        return The_hien;
    }
    static Tao_The_hien_Dat_hang(Rau, Th_Cha) {
        var The_hien = document.createElement("tr")
        Th_Cha.appendChild(The_hien)
        var Tong_so_luong_dat = 0.0
        var Tong_thanh_tien = 0.0
        Rau.Danh_sach_Phieu_dat_hang.forEach(Phieu => {
            if (Phieu.Trang_thai == "CHUA_GIAO_HANG") {
                Tong_so_luong_dat += Phieu.So_luong
                Tong_thanh_tien += Phieu.Tien
            }

        })
        var noi_dung = "";
        noi_dung += '<td>' + Rau.Ten + '</td>'
        noi_dung += '<td>' + Rau.Nhom_rau.Ten + '</td>'
        noi_dung += '<td>' + Tao_Chuoi_The_hien_So_thuc_duong(Rau.Don_gia_Ban, 0) + 'đ</td>'
        noi_dung += '<td>' + Tong_so_luong_dat + '</td>'
        noi_dung += '<td>' + Tao_Chuoi_The_hien_So_thuc_duong(Tong_thanh_tien, 0) + 'đ</td>'
        if (Tong_so_luong_dat == 0) {
            noi_dung = ""
        }
        The_hien.innerHTML = noi_dung;
        return The_hien;
    }
    static Tao_The_hien_Giao_hang(Rau, Th_Cha) {
        var The_hien = document.createElement("tr")
        Th_Cha.appendChild(The_hien)
        var Tong_so_luong_giao = 0
        var Tong_thanh_tien = 0
        Rau
            .Danh_sach_Phieu_dat_hang
            .forEach(Phieu => {

                if (Phieu.Trang_thai == "DA_GIAO") {
                    Tong_so_luong_giao += Phieu.So_luong
                    Tong_thanh_tien += Phieu.Tien
                }

            })
        var noi_dung = "";
        noi_dung += '<td>' + Rau.Ten + '</td>'
        noi_dung += '<td>' + Rau.Nhom_rau.Ten + '</td>'
        noi_dung += '<td>' + Tao_Chuoi_The_hien_So_thuc_duong(Rau.Don_gia_Ban, 0) + 'đ</td>'
        noi_dung += '<td>' + Tong_so_luong_giao + '</td>'
        noi_dung += '<td>' + Tao_Chuoi_The_hien_So_thuc_duong(Tong_thanh_tien, 0) + 'đ</td>'
        if (Tong_so_luong_giao == 0) {
            noi_dung = ""
        }
        The_hien.innerHTML = noi_dung;
        return The_hien;
    }
    static Tao_The_hien_Cap_nhat(Rau, Th_Cha) {
        var The_hien = document.createElement("tr")
        Th_Cha.appendChild(The_hien)
        var noi_dung = "";
        noi_dung += '<td>' + Rau.Ten + '<input type="hidden" name="Th_Ma_so" value="' + Rau.Ma_so + '" ></td>'
        noi_dung += '<td>' + Rau.Nhom_rau.Ten + '</td>'
        noi_dung += '<td>' + Tao_Chuoi_The_hien_So_thuc_duong(Rau.Don_gia_Ban, 0) + 'đ</td>'
        noi_dung += '<td><input type="number" name="Th_Don_gia_Ban" value=0 /></td>'
        The_hien.innerHTML = noi_dung;
        return The_hien;
    }

    static Tao_The_hien_Xoa(Rau, Th_Cha) {

        var The_hien = document.createElement("tr")
        Th_Cha.appendChild(The_hien)
        var noi_dung = "";
        noi_dung += '<td>' + Rau.Ten + '<input type="hidden" name="Th_Ma_so" value="' + Rau.Ma_so + '" ></td>'
        noi_dung += '<td>' + Rau.Nhom_rau.Ten + '</td>'
        noi_dung += '<td>' + Tao_Chuoi_The_hien_So_thuc_duong(Rau.Don_gia_Ban, 0) + 'đ</td>'
        noi_dung += '<td><span class="fa fa-trash-o fa-2x"></span></td>'
        The_hien.innerHTML = noi_dung;
        return The_hien;
    }

    static Tao_The_hien_Them(Th_Cha) {
        var The_hien = document.createElement("tr")
        Th_Cha.appendChild(The_hien)
        var noi_dung = "";
        noi_dung += '<form action="fileupload" method="post" enctype="multipart/form-data">'
        noi_dung += '<td><input type="text" name="Th_Ten" id="Th_Ten"><input type="hidden" name="Th_Ma_so" id="Th_Ma_so"></td>'
        noi_dung += '<td><input type="number" name="Th_Don_gia_Nhap" id="Th_Don_gia_Nhap" value=0 /></td>'
        noi_dung += '<td><input type="file" name="Th_Hinh" id="Th_Hinh"></td>'
        noi_dung += '<td><p id="Th_Thong_bao" ></p>'
        noi_dung += '</form>'
        The_hien.innerHTML = noi_dung;
        return The_hien;
    }

}
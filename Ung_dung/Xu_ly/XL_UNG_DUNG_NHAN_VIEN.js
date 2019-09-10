class XL_DU_LIEU {

    static Khoi_dong_Du_lieu(Ham_Xu_ly_Sau_khi_Khoi_dong) {
        var Chuoi_Tham_so = "Ma_so_Xu_ly=KHOI_DONG_DU_LIEU_NHAN_VIEN"
        Kich_Hoat_Xu_ly_JSON(Chuoi_Tham_so, "", (Du_lieu) => {
            Ham_Xu_ly_Sau_khi_Khoi_dong(Du_lieu)
        })

    }
    static Cap_nhat_Giao_hang(Rau) {
        var Chuoi_Tham_so = "Ma_so_Xu_ly=CAP_NHAT_GIAO_HANG"
        var Chuoi_Goi = JSON.stringify(Rau)
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
        var The_hien = document.createElement("tr");
        Th_Cha.appendChild(The_hien);
        var Tong_so_luong_giao = 0.0;
        var Tong_so_luong_chua_giao = 0.0;
        Rau
            .Danh_sach_Phieu_dat_hang
            .forEach(Phieu => {

                if (Phieu.Trang_thai == "DA_GIAO") {
                    Tong_so_luong_giao += parseInt(Phieu.So_luong)
                } else {
                    Tong_so_luong_chua_giao += parseInt(Phieu.So_luong)
                }

            })

        var noi_dung = "";
        noi_dung += '<td><img src="../../Dich_vu/Du_lieu/Images/' + Rau.Ma_so + '.png" alt="" class="img-responsive" style="width:50%"></td>'
        noi_dung += '<td>' + Rau.Ten + '</td>';
        noi_dung += '<td>' + Rau.Nhom_rau.Ten + '</td>';
        noi_dung += '<td>' + Tao_Chuoi_The_hien_So_thuc_duong(Rau.Don_gia_Ban, 0) + 'đ</td>';

        noi_dung += '<td>' + Tong_so_luong_giao + '</td>'
        noi_dung += '<td>' + Tong_so_luong_chua_giao + '</td>'

        The_hien.innerHTML = noi_dung;
        return The_hien;
    }
    static Tao_The_hien_Dat_hang(Rau, Th_Cha) {
        var The_hien = document.createElement("tr")
        Th_Cha.appendChild(The_hien)
        var noi_dung = "";
        noi_dung += '<td>' + Rau.Ten + '<input name="Th_Ma_so" type="hidden" value="' + Rau.Ma_so + '" /></td>'
        noi_dung += '<td>' + Rau.Nhom_rau.Ten + '</td>'
        noi_dung += '<td><input type="text" name="Th_Don_gia_Ban" id="Th_Don_gia_Ban"  value="' + Rau.Don_gia_Ban + '" /></td>'
        noi_dung += '<td><input type="number" name="Th_Don_gia_Ban" id="Th_So_luong" min="1" style="width:50px" /></td>'

        The_hien.innerHTML = noi_dung;
        return The_hien;
    }
    static Tao_The_hien_Giao_hang(Rau, Th_Cha) {

        var dem = 0;
        Rau
            .Danh_sach_Phieu_dat_hang
            .forEach(Phieu => {

                if (Phieu.Trang_thai == "CHUA_GIAO_HANG") {
                    dem += 1
                }
            })
        var The_hien = document.createElement("tr")
        Th_Cha.appendChild(The_hien)
        var noi_dung = "";
        noi_dung += '<td class="text-danger"><b>' + Rau.Ten + '</b><input name="Th_Ma_so" type="hidden" value="' + Rau.Ma_so + '" /></td>'
        noi_dung += '<td><div class"row" style="padding-top:20px" ><div class="table-responsive">'
        noi_dung += '<table class="table table-condensed table-striped"><thead><tr class="text-primary"><th>Họ tên Khách hàng</th><th class="hidden-xs">Thông tin Giao hàng</th><th>Giao</th><tr></thead>'
        var tong_phieu = 0;
        Rau
            .Danh_sach_Phieu_dat_hang
            .forEach(Phieu => {

                if (Phieu.Trang_thai == "CHUA_GIAO_HANG") {
                    tong_phieu += 1;
                    var Ngay_Dat_hang = Phieu.Ngay;
                    //var Ngay_Giao_hang = Phieu.Ngay_Giao_hang.substr(0, 10);

                    noi_dung += '<tr>'
                    noi_dung += '<td><b>' + Phieu.Khach_hang.Ten + '</b></td>'
                    noi_dung += '<td width="500px" class="hidden-xs"><ul style="list-style-type:none;margin:0;padding:0;font-size:0.8em"><li>Ngày Đặt hàng: ' + Ngay_Dat_hang + '</li>'
                    //noi_dung += '<li>Ngày Giao hàng: ' + Ngay_Giao_hang + '</li>'
                    noi_dung += '<li>Điện thoại: ' + Phieu.Khach_hang.Dien_thoai + '</li>'
                    noi_dung += '<li>Địa chỉ: ' + Phieu.Khach_hang.Dia_chi + '</li>'
                    noi_dung += '<li>Số lượng: ' + Phieu.So_luong + ' x ' + Tao_Chuoi_The_hien_So_thuc_duong(Phieu.Don_gia, 0) + 'đ = ' + Tao_Chuoi_The_hien_So_thuc_duong(Phieu.Tien, 0) + 'đ</li>'
                    noi_dung += '</ul></td>'
                    noi_dung += '<td><input type="checkbox" name="Th_Giao_hang" Ho_ten="' + Phieu.Khach_hang.Ten + '" Dien_thoai="' + Phieu.Khach_hang.Dien_thoai + '" Ma_so="' + Rau.Ma_so + '" /></td>'
                    noi_dung += '</tr>'
                }

            })
        noi_dung += '</table></div></div></td>'
        noi_dung += '<td class="text-danger text-right"><span class="badge">' + tong_phieu + '</span></td>'
        if (dem == 0) {
            noi_dung = "";
        }
        The_hien.innerHTML = noi_dung;
        return The_hien;
    }

}
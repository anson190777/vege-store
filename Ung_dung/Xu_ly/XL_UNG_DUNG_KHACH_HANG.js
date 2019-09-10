class XL_DU_LIEU {

    static Khoi_dong_Du_lieu(Ham_Xu_ly_Sau_khi_Khoi_dong) {
        var Chuoi_Tham_so = "Ma_so_Xu_ly=KHOI_DONG_DU_LIEU_KHACH_HANG"
        Kich_Hoat_Xu_ly_JSON(Chuoi_Tham_so, "",
            (Du_lieu) => {
                Ham_Xu_ly_Sau_khi_Khoi_dong(Du_lieu)
            })

    };

    static Them_Phieu_Dat_hang(Rau) {
        var Chuoi_Tham_so = "Ma_so_Xu_ly=THEM_PHIEU_DAT_HANG";
        var Chuoi_Goi = JSON.stringify(Rau);
        Kich_Hoat_Xu_ly_JSON(Chuoi_Tham_so, Chuoi_Goi, (Doi_tuong) => {
            // if (Doi_tuong.Ma_so_Loi) {
            //     sessionStorage.Ma_so_Loi = Doi_tuong.Ma_so_Loi
            //     location.href = "MH_Loi_He_thong.html"
            // }

        })

    }


}

class XL_RAU {

    static Tao_The_hien(Rau, Th_Cha) {
        var The_hien = document.createElement("div");
        Th_Cha.appendChild(The_hien);
        var Ma_so = Rau.Ma_so;
        var noi_dung = "";
        noi_dung += '<form name="san_pham">';
        noi_dung += '<div class="col-xs-12 col-sm-4 col-md-3">';
        noi_dung += '<div class="thumbnail" style="height: 280px">';
        noi_dung += '<img src="../../Dich_vu/Du_lieu/Images/Rau/' + Rau.Ma_so + '.png" alt="" class="img-responsive" style="width:150px;height: 150px">';
        noi_dung += '<div class="caption">'
        noi_dung += '<h4 class="text-primary">' + Rau.Ten + '</h4>';
        noi_dung += '<span class="text-danger">Price:' + Tao_Chuoi_The_hien_So_thuc_duong(Rau.Don_gia_Ban, 0) + ' VND</span></<br>';
        noi_dung += '</div></div></div>';
        noi_dung += '</form>';

        The_hien.innerHTML = noi_dung;
        return The_hien;

    }

    static Tao_The_hien_Gio_hang(Rau, Th_Cha) {
        var The_hien = document.createElement("tr");
        var noi_dung = "";
        Th_Cha.appendChild(The_hien)
        if (sessionStorage.length > 0) {
            for (var i = 0; i < sessionStorage.length; i++) {
                var Ma_so = sessionStorage.getItem(Rau.Ma_so);
                noi_dung = "";
                if (Rau.Ma_so == Ma_so) {
                    noi_dung += '<td><img src="../../Dich_vu/Du_lieu/Images//Rau//' + Rau.Ma_so + '.png" alt="" class="img-responsive" style="width:10%"></td>'
                    noi_dung += '<td><input type="hidden" name="Th_Ma_so" value="' + Rau.Ma_so + '" />' + Rau.Ten + '</td>'
                    noi_dung += '<td>' + Rau.Nhom_rau.Ten + '</td>';
                    noi_dung += '<td>' + Tao_Chuoi_The_hien_So_thuc_duong(Rau.Don_gia_Ban, 0) + 'đ</td>'
                    noi_dung += '<td><input type="number" name="Th_So_luong" value="1" min=1 max=10 Ma_so="' + Rau.Ma_so + '" /></td>'
                    noi_dung += '<td><input type="checkbox" name="Th_Xoa_Rau" value="' + Rau.Ma_so + '" /></td>';
                }
            }
            The_hien.innerHTML = noi_dung;
            return The_hien;
        }
    }

}

function clickCounter(Ma_so) {
    if (typeof(Storage) !== "undefined") {
        var trangthai = sessionStorage.getItem(Rau.Ma_so);
        if (trangthai == null) {
            sessionStorage.setItem(Rau.Ma_so,Rau.Ma_so);
            alert("Rau đã được thêm vào giỏ hàng của bạn !!!")
        } else {
            alert("Rau đã có trong giỏ hàng của bạn !!!")
        }
    } else {
        console.log("Sorry, your browser does not support web storage...");
    }
}



class XL_DU_LIEU {

    static Khoi_dong_Du_lieu(Ham_Xu_ly_Sau_khi_Khoi_dong) {
        var Chuoi_Tham_so = "Ma_so_Xu_ly=KHOI_DONG_DU_LIEU_NGUOI_DUNG"
        Kich_Hoat_Xu_ly_JSON(Chuoi_Tham_so, "",
            (Du_lieu) => {
                Ham_Xu_ly_Sau_khi_Khoi_dong(Du_lieu)
            })

    }
    static Ghi_moi_Nguoi_dung(Nguoi_dung) {
        var Chuoi_Tham_so = "Ma_so_Xu_ly=GHI_MOI_NGUOI_DUNG"
        var Chuoi_Goi = JSON.stringify(Nguoi_dung)
        console.log(Chuoi_Goi)
        Kich_Hoat_Xu_ly_JSON(Chuoi_Tham_so, Chuoi_Goi, (Doi_tuong) => {
            // if (Doi_tuong.Ma_so_Loi) {
            //     localStorage.Ma_so_Loi = Doi_tuong.Ma_so_Loi
            //     location.href = "MH_Loi_He_thong.html"
            // }

        })

    }

}

class XL_NGUOI_DUNG {


}
class XL_CUA_HANG {

    static Tao_The_hien(Thong_tin, Th_Cong_ty, Th_Cuoi_trang) {
        var The_hien = document.createElement("div")
        Th_Cong_ty.appendChild(The_hien)
        var noi_dung_dau = "";
        noi_dung_dau += '<h2 class="pull-left" style="color: white; font-family: font_face;font-size: 70px;margin-top:12px;">'+Thong_tin.Ten+'</h2>'
        noi_dung_dau += '<h4 class="text-info badge pull-right">Phone: ' + Thong_tin.Dien_thoai
        noi_dung_dau += '<br>Email: ' + Thong_tin.Mail;
        noi_dung_dau += '<br>Address: ' + Thong_tin.Dia_chi;
        noi_dung_dau += '</h4>';
        The_hien.innerHTML = noi_dung_dau;
        The_hien = document.createElement("div")
        Th_Cuoi_trang.appendChild(The_hien)
        noi_dung_dau = "" + '<span>' + Thong_tin.footer + '</span>'
        The_hien.innerHTML = noi_dung_dau;
        return The_hien;
    }
}
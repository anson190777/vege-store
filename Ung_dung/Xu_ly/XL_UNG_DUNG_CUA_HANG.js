class XL_DU_LIEU{
  
    static Dang_nhap_He_thong_Quan_ly(Ten_Dang_nhap,Mat_khau,Ham_Xu_ly_Sau_khi_Khoi_dong)
    {
        var Chuoi_Tham_so = `Ma_so_Xu_ly=DANG_NHAP_HE_THONG_QUAN_LY&Ten_Dang_nhap=${Ten_Dang_nhap}`
        Chuoi_Tham_so+=`&Mat_khau=${Mat_khau}`
        Kich_Hoat_Xu_ly_JSON(Chuoi_Tham_so,"", (Doi_tuong) => {
            // if (Doi_tuong.Ma_so_Loi) {
            //     localStorage.Ma_so_Loi = Doi_tuong.Ma_so_Loi
            //     location.href = "MH_Loi_He_thong.html"
            // }
            Ham_Xu_ly_Sau_khi_Khoi_dong(Doi_tuong)
        })
    }
  
    static Khoi_dong_Du_lieu(Ham_Xu_ly_Sau_khi_Khoi_dong){  
      var Chuoi_Tham_so="Ma_so_Xu_ly=KHOI_DONG_DU_LIEU_CUA_HANG"      
      Kich_Hoat_Xu_ly_JSON( Chuoi_Tham_so,"",
          (Du_lieu)=>{
               Ham_Xu_ly_Sau_khi_Khoi_dong(Du_lieu)
          })
      
    }
  }
  
  class XL_CUA_HANG{
    
    static Tao_The_hien(Thong_tin,Th_Cong_ty,Th_Cuoi_trang){
          var The_hien=document.createElement("div");
          Th_Cong_ty.appendChild(The_hien);
          var noi_dung_dau="";
          noi_dung_dau+='<h2 class="pull-left" style="color: white; font-family: font_legend;font-size: 70px;margin-top:12px;" >'+ Thong_tin.Ten +'</h2>'
          noi_dung_dau+='<h4 class="text-info badge pull-right">Phone: '+ Thong_tin.Dien_thoai
          noi_dung_dau+='<br>Email: '+ Thong_tin.Mail;
          noi_dung_dau+='<br>Address: '+ Thong_tin.Dia_chi;
          noi_dung_dau+='</h4>';
          The_hien.innerHTML=noi_dung_dau;
          The_hien=document.createElement("div");
          Th_Cuoi_trang.appendChild(The_hien);
          noi_dung_dau=""+'<span>'+ Thong_tin.footer +'</span>';
          The_hien.innerHTML=noi_dung_dau;
          return The_hien;
    }
  }
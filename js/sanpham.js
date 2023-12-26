var tong = 0;
        function them(x) {
            var tr = x.parentElement.parentElement;
            var td = tr.children;
            var mssp = td[0].innerHTML;
            var soluong = parseInt(td[4].children[0].value);

            var cont = 1;

            var gh = document.getElementById("giohang");
            var gh_tr = gh.children;
            var tong = 0;
            for (var i = 0; i < gh_tr.length; i++) {
                var gh_td = gh_tr[i].getElementsByTagName("td");
                var mssp_giohang = gh_td[0].innerHTML;
                var soluong_giohang = parseInt(gh_td[4].innerHTML);
                if (mssp_giohang == mssp) {
                    gh_td[4].innerHTML = soluong_giohang + soluong;
                    cont = 0;
                    break;
                }
            }

            if (cont == 1) {
                var hinh = td[1].children[0].src;
                var ten = td[2].innerHTML;
                var dongia = td[3].children[0].innerHTML + "000";
                var thanhtien = parseInt(dongia) * parseInt(soluong);
                tong += thanhtien;

                var giohang_tr = document.createElement("tr");

                var giohang_td = document.createElement("td");
                var giohang_td_mssp = document.createTextNode(mssp);
                giohang_td.appendChild(giohang_td_mssp);
                giohang_tr.appendChild(giohang_td);

                var giohang_td = document.createElement("td");
                var giohang_td_hinh = document.createElement("img");
                giohang_td_hinh.src = hinh;
                giohang_td.appendChild(giohang_td_hinh);
                giohang_tr.appendChild(giohang_td);

                var giohang_td = document.createElement("td");
                var giohang_td_ten = document.createTextNode(ten);
                giohang_td.appendChild(giohang_td_ten);
                giohang_tr.appendChild(giohang_td);

                var giohang_td = document.createElement("td");
                var giohang_td_dongia = document.createTextNode(dongia);
                giohang_td.appendChild(giohang_td_dongia);
                giohang_tr.appendChild(giohang_td);

                var giohang_td = document.createElement("td");
                var giohang_td_soluong = document.createTextNode(soluong);
                giohang_td.appendChild(giohang_td_soluong);
                giohang_tr.appendChild(giohang_td);

                var giohang_td = document.createElement("td");
                var giohang_td_thanhtien = document.createTextNode(thanhtien);
                giohang_td.appendChild(giohang_td_thanhtien);
                giohang_tr.appendChild(giohang_td);

                var giohang_td = document.createElement("td");
                var giohang_td_nut = document.createElement("input");
                giohang_td_nut.type = "button";
                giohang_td_nut.value = "Xoá";
                giohang_td_nut.setAttribute("onclick", "xoa(this)");
                giohang_td.appendChild(giohang_td_nut);
                giohang_tr.appendChild(giohang_td);

                var giohang = document.getElementById("giohang");
                giohang.appendChild(giohang_tr);
            }
            tinhTong();
        }

        function xoa(x) {
            var tr = x.parentElement.parentElement;
            tr.remove();
            tinhTong();
        }

        function tinhTong() {
            var giohang = document.getElementById("giohang");
            var tr = giohang.children;
            var tong = 0;
            for (var i = 0; i < tr.length; i++) {
                var td = tr[i].getElementsByTagName("td");
                var thanhtien = parseInt(td[3].innerHTML) * parseInt(td[4].innerHTML);
                tong += thanhtien;
            }
            document.getElementById("tong").innerHTML = tong;
        }
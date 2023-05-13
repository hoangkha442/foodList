// import { userName, age } from "./controller-v1.js";

// import sayGoodbye from "./controller-v1.js";
// console.log(userName);
// console.log(age);
// sayGoodbye()
import { Food } from "../../models/v1/model.js";
import hienThiThongTin,{ layThongTinTuForm } from "./controller-v1.js"

document.querySelector('#btnThemMon').onclick = function(){
    let data = layThongTinTuForm()
    console.log('data: ', data);
    let{
        maMon,
        tenMon,
        loai,
        giaMon,
        khuyenMai,
        tinhTrang,
        hinhMon,
        moTa
    } = data;
    let food = new Food(maMon,
        tenMon,
        loai,
        giaMon,
        khuyenMai,
        tinhTrang,
        hinhMon,
        moTa);
    console.log('food: ', food);
    hienThiThongTin(food)
}


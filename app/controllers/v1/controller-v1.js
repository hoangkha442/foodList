// export let userName = 'alice'
// export let age = 5

// // 2 loại: export và export default
// // export: sử dụng được nhiều lần trong 1 file
// // export default: xử dụng 1 lần duy nhát trong 1 file - Khác tên vẫn được và không cần ngoặc nhọn 

// export default function sayHello(){
//     console.log('Hello');
// }

export function layThongTinTuForm(){
    let maMon = document.querySelector('#foodID').value;
    let tenMon = document.querySelector('#tenMon').value;
    let loai = document.querySelector('#loai').value;
    let giaMon = document.querySelector('#giaMon').value * 1;
    let khuyenMai = document.querySelector('#khuyenMai').value;
    let tinhTrang = document.querySelector('#tinhTrang').value;
    let hinhMon = document.querySelector('#hinhMon').value;
    let moTa = document.querySelector('#moTa').value;
    // return{
    //     maMon: maMon,
    //     tenMon: tenMon,
    //     loai: loai,
    //     giaMon: giaMon,
    //     khuyenMai: khuyenMai,
    //     tinhTrang: tinhTrang,
    //     hinhMon: hinhMon,
    //     moTa: moTa
    // }
    return{
        maMon,
        tenMon,
        loai,
        giaMon,
        khuyenMai,
        tinhTrang,
        hinhMon,
        moTa
    }
}

console.log(layThongTinTuForm());

export default function showThongTinLenForm(food){
    document.querySelector('#spMa').innerHTML = food.foodID
    document.querySelector('#spTenMon').innerHTML = food.tenMon
    document.querySelector('#spLoaiMon').innerHTML = food.loai == 'loai1' ? 'Chay' : 'Mặn'
    document.querySelector('#spGia').innerHTML = food.giaMon
    document.querySelector('#spKM').innerHTML = food.khuyenMai
    document.querySelector('#spTT').innerHTML = food.tinhTrang
    document.querySelector('#imgMonAn').src = food.hinhMon
    document.querySelector('#pMoTa').innerHTML = food.moTa
}
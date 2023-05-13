
export let renderFoodList = (foodArr) => {
  let contentHTML = '';
  foodArr.forEach((item) => {
    let { maMon,
      tenMon,
      loai,
      giaMon,
      khuyenMai,
      tinhGiaKM,
      tinhTrang} = item
    let contentTr = `
    <tr>
      <td>${maMon}</td>
      <td>${tenMon}</td>
      <td>${loai ? 'Chay' : 'Mặn'} </td>
      <td>${giaMon}</td>
      <td>${khuyenMai}</td>
      <td>${item.tinhGiaKM()}</td>
      <td>${tinhTrang ?'Còn' : 'Hết'}</td>
      <td>
        <button onclick = 'xoaMon(${maMon})' class='btn btn-success'>Xóa</button>
        <button onclick = 'suaMon(${maMon})' class='btn btn-danger'>Sửa</button>
      </td>
    </tr>
    `
    contentHTML += contentTr
  })
  document.querySelector('#tbodyFood').innerHTML = contentHTML
};

export function layThongTinTuForm_V2(){
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

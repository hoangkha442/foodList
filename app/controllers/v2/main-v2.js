import { renderFoodList } from "./controller-v2.js";
import { FoodV2 } from "../../models/v2/model_v2.js";
import { layThongTinTuForm_V2 } from "./controller-v2.js";

// fetch data from server and render data
const BASE_URL = "https://644379f490738aa7c071bb35.mockapi.io/food";
let fetchFoodList = () => {
  axios({
    url: BASE_URL,
    method: "GET",
  })
    .then((res) => {
      // thiếu method tinhGiaKM
      let foodArr = res.data.map((item) => {
        // destructoring
        let { name, type, discount, img, desc, price, status, id } = item;
        // new object
        let food = new FoodV2(
          id,
          name,
          type,
          price,
          discount,
          status,
          img,
          desc
        );
        // return object
        return food;
      });
      renderFoodList(foodArr);
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};

window.xoaMon = (id) => {
  axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  })
    .then((res) => {
      console.log("res: ", res);
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};
//  window.xoaMon = xoaMon
fetchFoodList();

window.themMon = () => {
  let data = layThongTinTuForm_V2();
  // console.log('data: ', data);
  let newFood = {
    name: data.tenMon,
    type: data.loai,
    discount: data.khuyenMai,
    img: data.hinhMon,
    desc: data.moTa,
    price: data.giaMon,
    status: data.tinhTrang,
  };
  axios({
    url: BASE_URL,
    method: "POST",
    data: newFood,
  })
    .then((res) => {
      // tắt modal
      $("#exampleModal").modal("hide");
      console.log("res: ", res);
      fetchFoodList();
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};

window.suaMon = (id) => {
  axios({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  })
    .then((res) => {
      console.log(res);
      $("#exampleModal").modal("show");
      //Show thông tin lên form
      let { id, type, price, img, status, desc, discount, name } = res.data;
      document.querySelector("#foodID").value = id;
      document.querySelector("#tenMon").value = name;
      document.querySelector("#loai").value = type?'loai1':'loai2';
      document.querySelector("#giaMon").value = price;
      document.querySelector("#khuyenMai").value = discount;
      document.querySelector("#tinhTrang").value = status?'1':'0';
      document.querySelector("#hinhMon").value = img;
      document.querySelector("#moTa").value = desc;
    })
    .catch((err) => {
      console.log(err);
    });
};

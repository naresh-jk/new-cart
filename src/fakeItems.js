const items=[
    {
      "position":1,
      "image":"https://w7.pngwing.com/pngs/435/29/png-transparent-yellow-crew-neck-t-shirt-illustration-printed-t-shirt-hoodie-clothing-t-shirt-s-tshirt-fashion-active-shirt-thumbnail.png",
      "title": "Common Projects T-shirt",
      "id": "ec1040",
      "color": "yellow",
      "price": 540,
      "availability": "Available"
    },
    {
      "position":2,
      "image":"https://e7.pngegg.com/pngimages/323/773/png-clipart-sneakers-basketball-shoe-sportswear-nike-shoe-outdoor-shoe-running-thumbnail.png",
      "title": "Maison Margiela Future Sneakers",
      "id": "ec1041",
      "color": "green",
      "price": 870,
      "availability": "Out of stock"
    },
    {
      "position":3,
      "image":"https://e7.pngegg.com/pngimages/288/784/png-clipart-scarf-scarf-thumbnail.png",
      "title": "Our Legacy Brushed Scarf",
      "id": "ec1042",
      "color": "Brown",
      "price": 349,
      "availability": "Available"
    },
    {
      "position":4,
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcjRsIZVidSjuc5sBfSW-CNDgZWaDD88wLcw&usqp=CAU",
      "title": "Anouk Rose Gold Ladies Watch",
      "id": "ec1043",
      "color": "Rose Gold",
      "price": 1500,
      "availability": "Available"
    },
    {
      "position":5,
      "image":"https://e7.pngegg.com/pngimages/880/1007/png-clipart-suede-slip-on-shoe-product-walking-loafer-best-shoes-for-women-with-bunions-brown-leather-thumbnail.png",
      "title": "Fantascia Loafer ",
      "id": "ec1044",
      "color": "Tan Brown",
      "price": 990,
      "availability": "Out of stock"
    }
  ]


  export function getItems(){
    return items;
  }

  export function getItem(id){
    return items.find(i => i.id===id);
  }
class Goods {
  constructor(name, size, price, type, imgUrl) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.type = type;
    this.imgUrl = imgUrl;
    this.count = 0;
  }
}

class SHIRTER extends Goods {
  constructor(name, size, price, imgUrl) {
    super(name, size, price, 'shirter', imgUrl);
  }
}

const item1 = new SHIRTER(
  '[SHIRTER] SHIRRING PULLOVER HALF SHIRT (BLACK)',
  'L',
  148000,
  'https://havatishop.com/web/product/big/202403/98c89043e0b0e09f03d59c576dfa4543.jpg'
);
const item2 = new SHIRTER(
  '[SHIRTER] SHIRRING PULLOVER HALF SHIRT (BLACK)',
  'M',
  148000,
  'https://havatishop.com/web/product/big/202403/98c89043e0b0e09f03d59c576dfa4543.jpg'
);

const item3 = new SHIRTER(
  '[SHIRTER] SHIRRING PULLOVER HALF SHIRT (BLACK)',
  'S',
  148000,
  'https://havatishop.com/web/product/big/202403/98c89043e0b0e09f03d59c576dfa4543.jpg'
);

export const itemsList = [item1, item2, item3];
// export const itemsList = [];

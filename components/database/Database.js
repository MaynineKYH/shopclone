export const COLOURS = {
  white : "#ffffff",
  black : '#000000',
  green : '#00AC76',
  red : '#C04345',
  blue : '#0043F9',
  backgroundLight : '#F0F0F3',
  backgroundMedium : '#B9B9B9',
  backgroundDark : '#777777'
}

export const Items = [
  {
    id:1,
    category:'product',
    productName:'MI Super Bass Bluetooth Wireless HeadPhones',
    productPrice:1799,
    description:'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
    isOff:true,
    isAvailable:true,
    offPercentage:10,
    productImage:require('../database/images/products/Mi1.png'),
    productImageList:[
      require('../database/images/products/Mi1.png'),
      require('../database/images/products/Mi2.png'),
      require('../database/images/products/Mi3.png'),
    ]
  },
  {
    id:2,
    category:'product',
    productName:'Boat HeadPhone',
    productPrice:1299,
    description:'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
    isOff:false,
    isAvailable:false,
    offPercentage:10,
    productImage:require('../database/images/products/boat1.png'),
    productImageList:[
      require('../database/images/products/boat1.png'),
      require('../database/images/products/boat2.png'),
      require('../database/images/products/boat3.png'),
    ]
  },
  {
    id:3,
    category:'product',
    productName:'Boult HeadPhone',
    productPrice:1499,
    description:'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
    isOff:true,
    offPercentage:20,
    isAvailable:true,
    offPercentage:10,
    productImage:require('../database/images/products/boult1.png'),
    productImageList:[
      require('../database/images/products/boult1.png'),
      require('../database/images/products/boult2.png'),
      require('../database/images/products/boult3.png'),
    ]
  },
  {
    id:4,
    category:'accessory',
    productName:'boatairpods',
    productPrice:799,
    description:'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
    isOff:false,
    isAvailable:false,
    productImage:require('../database/images/accessories/boatairpods1.png'),
    productImageList:[
      require('../database/images/accessories/boatairpods1.png'),
      require('../database/images/accessories/boatairpods2.png'),
      require('../database/images/accessories/boatairpods3.png'),
    ]
  },
  {
    id:5,
    category:'accessory',
    productName:'boatbassheads',
    productPrice:799,
    description:'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
    isOff:false,
    isAvailable:true,
    productImage:require('../database/images/accessories/boatbassheads1.png'),
    productImageList:[
      require('../database/images/accessories/boatbassheads1.png'),
      require('../database/images/accessories/boatbassheads2.png'),
      require('../database/images/accessories/boatbassheads3.png'),
    ]
  },
  {
    id:6,
    category:'accessory',
    productName:'boatrockerz',
    productPrice:599,
    description:'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
    isOff:false,
    isAvailable:false,
    productImage:require('../database/images/accessories/boatrockerz1.png'),
    productImageList:[
      require('../database/images/accessories/boatrockerz1.png'),
      require('../database/images/accessories/boatrockerz2.png'),
      require('../database/images/accessories/boatrockerz3.png'),
    ]
  },
  {
    id:7,
    category:'accessory',
    productName:'boultairbass',
    productPrice:299,
    description:'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
    isOff:false,
    isAvailable:true,
    productImage:require('../database/images/accessories/boultairbass1.png'),
    productImageList:[
      require('../database/images/accessories/boultairbass1.png'),
      require('../database/images/accessories/boultairbass2.png'),
      require('../database/images/accessories/boultairbass3.png'),
    ]
  }
]

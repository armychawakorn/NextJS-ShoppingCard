"use client"
import { useEffect, useState } from "react";
import Itemcart, { IProduct } from "@/components/Itemcart";

const products: IProduct[] = [
  {
    name: "iPhone 15 Pro (128GB, Natural Titanium)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxFXZwyd7FxAhEP4mf7Ua6UQF0EetpC_t8DQ&s",
    price: 37300,
  },
  {
    name: "iPhone 15 (128GB, Blue)",
    image: "https://www.istudio.store/cdn/shop/files/TH_iPhone_15_Blue_PDP_Image_Position-1A_Blue_Color.jpg?v=1707277872",
    price: 28900,
  },
  {
    name: `iPad Pro M4 Wi-Fi 2024 (11", 256 GB, Space Black)`,
    image: "https://www.istudio.store/cdn/shop/files/iPad_Pro_11_M4_WiFi_Silver_PDP_Image_Position_1b__en-US_3903003e-45ce-463d-9207-f303569e40e0.jpg?v=1716468151&width=1445",
    price: 39900,
  },
  {
    name: `iPad Air 6 M2 Wi-Fi 2024 (11", 128 GB, Space Gray)`,
    image: "https://media.education.studio7thailand.com/48455/iPad_Air_Wi-Fi_Purple_2-square_medium.jpg",
    price: 23900,
  },
  {
    name: "iPad",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0JpmpVw4WMxxnWE7At95mfHFjLyotxWTdaw&s",
    price: 19900,
  },
  {
    name: "IPad mini",
    image: "https://media.studio7thailand.com/6529/iPad_mini_Cellular_Purple_2-square_medium.jpg",
    price: 31900,
  },
  {
    name: "MacBook Air",
    image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034",
    price: 39900,
  },
  {
    name: "MacBook Pro",
    image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830200",
    price: 59900,
  },
  {
    name: "IMac",
    image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-no-id-blue-selection-hero-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1701459101618",
    price: 49900,
  },
  {
    name: "Mac mini",
    image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-mini-hero-202301_FMT_WHH?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671503802341",
    price: 20900,
  },
  {
    name: "Mac Studio",
    image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-studio-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684345161143",
    price: 74900,
  }
]
export default function Home() {
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const handleAddCartCount = ()=>{
    setCartCount(cartCount + 1);
  }
  const handleRemoveCartCount = ()=>{
    setCartCount(cartCount - 1);
  }
  const handleChange = (price: number) => {
    setCartTotal(cartTotal + price);
  }
  return (
    <>
      <div className="container mx-auto py-8">
        <div className="text-center text-4xl font-bold">Apple Store</div>
        <div className="text-right text-xl font-bold">จำนวน: {cartCount} ชิ้น, ราคารวม: {new Intl.NumberFormat('en-US').format(cartTotal)} บาท</div>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Itemcart
              key={product.name}
              product={product}
              addcartCount={handleAddCartCount}
              removecartCount={handleRemoveCartCount}
              handleChange={handleChange}
            />
          ))}
        </div>
      </div>
    </>
  );
}

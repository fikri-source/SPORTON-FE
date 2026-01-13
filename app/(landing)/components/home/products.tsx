import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";

const productsList = [
    {
        name: "SportOn Slowlivin",
        category: "Running",
        price: 45000,
        imgUrl: "product-1.png",
    },
    {
        name: "SportOn Rockets Tennis",
        category: "Tennis",
        price: 250000,
        imgUrl: "product-2.png",
    },
    {
        name: "SportOn Hyperfast Shoes",
        category: "Running",
        price: 230000,
        imgUrl: "product-3.png",
    },
    {
        name: "SportOn HyperSoccer v2",
        category: "Running",
        price: 440000,
        imgUrl: "product-4.png",
    },
    {
        name: "SportOn Slowlivin",
        category: "Running",
        price: 550000,
        imgUrl: "product-5.png",
    },
    {
        name: "SportOn Product 6",
        category: "Basketball",
        price: 650000,
        imgUrl: "product-6.png",
    },
    {
        name: "SportOn HyperSoccer v2",
        category: "Running",
        price: 440000,
        imgUrl: "product-4.png",
    },
    {
        name: "SportOn Slowlivin",
        category: "Running",
        price: 45000,
        imgUrl: "product-1.png",
    },
];

const ProductsSection = () => {
    return (
        <section id="products-section" className="container mx-auto mt-32">
            <h2 className="font-bold italic text-4xl text-center mb-14">
                <span className="text-primary">OUR </span>PRODUCTS
            </h2> 
            <div className="grid grid-cols-4 gap-8">
                {productsList.map((product, index) => (
                    <Link href={`/product/${product.name}`} key={index} className="p-2 bg-white hover:drop-shadow-xl duration-300">
                       <div className="bg-primary-light aspect-square w-full flex items-center justify-center relative">
                        <div className="relative w-48 h-48">
                         <Image
                           src={`/images/products/${product.imgUrl}`}
                           alt={product.name}
                           width={300}
                           height={300}
                           className="aspect-square object-contain"
                          />
                        </div>
                        <Button className="w-10 h-10 p-2! absolute right-3 top-3 flex items justify-center bg-primary">
                           <FiPlus size={24} className="text-white"/>  
                        </Button>
                       </div>
                       <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
                       <div className="flex justify-between mb-8">
                        <div className="text-gray-500">{product.category}</div>
                        <div className="font-medium text-primary">
                            {Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR",
                                maximumSignificantDigits: 3,
                            }).format(product.price)}
                        </div>
                       </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ProductsSection;
  
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const CategoriesList = [
    {
        name: "Running",
        imgUrl: "category-running.png",
    },
    {
        name: "Tennis",
        imgUrl: "category-tennis.png",
    },
    {
        name: "Basketball",
        imgUrl: "category-basketball.png"
    },
    {
        name: "Football",
        imgUrl: "category-football.png",
    },
    {
        name: "Badminton",
        imgUrl: "category-badminton.png",
    },
    {
        name: "Swimming",
        imgUrl: "category-swimming.png",
    },
]
 

const CategoriesSection = () => {
    return <section id="category-section" className="container mx-auto pb-20 mt-29">
        <div className="flex justify-between items-center">
            <h2 className="font-bold text-2xl">Browse By Categories</h2>
            <Link href="#" className="flex items-center gap-2 text-primary font-medium">
               <span>See All Categories</span> 
               <FiArrowRight className="self-center"/>
            </Link>
        </div>
        <div className="grid grid-cols-6 gap-12 mt-8">
           {CategoriesList.map((category, index) => (
           <div className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square" key={index}>
                <Image 
                 src={`/images/categories/${category.imgUrl}`} 
                 width={86} 
                 height={86} 
                 alt={category.name}
                 className="object-contain"
                />
                <div className="mt-3 text-primary font-medium text-xl text-center">
                    {category.name}
                </div>
            </div> 
        ))};
        </div>
    </section>
};

export default CategoriesSection;
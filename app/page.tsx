"use client";
import { useEffect,useState } from "react";
 import Link from "next/link";
import { IoMdCart } from "react-icons/io";
import { SiGithub} from "react-icons/si";
import { FaBriefcase ,FaLinkedinIn } from "react-icons/fa";

export default  function ProductList() {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
          setLoading(true);

        fetch('https://fakestoreapi.com/products')
          .then(res=>res.json())

           .then((data)=>setProducts(data))
          .catch((err)=>console.error(err))
          .finally(() => setLoading(false));


         
    },[]);

    const addToCart = (product: any) => {
   
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  
   
  cart.push(product);
  
   
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Produit ajoute au panier avec succes");
};


    return(
        <div className="m-16 ">

            <div className="flex items-center justify-center gap-8">

             <a href="https://portfolio-zakaria-lemchaouri.vercel.app/">  <p className="flex gap-2"><FaBriefcase  size={22}/>Portfolio</p></a> 
              <a href="https://github.com/Ziko-20">  <p className="flex gap-2"><SiGithub  size={22}/>Github</p></a> 
            <a href="https://www.linkedin.com/in/zakaria-lemchaouri/">  <p className="flex gap-2"><FaLinkedinIn  size={22} color="blue-500"  />Linkedin</p></a> 


            </div>
            


            <h1 className="text-center text-5xl mb-8">Liste de Produits:</h1>
            <Link href="/cart">
  <button className="border rounded-xl py-2 text-sm hover:bg-black hover:text-white transition p-8 m-12">
    Voir Panier
  </button>
</Link>
            <div className="grid grid-cols-4 gap-4 ">
            {loading ? (<p className="text-center">Loading...</p>) :  products.map((product:any)=>(
                <div className="border p-6 flex flex-col gap-3 rounded-2xl h-96 shadow-sm hover:shadow-lg transition" key={product.id}>
                    
                    {/* img du prroduit */}
                        <img src={product.image} alt="product pic" className="w-full h-40 object-contain" />
                        {/* nom */}
                        <h3 className="text-sm font-medium line-clamp-2">{product.title}</h3>
                        {/* rating */}
                        <p>⭐ {product.rating.rate} / 5 ({product.rating.count})</p>
                        {/* prix */}
                        <p className="font-bold text-green-600">{product.price} DH</p>
                        <Link href="/cart">
                <button 
  onClick={() => addToCart(product)}
  className="border rounded-xl py-2 text-sm hover:bg-black hover:text-white transition w-full flex items-center justify-center gap-2"
>
  <IoMdCart size={14} />
  Ajouter au panier
</button>
                            </Link>
{/*                         <button className="border rounded-xl py-2 text-sm hover:bg-black hover:text-white transition"><span className=" text-xs">Ajouter au panier</span></button>
 */}                        <Link href={`/products/${product.id}`}>
    <button className="border rounded-xl py-2 text-sm hover:bg-black hover:text-white transition w-full">
      <span className="text-xs">Voir Détails</span>
    </button>
  </Link>
           
                </div>
            ))}
            </div>



        </div>
    );

}
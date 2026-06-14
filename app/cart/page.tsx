"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    
    const data = JSON.parse(localStorage.getItem("cart") || "[]");
    
    setCart(data);
  }, []);

  const removeFromCart = (index: number) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-2xl mx-auto mt-16 p-8">
      <Link href="/">
        <button className="mb-6 text-sm text-black hover:underline">

          ← Retour à la liste
        </button>
      </Link>

      <h1 className="text-3xl font-bold mb-8">🛒 Mon Panier</h1>

      {cart.length === 0 ? (

         <p className="text-gray-500 text-center mt-20">Votre panier est vide.</p>
      ) : (
        <>
          {cart.map((item, index) => (

            <div key={index} className="flex items-center gap-4 border-b py-4">

              <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />

              <div className="flex-1">
                <p className="text-sm font-medium">{item.title}</p>

                <p className="text-green-600 font-bold">{item.price} DH</p>
              </div>
              <button onClick={() => removeFromCart(index)} className="text-red-500 text-sm hover:underline">


                Supprimer
              </button>
            </div>
          ))}

          <p className="text-xl font-bold text-right mt-6">Total : {total.toFixed(2)} DH</p>

        </>
      )}

    </div>
  );

}
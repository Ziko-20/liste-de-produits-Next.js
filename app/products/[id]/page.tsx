"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-center mt-20">Chargement...</p>;
  if (!product) return <p className="text-center mt-20">Produit introuvable.</p>;

  return (
    <div className="max-w-2xl mx-auto mt-16 p-8 border rounded-2xl shadow-lg">
      
      <Link href="/products">
        <button className="mb-6 text-sm text-blue-600 hover:underline">
          ← Retour à la liste
        </button>
      </Link>

      <img src={product.image} alt={product.title} className="w-48 h-48 object-contain mx-auto mb-6" />
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-500 mb-4 capitalize">Catégorie : {product.category}</p>
      <p className="text-green-600 font-bold text-xl mb-4">{product.price} DH</p>
      <p className="mb-4">⭐ {product.rating.rate} / 5 ({product.rating.count} avis)</p>
      <p className="text-gray-700 leading-relaxed">{product.description}</p>

      <button className="mt-8 w-full border rounded-xl py-3 bg-black text-white hover:bg-gray-800 transition">
        Ajouter au panier
      </button>

      {/* ❌ supprime le bouton "Voir Détails" — il n'a pas sa place ici */}
    </div>
  );
}
import CheckoutForm from "@/app/component/forms/CheckoutForm";

export default async function CheckoutPage({ params }) {
   const p = await params;
  const res = await fetch(
    `http://localhost:3000/api/service/${p.id}`,
    { cache: "no-store" } // To avoid caching during dev
  );
  const data = await res.json();
  console.log("Going to checkout with id:", data._id);

  return (
    <div>
      <CheckoutForm data={data} />
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

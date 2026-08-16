import { Link } from "react-router-dom";
import { RateStars } from "../indicators/RateStars";
export const ProductCards = ({
  name,
  price,
  imgUrl,
  rating,
  deliveryDays,
  dayName,
  monthName,
  slug,
  active,
  discount,
}: ProductCard) => {
  return (
    <Link to={`/DetallesDelProducto/${slug}`}>
      <article className="w-full h-full flex flex-col gap-3 shadow-xl rounded-2xl py-5 px-5 hover:-translate-y-2 duration-100 ease-in border border-gray-200 relative">
        <img
          src={imgUrl}
          alt={`Image of ${name}`}
          className="w-full aspect-square object-contain"
        />
        <p className="text-[0.9rem]">{name}</p>
        <div className="text-[1.3rem] font-bold flex justify-between">
          <p>
            {discount == 0
              ? `${price.toFixed(2)}€`
              : `${(price - (price * discount) / 100).toFixed(2)}€`}
          </p>
          <p className="text-red-600">{
          discount == 0
            ? ""
            : `${discount}%`
          }</p>
        </div>
        <RateStars rate={rating} />
        <p className="text-sm text-gray-800 flex-1">
          Recíbelo a partir del <strong>{dayName}</strong> <br />
          {deliveryDays.getDate()} de {monthName}
        </p>
        {active ? null : (
          <div className="absolute inset-0 w-full h-full bg-gray-300 opacity-90 z-100 rounded-2xl flex-center items-center">
            <p className="text-2xl">Sin stock</p>
          </div>
        )}
      </article>
    </Link>
  );
};

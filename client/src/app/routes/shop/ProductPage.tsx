import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "src/api/getProductDetails";
import { productSummaryStorage } from "src/stores/shopStore";
import { Link } from "react-router";
import { RateStars } from "src/components/indicators/RateStars";
import { ShopButtons } from "src/components/buttons/ShopButtons";
import AddToCartIcon from "../../../assets/icons/shop/AddToCart.svg";
import DeliveryTruck from "../../../assets/icons/shop/DeliveryTruck.svg";
import { loading } from "src/animations/loadingAnimation";

export default function ProductPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState<ShowProductDetailsProp | null>(null);
  const mainImg = productSummaryStorage((e) => e.mainImg);
  const changeMainImg = productSummaryStorage((e) => e.setMainImg);

  useEffect(() => {
    const fetchProduct = async () => {
      const product: ShowProductDetailsProp = await getProductDetails(slug!);
      setProduct(product);
    };

    fetchProduct();
    console.log(product);
  }, [slug]);

  useEffect(() => {
    if (product) {
      changeMainImg(product.mainImg);
    }
  }, [product, changeMainImg]);

  useEffect(() => {
      if (!product) {
        const loadingAni = loading("dot");
        return () => {
          loadingAni.kill();
        };
      }
    }, [product]);

  return (
    <main className="flex flex-col gap-5 justify-around min-h-[60vh] my-5 w-8/10 m-auto">
      {!product ? (
        <div className="flex justify-center items-end gap-1">
          <h1 className="text-2xl font-semibold h-fit text-gray-700">
            Cargando productos
          </h1>
          <div className="flex gap-1 mb-2">
            <div className="dot w-1 h-1 bg-gray-700 rounded-full"></div>
            <div className="dot w-1 h-1 bg-gray-700 rounded-full"></div>
            <div className="dot w-1 h-1 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      ) : (
        <>
          <Link to="/Tienda">
            <ShopButtons
              typeOfButton="gray"
              text="← Volver a la tienda"
              customCSS=""
              icon=""
            />
          </Link>
          <span className="flex justify-evenly flex-1 gap-5">
            <section className="flex flex-col gap-5 w-5/15">
              <img
                src={`${mainImg}`}
                alt={`Main img for ${product.name}`}
                className="w-full"
              />
              <span className="flex-center gap-4">
                {product.imgUrl.map((url, i) => (
                  <button className="bg-transparent border-2 border-gray-300 rounded-lg aspect-square w-20 overflow-hidden">
                    <img
                      onMouseOver={() => changeMainImg(url)}
                      src={`${url}`}
                      key={i}
                      alt={`Imagen ${i + 1} del ${product.category} ${product.name}`}
                      className="w-full h-full p-2"
                    ></img>
                  </button>
                ))}
              </span>
            </section>
            <section className="flex flex-col gap-8 py-5 w-4/15 px-8">
              <h2 className="text-2xl text-center font-medium">
                {product.name}
              </h2>
              <p className="text-[1.2rem]">{product.longDescription}</p>
              <ul className="flex-1 flex flex-col gap-4 list-disc list-inside">
                {product.specifications.map((spec, i) => (
                  <li className="text-[1.2rem]" key={i}>
                    {spec}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-5">
                <p>Opiniones de los usuarios</p>
                <RateStars rate={product.rate} />
                <ShopButtons
                  typeOfButton="gray"
                  text="Mira las opiniones"
                  customCSS={""}
                  icon=""
                />
              </div>
            </section>
            <section className="bg-gray-200  h-fit flex flex-col gap-5 py-5 w-4/15 px-8 rounded-lg">
              <div className="flex justify-between">
                <h2 className="text-2xl text-red-600 font-bold">
                  {product.price}€
                </h2>
                {product.discount > 0 ? (
                  <p className="text-[0.7rem] font-extrabold bg-blue-700 p-2 rounded-lg w-fit h-fit text-white">
                    {product.discount}% de descuento
                  </p>
                ) : null}
              </div>
              <span className="flex gap-5 justify-center items-center">
                <img
                  src={DeliveryTruck}
                  alt="Delivery truck icon"
                  className="h-15 object-contain"
                />
                <p>
                  Recibe el pedido a partir del {product.dayName}{" "}
                  {product.estimatedDate.getDay()} de {product.monthName}
                </p>
              </span>

              <ShopButtons
                typeOfButton="blue"
                text="Añadir al carrito"
                customCSS=""
                icon={`${AddToCartIcon}`}
              />
            </section>
          </span>
        </>
      )}
    </main>
  );
}

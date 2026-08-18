import { cartStorage } from "src/stores/menuStore";
import clsx from "clsx";
import { Show, SignInButton, useUser } from "@clerk/react";
import { useEffect } from "react";
import { useCart } from "src/api/useCart";
import trashIcon from "../../../assets/icons/shop/TrashIcon.svg";
import { ShopButtons } from "src/components/buttons/ShopButtons";

export const CartMenu = () => {
  const { cartMenu, cartProducts, setCartProducts, toggleCart} = cartStorage();
  const { getProducts, delProduct } = useCart();
  const { user, isLoaded } = useUser();
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getProducts();
        setCartProducts(data);
      } catch (error) {
        console.error("Error cargando el carrito", error);
      }
    };
    getData();
  }, [isLoaded, user]);

  let totalAmount = 0;
  let totalPrice = 0;

  for (const prod of cartProducts) {
    totalAmount += prod.amount;
    totalPrice += prod.price * prod.amount;
  }

  return (
    <aside
      className={clsx(
        "opacity-0 bg-white max-h-[85vh] min-h-[70vh] overflow-y-scroll w-full md:w-100 absolute top-full right-0 border-2 border-black duration-200 z-1000 flex-center flex-col items-center gap-4",
        cartMenu ? "translate-y-0 opacity-100" : "translate-x-full opacity-0",
      )}
    >
      <Show when="signed-in">
        <div
          className={clsx(
            "flex flex-col flex-1 w-full",
            cartProducts.length <= 0
              ? "justify-center items-center"
              : "gap p-3",
          )}
        >
          {cartProducts.length <= 0 ? (
            <p>El carrito aún esta vacio</p>
          ) : (
            <>
              {cartProducts.map((prod) => (
                  <article
                    key={prod.name}
                    className="flex gap-5 rounded-lg h-30"
                  >
                    <img
                      src={prod.mainImg}
                      alt={`${prod.name} image`}
                      className="aspect-square"
                    />
                    <div className="flex flex-col">
                      <h3>{prod.name}</h3>
                      <h4>{prod.price}€</h4>
                      <h4>Unidades: {prod.amount}</h4>
                      <button
                        className="cursor-pointer"
                        aria-label="Delete product"
                      >
                        <img
                          src={trashIcon}
                          alt="Trash icon"
                          onClick={() => delProduct(prod.productId)}
                        />
                      </button>
                    </div>
                  </article>
                ))}
              <div className="border-t border-dashed border-gray-400 py-5 px-10">
                <div className="flex justify-between">
                  <h3>Unidades:</h3>
                  <h3>{totalAmount}</h3>
                </div>
                <div className="flex justify-between">
                  <h2>Precio total:</h2>
                  <h2 className="font-semibold text-xl">{totalPrice.toFixed(2)}€</h2>
                </div>
                <div className="full flex justify-center pt-2">
                   <button className="py-2 px-4 text-white text-lg bg-blue-500 rounded-lg hover:bg-blue-600 duration-100" onClick={() => toggleCart()}>Procesar compra</button>
                </div>
                
              </div>
            </>
          )}
        </div>
      </Show>

      <Show when="signed-out">
        <p>Registrate y disfruta de tu carrito</p>
        <SignInButton mode="modal">
          <button className="py-2 px-4 bg-blue-400 rounded-xl">
            Inicia sesión
          </button>
        </SignInButton>
      </Show>
    </aside>
  );
};

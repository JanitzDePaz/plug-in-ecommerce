import { useAuth, useUser } from "@clerk/react";
import { cartStorage} from "src/stores/menuStore";

export const useCart = () => {

  const { setCartProducts } = cartStorage()
  const { getToken } = useAuth();
  const { user, isLoaded } = useUser();
  const url = import.meta.env.VITE_API_URL;

  const getProducts = async (): Promise<UserCartProducts[]> => {
    if (!isLoaded || !user) {
      return [];
    }
    const token = await getToken();
    const res = await fetch(`${url}/api/cart/${user.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      throw new Error("Error en la respuesta.");
    }

    const cartProducts = await res.json();

    return cartProducts;
  };

  const addProduct = async (productId: number) => {
    if (!isLoaded || !user) {
      throw new Error("Error al conectar conectar con el usuario.");
    }
    const token = await getToken();
    const res = await fetch(`${url}/api/cart/${user.id}/${productId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      throw new Error("No se pudo agregar el producto.");
    }

    setCartProducts(await getProducts())
  };

  const delProduct = async (productId: number) => {
    if (!isLoaded || !user) {
      throw new Error("Error al conectar conectar con el usuario.");
    }
    const token = await getToken();
    const res = await fetch(`${url}/api/cart/${user.id}/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      throw new Error("No se pudo eliminar el producto.");
    }
  };
  return { getProducts, addProduct, delProduct };
};

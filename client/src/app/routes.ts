import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/Home.tsx"),
    route("tienda", "routes/shop/Shop.tsx"),
    route("detallesDelProducto/:slug", "./routes/shop/ProductPage.tsx"),
    route("contacto", "routes/contact/Contact.tsx")
    
] satisfies RouteConfig;

import { headerItems } from "src/constants/headerItems";
import { Link } from "react-router";
import MobileMenu from "./MobileMenu";
import { searchStorage, cartStorage, menuStorage } from "src/stores/menuStore";
import clsx from "clsx";
import { CartMenu } from "./CartMenu";
import pluginLogo from "../../../assets/icons/PlugInLogo.png"
import searchIcon from "../../../assets/icons/header/Search.svg"
import closeMenuIcon from "../../../assets/icons/header/CloseMenu.svg"
import headerMenuIcon from "../../../assets/icons/header/HeaderMenu.svg"
import shoppingCartIcon from "../../../assets/icons/header/ShoppingCart.svg"

export default function Header() {
  const { toggleCart } = cartStorage();
  const { openedMenu, toggleMenu, closeMenu } = menuStorage();
  const { searchInput, toggleSearchInput } = searchStorage();

  return (
    <>
      <header className="flex-between items-center border-b-2 border-black max-h-[15vh] relative overflow-x-clip">
        <Link to="/">
          <img src={pluginLogo} alt="Logo icon" className="max-h-20"/>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex md:gap-10 gap-5">
            {headerItems.map((item, i) => (
              <li key={item.id} className="hover:scale-110 duration-100">
                <Link className="text-[#163461] hover:text-" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex-between gap-4 relative px-2.5">
          <input
            name="Input"
            placeholder="Buscar"
            aria-label="Busca-producto"
            className={clsx(
              "w-56 absolute left-0 top-1/2 -translate-y-1/2 border-2 border-[#ccc] px-2 py-1 rounded-[50px] shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-md duration-300",
              searchInput
                ? "-translate-x-full opacity-100"
                : "translate-x-0 opacity-0 z-0"
            )}
          />
          <button className="header-button z-10">
            <img
              src={searchIcon}
              alt="Magnifying glass icon"
              onClick={toggleSearchInput}
            />
          </button>
          <button className="header-button relative" onClick={toggleCart}>
            <img src={shoppingCartIcon} alt="Shopping cart icon" />
          </button>
          {openedMenu ? (
            <button
              className=" block md:hidden header-button z-100"
              onClick={closeMenu}
            >
              <img
                src={closeMenuIcon}
                alt="CloseMenuIcon"
                className="w-6 h-6"
              />
            </button>
          ) : (
            <button
              className="block md:hidden header-button z-10"
              onClick={toggleMenu}
            >
              <img src={headerMenuIcon} alt="MenuIcon" />
            </button>
          )}
        </div>
        <CartMenu />
      </header>
      <MobileMenu />
    </>
  );
}

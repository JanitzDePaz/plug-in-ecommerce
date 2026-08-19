import { ShopFilters } from "src/pages/shop/ShopFilters";
import { ShopMain } from "src/pages/shop/ShopMain";
import { MobileFilters } from "src/pages/shop/MobileFilters";
import { mobileShopState } from "src/stores/shopStore";
import { ShopTopFilters } from "src/pages/shop/ShopTopFilters";

export default function Tienda() {
  const activeMobileShop = mobileShopState((e) => e.activeMobileShop);
  const setMobileShopState = mobileShopState((e) => e.setMobileShopState);
  return (
    <main className="flex justify-between gap-10 w-[95vw] md:w-[90vw] lg:w-[85vw] py-10 md:py-5 mx-auto">
      <button
        onClick={() => setMobileShopState(true)}
        className="md:hidden fixed top-30 left-2 z-40 bg-black text-white p-4 rounded-full shadow-2xl active:scale-95 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </svg>
      </button>
      <div className="hidden md:block w-3xs">
        <ShopFilters />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="hidden md:block">
          <ShopTopFilters />
        </div>
        <ShopMain />
      </div>

      <MobileFilters />
    </main>
  );
}

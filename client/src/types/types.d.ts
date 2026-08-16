type menuProp = {
  openedMenu: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
};

type searchProp = {
  searchInput: boolean;
  toggleSearchInput: () => void;
  outSearch: () => void;
};

type cartProp = {
  cartMenu: boolean;
  cartProducts: UserCartProducts[];
  toggleCart: () => void;
  closeCart: () => void;
  setCartProducts: (products: UserCartProducts[]) => void;
};

type HeadsetColorProp = {
  headsetColor1: string;
  headsetColor2: string;
  setColorAquamarineContour: () => void;
  setColorPurpleContour: () => void;
  setColorWhiteContour: () => void;
  setColorBlackContour: () => void;
  setColorGrayPads: () => void;
  setColorWhitePads: () => void;
  setColorBlackPads: () => void;
  setColorBrownPads: () => void;
};

type LandingPrimaryButtonProps = {
  text: string;
  route: string;
  style: string;
};

type ChangeColorButtonProps = {
  color: string;
  onClick: () => void;
};

type ScreenDataCardsProps = {
  header: String;
  ref: React.RefObject<HTMLHeadingElement> | null;
  svg: String;
  alt: String;
  value: String;
};

type typingTestProp = {
  activeTypingTest: boolean;
  activateTypingTest: () => void;
  desactivateTypingTest: () => void;

  typingTestTimer: number;
  addSeconds: () => void;
  restartTypingTestTimer: () => void;

  workingTimer: boolean;
  activatedTimer: () => void;
  desactivatedTimer: () => void;

  textToWrite: string;
  setTextToWrite: (string) => void;

  lastTextWrited: string;
  updateLastTextWrited: (string) => void;

  wordPerMinute: float;
  setWordPerMinute: (number) => void;

  wordPerSecond: float;
  setWordPerSecond: (number) => void;

  writedWordsAccuracy: number;
  setWordAccuracy: (number) => void;

  stopTest: boolean;
  finishTest: () => void;
  StartTest: () => void;
};

type typingTestCards = {
  numberResult: number;
  typingTestResultType: string;
};

type activeFiltersMenuProp = {
  activeFilterMenu: boolean;
  openFilterMenu: () => void;
  closeFilterMenu: () => void;
};

type ProductCardPropDTO = {
  id: number;
  name: string;
  slug: string;
  price: number;
  imgUrl: string;
  rate: number;
  category: string;
  estimateDeliveryDays: Date;
  active: boolean;
  discount: number;
};

type ProductCardsData = {
  id: number;
  name: string;
  slug: string;
  price: number;
  imgUrl: string;
  rate: number;
  category: string;
  estimatedDate: Date;
  dayName: string;
  monthName: string;
  active: boolean;
  discount: number;
};

type ShowProductDetailsProp = {
  id: number;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  category: string;
  rate: number;
  estimatedDate: Date;
  dayName: string;
  monthName: string;
  imgUrl: string[];
  mainImg: string;
  active: boolean;
  stock: number;
  brand: string;
  specifications: string[];
  discount: number;
};

type ProductCard = {
  name: string;
  slug: string;
  price: number;
  imgUrl: string;
  rating: number;
  deliveryDays: Date;
  dayName: string;
  monthName: string;
  active: boolean;
  discount: number;
};

type ProdRating = {
  rate: number;
};

type CategoryFiltersProp = {
  categoryFilter: string;
  setCategoryFilter: (string) => void;
};

type SortProps = {
  sortBy: string;
  setSortBy: (string) => void;
};

type SortButtons = {
  text: string;
  changeSorting: () => void;
};

type FilterProps = {
  minPrice: number;
  setMinPrice: (number) => void;

  maxPrice: number;
  setMaxPrice: (number) => void;

  minRate: number;
  setMinRate: (number) => void;

  maxRate: number;
  setMaxRate: (number) => void;

  absoluteMaxRate: number;
  setAbsoluteMaxRate: (number) => void;

  absoluteMaxPrice: number;
  setAbsoluteMaxPrice: (number) => void;
};

type ProductSummaryProp = {
  mainImg: string;
  setMainImg: (string) => void;
};

type ButtonProps = {
  typeOfButton: string;
  text: string;
  customCSS: string;
  icon: string;
  onClick?: () => void 
};


type MobileShopState = {
  activeMobileShop: boolean,
  setMobileShopState: (bool) => void
}
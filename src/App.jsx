import { useEffect, useState } from "react";

import "../public/scss/main.scss";
import "photoswipe/dist/photoswipe.css";
import "rc-slider/assets/index.css";

import HomesModal from "@/components/modals/HomesModal";
import Context from "@/context/Context";
import QuickView from "@/components/modals/QuickView";
import ProductSidebar from "@/components/modals/ProductSidebar";
import QuickAdd from "@/components/modals/QuickAdd";
import Compare from "@/components/modals/Compare";
import ShopCart from "@/components/modals/ShopCart";
import AskQuestion from "@/components/modals/AskQuestion";
import BlogSidebar from "@/components/modals/BlogSidebar";
import ColorCompare from "@/components/modals/ColorCompare";
import DeliveryReturn from "@/components/modals/DeliveryReturn";
import FindSize from "@/components/modals/FindSize";
import Login from "@/components/modals/Login";
import MobileMenu from "@/components/modals/MobileMenu";
import Register from "@/components/modals/Register";
import ResetPass from "@/components/modals/ResetPass";
import SearchModal from "@/components/modals/SearchModal";
import ToolbarBottom from "@/components/modals/ToolbarBottom";
import ToolbarShop from "@/components/modals/ToolbarShop";

import NewsletterModal from "@/components/modals/NewsletterModal";
import ShareModal from "@/components/modals/ShareModal";
import ScrollTop from "@/components/common/ScrollTop";
import RtlToggle from "@/components/common/RtlToggle";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage1 from "./pages/page";
import WOW from "@/utlis/wow";
import HomeMultiBrandPage from "./pages/homes/home-multi-brand";
import Homepage2 from "./pages/homes/home-02";
import Homepage3 from "./pages/homes/home-03";
import Homepage4 from "./pages/homes/home-04";
import Homepage5 from "./pages/homes/home-05";
import Homepage6 from "./pages/homes/home-06";
import HomePersonalizedPodPage from "./pages/homes/home-personalized-pod";
import HomePickleBallPage from "./pages/homes/home-pickleball";
import HomeCeramicPage from "./pages/homes/home-ceramic";
import HomeFoodPage from "./pages/homes/home-food";
import HomeCampAndHikePage from "./pages/homes/home-camp-and-hike";
import Homepage7 from "./pages/homes/home-07";
import Homepage8 from "./pages/homes/home-08";
import HomeSkincarePage from "./pages/homes/home-skincare";
import HomeHeadphonePage from "./pages/homes/home-headphone";
import HomeGiftcardPage from "./pages/homes/home-giftcard";
import HomeFurniturePage from "./pages/homes/home-furniture";
import HomeFurniturePage2 from "./pages/homes/home-furniture-02";
import HomeSkateboardPage from "./pages/homes/home-skateboard";
import HomeStrollerPage from "./pages/homes/home-stroller";
import HomeDecorPage from "./pages/homes/home-decor";
import HomeElectricPage from "./pages/homes/home-electronic";
import HomeSetupGearPage from "./pages/homes/home-setup-gear";
import HomeDogAccessoriesPage from "./pages/homes/home-dog-accessories";
import HomeKitchenWearPage from "./pages/homes/home-kitchen-wear";
import HomePhonecasePage from "./pages/homes/home-phonecase";
import HomePaddleBoardsPage from "./pages/homes/home-paddle-boards";
import HomeGlassesPage from "./pages/homes/home-glasses";
import HomePodStorePage from "./pages/homes/home-pod-store";
import HomeActivewearPage from "./pages/homes/home-activewear";
import HomeHandbagPage from "./pages/homes/home-handbag";
import HomeTeePage from "./pages/homes/home-tee";
import HomeSockPage from "./pages/homes/home-sock";
import HomeJewelryPage from "./pages/homes/home-jewerly";
import HomeSneakerPage from "./pages/homes/home-sneaker";
import HomeAccessoriesPage from "./pages/homes/home-accessories";
import HomeGroceryPage from "./pages/homes/home-grocery";
import HomeBabyPage from "./pages/homes/home-baby";
import HomeCosmeticPage from "./pages/homes/home-cosmetic";
import HomePlantPage from "./pages/homes/home-plant";
import HomeSwimwearPage from "./pages/homes/home-swimwear";
import HomeElectricBikePage from "./pages/homes/home-electric-bike";
import HomeFoodwearPage from "./pages/homes/home-footwear";
import HomeBookstorePage from "./pages/homes/home-bookstore";
import HomeGamingAccessoriesPage from "./pages/homes/home-gaming-accessories";
import ShopDefaultPage from "./pages/shop/shop-default";
import ShopLestSidebarPage from "./pages/shop/shop-left-sidebar";
import ShopRightSidebarPage from "./pages/shop/shop-right-sidebar";
import ShopFullwisthPage from "./pages/shop/shop-fullwidth";
import ShopCollectionSubPage from "./pages/shop/shop-collection-sub";
import ShopCollectionPage from "./pages/shop/shop-collection-list";
import ShopLinkPage from "./pages/shop/shop-link";
import ShopLoadmorePage from "./pages/shop/shop-loadmore";
import ShopInfiniteScrollingPage from "./pages/shop/shop-infinite-scrolling";
import ShopFilterSidebarPage from "./pages/shop/shop-filter-sidebar";
import ShopFIlterHiddenPage from "./pages/shop/shop-filter-hidden";
import ProductStylePage1 from "./pages/shop/product-style-01";
import ProductStylePage2 from "./pages/shop/product-style-02";
import ProductStylePage3 from "./pages/shop/product-style-03";
import ProductStylePage4 from "./pages/shop/product-style-04";
import ProductStylePage5 from "./pages/shop/product-style-05";
import ProductStylePage6 from "./pages/shop/product-style-06";
import ProductStylePage7 from "./pages/shop/product-style-07";
import ProductDetailPage from "./pages/shop-details/product-detail";
import ProductGridPage1 from "./pages/shop-details/product-grid-1";
import ProductGridPage2 from "./pages/shop-details/product-grid-2";
import ProductStackedPage from "./pages/shop-details/product-stacked";
import ProductRightThumbnailPage from "./pages/shop-details/product-right-thumbnails";
import ProductBottomThumbnailPage from "./pages/shop-details/product-bottom-thumbnails";
import ProductDrawerSidebarPage from "./pages/shop-details/product-drawer-sidebar";
import ProductDescriptionAccordionPage from "./pages/shop-details/product-description-accordion";
import ProductDescriptionListPage from "./pages/shop-details/product-description-list";
import ProductDescriptionVerticalPage from "./pages/shop-details/product-description-vertical";
import ProductInnerZoomPage from "./pages/shop-details/product-inner-zoom";
import ProductZoomMagnifierPage from "./pages/shop-details/product-zoom-magnifier";
import ProductNoZoomPage from "./pages/shop-details/product-no-zoom";
import ProductPhotoswipePupupPage from "./pages/shop-details/product-photoswipe-popup";
import ProductZoomPopupPage from "./pages/shop-details/product-zoom-popup";
import ProductVideoPage from "./pages/shop-details/product-video";
import Product3DPage from "./pages/shop-details/product-3d";
import ProductOptionsCustomizerPage from "./pages/shop-details/product-options-customizer";
import ProductAdvancedTypesPage from "./pages/shop-details/product-advanced-types";
import ProductGiftcardPage from "./pages/shop-details/product-giftcard";
import ProductColorSwatchPage from "./pages/shop-details/product-color-swatch";
import ProductRectanglePage from "./pages/shop-details/product-rectangle";
import ProductRectangleColorPage from "./pages/shop-details/product-rectangle-color";
import ProductSwatchImagePage from "./pages/shop-details/product-swatch-image";
import ProductSwatchImageRoundedPage from "./pages/shop-details/product-swatch-image-rounded";
import ProductSwatchDropdownPage from "./pages/shop-details/product-swatch-dropdown";
import ProductSwatchDropdownColorPage from "./pages/shop-details/product-swatch-dropdown-color";
import ProductFrequentlyBoughtTogetherPage from "./pages/shop-details/product-frequently-bought-together";
import ProductFrequentlyBoughtTogetherPage2 from "./pages/shop-details/product-frequently-bought-together-2";
import ProductUpsellFeaturesPage from "./pages/shop-details/product-upsell-features";
import ProductPreOrdersPage from "./pages/shop-details/product-pre-orders";
import ProductNotificationPage from "./pages/shop-details/product-notification";
import ProductPickupPage from "./pages/shop-details/product-pickup";
import ProductImagesGroupedPage from "./pages/shop-details/product-images-grouped";
import ProductComplementryPage from "./pages/shop-details/product-complimentary";
import ProductQuickOrderListPage from "./pages/shop-details/product-quick-order-list";
import ProductDetailVolumeDiscountPage from "./pages/shop-details/product-detail-volume-discount";
import ProductDetailVolumeDiscountGridPage from "./pages/shop-details/product-detail-volume-discount-grid";
import ProductStyleBuyxGetxPage from "./pages/shop-details/product-detail-buyx-gety";
import AboutUsPage from "./pages/otherPages/about-us";
import BrandsPage from "./pages/otherPages/brands";
import BrandsPage2 from "./pages/otherPages/brands-v2";
import ContactPage1 from "./pages/otherPages/contact-1";
import ContactPage2 from "./pages/otherPages/contact-2";
import FaqPage1 from "./pages/otherPages/faq-1";
import FaqPage2 from "./pages/otherPages/faq-2";
import OurStorePage from "./pages/otherPages/our-store";
import TimelinePage from "./pages/otherPages/timeline";
import ViewCartPage from "./pages/otherPages/view-cart";
import MyAccountPage from "./pages/dashboard/my-account";
import WishlistPage from "./pages/otherPages/wishlist";
import TermsConditionsPage from "./pages/otherPages/terms-conditions";
import PageNotFoundPage from "./pages/otherPages/page-not-found";
import BlogGridPage from "./pages/blogs/blog-grid";
import BlogSidebarLeftPage from "./pages/blogs/blog-sidebar-left";
import BlogSidebarRightPage from "./pages/blogs/blog-sidebar-right";
import BlogListPage from "./pages/blogs/blog-list";
import BlogDetailsPage from "./pages/blogs/blog-detail";
import StoreLocationPage from "./pages/otherPages/store-locations";
import ScrollTopBehaviour from "./components/common/ScrollToTopBehaviour";
import CheckoutPage from "./pages/otherPages/checkout";
import PaymentCOnfirmationPage from "./pages/otherPages/payment-confirmation";
import PaymentFailurePage from "./pages/otherPages/payment-failure";
import MyAccountOrderPage from "./pages/dashboard/my-account-orders";
import MyAccountAddedssPage from "./pages/dashboard/my-account-address";
import MyAccountEditPage from "./pages/dashboard/my-account-edit";
import MyAccountWishlistPage from "./pages/dashboard/my-account-wishlist";
import MyAccountOrderDetailsPage from "./pages/dashboard/my-account-orders-details";
import InvoicePage from "./pages/otherPages/invoice";
import HomeKidsPage from "./pages/homes/home-kids";
import HomeMenPage from "./pages/homes/home-men";
import ComparePage from "./pages/otherPages/compare";
import HomeParallaxPage from "./pages/homes/home-parallax";
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 100) {
        header.classList.add("header-bg");
      } else {
        header.classList.remove("header-bg");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    setScrollDirection("up");
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 250) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setScrollDirection("down");
        } else {
          // Scrolling up
          setScrollDirection("up");
        }
      } else {
        // Below 250px
        setScrollDirection("down");
      }

      lastScrollY.current = currentScrollY;
    };

    const lastScrollY = { current: window.scrollY };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);
  useEffect(() => {
    // Close any open modal
    import("bootstrap")
      .then((bootstrap) => {
        const modalElements = document.querySelectorAll(".modal.show");
        modalElements.forEach((modal) => {
          const modalInstance = bootstrap.Modal.getInstance(modal);
          if (modalInstance) {
            modalInstance.hide();
            // modal.setAttribute("aria-hidden", "true"); // Ensure aria-hidden is set when closed
          }
        });

        // Close any open offcanvas
        const offcanvasElements = document.querySelectorAll(".offcanvas.show");
        offcanvasElements.forEach((offcanvas) => {
          const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
          if (offcanvasInstance) {
            offcanvasInstance.hide();
            // offcanvas.setAttribute("aria-hidden", "true"); // Ensure aria-hidden is set when closed
          }
        });
      })
      .catch((error) => {
        console.error("Error loading Bootstrap:", error);
      });
  }, [pathname]); // Runs every time the route changes

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      if (scrollDirection == "up") {
        header.style.top = "0px";
      } else {
        header.style.top = "-185px";
      }
    }
  }, [scrollDirection]);
  useEffect(() => {
    const wow = new WOW({
      mobile: false,
      live: false,
    });
    wow.init();
  }, [pathname]);

  useEffect(() => {
    const initializeDirection = () => {
      const direction = localStorage.getItem("direction");

      if (direction) {
        const parsedDirection = JSON.parse(direction);
        document.documentElement.dir = parsedDirection.dir;
        document.body.classList.add(parsedDirection.dir);
      } else {
        document.documentElement.dir = "ltr";
      }

      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.classList.add("disabled");
      }
    };

    initializeDirection();
  }, []); // Only runs once on component mount

  return (
    <>
      <div className="preload preload-container" id="preloader">
        <div className="preload-logo">
          <div className="spinner"></div>
        </div>
      </div>
      <Context>
        <div id="wrapper">
          <Routes>
            <Route path="/">
              <Route index element={<HomePage1 />} />
              <Route path="home-multi-brand" element={<HomeMultiBrandPage />} />
              <Route path="home-02" element={<Homepage2 />} />
              <Route path="home-03" element={<Homepage3 />} />
              <Route path="home-04" element={<Homepage4 />} />
              <Route path="home-05" element={<Homepage5 />} />
              <Route path="home-06" element={<Homepage6 />} />
              <Route
                path="home-personalized-pod"
                element={<HomePersonalizedPodPage />}
              />
              <Route path="home-pickleball" element={<HomePickleBallPage />} />
              <Route path="home-ceramic" element={<HomeCeramicPage />} />
              <Route path="home-food" element={<HomeFoodPage />} />
              <Route
                path="home-camp-and-hike"
                element={<HomeCampAndHikePage />}
              />
              <Route path="home-07" element={<Homepage7 />} />
              <Route path="home-08" element={<Homepage8 />} />
              <Route path="home-skincare" element={<HomeSkincarePage />} />
              <Route path="home-headphone" element={<HomeHeadphonePage />} />
              <Route path="home-giftcard" element={<HomeGiftcardPage />} />
              <Route path="home-furniture" element={<HomeFurniturePage />} />
              <Route
                path="home-furniture-02"
                element={<HomeFurniturePage2 />}
              />
              <Route path="home-skateboard" element={<HomeSkateboardPage />} />
              <Route path="home-stroller" element={<HomeStrollerPage />} />
              <Route path="home-decor" element={<HomeDecorPage />} />
              <Route path="home-electronic" element={<HomeElectricPage />} />
              <Route path="home-setup-gear" element={<HomeSetupGearPage />} />
              <Route
                path="home-dog-accessories"
                element={<HomeDogAccessoriesPage />}
              />
              <Route
                path="home-kitchen-wear"
                element={<HomeKitchenWearPage />}
              />
              <Route path="home-phonecase" element={<HomePhonecasePage />} />
              <Route
                path="home-paddle-boards"
                element={<HomePaddleBoardsPage />}
              />
              <Route path="home-glasses" element={<HomeGlassesPage />} />
              <Route path="home-pod-store" element={<HomePodStorePage />} />
              <Route path="home-activewear" element={<HomeActivewearPage />} />
              <Route path="home-handbag" element={<HomeHandbagPage />} />
              <Route path="home-tee" element={<HomeTeePage />} />
              <Route path="home-sock" element={<HomeSockPage />} />
              <Route path="home-jewerly" element={<HomeJewelryPage />} />
              <Route path="home-sneaker" element={<HomeSneakerPage />} />
              <Route path="home-kids" element={<HomeKidsPage />} />
              <Route path="home-men" element={<HomeMenPage />} />
              <Route path="home-parallax" element={<HomeParallaxPage />} />
              <Route
                path="home-accessories"
                element={<HomeAccessoriesPage />}
              />
              <Route path="home-grocery" element={<HomeGroceryPage />} />
              <Route path="home-baby" element={<HomeBabyPage />} />
              <Route path="home-cosmetic" element={<HomeCosmeticPage />} />
              <Route path="home-plant" element={<HomePlantPage />} />
              <Route path="home-swimwear" element={<HomeSwimwearPage />} />
              <Route
                path="home-electric-bike"
                element={<HomeElectricBikePage />}
              />
              <Route path="home-footwear" element={<HomeFoodwearPage />} />
              <Route path="home-bookstore" element={<HomeBookstorePage />} />
              <Route
                path="home-gaming-accessories"
                element={<HomeGamingAccessoriesPage />}
              />

              <Route path="shop-default" element={<ShopDefaultPage />} />
              <Route
                path="shop-left-sidebar"
                element={<ShopLestSidebarPage />}
              />
              <Route
                path="shop-right-sidebar"
                element={<ShopRightSidebarPage />}
              />
              <Route path="shop-fullwidth" element={<ShopFullwisthPage />} />
              <Route
                path="shop-collection-sub"
                element={<ShopCollectionSubPage />}
              />
              <Route
                path="shop-collection-list"
                element={<ShopCollectionPage />}
              />
              <Route path="shop-link" element={<ShopLinkPage />} />
              <Route path="shop-loadmore" element={<ShopLoadmorePage />} />
              <Route
                path="shop-infinite-scrolling"
                element={<ShopInfiniteScrollingPage />}
              />
              <Route
                path="shop-filter-sidebar"
                element={<ShopFilterSidebarPage />}
              />
              <Route
                path="shop-filter-hidden"
                element={<ShopFIlterHiddenPage />}
              />
              <Route path="product-style-01" element={<ProductStylePage1 />} />
              <Route path="product-style-02" element={<ProductStylePage2 />} />
              <Route path="product-style-03" element={<ProductStylePage3 />} />
              <Route path="product-style-04" element={<ProductStylePage4 />} />
              <Route path="product-style-05" element={<ProductStylePage5 />} />
              <Route path="product-style-06" element={<ProductStylePage6 />} />
              <Route path="product-style-07" element={<ProductStylePage7 />} />
              <Route path="compare" element={<ComparePage />} />
              <Route
                path="product-detail/:id"
                element={<ProductDetailPage />}
              />
              <Route path="product-grid-1/:id" element={<ProductGridPage1 />} />
              <Route path="product-grid-2/:id" element={<ProductGridPage2 />} />
              <Route
                path="product-stacked/:id"
                element={<ProductStackedPage />}
              />
              <Route
                path="product-right-thumbnails/:id"
                element={<ProductRightThumbnailPage />}
              />
              <Route
                path="product-bottom-thumbnails/:id"
                element={<ProductBottomThumbnailPage />}
              />
              <Route
                path="product-drawer-sidebar/:id"
                element={<ProductDrawerSidebarPage />}
              />
              <Route
                path="product-description-accordion/:id"
                element={<ProductDescriptionAccordionPage />}
              />
              <Route
                path="product-description-list/:id"
                element={<ProductDescriptionListPage />}
              />
              <Route
                path="product-description-vertical/:id"
                element={<ProductDescriptionVerticalPage />}
              />
              <Route
                path="product-inner-zoom/:id"
                element={<ProductInnerZoomPage />}
              />
              <Route
                path="product-zoom-magnifier/:id"
                element={<ProductZoomMagnifierPage />}
              />

              <Route
                path="product-no-zoom/:id"
                element={<ProductNoZoomPage />}
              />
              <Route
                path="product-photoswipe-popup/:id"
                element={<ProductPhotoswipePupupPage />}
              />
              <Route
                path="product-zoom-popup/:id"
                element={<ProductZoomPopupPage />}
              />
              <Route path="product-video/:id" element={<ProductVideoPage />} />
              <Route path="product-3d/:id" element={<Product3DPage />} />
              <Route
                path="product-options-customizer/:id"
                element={<ProductOptionsCustomizerPage />}
              />
              <Route
                path="product-advanced-types/:id"
                element={<ProductAdvancedTypesPage />}
              />
              <Route
                path="product-giftcard/:id"
                element={<ProductGiftcardPage />}
              />

              <Route
                path="product-color-swatch/:id"
                element={<ProductColorSwatchPage />}
              />
              <Route
                path="product-rectangle/:id"
                element={<ProductRectanglePage />}
              />
              <Route
                path="product-rectangle-color/:id"
                element={<ProductRectangleColorPage />}
              />
              <Route
                path="product-swatch-image/:id"
                element={<ProductSwatchImagePage />}
              />
              <Route
                path="product-swatch-image-rounded/:id"
                element={<ProductSwatchImageRoundedPage />}
              />
              <Route
                path="product-swatch-dropdown/:id"
                element={<ProductSwatchDropdownPage />}
              />
              <Route
                path="product-swatch-dropdown-color/:id"
                element={<ProductSwatchDropdownColorPage />}
              />
              <Route
                path="product-frequently-bought-together/:id"
                element={<ProductFrequentlyBoughtTogetherPage />}
              />
              <Route
                path="product-frequently-bought-together-2/:id"
                element={<ProductFrequentlyBoughtTogetherPage2 />}
              />
              <Route
                path="product-upsell-features/:id"
                element={<ProductUpsellFeaturesPage />}
              />
              <Route
                path="product-pre-orders/:id"
                element={<ProductPreOrdersPage />}
              />
              <Route
                path="product-notification/:id"
                element={<ProductNotificationPage />}
              />
              <Route
                path="product-pickup/:id"
                element={<ProductPickupPage />}
              />
              <Route
                path="product-images-grouped/:id"
                element={<ProductImagesGroupedPage />}
              />
              <Route
                path="product-complimentary/:id"
                element={<ProductComplementryPage />}
              />
              <Route
                path="product-quick-order-list/:id"
                element={<ProductQuickOrderListPage />}
              />
              <Route
                path="product-detail-volume-discount/:id"
                element={<ProductDetailVolumeDiscountPage />}
              />
              <Route
                path="product-detail-volume-discount-grid/:id"
                element={<ProductDetailVolumeDiscountGridPage />}
              />
              <Route
                path="product-detail-buyx-gety/:id"
                element={<ProductStyleBuyxGetxPage />}
              />

              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="payment-failure" element={<PaymentFailurePage />} />
              <Route
                path="payment-confirmation"
                element={<PaymentCOnfirmationPage />}
              />

              <Route
                path="my-account-orders"
                element={<MyAccountOrderPage />}
              />
              <Route
                path="my-account-address"
                element={<MyAccountAddedssPage />}
              />
              <Route path="my-account-edit" element={<MyAccountEditPage />} />
              <Route
                path="my-account-wishlist"
                element={<MyAccountWishlistPage />}
              />
              <Route
                path="my-account-orders-details"
                element={<MyAccountOrderDetailsPage />}
              />
              <Route path="invoice" element={<InvoicePage />} />

              <Route path="about-us" element={<AboutUsPage />} />
              <Route path="brands" element={<BrandsPage />} />
              <Route path="brands-v2" element={<BrandsPage2 />} />
              <Route path="contact-1" element={<ContactPage1 />} />
              <Route path="contact-2" element={<ContactPage2 />} />
              <Route path="faq-1" element={<FaqPage1 />} />
              <Route path="faq-2" element={<FaqPage2 />} />
              <Route path="our-store" element={<OurStorePage />} />
              <Route path="store-locations" element={<StoreLocationPage />} />
              <Route path="timeline" element={<TimelinePage />} />
              <Route path="view-cart" element={<ViewCartPage />} />
              <Route path="my-account" element={<MyAccountPage />} />
              <Route path="wishlist" element={<WishlistPage />} />
              <Route
                path="terms-conditions"
                element={<TermsConditionsPage />}
              />
              <Route path="page-not-found" element={<PageNotFoundPage />} />

              <Route path="blog-grid" element={<BlogGridPage />} />
              <Route
                path="blog-sidebar-left"
                element={<BlogSidebarLeftPage />}
              />
              <Route
                path="blog-sidebar-right"
                element={<BlogSidebarRightPage />}
              />
              <Route path="blog-list" element={<BlogListPage />} />
              <Route path="blog-detail/:id" element={<BlogDetailsPage />} />
              <Route path="*" element={<PageNotFoundPage />} />
            </Route>
          </Routes>
        </div>
        <RtlToggle />
        <HomesModal /> <QuickView />
        <QuickAdd />
        <ProductSidebar />
        <Compare />
        <ShopCart />
        <AskQuestion />
        <BlogSidebar />
        <ColorCompare />
        <DeliveryReturn />
        <FindSize />
        <Login />
        <MobileMenu />
        <Register />
        <ResetPass />
        <SearchModal />
        <ToolbarBottom />
        <ToolbarShop />
        <NewsletterModal />
        <ShareModal />{" "}
      </Context>
      <ScrollTop />
      <ScrollTopBehaviour />
    </>
  );
}

export default App;

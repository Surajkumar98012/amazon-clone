import Image from "next/image";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
    LocationMarkerIcon,
} from "@heroicons/react/outline";
import {signIn,signOut,useSession} from "next-auth/client";
import {useRouter} from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";


function Header() {

  
   const [session]=useSession();
   const router=useRouter();
   const items=useSelector(selectItems);
   


    return (
        <header>
        {/*top nav */}
            <div className="flex items-center bg-amazon_blue flex-grow p-1 py-1">
               <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                   <Image
                     onClick={()=>router.push('/')}
                     src='https://links.papareact.com/f90'
                     width={150}
                     height={40}
                     objectFit="contain"
                     className="cursor-pointer"

                   />
                <div className="hidden sm:flex items-center flex-grow text-white">
                <LocationMarkerIcon className="h-7"/>
                <div className="link pr-2 pb-2">
                <p className="md:text-sm">Hello</p>
                <p className="font-extrabold md:text-sm">Select your address</p>
                </div>
                </div>
               </div>
              {/*searchbar */}  
              <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                 <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none" type="text"/>
                 <SearchIcon className="h-12 p-4"/>
              </div>

              {/*Right */}  
              <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                <div onClick={!session ? signIn : signOut} className="cursor-pointer link">
                  <p className="hover:underline">
                   {session ? `Hello,${session.user.name}`:"Sign In"}
                  </p>
                  <p className="font-extrabold md:text-sm">Account & List</p>
                </div>
                
                <div onClick={()=>session&& router.push("/orders")} className="link">
                <p>Returns</p>
                <p className="font-extrabold md:text-sm">& order</p>
                </div>

                <div onClick={()=>router.push('/checkout')} className="relative link flex">
                <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                  {items.length}
                </span>
                <ShoppingCartIcon className="h-10"/>
                <p className="hidden md:inline font-extrabold md:text-sm mt-3">Basket</p>
                </div>
              </div>
            </div>
        {/*button nav */}
            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
               <p className="link flex items-center font-bold">
                <MenuIcon className="h-6 mr-1"/>
                
                All
               </p>
               <p className="link font-bold">Gift Card</p>
               <p className="link font-bold">Prime Video</p>
               <p className="link font-bold">Today's Deal</p>

               <p className="link hidden lg:inline-flex pl-3 font-bold">Fashion</p>
               <p className="link hidden lg:inline-flex pl-3 font-bold">Electronics</p>
               <p className="link hidden lg:inline-flex pl-3 font-bold">Amazon Pay</p>
               <p className="link hidden lg:inline-flex pl-2 font-bold">Health & Personal Care</p>
               <p className="link hidden lg:inline-flex pl-2 font-bold">Customer services</p>
               <p className="link hidden lg:inline-flex pl-20 font-bold">Free Delivery</p>
               <p className="link hidden lg:inline-flex pl-2 font-bold">Movies & more</p>            
            </div>
        </header>
    )
}

export default Header

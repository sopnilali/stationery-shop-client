import { logout, selectCurrentUser } from '@/Redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/Redux/hooks';
import { publicPaths, rightItemsPaths } from '@/routes/public.routes';
import { headerItemsGenerator } from '@/utils/headerItemsGenerator';
import { Badge, Button, Layout, Menu, } from 'antd';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { ShoppingBagIcon } from 'lucide-react';
import { removeFromCart, updateQuantity } from '@/Redux/features/cart/cartSlice';
import { useCreateOrderMutation } from '@/Redux/features/order/orderApi';
import { useEffect } from 'react';
import { toast } from 'sonner';



const { Header} = Layout;


const CartSheet = () => {
  const dispatch = useAppDispatch();



  const [createOrder,  { isLoading, isSuccess, data, isError, error }] = useCreateOrderMutation();

  const cartData = useAppSelector((state) => state.cart);

  const handlePlaceOrder = async () => {
    await createOrder({ products: cartData.items })
  };

  const toastId = "cart";

  useEffect(() => {
    if (isLoading) toast.loading("Processing ...", { id: toastId });

    if (isSuccess) {
      toast.success(data?.message, { id: toastId });
      if (data?.data) {
        setTimeout(() => {
          window.location.href = data.data;
        }, 1000);
      }
    }

    if (isError) {
      toast.error("Order is not specified", { id: toastId });
    }


  }, [data?.data, data?.message, error, isError, isLoading, isSuccess]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link" className="relative">
          <ShoppingBagIcon className="h-6 w-6" />
          <Badge className="absolute right-0 top-0 bg-red-600 text-white rounded-full text-xs p-1">
            {cartData.totalQuantity}
          </Badge>
        </Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col gap-4 p-6 bg-white shadow-lg rounded-lg max-w-md">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="text-xl font-semibold">Your Cart</SheetTitle>
          <SheetDescription className="text-sm text-gray-500">
            Review your items and proceed to checkout.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto">
          {cartData.items.length > 0 ? (
            <ul className="space-y-4">
              {cartData.items.map((item) => (
                <li key={item.product} className="flex items-center gap-4">
                  <img
                    src={item.productImg}
                    alt={item.name}
                    className="h-16 w-16 rounded object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{item.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.product,
                              quantity: Math.max(item.quantity - 1, 1),
                            })
                          )
                        }
                        className="w-6 h-6 bg-gray-200 text-black rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.product,
                              quantity: Math.min(item.quantity + 1, item.stock),
                            })
                          )
                        }
                        className="w-6 h-6 bg-gray-200 text-black rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-gray-800">
                    BDT {(item.quantity * item.price).toFixed(2)}
                  </p>
                  <button
                    onClick={() => dispatch(removeFromCart(item.product))}
                    className="text-red-600 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}

          <div className="border-b my-3"></div>

          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-700">
              Total Quantity:
            </span>
            <span className="text-lg font-bold">{cartData.totalQuantity}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-700">
              Total Price:
            </span>
            <span className="text-lg font-bold">
              BDT {cartData.totalPrice.toFixed(2)}
            </span>
          </div>
        </div>

        <SheetFooter className="border-t pt-4">
          <SheetClose asChild>
            <Button className="w-full bg-gray-500 text-white" onClick={handlePlaceOrder}>
            Order Now
            </Button>
            
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};





const Headers = () => {

  const headerItems : any = headerItemsGenerator(publicPaths )

  const rightItemsPath: any = headerItemsGenerator(rightItemsPaths)
  const user = useAppSelector(selectCurrentUser);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };



  return (
    <> 
          <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: "white",
          color: 'white'
        }}
      >
        <div><img   src="https://chromeadvice.wordpress.com/wp-content/uploads/2025/01/stationershop-logo.png" alt="" /></div>
        <Menu
          mode="horizontal"
          items={headerItems}
          color='#003D5F'
          style={{ display: 'flex', backgroundColor: "white", color: '#003D5F', justifyContent: "center",  width:"100%", }}
        />
        <CartSheet />
        {user ? <Button onClick={handleLogout}>Logout</Button>: <Menu
          mode="horizontal"
          items={rightItemsPath}
          style={{ display: 'flex', color:'white' }}
        />}
      </Header>
    
    
    </>
  );
};

export default Headers;

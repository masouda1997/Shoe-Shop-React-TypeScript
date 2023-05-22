import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRoutes from "./routes/public";
import {
	Home,
	Cart,
	Checkouts,
	Company,
	Location,
	Login,
	Popular,
	Onboarding,
	Orders,
	Payments,
	Products,
	Search,
	Shipping,
	Shoe,
	Welcome,
} from "./pages";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<PublicRoutes />}>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/checkout" element={<Checkouts />} />
					<Route path="/company" element={<Company />} />
					<Route path="/location" element={<Location />} />
					<Route path="/login" element={<Login />} />
					<Route path="/popular" element={<Popular />} />
					<Route path="/onboarding" element={<Onboarding />} />
					<Route path="/orders" element={<Orders />} />
					<Route path="/payment" element={<Payments />} />
					<Route path="/products" element={<Products />} />
					<Route path="/search" element={<Search />} />
					<Route path="/shipping" element={<Shipping />} />
					<Route path="/shoe" element={<Shoe />} />
					<Route path="/welcome" element={<Welcome />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

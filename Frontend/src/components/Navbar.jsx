import React, {  useContext,useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useSearch } from '../Context/SearchContext';
import cart_icon from '../components/Assets/cart_icon1.png';
import { ShopContext } from "../Context/ShopContext"; 


function Navbar() {
  const [isRegisterVisible, setRegisterVisible] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [categories, setCategories] = useState([]);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [, setSearchResults] = useSearch();

  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  //const menuRef =useRef();

  const handleSearch = () => {
    setSearchResults([]);
    console.log("Search query:", searchQuery);
  };

  useEffect(() => {
    const storedUsers = localStorage.getItem("registeredUsers");
    if (storedUsers) {
      try {
        const parsedUsers = JSON.parse(storedUsers);
        setRegisteredUsers(parsedUsers);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
   // fetchCategories();
  }, []);

  {/*const fetchCategories = () => {
    // Simulated categories, replace with actual fetch logic
    const categories = [
      { id: 1, name: "Men" },
      { id: 2, name: "Women" },
      { id: 3, name: "Kids" }
    ];
    setCategories(categories);
  };

  const handleCategoryDropdown = () => {
    setShowCategoryDropdown(!showCategoryDropdown);
  };

  const handleCategoryClick = (categoryId) => {
    setShowCategoryDropdown(false);
    history.push(`/category/${categoryId}`);
  };
*/}

  const handleRegister = (userData) => {
    setRegisterVisible(false);
    const updatedUsers = [...registeredUsers, userData];
    setRegisteredUsers(updatedUsers);
    saveUsersToLocalStorage(updatedUsers);
    setLoginVisible(true);
    setLoginSuccess(false);
    setLoginError("");
  };

  const handleLogin = (userData) => {
    const userExists = registeredUsers.some(
      (user) =>
        user.email === userData.email && user.password === userData.password
    );

    if (userExists) {
      setLoggedIn(true);
      setLoginSuccess(true);
      setLoginError("");
      setLoginVisible(false);
    } else {
      setLoggedIn(false);
      setLoginSuccess(false);
      setLoginError("Invalid email or password.");
      setLoginVisible(true);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setLoginSuccess(false);
    setLoginError("");
  };

  return (
    <nav className="relative flex items-center justify-between py-2 px-4 bg-gray-800 text-white">
      <Link className="text-lg font-bold" to="/">
        🛒 Ecommerce App
      </Link>

      <div className="flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          className="px-2 py-1 mr-2 bg-gray-200 text-gray-800 border border-gray-300 rounded-md"
          style={{ fontSize: "16px" }}
        />
        <button onClick={handleSearch} className="px-3 py-1 bg-green-600 text-white rounded-md">
          Search
        </button>
      </div>

      <ul className=" flex list-none">
        <li className="mr-4">
          <Link className="hover:text-gray-300" to="/">
            Home
          </Link>
        </li>
        
        <li className="mr-4 relative "  onClick={()=>{setMenu("mens")}}>
          {/*<Link className="hover:text-gray-300" to="/category">
            Categories
          </Link>
          <button className="ml-1 hover:text-gray-300" onClick={handleCategoryDropdown} style={{ fontSize: "9px" }}>
            ▼
          </button>
         } {showCategoryDropdown && (
          <div className="absolute top-full left-0 bg-white text-black mt-1 py-1 px-2 rounded-md">
            {categories.map(category => (
              <button key={category.id} className="block hover:text-gray-300" onClick={() => handleCategoryClick(category.id)}>
                {category.name}
              </button>
            ))}
          </div>
          )}  */} <Link className="hover:text-gray-300" to="/mens">
           
          Men 
          </Link> {menu=="mens"?<hr/>:<></>}
        </li>

        <li className="mr-4 relative "   onClick={()=>{setMenu("womens")}}>
        <Link className="hover:text-gray-300" to="/womens">
           
          Women </Link>
          {menu=="womens"?<hr/>:<></>}
          
        </li>

        <li className="mr-4 relative"  onClick={()=>{setMenu("kids")}}>
        <Link className="hover:text-gray-300" to="/kids">
           
          Kids
          </Link> {menu=="kids"?<hr/>:<></>} 
        </li>
        
        <li className="mr-4">
          <Link className="hover:text-gray-300" to="/register">
            Register
          </Link>
        </li>
        <li className="mr-4">
          <Link className="hover:text-gray-300" to="/login">
            Login
          </Link>
        </li>

        
        <li className=" flex nav-login-cart mr-4">
          <Link className="hover:text-gray-300" to="/cart">
             <img  className="h-8 w-7" src={cart_icon} alt="" />
             </Link>
             <div className="nav-cart-count ">{getTotalCartItems()}</div>
         
        </li>
        
        <li>
          <button className="hover:text-gray-300" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
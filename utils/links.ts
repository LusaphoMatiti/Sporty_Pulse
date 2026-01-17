type NavLink = {
  href: string;
  label: string;
};

export const cenlinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/equipments", label: "Shop" },
  { href: "/about", label: "Our Story" },
];

export const links: NavLink[] = [
  { href: "/favorites", label: "favorites" },
  { href: "/reviews", label: "reviews" },
  { href: "/cart", label: "cart" },
  { href: "/orders", label: "orders" },
  { href: "/admin/sales", label: "dashboard" },
];

export const adminLinks: NavLink[] = [
  { href: "/admin/sales", label: "sales" },
  { href: "/admin/products", label: "my products" },
  { href: "/admin/products/create", label: "create products" },
];

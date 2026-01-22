import EmptyList from "@/components/global/EmptyList";
import { fetchAdminProducts } from "@/utils/action";
import Link from "next/link";
import { formatCurrency } from "@/utils/format";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IconButton } from "@/components/form/Buttons";
import DeleteProduct from "@/components/products/DeleteProduct";

async function AdminProductsPage() {
  const items = await fetchAdminProducts();
  if (items.length === 0) return <EmptyList />;

  return (
    <section className="p-6 rounded-xl bg-card shadow-sm">
      <Table>
        <TableCaption className="capitalize text-sm text-muted-foreground pt-4">
          total products: {items.length}
        </TableCaption>

        {/* ===== Table Header ===== */}
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold">Product Name</TableHead>
            <TableHead className="font-semibold">Company</TableHead>
            <TableHead className="font-semibold">Price</TableHead>
            <TableHead className="font-semibold text-center ">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        {/* ===== Table Body ===== */}
        <TableBody>
          {items.map((item) => {
            const { id: productId, name, company, price } = item;
            return (
              <TableRow
                key={productId}
                className="hover:bg-muted/40 transition-colors"
              >
                <TableCell className="capitalize">
                  <Link
                    href={`/products/${productId}`}
                    className="font-medium text-muted-foreground hover:underline tracking-wide capitalize"
                  >
                    {name}
                  </Link>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {company}
                </TableCell>
                <TableCell className="font-medium">
                  {formatCurrency(price)}
                </TableCell>
                <TableCell className="flex items-center gap-3 justify-center py-3">
                  <Link href={`/admin/products/${productId}/edit`}>
                    <IconButton actionType="edit" />
                  </Link>

                  <DeleteProduct productId={productId} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
}

export default AdminProductsPage;

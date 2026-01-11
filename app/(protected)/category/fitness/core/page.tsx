// app/category/fitness/core/page.tsx
import Core from "@/components/categories/Core";
import MarketingLayout from "@/components/layouts/MarketingLayout";

export default function CoreCategoryPage() {
  return (
    <MarketingLayout>
      <>
        <section>
          <Core />
        </section>
      </>
    </MarketingLayout>
  );
}

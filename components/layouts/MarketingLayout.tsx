import Footer from "@/components/footer/Footer";
import CTA from "@/components/footer/CTA";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <CTA />
      <Footer />
    </>
  );
}

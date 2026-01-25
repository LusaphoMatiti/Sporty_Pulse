"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function formatSegment(segment: string) {
  return decodeURIComponent(segment).replace(/-/g, " ");
}

type BreadcrumbProps = {
  currentLabel?: string;
};

const BreadCrumbs = ({ currentLabel }: BreadcrumbProps) => {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter(Boolean)
    .filter((seg) => seg !== "admin" && seg !== "(protected)");

  let path = "";

  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="capitalize text-lg">
            home
          </BreadcrumbLink>
        </BreadcrumbItem>

        {segments.map((segment, index) => {
          path += `/${segment}`;
          const isLast = index === segments.length - 1;

          const label =
            isLast && currentLabel ? currentLabel : formatSegment(segment);

          return (
            <div key={path} className="flex items-center">
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="capitalize text-lg text-foreground font-medium">
                    {label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={path} className="capitalize text-lg">
                    {label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbs;

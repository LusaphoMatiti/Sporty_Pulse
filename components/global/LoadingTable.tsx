import { Skeleton } from "@heroui/react";

function LoadingTable({ rows = 5 }: { rows?: number }) {
  const tableRows = Array.from({ length: rows }, (_, index) => {
    return (
      <div key={index} className="mb-4">
        <Skeleton className="w-full h-8 rounded-lg" />
      </div>
    );
  });
  return <>{tableRows}</>;
}

export default LoadingTable;

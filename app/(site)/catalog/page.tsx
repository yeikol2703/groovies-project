import { Suspense } from "react";
import CatalogScreen from "@/screens/CatalogScreen";

export default function CatalogPage() {
  return (
    <Suspense fallback={<p>Cargando catálogo...</p>}>
      <CatalogScreen />
    </Suspense>
  );
}

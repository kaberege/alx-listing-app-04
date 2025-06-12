import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
    const router = useRouter();
    const { id } = router.query;
    const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

    if (!property) return <p className="text-red-500 text-center text-sm font-semibold mt-4">Property not found</p>;

    return (
        <div>
            <PropertyDetail property={property} />
        </div>
    );
}
import Funnel from "@/app/home/components/funnel";
import WorldMap from "@/app/home/components/map";

export default function FunnelBody() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="w-full max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Left empty space */}
        <div className="flex-1" />

        {/* Funnel centered */}
        <div className="flex-1 flex justify-center">
          <Funnel />
        </div>

        {/* Map aligned right */}
        <div className="flex-1 flex justify-end">
          <WorldMap />
        </div>
      </div>
    </div>
  );
}

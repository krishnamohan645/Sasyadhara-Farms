export function MarqueeRibbon() {
  const items = [
    "100% WOOD PRESSED OILS",
    "PURE & UNADULTERATED",
    "NO PRESERVATIVES",
    "VEDIC BILONA METHOD DESI GHEE",
    "FREE DELIVERY < 5KM (MIN. 2L)",
    "STORE IN KR PURAM, BANGALORE",
    "DIRECT FARMER SOURCED",
    "CHEMICAL-FREE SWEETNESS",
  ];

  return (
    <div className="relative overflow-hidden bg-[#1D3528] py-3.5 text-[#E5EFE7] border-y border-[#16291F]">
      <div className="flex w-max animate-marquee space-x-8 whitespace-nowrap text-xs sm:text-sm font-bold tracking-widest uppercase">
        {[...items, ...items, ...items].map((text, i) => (
          <div key={i} className="flex items-center space-x-8">
            <span>{text}</span>
            <span className="text-gold opacity-80">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

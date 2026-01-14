import Image from "next/image"

interface ListingCard {
  title: string
  subtitle: string
 
  image: string
}

export function FeaturedListings() {
  const listings: ListingCard[] = [
    {
      title: "Urban Prime Plaza Premiere",
      subtitle: "MOST CLICKED",
      image: "/most clicked.png",
    },
    {
      title: "Urban Prime Plaza Premiere",
      subtitle: "MOST WATCHLISTED",
      image: "/most watched.png",
    },
    {
      title: "Urban Prime Plaza Premiere",
      subtitle: "HOTTEST LISTING",
      image: "/Hottest-listing.png",
    },
  ]

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing, index) => (
          <div key={index} className="group relative h-[286px] rounded-[12px] overflow-hidden cursor-pointer">
            <Image
              src={listing.image || "/placeholder.svg"}
              alt={listing.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white text-[14px] font-medium mb-1">{listing.subtitle}</p>
              <h3 className="text-white text-[18px] font-semibold">{listing.title}</h3>

              <div className="flex gap-2 justify-center mt-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="w-2 h-2 bg-white/50 rounded-full"></span>
              </div>
            </div>

            
          </div>
        ))}
      </div>
    </section>
  )
}

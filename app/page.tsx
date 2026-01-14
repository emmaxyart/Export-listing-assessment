import { SalesOverview } from "@/components/sales-overview"
import { ListingsOverview } from "@/components/listings-overview"
import { UsersOverview } from "@/components/users-overview"
import { FeaturedListings } from "@/components/featured-listings"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <main className="px-4 sm:px-12 bg-[#F9FAFB] py-4">
        <h1 className="text-[20px] sm:text-[20px] text-[#191919] font-semibold mb-4 sm:mb-4">Welcome, Ahmed</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
          <div className="md:col-span-2">
            <SalesOverview />
          </div>
          <div className="space-y-4 sm:space-y-4">
            <ListingsOverview />
            <UsersOverview />
          </div>
        </div>
        <FeaturedListings />
      </main>
    </div>
  )
}
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BuyersPage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#144E42] mb-4 font-parkinsans">
            Buyer&apos;s Marketplace
          </h1>
          <p className="text-lg text-gray-600 mb-8 font-parkinsans">
            Browse verified sellers and real-time updates on available
            recyclables in your area. Make secure offers with escrow protection.
          </p>
          {/* Buyer dashboard content will go here */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <p className="text-gray-500 font-parkinsans">
              Buyer dashboard coming soon...
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}


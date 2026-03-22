import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { country: string; city: string; service: string } }
) {
  const { city, service } = params;
  
  // In a real app, fetch from DB
  const workerCount = Math.floor(Math.random() * 50) + 10;
  
  return (
    <main className="min-h-screen bg-[#05010a] text-white p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 uppercase tracking-tighter">
          {service} Services in {city}
        </h1>
        <p className="text-zinc-400 mb-8">
          Find verified {service.toLowerCase()}s in {city}. We have {workerCount} professionals ready to deploy.
        </p>
        
        {/* SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": `${service} in ${city}`,
              "provider": {
                "@type": "LocalBusiness",
                "name": "Job Farms India",
                "url": "https://24hoursmaidservices.in"
              },
              "areaServed": {
                "@type": "City",
                "name": city
              }
            })
          }}
        />
      </div>
    </main>
  );
}

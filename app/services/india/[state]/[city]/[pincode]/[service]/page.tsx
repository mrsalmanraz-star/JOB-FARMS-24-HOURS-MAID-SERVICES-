import { NextResponse } from 'next/server';

export default async function PincodeServicePage({
  params,
}: {
  params: Promise<{ state: string; city: string; pincode: string; service: string }>
}) {
  const { state, city, pincode, service } = await params;
  
  return (
    <main className="min-h-screen bg-[#05010a] text-white p-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center gap-2 text-[#00ff26] font-mono text-xs uppercase tracking-widest">
          <span className="w-2 h-2 bg-[#00ff26] rounded-full animate-pulse" />
          Sovereign SEO Node: {pincode}
        </div>
        
        <h1 className="text-6xl font-black mb-4 uppercase tracking-tighter leading-none">
          {service} Services in <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff26] to-[#711c91]">
            {city}, {state} ({pincode})
          </span>
        </h1>
        
        <p className="text-zinc-400 text-xl font-light mb-12 max-w-2xl">
          Verified, statutory-compliant {service.toLowerCase()}s available for immediate deployment in {pincode}. 
          Powered by Job Farms India&apos;s 360 Lead Management System.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { label: "Local Availability", value: "High" },
            { label: "Verification Level", value: "MNC/Police" },
            { label: "Statutory Compliance", value: "100%" }
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <div className="text-[10px] font-mono text-zinc-500 uppercase mb-1">{stat.label}</div>
              <div className="text-xl font-bold text-[#00ff26]">{stat.value}</div>
            </div>
          ))}
        </div>
        
        {/* SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": `${service} in ${city} ${pincode}`,
              "description": `Professional ${service.toLowerCase()} services in ${city}, ${state} area code ${pincode}.`,
              "provider": {
                "@type": "LocalBusiness",
                "name": "Job Farms India",
                "url": "https://24hoursmaidservices.in"
              },
              "areaServed": {
                "@type": "PostalAddress",
                "postalCode": pincode,
                "addressLocality": city,
                "addressRegion": state,
                "addressCountry": "IN"
              }
            })
          }}
        />
      </div>
    </main>
  );
}

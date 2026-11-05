import { siteConfig } from "@/lib/site-config"
import { siteUrl } from "@/lib/seo"

const hotelId = `${siteUrl}/#hotel`
const websiteId = `${siteUrl}/#website`

function amenity(name: string) {
  return {
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  }
}

/**
 * Hotel/LodgingBusiness schema. Google uses this for the knowledge panel and
 * local results, so every field here must be true and match the page copy.
 */
export function hotelJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": hotelId,
    name: siteConfig.fullName,
    alternateName: "Eldoret White Castle Motel Ltd",
    description: siteConfig.description,
    url: siteUrl,
    telephone: siteConfig.phoneIntl,
    email: siteConfig.email,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phoneIntl,
        contactType: "reservations",
        email: siteConfig.email,
        areaServed: "KE",
        availableLanguage: ["en", "sw"],
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.altPhoneIntl,
        contactType: "customer service",
        areaServed: "KE",
      },
    ],
    image: [
      `${siteUrl}/assets/images/hero.png`,
      `${siteUrl}/assets/images/deluxe-double-room.jpg`,
      `${siteUrl}/assets/images/conference-setup.jpg`,
      `${siteUrl}/assets/images/cafeteria.jpg`,
    ],
    logo: `${siteUrl}/favicon.ico`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Uganda Road",
      postOfficeBoxNumber: siteConfig.address.poBox.replace("P.O. Box ", ""),
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressRegion: "Uasin Gishu County",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: siteConfig.mapUrl,
    sameAs: [siteConfig.mapUrl, siteConfig.whatsapp],
    priceRange: "KES 2,000 - KES 7,500 per night",
    smokingAllowed: false,
    petsAllowed: false,
    numberOfRooms: siteConfig.numberOfRooms,
    checkinTime: siteConfig.checkIn,
    checkoutTime: siteConfig.checkOut,
    currenciesAccepted: "KES, USD",
    paymentAccepted: "Cash, M-Pesa",
    amenityFeature: [
      amenity("Free Wi-Fi"),
      amenity("Secure parking"),
      amenity("24-hour reception"),
      amenity("Hot showers"),
      amenity("Room service"),
      amenity("Restaurant and cafe"),
      amenity("Main bar"),
      amenity("Pool bar"),
      amenity("Health club and sauna"),
      amenity("The Lounge"),
      amenity("Conference hall seating 120"),
    ],
  }
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: siteUrl,
    name: siteConfig.fullName,
    description: siteConfig.description,
    inLanguage: "en-KE",
    publisher: { "@id": hotelId },
  }
}


/** Breadcrumb trail for an inner page. */
export function breadcrumbJsonLd(
  items: readonly { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  }
}

/** FAQ rich result — must mirror the FAQ text rendered on the page. */
export function faqJsonLd(
  items: readonly { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }
}

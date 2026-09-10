export const GALLERY_FILTERS = [
  { id: "all", label: "All" },
  { id: "rooms", label: "Rooms" },
  { id: "eat-drink", label: "Eat & drink" },
  { id: "events", label: "Events" },
] as const

export type GalleryFilterId = (typeof GALLERY_FILTERS)[number]["id"]
export type GalleryCategory = Exclude<GalleryFilterId, "all">

export type GalleryItem = {
  id: number
  caption: string
  category: GalleryCategory
}

export const galleryItems: GalleryItem[] = [
  { id: 1015, caption: "Self-contained single", category: "rooms" },
  { id: 1024, caption: "Twin layout", category: "rooms" },
  { id: 1043, caption: "Hot bath and shower", category: "rooms" },
  { id: 1076, caption: "Desk by the window", category: "rooms" },
  { id: 1003, caption: "Corridor to the rooms", category: "rooms" },
  { id: 1025, caption: "The Terrace at dusk", category: "eat-drink" },
  { id: 1062, caption: "The cafe, mid-morning", category: "eat-drink" },
  { id: 1031, caption: "Main bar", category: "eat-drink" },
  { id: 1005, caption: "Breakfast service", category: "eat-drink" },
  { id: 1006, caption: "Reception", category: "rooms" },
  { id: 1018, caption: "Looking towards Sergoit", category: "rooms" },
  { id: 1039, caption: "Conference hall, theatre style", category: "events" },
  { id: 1002, caption: "SAMS Discotheque", category: "events" },
  { id: 1008, caption: "Tea break on the Terrace", category: "events" },
  { id: 1012, caption: "A wedding on the lawn", category: "events" },
]

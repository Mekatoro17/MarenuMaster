// Imágenes provisionales (Wikimedia Commons). Reemplazar por fotografía propia cambiando solo `src`.
export type SiteImage = {
  src: string;
  alt: string;
  credit: string;
  license: string;
  fit?: "cover" | "contain";
};

export const images = {
  hero: {
    src: "/images/hero-chinu.jpg",
    alt: "Plaza principal y torre de la iglesia de Chinú, Córdoba",
    credit: "Jucearta, «Parque Principal en el día»",
    license: "CC BY-SA 4.0",
  },
  panoramica: {
    src: "/images/chinu-panoramica.jpg",
    alt: "Vista panorámica de Chinú, Córdoba",
    credit: "Jucearta, «Panorámica del Chinú»",
    license: "CC BY-SA 4.0",
  },
  coleccionSandalias: {
    src: "/images/coleccion-sandalias.jpg",
    alt: "Sandalias de cuero marrón sobre arena",
    credit: "Renardeau, «Sandale»",
    license: "CC BY-SA 3.0",
  },
  coleccionCalzado: {
    src: "/images/coleccion-calzado.jpg",
    alt: "Calzado de cuero color cognac sobre piso de madera",
    credit: "Radek Skrzypczak",
    license: "CC0",
  },
  coleccionAbarcas: {
    src: "/images/coleccion-abarcas.jpg",
    alt: "Alpargatas tejidas con suela de fibra sobre el pasto",
    credit: "ElArtesano1891, «Alpargatas (Espadrilles) 01»",
    license: "CC0",
  },
  productoAura: {
    src: "/images/producto-aura.jpg",
    alt: "Sandalias de tiras de cuero sobre madera",
    credit: "Otuo-Akyampong Boakye, «Local sandals 002»",
    license: "CC BY-SA 4.0",
  },
  productoAlma: {
    src: "/images/producto-alma.jpg",
    alt: "Sandalias de cuero con tiras cruzadas",
    credit: "Geoffreyrabbit, «Leather sandal for man in summer»",
    license: "CC BY-SA 4.0",
  },
  productoEsencial: {
    src: "/images/producto-esencial.jpg",
    alt: "Mocasín de cuero color cognac, vista lateral",
    credit: "Wikipedia-ce, «A Penny Loafer»",
    license: "CC0",    fit: "contain",  },
  productoAbarca: {
    src: "/images/producto-abarca.jpg",
    alt: "Par de alpargatas verde oliva con suela de fibra",
    credit: "Cantabrucu, «Alpargatas oliva»",
    license: "CC0",
  },
  manos: {
    src: "/images/manos-taller.jpg",
    alt: "Artesano trabajando en su mesa de taller",
    credit: "Drilicv, «Obu?ar u svojoj radionici»",
    license: "CC BY-SA 4.0",
  },
} satisfies Record<string, SiteImage>;

export interface ServiceType {
  name: string;
  price: number;
}

export interface ServiceSection {
  title: string;
  tipo1: ServiceType;
  tipo2: ServiceType;
  tipo3: ServiceType;
  tipo4?: ServiceType;
  tipo5?: ServiceType;
}

export interface MenuSection {
  seccion1: ServiceSection;
  seccion2: ServiceSection;
  seccion3: ServiceSection;
  seccion4: ServiceSection;
  seccion5: ServiceSection;
}

export interface Translation {
  title: string;
  description: string;
  info1: string;
  textButton: string;
  titleServicio: string;
  menuseccion: MenuSection;
  info2: string;
  gallery: string;
  galleryDescription: string;
  viewAllGallery: string;
  myWorks: string;
  closeButton: string;
  titleHorario: string;
  semana1: string;
  semana2: string;
  horario: string;
  titleUbicacion: string;
  titleContacto: string;
  phone: number;
  direccion: string;
  notFoundTitle: string;
  notFoundDescription: string;
  notFoundOops: string;
  notFoundText: string;
  notFoundButton: string;
}

export interface Translations {
  pt: Translation;
  en: Translation;
  es: Translation;
}

export type Language = keyof Translations;

import { IImage } from "@/interfaces/image.interface";

const logoBlanco = '/Logotipo_blanco.svg';
const logoNegro = '/Logotipo_negro.svg';

const navigation = [
    { name: 'Inicio', href: '/' },
    //{ name: 'Zoom Live', href: '/live' },
    { name: 'Contacto', href: '/contact' },
]

// Hero section

const heroImages: IImage[] = [
    {
        src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80',
        alt: 'Hero 1'
    },
    {
        src: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80',
        alt: 'Hero 1'
    },
    {
        src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80',
        alt: 'Hero 1'
    },
    {
        src: 'https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80',
        alt: 'Hero 1'
    },
    {
        src: 'https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80',
        alt: 'Hero 1'
    }
];

// Content section

const contentImage: IImage = {
    src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80',
    alt: 'Hero 1'
}

import { HiPaintBrush } from "react-icons/hi2";
import { BsCamera2, BsFillCameraVideoFill } from "react-icons/bs";
import { IContentList } from "@/interfaces/Content/list.interface"

const contentList: IContentList[] = [
    {
        title: 'Fotografía',
        description: 'Trabajaremos junto a ti para asegurarnos de que cada imagen cuente la historia de tu evento.',
        icon: BsCamera2
    },
    {
        title: 'Edición y retoque',
        description: 'Nos encargaremos de realzar y retocar cada fotografía, asegurando que cada imagen sea perfecta y represente fielmente la atmósfera de tu evento.',
        icon: HiPaintBrush
    },
    {
        title: 'Filmación y edición de video',
        description: 'Con nuestra técnica cinematográfica, grabaremos cada momento especial de tu evento y lo convertiremos en una película única.',
        icon: BsFillCameraVideoFill
    }
]

// Foooter
import { BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";

const socials = [
  {
    name: "Facebook",
    href: "#",
    icon: BsFacebook,
  },
  {
    name: "Instagram",
    href: "#",
    icon: BsInstagram,
  },
  {
    name: "Youtube",
    href: "#",
    icon: BsYoutube,
  },
];

const usImages: IImage[] = [
    {
        src: 'https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80',
        alt: 'Hero 1'
    },
    {
        src: 'https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80',
        alt: 'Hero 1'
    },
    {
        src: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80',
        alt: 'Hero 1'
    },
    {
        src: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80',
        alt: 'Hero 1'
    }
];

export { logoBlanco, logoNegro, navigation, heroImages, contentImage, contentList, usImages, socials };
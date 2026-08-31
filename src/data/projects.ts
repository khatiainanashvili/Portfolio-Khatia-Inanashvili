// ─────────────────────────────────────────────────────────────────────────
//  PROJECT DATA
// ─────────────────────────────────────────────────────────────────────────
//  Single source of truth for every portfolio piece. Home and both category
//  pages all read from this array and filter it — nothing is duplicated.
//
//  HOW TO ADD / REPLACE YOUR OWN WORK
//  ---------------------------------------------------------------------
//  1. Drop image files into  src/assets/illustrations/
//     and video files into   src/assets/animations/
//
//  2. Import the file at the top of this document, e.g.:
//       import myPiece from '../assets/illustrations/my-piece.jpg'
//
//  3. Edit (or duplicate) one of the objects in the array below.
//  4. Remove placeholder entries you don't need, or add new ones —
//     every page updates automatically.
// ─────────────────────────────────────────────────────────────────────────

export interface Project {
  id: string
  title: string
  category: 'illustration' | 'animation'
  image?: string
  video?: string
  poster?: string
  software: string
  date: string
  description?: string
  featuredOnHome: boolean
}

// ---- Illustration placeholders (replace with your own artwork) ----------
import ill01 from '../assets/illustrations/img(1).jpg'
import ill02 from '../assets/illustrations/img(2).jpg'
import ill03 from '../assets/illustrations/img(3).jpg'
import ill04 from '../assets/illustrations/img(4).jpg'
import ill05 from '../assets/illustrations/img.jpeg'
import ill06 from '../assets/illustrations/img2.png'
import ill07 from '../assets/illustrations/img3(1).jpeg'
import ill08 from '../assets/illustrations/img3(2).jpeg'
import ill09 from '../assets/illustrations/img3(3).jpeg'
import ill10 from '../assets/illustrations/img3(4).jpeg'
import ill11 from '../assets/illustrations/img3(5).jpeg'
import ill12 from '../assets/illustrations/img4 (01).jpeg'
import ill13 from '../assets/illustrations/img4(10).jpeg'
import ill14 from '../assets/illustrations/img4(12).jpeg'
import ill15 from '../assets/illustrations/img4(7).jpeg'
import ill16 from '../assets/illustrations/img4(8).jpeg'
import ill17 from '../assets/illustrations/img4(9).jpeg'
import ill18 from '../assets/illustrations/img5(1).jpg'
import ill19 from '../assets/illustrations/img5(2).jpg'
import ill20 from '../assets/illustrations/img5(3).jpg'
import ill21 from '../assets/illustrations/img6 (1).png'
import ill22 from '../assets/illustrations/img6(1).jpeg'
import ill23 from '../assets/illustrations/img6(1).jpg'
import ill24 from '../assets/illustrations/img6(4).png'
import ill25 from '../assets/illustrations/img6(5).png'
import ill26 from '../assets/illustrations/img7(1).jpeg'
import ill27 from '../assets/illustrations/img7(2).jpeg'
import ill28 from '../assets/illustrations/img7(3).jpeg'
import ill29 from '../assets/illustrations/img7(4).jpeg'
import ill30 from '../assets/illustrations/img8(1).png'
import ill31 from '../assets/illustrations/img8(2).png'
import ill32 from '../assets/illustrations/img8(3).png'
import ill33 from '../assets/illustrations/q9.png'


// ---- Animation placeholders (replace with your own clips) ---------------
import anim01Poster from '../assets/animations/01.png'
import anim02Poster from '../assets/animations/02.png'
import anim03Poster from '../assets/animations/03.jpg'


import anim04Poster from '../assets/animations/04.png'

import anim05Poster from '../assets/animations/05.png'

import anim06Poster from '../assets/animations/06.jpg'


import anim07Poster from '../assets/animations/7.png'

import anim08Poster from '../assets/animations/08.jpg'

import anim09Poster from '../assets/animations/09.jpg'

import anim10Poster from '../assets/animations/10.jpg'

export const projects: Project[] = [
  // ───────────────────────── ILLUSTRATIONS ─────────────────────────
  {
    id: 'ill-01',
    title: 'Sea Monster 01',
    category: 'illustration',
    image: ill01,
    software: 'Procreate',
    date: '2026',
    description: 'Placeholder — replace with your own illustration title & note.',
    featuredOnHome: true,
  },
  {
    id: 'ill-02',
    title: 'Sea Monster 02',
    category: 'illustration',
    image: ill02,
    software: 'Procreate',
    date: '2025',
    description: 'Placeholder illustration entry.',
    featuredOnHome: true,
  },
  {
    id: 'ill-03',
    title: 'Sea Monster 03',
    category: 'illustration',
    image: ill03,
    software: 'Procreate',
    date: '2025',
    description: 'Placeholder illustration entry.',
    featuredOnHome: true,
  },
  {
    id: 'ill-04',
    title: 'Sea Monster 04',
    category: 'illustration',
    image: ill04,
    software: 'Procreate',
    date: '2025',
    description: 'Placeholder illustration entry.',
    featuredOnHome: true,
  },
  {
    id: 'ill-05',
    title: 'Dead Fairy',
    category: 'illustration',
    image: ill05,
    software: 'Procreate',
    date: '2022',
    description: 'Placeholder illustration entry.',
    featuredOnHome: true,
  },
  {
    id: 'ill-06',
    title: 'Moths',
    category: 'illustration',
    image: ill06,
    software: 'Adobe Illustrator',
    date: '2023',
    description: 'Placeholder illustration entry.',
    featuredOnHome: true,
  },
  {
    id: 'ill-07',
    title: 'Praying Mantis 01',
    category: 'illustration',
    image: ill07,
    software: 'Procreate',
    date: '2024',
    description: 'Placeholder illustration entry.',
    featuredOnHome: true,
  },
  {
    id: 'ill-08',
    title: 'Praying Mantis 02',
    category: 'illustration',
    image: ill08,
    software: 'Procreate',
    date: '2024',
    description: 'Placeholder illustration entry.',
    featuredOnHome: true,
  },
  {
    id: 'ill-09',
    title: 'Praying Mantis 03',
    category: 'illustration',
    image: ill09,
    software: 'Procreate',
    date: '2023',
    description: 'Placeholder illustration entry — visible on the full collection page only.',
    featuredOnHome: false,
  },
  {
    id: 'ill-10',
    title: 'Praying Mantis 04',
    category: 'illustration',
    image: ill10,
    software: 'Procreate',
    date: '2023',
    description: 'Placeholder illustration entry — visible on the full collection page only.',
    featuredOnHome: false,
  },
  {
    id: 'ill-11',
    title: 'Pirate Treasures 01',
    category: 'illustration',
    image: ill11,
    software: 'Procreate',
    date: '2023',
    description: 'Placeholder illustration entry — visible on the full collection page only.',
    featuredOnHome: false,
  },
  {
    id: 'ill-12',
    title: 'Pirate Treasures 02',
    category: 'illustration',
    image: ill12,
    software: 'Procreate',
    date: '2023',
    description: 'Placeholder illustration entry — visible on the full collection page only.',
    featuredOnHome: false,
  },

   {
    id: 'ill-13',
    title: 'Pirate Treasures03',
    category: 'illustration',
    image: ill13,
    software: 'Procreate',
    date: '2023',
    description: 'Placeholder illustration entry — visible on the full collection page only.',
    featuredOnHome: false,
  },
   {
    id: 'ill-14',
    title: 'Pirate Treasures 04',
    category: 'illustration',
    image: ill14,
    software: 'Procreate',
    date: '2023',
    description: 'Placeholder illustration entry — visible on the full collection page only.',
    featuredOnHome: false,
  },
    {
    id: 'ill-15',
    title: 'Pirate Treasures 05',
    category: 'illustration',
    image: ill15,
    software: 'Procreate',
    date: '2023',
    description: 'Placeholder illustration entry — visible on the full collection page only.',
    featuredOnHome: false,
  },

      {
    id: 'ill-16',
    title: 'Pirate Treasures 06',
    category: 'illustration',
    image: ill16,
    software: 'Procreate',
    date: '2023',
    description: 'Placeholder illustration entry — visible on the full collection page only.',
    featuredOnHome: false,
  },

       {
    id: 'ill-17',
    title: 'Pirate Treasures 07',
    category: 'illustration',
    image: ill17,
    software: 'Procreate',
    date: '2023',
    description: 'Placeholder illustration entry — visible on the full collection page only.',
    featuredOnHome: false,
  },

  {
    id: 'ill-18',
    title: 'Wicked Witch 01',
    category: 'illustration',
    image: ill18,
    software: 'Procreate',
    date: '2023',
    description: 'Placeholder illustration entry — visible on the full collection page only.',
    featuredOnHome: false,
  },

          {
    id: 'ill-19',
    title: 'Wicked Witch 02',
    category: 'illustration',
    image: ill19,
    software: 'Procreate',
    date: '2023',
    description: 'Placeholder illustration entry — visible on the full collection page only.',
    featuredOnHome: false,
  },


  {
    id: 'ill-20',
    title: 'Wicked Witch 03',
    category: 'illustration',
    image: ill20,
    software: 'Procreate',
    date: '2023',
    description: 'Placeholder illustration entry — visible on the full collection page only.',
    featuredOnHome: false,
  },
  {
    id: 'ill-21',
    title: 'Dragons Egg 01',
    category: 'illustration',
    image: ill21,
    software: 'Procreate',
    date: '2021',
    description: 'Placeholder illustration entry — visible on the full collection page only.',
    featuredOnHome: false,
  },

    {
    id: 'ill-22',
    title: 'Dragons Egg 02',
    category: 'illustration',
    image: ill22,
    software: 'Procreate',
    date: '2021',
    description: 'Placeholder illustration entry — visible on the full collection page only.',
    featuredOnHome: false,
  },

    {
    id: 'ill-23',
    title: 'Dragons Egg 03',
    category: 'illustration',
    image: ill23,
    software: 'Procreate',
    date: '2021',
    description: 'Placeholder illustration entry — visible on the full collection page only.',
    featuredOnHome: false,
  },

    {
    id: 'ill-24',
    title: 'Dragons Egg 04',
    category: 'illustration',
    image: ill24,
    software: 'Procreate',
    date: '2021',
    description: 'Placeholder illustration entry — visible on the full collection page only.',
    featuredOnHome: false,
  },

    {
    id: 'ill-25',
    title: 'Dragons Egg 05',
    category: 'illustration',
    image: ill25,
    software: 'Procreate',
    date: '2021',
    description: 'Placeholder illustration entry — visible on the full collection page only.',
    featuredOnHome: false,
  },

    {
    id: 'ill-26',
    title: 'Two Monkeys 01',
    category: 'illustration',
    image: ill26,
    software: 'Procreate',
    date: '2022',
    description: 'Placeholder illustration entry — visible on the full collection page only.',
    featuredOnHome: false,
  },

    {
    id: 'ill-27',
    title: 'Two Monkeys 02',
    category: 'illustration',
    image: ill27,
    software: 'Procreate',
    date: '2022',
    description: 'Placeholder illustration entry — visible on the full collection page only.',
    featuredOnHome: false,
  },

    {
    id: 'ill-28',
    title: 'Two Monkeys 03',
    category: 'illustration',
    image: ill28,
    software: 'Procreate',
    date: '2022',
    description: 'Placeholder illustration entry — visible on the full collection page only.',
    featuredOnHome: false,
  },

    {
    id: 'ill-29',
    title: 'Two Monkeys 04',
    category: 'illustration',
    image: ill29,
    software: 'Procreate',
    date: '2022',
    description: 'Placeholder illustration entry — visible on the full collection page only.',
    featuredOnHome: false,
  },

    {
    id: 'ill-30',
    title: 'Ginger Girl',
    category: 'illustration',
    image: ill30,
    software: 'Procreate',
    date: '2022',
    description: 'Placeholder illustration entry — visible on the full collection page only.',
    featuredOnHome: false,
  },

 {
    id: 'ill-31',
    title: 'Christmas Elf',
    category: 'illustration',
    image: ill31,
    software: 'Adobe Illustrator',
    date: '2022',
    description: 'Placeholder illustration entry — visible on the full collection page only.',
    featuredOnHome: false,
  },

   {
    id: 'ill-32',
    title: 'Christmas Elf',
    category: 'illustration',
    image: ill32,
    software: 'Procreate',
    date: '2021',
    description: 'Placeholder illustration entry — visible on the full collection page only.',
    featuredOnHome: false,
  },

   {
    id: 'ill-33',
    title: 'HalloWeen Bat',
    category: 'illustration',
    image: ill33,
    software: 'Procreate',
    date: '2022',
    description: 'Placeholder illustration entry — visible on the full collection page only.',
    featuredOnHome: false,
  },

  // ───────────────────────── ANIMATIONS ─────────────────────────
  {
    id: 'anim-01',
    title: 'AnglerFish',
    category: 'animation',
    video: '/animations/01.mp4',
    poster: anim01Poster,
    software: 'Adobe After Effects, Adobe Illustrator',
    date: '2025',
    description: 'Placeholder — replace with your own animation title & note.',
    featuredOnHome: true,
  },
  {
    id: 'anim-02',
    title: 'Jellyfish',
    category: 'animation',
    video: 'animations/02.mp4',
    poster: anim02Poster,
    software: 'Adobe After Effects, Adobe Illustrator',
    date: '2025',
    description: 'Placeholder animation entry.',
    featuredOnHome: true,
  },
  {
    id: 'anim-03',
    title: 'Butterfly',
    category: 'animation',
    video: '/animations/03.mp4',
    poster: anim03Poster,
    software: 'Adobe After Effects, Adobe Illustrator',
    date: '2025',
    description: 'Placeholder animation entry.',
    featuredOnHome: true,
  },
  {
    id: 'anim-04',
    title: 'Frog',
    category: 'animation',
    video: '/animations/04.mp4',
    poster: anim04Poster,
    software: 'Adobe After Effects, Adobe Illustrator',
    date: '2024',
    description: 'Placeholder animation entry.',
    featuredOnHome: true,
  },
  {
    id: 'anim-05',
    title: 'Lazy Butterfly',
    category: 'animation',
    video: '/animations/05.mp4',
    poster: anim05Poster,
    software: 'Adobe After Effects, Adobe Illustrator',
    date: '2024',
    description: 'Placeholder animation entry — visible on the full collection page only.',
    featuredOnHome: false,
  },
  {
    id: 'anim-06',
    title: 'Moths',
    category: 'animation',
    video: '/animations/06.mp4',
    poster: anim06Poster,
    software: 'Adobe After Effects, Adobe Illustrator',
    date: '2023',
    description: 'Placeholder animation entry — visible on the full collection page only.',
    featuredOnHome: false,
  },

   {
    id: 'anim-07',
    title: 'Bloom',
    category: 'animation',
    video: '/animations/7.mp4',
    poster: anim07Poster,
    software: 'Adobe After Effects',
    date: '2023',
    description: 'Placeholder animation entry — visible on the full collection page only.',
    featuredOnHome: false,
  },

     {
    id: 'anim-08',
    title: 'Wicked Witch',
    category: 'animation',
    video: '/animations/08.mp4',
    poster: anim08Poster,
    software: 'Procreate',
    date: '2023',
    description: 'Placeholder animation entry — visible on the full collection page only.',
    featuredOnHome: false,
  },
   {
    id: 'anim-09',
    title: 'Wicked Witch',
    category: 'animation',
    video: '/animations/09.mp4',
    poster: anim09Poster,
    software: 'Procreate',
    date: '2023',
    description: 'Placeholder animation entry — visible on the full collection page only.',
    featuredOnHome: false,
  },

   {
    id: 'anim-10',
    title: 'Wicked Witch',
    category: 'animation',
    video: '/animations/10.mp4',
    poster: anim10Poster,
    software: 'Procreate',
    date: '2023',
    description: 'Placeholder animation entry — visible on the full collection page only.',
    featuredOnHome: false,
  },
]

export const getByCategory = (category: Project['category']): Project[] =>
  projects.filter((p) => p.category === category)

export const getHomePreview = (category: Project['category']): Project[] =>
  projects.filter((p) => p.category === category && p.featuredOnHome)

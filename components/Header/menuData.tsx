import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Accueil",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Qui Sommes Nous",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Particuliers",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Plan Épargne Retraite",
        path: "/simulateur-per",
        newTab: false,
      },
      {
        id: 32,
        title: "Assurance de Prêt",
        path: "/assurance-pret",
        newTab: false,
      },
      {
        id: 33,
        title: "Complémentaire Santé",
        path: "/complementaire-sante",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Professionnels",
    newTab: false,
    submenu: [
      {
        id: 40,
        title: "Accompagnement stratégique",
        path: "/accompagnement-strategique",
        newTab: false,
      },
      {
        id: 41,
        title: "Assurance & Prévoyance TNS",
        path: "/travailleurs-non-salaries",
        newTab: false,
      },
      {
        id: 42,
        title: "RC Professionnelle",
        path: "/rc-pro",
        newTab: false,
      },
    ],
  },

  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

export default menuData;


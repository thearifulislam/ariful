import colorcorrection from "../assets/portfolios/image-editing/color-correction/1/colorcorrection.jpeg";
import imageretouching from "../assets/portfolios/image-editing/image-retouching/1/image-retouching.jpg";
import spotremoval from "../assets/portfolios/image-editing/sport-removal/1/spotremove.jpg";
import { ProjectType } from "./projects";

export const imageEditingProjects: ProjectType[] = [
  {
    id: "color-correction",
    title: "Color Correction",
    coverImage: colorcorrection,
    behanceUrl: "https://www.behance.net/gallery/115572839/Photo-Editing",
    description: "Professional color correction for product photography.",
    client: "E-commerce Brand",
    category: "Image Editing",
    tags: ["Image Editing", "Color Correction", "Product"],
  },
  {
    id: "image-retouching",
    title: "Image Retouching",
    coverImage: imageretouching,
    behanceUrl: "https://www.behance.net/gallery/115531895/Photo-Retouching",
    description: "Advanced image retouching for professional portraits.",
    client: "Photography Studio",
    category: "Image Editing",
    tags: ["Image Editing", "Retouching", "Portrait"],
  },
  {
    id: "spot-removal",
    title: "Spot Removal",
    coverImage: spotremoval,
    behanceUrl: "https://www.behance.net/gallery/130737725/Photo-Retouching",
    description: "Efficient spot removal for blemishes and unwanted elements.",
    client: "Individual Client",
    category: "Image Editing",
    tags: ["Image Editing", "Spot Removal", "Blemish"],
  },
];

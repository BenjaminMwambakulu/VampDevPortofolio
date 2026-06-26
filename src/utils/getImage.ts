export default function getImage(imageName: string): string {
    return new URL(`../assets/${imageName}`, import.meta.url).href;
}
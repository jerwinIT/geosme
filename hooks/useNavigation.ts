import { usePathname } from "next/navigation";

export const useNavigation = () => {
  const pathname = usePathname();

  // Helper function to check if link is active
  const isActiveLink = (url: string): boolean => {
    if (url === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(url);
  };

  // Get active link from a list of links
  const getActiveLink = (
    links: Array<{ url: string; id: number | string }>
  ) => {
    return links.find((link) => isActiveLink(link.url));
  };

  // Check if current path matches any of the provided paths
  const isCurrentPath = (...paths: string[]): boolean => {
    return paths.some((path) => isActiveLink(path));
  };

  return {
    pathname,
    isActiveLink,
    getActiveLink,
    isCurrentPath,
  };
};

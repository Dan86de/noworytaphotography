import type { MDXComponents } from "mdx/types";
import Image from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    img: (props) => (
      <Image
        src={props.src ?? ""}
        alt={props.alt ?? "Jakiś obrazek"}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={700}
        height={400}
      />
    ),
    ...components,
  };
}

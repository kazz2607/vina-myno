import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Myno Notes - Capture Your Thoughts, Anywhere",
  description:
    "A beautifully minimalist workspace designed for focus. Seamlessly write, organize, and sync across your Windows, macOS, Linux, iOS and Android devices.",
  keywords: ["notes app", "note taking", "markdown", "sync", "cross-platform", "Myno Notes"],
  openGraph: {
    title: "Myno Notes - Capture Your Thoughts, Anywhere",
    description:
      "A beautifully minimalist workspace designed for focus. Write, organize, and sync across all devices.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-100 transition-colors duration-300 min-h-screen flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

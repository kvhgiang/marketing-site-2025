import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Awesome Product",
  description: "A landing page for your amazing app.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer data-domain="marketing-site-2025.vercel.app" src="https://plausible.io/js/script.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
      <form
        action="https://formspree.io/f/mwpozpev"
        method="POST"
      >
        <label>
          Your email:
          <input type="email" name="email" />
        </label>
        <label>
          Your message:
          <textarea name="message"></textarea>
        </label>
        {/* your other form fields go here */}
        <button type="submit">Send</button>
      </form>
    </html>
  );
}

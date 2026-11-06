
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
  <div className="mx-auto min-h-screen max-w-6xl bg-white">
    {children}
  </div>
</body>
    </html>
  );
}
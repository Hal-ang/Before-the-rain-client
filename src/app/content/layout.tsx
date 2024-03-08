export default function ContentLayout({
  children // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <section className="w-full h-full bg-black">{children}</section>;
}

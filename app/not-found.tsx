import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="text-muted-foreground max-w-md text-sm">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="border-border hover:bg-accent rounded-md border px-4 py-2 text-sm font-medium transition-colors"
      >
        Back home
      </Link>
    </div>
  );
}

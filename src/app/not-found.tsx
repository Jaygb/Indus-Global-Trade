import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32">
      <Container className="text-center space-y-6 max-w-xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-teal">
          404 Error
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-navy">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          The requested export resource or page could not be found. Please check the URL or navigate back to the home or catalogue pages.
        </p>
        <div className="flex items-center justify-center gap-4 pt-2">
          <Button href="/" variant="primary">
            Return to Home
          </Button>
          <Button href="/products" variant="outline">
            Browse Products
          </Button>
        </div>
      </Container>
    </div>
  );
}

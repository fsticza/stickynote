import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Kapcsolat
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="tel:+36203840670"
              className="mx-3 font-bold hover:underline"
            >
              +36 20 384 0670
            </a>
            <a
              href="mailto:tamas.gabor.nagy@gmail.com"
              className="mx-3 font-bold hover:underline"
            >
              tamas.gabor.nagy@gmail.com
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

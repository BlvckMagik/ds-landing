import Link from "next/link";

export const Custom404 = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-6 text-center font-DelaGothicOne text-4xl font-bold text-gray-900">
        Схоже, такої сторінки не існує
      </h1>

      <Link href="/" className="rounded-md bg-greenLight p-4 text-white">
        Повернутися на головну
      </Link>
    </section>
  );
};

export default Custom404;

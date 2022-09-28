import { useRouter } from 'next/router';

export default function Nav() {
  const router = useRouter();
  const route = router.pathname.substring(1);

  return (
    <nav className="bg-white shadow ">
      <div className="max-w-7xl mx-auto pb-8 mt-6 mb-8 sm:px-8 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 capitalize">{route}</h1>
      </div>
    </nav>
  );
}
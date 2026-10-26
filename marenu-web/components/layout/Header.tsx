import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="wordmark" aria-label="MARENÚ, inicio">
          MARENÚ
        </Link>
        <p className="descriptor">Origen Chinú · Córdoba · Colombia</p>
      </div>
    </header>
  );
}

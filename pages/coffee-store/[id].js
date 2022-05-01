import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CoffeeStores() {
    const router = useRouter();
    console.log(router.query.id);
    return <div>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/coffee-store/dynamic">
            <a>Link dynamic</a>
        </Link>
    </div>
}

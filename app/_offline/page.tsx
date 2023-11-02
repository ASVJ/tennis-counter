import { Button } from '@nextui-org/button'
import Link from 'next/link'
import { Routes } from '@/config/routes'
import { title } from '@/components/primitives'

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mt-8">
            <div className="inline-block max-w-lg text-center justify-center">
                <h1 className={title()}>Create your first &nbsp;</h1>
                <h1 className={title({ color: 'yellow' })}>tennis match counter&nbsp;</h1>
                <br />
                <br />
                <Link href={Routes.MATCHS_CREATE.path}>
                    <Button color="primary" size="lg" className="w-full">
                        Start a match
                    </Button>
                </Link>
            </div>
        </section>
    )
}

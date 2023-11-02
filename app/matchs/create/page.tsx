'use client'

import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import Link from 'next/link'
import { Routes } from '@/config/routes'
import { title } from '@/components/primitives'
import { useFormik } from 'formik'

const Page = () => {
    const form = useFormik({
        initialValues: {
            firstPlayer: '',
            secondPlayer: '',
        },
        onSubmit: (values) => {
            console.log(values)
        },
    })
    return (
        <section className="space-y-4">
            <h1 className={title()}>Create a match</h1>
            <form className="space-y-4 flex flex-col" onSubmit={form.handleSubmit}>
                <Input type="email" label="First player" />
                <Input type="email" label="Second player" />
                <div>
                    <Link href={Routes.MATCHS_LIVE.path}>
                        <Button color="primary" size="lg" className="justify-end">
                            Start a match
                        </Button>
                    </Link>
                </div>
            </form>
        </section>
    )
}

export default Page

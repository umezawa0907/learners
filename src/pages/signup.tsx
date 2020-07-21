import { NextPage } from 'next'
import Link from 'next/link'

const Signup: NextPage = () => {
    return (
        <>
            <Link href="/"><a>Home</a></Link>
            <Link href="/dashboard"><a>登録する</a></Link>
        </>
    )
}

export default Signup;

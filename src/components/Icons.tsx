import { LucideProps, User } from 'lucide-react'

export const Icons = {
    user: User,
    logo: (props: LucideProps) => (
        <img className={props.className} alt="logo" src="/logo.png" />
    ),
}
import ProtectedWrapper from "~/components/auth/protected-wrapper";

interface Props {
	children: React.ReactNode;
}

export default function UserLayout({ children }: Readonly<Props>) {
	return <ProtectedWrapper>{children}</ProtectedWrapper>;
}

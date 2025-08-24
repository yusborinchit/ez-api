import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";

// TODO: Change favicon and add a description
export const metadata: Metadata = {
	title: "EzApi | Mock your Rest API's with ease",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

interface Props {
	children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
	return (
		<html
			lang="en"
			className={`${geist.variable}`}
		>
			<body>
				<TRPCReactProvider>{children}</TRPCReactProvider>
			</body>
		</html>
	);
}

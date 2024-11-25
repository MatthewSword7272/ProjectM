import Header from "@/Components/Header";

export default function AppLayout({ children }) {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                {/* <Header />
                <main className="flex-grow">{children}</main>
                <Footer /> */}
                <Header />
                <main className="flex-grow h-screen">{children}</main>
            </div>
        </>
    );
}

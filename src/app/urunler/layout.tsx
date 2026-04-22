export default function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style={{ paddingTop: 0 }}>
            {children}
        </div>
    );
}

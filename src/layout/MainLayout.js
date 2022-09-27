import Header from '@components/Header';
import Nav from '@common/Nav';

export default function MainLayout({children}){
    return(
        <>
            <div className="min-h-full">
                <main>
                    <div className="max-w-7xl">
                        <Header/>
                        <Nav/>
                        <main>
                            <div className="max-w-7x1 mx-auto py-6 sm:px-6">
                                {children}
                            </div>
                        </main>
                    </div>
                </main>
            </div>
        </>
    )
}
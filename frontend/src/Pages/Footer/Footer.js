
export default function Footer() {

    return (
        <div className="bg-zinc-100 px-4">
            <div className="container lg:grid lg:grid-cols-2 py-14">
                <div className="grid gap-4 pb-4 text-left lg:pb-0 lg:grid-cols-3">
                    <div>
                        <h2 className="pb-4 text-xl font-semibold">COMPANY</h2>
                        <div className="flex flex-col ">
                            <span className="py-1 hover:underline" href="/about">About Us</span>
                            <span className="py-1 hover:underline" href="/press">Press</span>
                            <span className="py-1 hover:underline" href="/careers">Careers</span>
                            <span className="py-1 hover:underline" href="/contact">Contact</span>
                        </div>
                    </div>
                    <div>
                        <h2 className="pb-4 text-xl font-semibold">DEVELOPMENT</h2>
                        <div className="flex flex-col ">
                            <span className="py-1 hover:underline" href="/about">Documentation</span>
                            <span className="py-1 hover:underline" href="/press">API Reference</span>
                            <span className="py-1 hover:underline" href="/careers">Changelog</span>
                            <span className="py-1 hover:underline" href="/contact">Status</span>
                        </div>
                    </div>
                    <div>
                        <h2 className="pb-4 text-xl font-semibold">CONNECT</h2>
                        <div className="flex flex-col ">
                            <span className="py-1 hover:underline" href="/about">Instagram</span>
                            <span className="py-1 hover:underline" href="/press">Linkedin</span>
                            <span className="py-1 hover:underline" href="/careers">Twitter</span>
                        </div>
                    </div>
                </div>
                <div className="pt-4 text-center border-t-2 lg:pt-0 lg:text-left lg:border-0 lg:pl-20 ">
                    <p className="pb-4 text-xl font-semibold">STAY UPDATED</p>
                    <div className="relative lg:max-w-sm">
                        <input className="w-full px-4 pr-20 border-2 border-gray-300 rounded-full h-14" type="text" placeholder="Email Address" />
                        <button className="absolute h-10 px-3 text-sm text-white bg-black rounded-full top-2 right-2 hover:border-2 hover:border-black hover:bg-white hover:text-black">Subscribe</button>
                    </div>
                    <p className="pt-4 text-gray-500">
                        By subscribing to our newsletter, you agree to receive emails from us. Your personal data will be stored and processed in accordance with our Privacy Policy and you can unsubscribe at any time.
                    </p>
                </div>
            </div>

            {/* Copy Right */}
            <div className="py-10 bg-zinc-200">
                <div className="container text-center text-gray-500 lg:justify-between lg:flex">
                    <div className="pb-4 lg:pb-0">
                        <p>&copy;2024.All rights reserved </p>
                    </div>
                    <div className="">
                        <span className="p-4 hover:underline" href="/privacy">Privacy</span>
                        <span className="p-4 hover:underline" href="/terms">Terms</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
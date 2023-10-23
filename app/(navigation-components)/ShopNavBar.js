'use client'

export default function ShopNavBar({ setCurrentPageShop }) {

    const bundlesOptions = '(94)';
    const flowersOptions = '(93)';
    const concentratesOptions = '(92)';
    const ediblesOptions = '(91)';
    const dealsOptions = '(90)';
    const likedProductsOptions = '(89)';
    const preRollOptions = '(88)';
    const cbdOptions = '(87)';
    const merchandiseOptions = '(86)';

    return (
        <div className="w-52 p-4">
            <input type="text" className="p-2 rounded w-40" placeholder="Search"/>
            <h1 className="font-bold">Product Categories</h1>
                <hr className="w-1/2" />
                <button className="flex items-center gap-1 mt-4 mb-2 justify-between cursor-pointer w-40" onClick={() => setCurrentPageShop("Bundles")} >
                    Bundles 
                    <div className="flex items-center">
                        <p className="text-sm">{bundlesOptions}</p>
                        <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#000000" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/>
                        </svg>
                    </div>
                </button>
                    <hr />
                <button className="flex items-center gap-1 mt-4 mb-2 justify-between cursor-pointer  w-40" onClick={() => setCurrentPageShop("Flowers")}>
                    Flowers 
                    <div className="flex items-center">
                        <p className="text-sm">{flowersOptions}</p>
                        <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#000000" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/>
                        </svg>
                    </div>
                </button>
                    <hr />
                <button className="flex items-center gap-1 mt-4 mb-2 justify-between cursor-pointer  w-40" onClick={() => setCurrentPageShop("Concentrates")}>
                    Concentrates 
                    <div className="flex items-center">
                        <p className="text-sm">{concentratesOptions}</p>
                        <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#000000" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/>
                        </svg>
                    </div>
                </button>
                    <hr />
                <button className="flex items-center gap-1 mt-4 mb-2 justify-between cursor-pointer w-40" onClick={() => setCurrentPageShop("Edibles")}>
                    Edibles 
                    <div className="flex items-center">
                        <p className="text-sm">{ediblesOptions}</p>
                        <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#000000" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/>
                        </svg>
                    </div>
                </button>
                    <hr />
                <button className="flex items-center gap-1 mt-4 mb-2 justify-between cursor-pointer  w-40" onClick={() => setCurrentPageShop("Deals")}>
                    Deals 
                    <div className="flex items-center">
                        <p className="text-sm">{dealsOptions}</p>
                        <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#000000" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/>
                        </svg>
                    </div>
                </button>
                    <hr />
                <button className="flex items-center gap-1 mt-4 mb-2 justify-between cursor-pointer  w-40"onClick={() => setCurrentPageShop("LikedProducts")}>
                    Liked Products 
                    <div className="flex items-center">
                        <p className="text-sm">{likedProductsOptions}</p>
                        <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#000000" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/>
                        </svg>
                    </div>
                </button>
                    <hr />
                <button className="flex items-center gap-1 mt-4 mb-2 justify-between cursor-pointer w-40" onClick={() => setCurrentPageShop("PreRoll")}>
                    Pre-Roll 
                    <div className="flex items-center">
                        <p className="text-sm">{preRollOptions}</p>
                        <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#000000" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/>
                        </svg>
                    </div>
                </button>
                    <hr />
                <button className="flex items-center gap-1 mt-4 mb-2 justify-between cursor-pointer  w-40" onClick={() => setCurrentPageShop("CBD")}>
                    CBD 
                    <div className="flex items-center">
                        <p className="text-sm">{cbdOptions}</p>
                        <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#000000" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/>
                        </svg>
                    </div>
                </button>
                <hr />
                <button className="flex items-center gap-1 mt-4 mb-2 justify-between cursor-pointer w-40" onClick={() => setCurrentPageShop("Merchandise")}>
                    Merchandise 
                    <div className="flex items-center">
                        <p className="text-sm">{merchandiseOptions}</p>
                        <svg width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#000000" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/>
                        </svg>
                    </div>
                </button>
                    <hr />
                <select className="flex items-center gap-1 mt-4 mb-2 justify-between w-40 p-2" type="text">
                    <option>Rating</option>
                    <option>AAAA+</option>
                    <option>AAAA</option>
                    <option>AAA+</option>
                    <option>AAA</option>
                    <option>AA+</option>
                    <option>AA</option>
                </select>
                <select className="flex items-center gap-1 mt-4 mb-2 justify-between w-40 p-2" type="text">
                    <option>Weight</option>
                    <option>1g</option>
                    <option>3.5g</option>
                    <option>7g</option>
                    <option>14g</option>
                    <option>28g</option>
                </select>
                <select className="flex items-center gap-1 mt-4 mb-2 justify-between w-40 p-2" type="text">
                    <option>Price</option>
                    <option>Low-to-Hight</option>
                    <option>High-to-Low</option>
                </select>
                <div className="flex items-center justify-between mt-4">
                    <input type="checkbox" name="checking" />Show Out-of-Stock
                </div>
        </div>
    );
}

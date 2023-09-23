'use client'

export default function NavBar({ setCurrentPage }) {

    const accountName = "John Doe"; // Get account name from database
    const accountIdentifier = "12345" // Get account identifier from database

    return (
        <div className="w-48 p-4">
            <h1 className="font-bold">{accountName} #{accountIdentifier}</h1>
                <button className="flex item-center gap-1 mt-4 cursor-pointer transition duration-300 ease-in-out hover:outline-double w-40" onClick={() => setCurrentPage("Welcome")}>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#000000" d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
                </svg>
                    Welcome
                </button>
                <button className="flex item-center gap-1 mt-4 cursor-pointer transition duration-300 ease-in-out hover:outline-double w-40" onClick={() => {setCurrentPage("Orders"); console.log("YES")}}>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#000000" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm-4-4v-3.075l5.525-5.5q.225-.225.5-.325t.55-.1q.3 0 .575.113t.5.337l.925.925q.2.225.313.5t.112.55q0 .275-.1.563t-.325.512l-5.5 5.5H8Zm6.575-5.6l.925-.975l-.925-.925l-.95.95l.95.95Z"/>
                </svg>
                    Orders
                </button>
                <button className="flex item-center gap-1 mt-4 cursor-pointer transition duration-300 ease-in-out hover:outline-double w-40">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#000000" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"/>
                </svg>
                    Addresses
                </button>
                <button className="flex item-center gap-1 mt-4 cursor-pointer transition duration-300 ease-in-out hover:outline-double w-40">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#000000" d="M11 9c0 1.66-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3m3 11H2v-2c0-2.21 2.69-4 6-4s6 1.79 6 4M7 9c0 .55.45 1 1 1s1-.45 1-1s-.45-1-1-1s-1 .45-1 1m-3 9h8c0-1.1-1.79-2-4-2s-4 .9-4 2m18-6v2h-9v-2m9-4v2h-9V8m9-4v2h-9V4Z"/>
                </svg>
                    Account Details
                </button>
                    <hr />
                <button className="flex item-center gap-1 mt-4 cursor-pointer transition duration-300 ease-in-out hover:outline-double w-40">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#000000" d="M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.58.58 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27Z"/>
                </svg>
                    Deals
                </button>
                <button className="flex item-center gap-1 mt-4 cursor-pointer transition duration-300 ease-in-out hover:outline-double w-40">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#000000" d="M5 9v12H1V9h4m4 12a2 2 0 0 1-2-2V9c0-.55.22-1.05.59-1.41L14.17 1l1.06 1.06c.27.27.44.64.44 1.05l-.03.32L14.69 8H21a2 2 0 0 1 2 2v2c0 .26-.05.5-.14.73l-3.02 7.05C19.54 20.5 18.83 21 18 21H9m0-2h9.03L21 12v-2h-8.79l1.13-5.32L9 9.03V19Z"/>
                </svg>
                    Liked Products
                </button>
                <button className="flex item-center gap-1 mt-4 cursor-pointer transition duration-300 ease-in-out hover:outline-double w-40 transition duration-300 ease-in-out mb-2">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="#000000" strokeWidth="2" d="M20 8a8.955 8.955 0 0 0-8.036-5C7.014 3 3 7.03 3 12m1 4a8.955 8.955 0 0 0 8.036 5C16.986 21 21 16.97 21 12M9 16H3v6M21 2v6h-6"/>
                </svg>
                    Refer a Friend
                </button>
                    <hr />
                <button className="flex item-center gap-1 mt-4 cursor-pointer transition duration-300 ease-in-out hover:outline-double w-40">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#000000" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41c0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                </svg>
                    Help
                </button>
                <button className="flex item-center gap-1 mt-4 cursor-pointer transition duration-300 ease-in-out hover:outline-double w-40">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#000000" d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h7v2H5v14h7v2H5Zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5l-5 5Z"/>
                </svg>
                    Logout
                </button>
        </div>
    );
}

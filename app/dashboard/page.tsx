import Link from "next/link"


const page = () => {
    return (
        <div>
            Dashboard Page
            <div className="buttons flex mt-12 gap-4">
                <Link href="dashboard/customers">
                    <div className="b1 bg-[#2F6FEB] block w-fit p-2 rounded-xl mb-2 text-white">
                        Customers</div></Link>
                <Link href="dashboard/invoices">
                    <div className="b2 bg-[#2F6FEB] block w-fit p-2 rounded-xl mb-2 text-white">Invoices</div>
                </Link>
                
            </div >
        </div >
    )
}

export default page

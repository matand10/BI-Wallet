import { AiOutlineMenu } from 'react-icons/ai'


export const SidebarHeader = () => {

    return (
        <section className="sidebar-header">
            <h3 className="brand">
                <span></span>
                <span>BI-Wallet</span>
            </h3>
            <label htmlFor="sidebar-toggle" className="pointer"><AiOutlineMenu /></label>
        </section>
    )
}
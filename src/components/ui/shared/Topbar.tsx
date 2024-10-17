import { Link } from 'react-router-dom'

const Topbar = () => {
    return (
        <section className='topbar'>
            <div className='flex-between px-4 py-5'>
                <Link to='/' className='flex gap-3 items-center'>
                    
                </Link>
            </div>
        </section>
    )
}

export default Topbar
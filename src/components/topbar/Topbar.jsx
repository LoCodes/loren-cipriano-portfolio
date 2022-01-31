import './topbar.scss'
import {Person, Mail} from '@material-ui/icons'

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'> LoCodes </a>
                    <div className='itemContainer' >
                        <Person className='icon'/>
                        <span> +1(702) 885-1800 </span>
                    </div>
                    <div className='itemContainer' >
                        <Mail className='icon' />
                        <span> loren25cipriano@gmail.com</span>
                    </div>

                </div>
                <h1>left container</h1>

                <div className='right' >
                    <div className='hamburger' >
                        <span className='line1' > </span>
                        <span className='line2' > </span>
                        <span className='line3' > </span>
                    </div>
                    
                    

                </div>
            </div>
        </div>
    )
}

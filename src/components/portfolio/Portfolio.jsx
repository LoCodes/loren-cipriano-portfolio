import './portfolio.scss'

export default function Portfolio() {
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                <li className="active"> Featured </li>
                <li className="active">Web App</li>
                <li>Featured</li>
                <li>Featured</li>
            </ul>
            <div className="container">
            
                <div className="item">
                    <img src="assets/pet_saver.png"alt="" />       
                </div>
                <h3>Task Tracker</h3>
                

                <div className="item">
                    <img src="assests/art_gallery.png" alt="" />    
                </div>
                    <h3>Art Gallery Shop</h3>
                

                <div className="item">
                    <img src="assets/pet_saver.png"alt="" />
                </div>
                    <h3>Pet Saver</h3>
                


                <div className="item">
                    <img src="assets/toon_web.png"alt="" />
                </div>
                <h3>ToonWeb App</h3>

                <div className="item">
                    <img src="assests/skate_sesh.png" alt="" />       
                </div>
                <h3>Skate Sesh </h3>

                <div className="item">
                    <img src="assets/great_houses_cli.png" alt="" />
                </div>
                <h3>Great Houses CLI</h3>

                
            </div> 
        </div>
    )
}

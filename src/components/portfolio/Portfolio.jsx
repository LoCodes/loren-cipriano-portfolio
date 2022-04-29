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
                    <h3>Task Tracker</h3>
                    <img src="assets/task_tracker2.png"alt="" />       
                </div>
                
                

                <div className="item">
                    <h3>Art Gallery Shop</h3>
                    <img src="assets/art_gallery.png"alt="" />       
                </div>
                    
                

                <div className="item">
                    <h3>Pet Saver</h3>
                    <img src="assets/pet_saver2.png"alt="" />
                </div>
                    
                


                <div className="item">
                <h3>ToonWeb App</h3>
                    <img src="assets/toon_web.png"alt="" />
                    
                </div>
                

                <div className="item">
                    <h3>Skate Sesh </h3>
                    <img src="assets/skate_sesh.png"alt="" />
                </div>
                

                <div className="item">
                    <h3>Great Houses CLI</h3>
                    <img src="assets/great_houses_cli.png" alt="" />
                </div>
                

                
            </div> 
        </div>
    )
}

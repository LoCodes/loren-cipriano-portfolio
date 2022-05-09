// import './PortfolioList.scss';
import './portfolio.scss';
import PortfolioList from "../portfolioList/PortfolioList"; 

export default function Portfolio() {

    const list = [
        {   
            id: "featured",
            title: "Featured",
        },
        {   id: "web",
            title: "Web",
        },
        {   
            id: "mobile",
            title: "Mobile",
        },
        {
            id: "graphic",
            title: "Graphic",
        },
        {   id: "illustration",
            title: "Illustration",
        },
        {   
            id: "content",
            title: "Content",   
        },
    ]
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {/* iterate over list */}
                {list.map(item => (
                    <PortfolioList title={item.title}  />
                ))}
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

import './portfolioList.scss';


export default function PortfolioList({title, active, setSelected, id}) {
  return (
    // <div>PortfolioList</div>
    <li className={active ? "portfolioList active" : "portfolioList"}
        onClick={() => setSelected(id) } > 
        {title}
    </li>
  )
}

 

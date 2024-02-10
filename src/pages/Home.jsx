import { useEffect, useState } from 'react'
import allArticle from '../data/peliculas.json'
import ProductCard from '../components/ProductCard'


function Home() {
  const [articleShow, setArticleShow] = useState([])



  useEffect(() => {
    setArticleShow(allArticle)
  }, [])





  return (
    <div>
      {articleShow.map((eachArticle, index) => {
        return <ProductCard key={index}data={eachArticle}/>
      })}
    </div>
  )
}

export default Home
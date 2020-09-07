import React, { useEffect } from 'react'
import Template from '../_templates/Common'
import { observer } from 'mobx-react'
import store from 'stores/store'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./home.css"
import ghibli_1 from 'assets/ghibli_1.jpg'
import ghibli_2 from 'assets/ghibli_2.jpg'
import ghibli_3 from 'assets/ghibli_3.jpg'
import ghibli_4 from 'assets/ghibli_4.jpg'
import ghibli_5 from 'assets/ghibli_5.jpg'
import step_xray from 'assets/step_xray.svg'
import step_3dmodel from 'assets/step_3dmodel.svg'
import step_printing from 'assets/step_printing.svg'


// import HamburguerIcon from 'pages/_templates/components/HamburguerIcon'
const Page = observer(props => {
  useEffect(() => store.updatePaginaAtual, [])

  // const [routes, setRoutes] = useRoutes('pages')

  // const memoSetRoutes = useCallback(setRoutes, ['pages'])
  
  // useEffect(() => {
  //   const thisPage = routes.available.find(page => page.alias === config.alias)
  //   memoSetRoutes({ current: thisPage })
  // }, [routes.available, memoSetRoutes])

  return (
    <Template>
      {/* <HamburguerIcon /> */}
      <section className='CarouselSection' aria-hidden='true'>
        <div className='CarouselSection__Component'>
          <CarouselComponent />
        </div>

        <div className='CarouselSection__Label'>
          Lorem Ipsum is a dummy text of the typography and has been an industry's standard since the 1500s.
        </div>
      </section>

      <CompanyText />

      <TransactionSteps />
    </Template>
  )
})

const CarouselComponent = props => {
  const imageLib = [ghibli_1, ghibli_2, ghibli_3, ghibli_4, ghibli_5]
  return (
    <Carousel
      showArrows={true}
      infiniteLoop
      // centerMode
      showThumbs={false}
      showStatus={false}
    >
      { imageLib.map(imgPath =>
        <div className='Carousel-Item' key={imgPath}>
          <img src={imgPath} alt=""/>
        </div>
      )}
    </Carousel>
  )
}

const CompanyText = props => {
  return (
    <div className='CompanyText'>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      </p>
      <p>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
      </p>
      {/*
      <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </p>
      */}
    </div>
  )
}

const TransactionSteps = observer(props => {
  const { layout } = store.design

  const isVertical = ['laptop', 'desktop'].includes(layout) ? '' : 'vertical'

  return (
    <section className='TransactionSteps'>
      <h1>Como comprar</h1>
      <div className={`TransactionSteps__wrapper ${isVertical}`}>
        <Step count='1' path={step_xray}>
          Envie as imagens geradas nos exames de diagnóstico por imagens.
        </Step>
        <Step count='2' path={step_3dmodel}>
          É gerado um modelo tridimensional a partir das imagens, para sua aprovação.
        </Step>
        <Step count='3' path={step_printing}>
          Envie as imagens geradas nos exames de diagnóstico por imagens.
        </Step>
      </div>
    </section>
  )
})

const Step = props => {
  const { children, count, path } = props
  return (
    <section className='TransactionSteps__Step'>
      <div className='TransactionSteps__Step-Count'>
        {count}
      </div>
      <img className='TransactionSteps__Step-Image' src={path} alt='' />
      <div className='TransactionSteps__Step-Text'>
        { children }
      </div>
    </section>
  )
}

export default Page
import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

class App extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={3}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: `url("/assets/img/stars.svg")`, backgroundSize: 'cover' }} />

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={"/assets/img/satellite.svg"} style={{ width: '15%', marginLeft: '70%' }} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={"/assets/img/cloud.svg"} style={{ display: 'block', width: '20%', marginLeft: '55%' }} alt="" />
          <img src={"/assets/img/cloud.svg"} style={{ display: 'block', width: '10%', marginLeft: '15%' }} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={"/assets/img/cloud.svg"} style={{ display: 'block', width: '20%', marginLeft: '70%' }} alt="" />
          <img src={"/assets/img/cloud.svg"} style={{ display: 'block', width: '20%', marginLeft: '40%' }} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={"/assets/img/cloud.svg"} style={{ display: 'block', width: '10%', marginLeft: '10%' }} alt="" />
          <img src={"/assets/img/cloud.svg"} style={{ display: 'block', width: '20%', marginLeft: '75%' }} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={"/assets/img/cloud.svg"} style={{ display: 'block', width: '20%', marginLeft: '60%' }} alt="" />
          <img src={"/assets/img/cloud.svg"} style={{ display: 'block', width: '25%', marginLeft: '30%' }} alt="" />
          <img src={"/assets/img/cloud.svg"} style={{ display: 'block', width: '10%', marginLeft: '80%' }} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={"/assets/img/cloud.svg"} style={{ display: 'block', width: '20%', marginLeft: '5%' }} alt="" />
          <img src={"/assets/img/cloud.svg"} style={{ display: 'block', width: '15%', marginLeft: '75%' }} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <img src={"/assets/img/earth.svg"} style={{ width: '60%' }} alt="" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '40%',
            backgroundPosition: 'center',
            backgroundImage: `url("/assets/img/react.svg")`
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={"/assets/img/octcat.svg"} style={{ width: '20%' }} alt="" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={"/assets/img/octcat.svg"} style={{ width: '40%' }} alt="" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => this.parallax.scrollTo(0)}>
          <img src={"/assets/img/octcat.svg"} style={{ width: '40%' }} alt="" />
        </ParallaxLayer>
      </Parallax>
    )
  }
}

export default App;

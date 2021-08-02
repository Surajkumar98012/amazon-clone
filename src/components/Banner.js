import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner() {
    return (
        <div className="relative">
        <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>
            <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={4000}
            >

            <div>
              <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/HeroPC_1500x600_SVA._CB667240774_.jpg" />
           
            </div>
            <div>
              <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/MegaMusicFest/July21/Musicfest_Gw_1500x600._CB645098031_.jpg" />
             
            </div>
            <div>
            <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Events/prime_day/Hostel-daze-2/1500x600_EN_JPN._CB644999793_.jpg" />
           
          </div>
            <div>
              <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/katariy/GW/BAU/Nord_2/D25332059_WLD_Nord_Dennis-Launch_Tall_Hero_1500x600._CB644910408_.jpg" />
          
            </div>

            <div>
              <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/Mayactivation/Accessoriesday1/D23140543_IN_CEPC_Electronicsaccessories_underRs999_3000x12000.5x._CB669031984_.jpg"/>
            </div>

            <div>
              <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/OPPO/BAU/GW/V348719848_IN_WLD_OPPO_A74_TallHero_1500x600._CB665915303_.jpg"/>
            </div>
            </Carousel>
      </div>
    )
}

export default Banner

import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Card, CardMedia } from '@material-ui/core'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'

export default function TopPageCarousel() {
  var carouselItems = [
    {
      src: "https://lh3.googleusercontent.com/pw/ACtC-3dethR4ungoJiKTTxDZMx3IPMCFgBu-epL066EznDpmKV4JV1KZSRHpByBTMfj5e_hD8YpTvBSwLyWZs7i2qJ_jzgBwIx_uP1byuaw-U8Vl4An5tI7qywpvuhQquQvcAX30zVR0gLyP5Hdp3MyrkCtvNQ=s0"
    },
    {
      src: "https://lh3.googleusercontent.com/pw/ACtC-3eCM_yJQ6-bvBX9IGgAmbzD4dMDaCDybDH47hxUH9l6zfo3zwzrZxj7dLNLilV2MqSkGq9yFZTJvDUDToMoWMVnFvmB0RDHEM2iL1GdwcO7kOTJp5tzvO9ljq2H0h-erhnnfn5ZxkA3xZ9VtMMOFQWrew=s0"
    },
    {
      src: "https://lh3.googleusercontent.com/pw/ACtC-3chRUQ6r2UAnU3xVXYmB1ySfG6pSJC_DeXil7ykFSBleq0fP6_uc2pNFeK11VyBo2yfp5D5t8jftqP2JzQ_vqE7hMqgS07Whj_RXgikEli_9m48fwN3KeEoXuekyRO8RhrDsixPWJeJaxe7_dL0Kny_lw=s0"
    },
    {
      src: "https://lh3.googleusercontent.com/pw/ACtC-3d0cMieyC5qvR9JTFUXH8UkeRpoTwAexxp74TGaige2Rg-S1WL8dDoXms798DUiprXfdJf-r-cxEf4hJE4FAt6mcEI7z7rdehuNMrPfa03ttPW8x_B7gG1SmhO8cid_BweFApns43YzCK64chg-Lvyt9g=s0"
    }
  ];

  return (
    <Carousel
      indicators={false}
      navButtonsProps={{
        style: {
          height: 36,
          width: 36
        }
      }}
      PrevIcon={<ChevronLeft style={{ fontSize: 36 }} />}
      NextIcon={<ChevronRight style={{ fontSize: 36 }} />}
      stopAutoPlayOnHover={false}
    >
      {carouselItems.map((item, i) => (
        <CarouselItem src={item.src} key={i} />
      ))}
    </Carousel>
  )
}

function CarouselItem (props) {
  return (
    <Card>
      <CardMedia
        component="img"
        src={props.src}
        style={{ marginTop: 64, height: 400 }}
      />
    </Card>
  )
}
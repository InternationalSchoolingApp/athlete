import React from 'react'
import Image from 'next/image';
import Marquee from 'react-fast-marquee'

const CollegesMarquee = () => {
    return (
        <Marquee autoFill={true} direction='right' gradient={true} gradientColor='white' gradientWidth={100}>
            <div className="grid grid-cols-8 gap-5">
                <Image
                    width={300}
                    height={300}
                    src={"/brown.webp"}
                    alt={'brown-university'}
                    className="md:w-32 w-24 h-auto"
                />
                <Image
                    width={300}
                    height={300}
                    src={"/california.webp"}
                    alt={'california-university'}
                    className="md:w-32 w-24 h-auto"
                />
                <Image
                    width={300}
                    height={300}
                    src={"/caltech.webp"}
                    alt={'caltech-university'}
                    className="md:w-32 w-24 h-auto"
                />
                <Image
                    width={300}
                    height={300}
                    src={"/harvard.webp"}
                    alt={'harvard-university'}
                    className="md:w-32 w-24 h-auto"
                />
                <Image
                    width={300}
                    height={300}
                    src={"/michigan.webp"}
                    alt={'michigan-university'}
                    className="md:w-32 w-24 h-auto"
                />
                <Image
                    width={300}
                    height={300}
                    src={"/nortedame.webp"}
                    alt={'nortedame-university'}
                    className="md:w-32 w-24 h-auto"
                />
                <Image
                    width={300}
                    height={300}
                    src={"/princeton.webp"}
                    alt={'princeton-university'}
                    className="md:w-32 w-24 h-auto"
                />
                <Image
                    width={300}
                    height={300}
                    src={"/stanford.webp"}
                    alt={'stanford-university'}
                    className="md:w-32 w-24 h-auto"
                />
            </div>
        </Marquee>
    )
}

export default CollegesMarquee
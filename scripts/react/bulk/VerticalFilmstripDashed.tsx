import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgVerticalFilmstripDashed = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M5.397 2.04c-1.91.324-3.288 1.858-3.385 3.77l-.024.47H7V2l-.71.005c-.39.002-.792.018-.893.035M17 4.135V6.28h5v-.324c0-.4-.127-1.038-.285-1.436a4.05 4.05 0 0 0-2.677-2.383c-.337-.095-.467-.109-1.208-.126l-.83-.02v2.144M2 9.5v1.78h5v1.44H2v3.56h5v-3.52h10v3.52h5v-3.56h-5v-1.44h5V7.72h-5v3.52H7V7.72H2V9.5m.012 8.69a4 4 0 0 0 2.508 3.525c.515.205 1.019.285 1.796.285H7v-4.28H1.988l.024.47M17 19.86V22h.684c.777 0 1.281-.08 1.796-.285a4.006 4.006 0 0 0 2.509-3.545l.022-.45H17v2.14'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVerticalFilmstripDashed);
export default ForwardRef;

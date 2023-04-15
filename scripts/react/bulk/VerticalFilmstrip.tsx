import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgVerticalFilmstrip = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.397 2.04c-1.601.271-2.829 1.379-3.268 2.949l-.109.391v13.24l.111.397c.347 1.242 1.226 2.235 2.389 2.698.515.205 1.019.285 1.796.285H7v-5.24h10v5.248l.81-.018c.71-.016.858-.031 1.201-.122a3.994 3.994 0 0 0 2.906-3.094c.082-.401.083-.494.083-6.774s-.001-6.373-.083-6.774a3.994 3.994 0 0 0-2.879-3.089c-.337-.095-.467-.109-1.208-.126l-.83-.02V7.24H7V2l-.71.005c-.39.002-.792.018-.893.035M17 12v3.24H7V8.76h10V12'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVerticalFilmstrip);
export default ForwardRef;

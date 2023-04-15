import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPortraitBold = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.58 7.047c-.721.138-1.381.801-1.536 1.545-.061.295-.061 6.521 0 6.816.157.75.798 1.391 1.548 1.548.125.026.663.044 1.31.044H7V7l-1.11.004c-.61.003-1.2.022-1.31.043M17 12v5h1.098c.647 0 1.185-.018 1.31-.044a2.062 2.062 0 0 0 1.548-1.548c.03-.144.044-1.229.044-3.408s-.014-3.264-.044-3.408c-.159-.762-.818-1.411-1.573-1.549C19.25 7.019 18.67 7 18.073 7H17v5'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPortraitBold);
export default ForwardRef;

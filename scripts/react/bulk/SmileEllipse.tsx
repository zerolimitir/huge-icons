import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSmileEllipse = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.58 9.095a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m8 0a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904M8.7 14.316c-.38.175-.552.587-.398.955.083.199.185.302.529.535.917.622 1.966.93 3.169.93 1.206 0 2.247-.306 3.177-.934.389-.262.512-.424.535-.703.023-.283-.007-.388-.162-.564-.161-.184-.328-.255-.599-.255-.194 0-.247.023-.61.26-.408.267-.81.445-1.34.591-.438.121-1.564.121-2.002 0-.516-.142-.932-.323-1.282-.556-.543-.36-.707-.402-1.017-.259'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmileEllipse);
export default ForwardRef;

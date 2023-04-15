import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBadgePercent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.58 8.095A.976.976 0 0 0 8.002 9c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m6.12.222c-.239.112-6.366 6.26-6.401 6.423a3.105 3.105 0 0 1-.043.176c-.01.031.009.148.041.261a.767.767 0 0 0 .525.526c.171.051.219.051.396-.001.191-.056.376-.234 3.311-3.171 2.18-2.182 3.127-3.155 3.17-3.26a.668.668 0 0 0-.015-.571c-.181-.393-.609-.559-.984-.383m-.12 5.778a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBadgePercent);
export default ForwardRef;

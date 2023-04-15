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
            d='M5.433 2.043a4.302 4.302 0 0 0-1.702.669A3.973 3.973 0 0 0 2.012 5.79l-.024.45H6.24V2l-.29.005c-.16.003-.392.02-.517.038M7.76 6.62v4.62h8.48V2H7.76v4.62m10-2.506V6.24h4.251l-.022-.43a3.983 3.983 0 0 0-1.72-3.098 4.12 4.12 0 0 0-2.079-.699l-.43-.025v2.126M2 9.5v1.74h4.24V7.76H2V9.5m15.76 0v1.74H22V7.76h-4.24V9.5M2 14.5v1.74h4.24v-3.48H2v1.74m5.76 2.88V22h8.48v-9.24H7.76v4.62m10-2.88v1.74H22v-3.48h-4.24v1.74M2.012 18.21a4.004 4.004 0 0 0 2.508 3.505c.391.156 1.034.285 1.416.285h.304v-4.24H1.988l.024.45m15.748 1.676v2.125l.43-.022a4.005 4.005 0 0 0 3.527-2.516c.154-.383.283-1.028.283-1.409v-.304h-4.24v2.126'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVerticalFilmstripDashed);
export default ForwardRef;

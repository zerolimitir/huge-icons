import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHorizontalFilmstripDashed = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.433 2.043a4.302 4.302 0 0 0-1.702.669A3.973 3.973 0 0 0 2.012 5.79l-.024.45H6.24V2l-.29.005c-.16.003-.392.02-.517.038M7.76 4.12v2.12h3.48V2H7.76v2.12m5 0v2.12h3.48V2h-3.48v2.12m5-.006V6.24h4.251l-.022-.43a3.983 3.983 0 0 0-1.72-3.098 4.12 4.12 0 0 0-2.079-.699l-.43-.025v2.126M2 12v4.24h9.24V7.76H2V12m10.76 0v4.24H22V7.76h-9.24V12M2.012 18.21a4.004 4.004 0 0 0 2.508 3.505c.391.156 1.034.285 1.416.285h.304v-4.24H1.988l.024.45m5.748 1.67V22h3.48v-4.24H7.76v2.12m5 0V22h3.48v-4.24h-3.48v2.12m5 .006v2.125l.43-.022a4.005 4.005 0 0 0 3.527-2.516c.154-.383.283-1.028.283-1.409v-.304h-4.24v2.126'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHorizontalFilmstripDashed);
export default ForwardRef;

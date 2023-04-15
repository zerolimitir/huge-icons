import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHome = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.765 17.268c-.053.011-.181.104-.286.209-.21.211-.268.393-.218.69.041.241.343.537.584.572.096.014 1.13.02 2.298.013l2.123-.012.144-.11c.256-.195.33-.337.33-.63s-.074-.435-.33-.63l-.144-.11-2.203-.005c-1.212-.003-2.246.003-2.298.013'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHome);
export default ForwardRef;

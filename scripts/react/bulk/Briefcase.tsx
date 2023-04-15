import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBriefcase = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.397 6.04c-1.596.274-2.815 1.367-3.265 2.928l-.107.372-.015 1.83L1.995 13H10v.153c0 .381.23.88.567 1.231a1.967 1.967 0 0 0 2.866 0c.337-.351.567-.85.567-1.231V13h8v-1.684c0-1.544-.007-1.717-.083-2.09-.307-1.509-1.371-2.652-2.879-3.094l-.378-.111-6.54-.006c-3.597-.004-6.622.008-6.723.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBriefcase);
export default ForwardRef;

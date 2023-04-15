import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBank = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path fill='currentColor' fillRule='evenodd' d='M6 14v4h4v-8H6v4m8 0v4h4v-8h-4v4' />
    </svg>
);
const ForwardRef = forwardRef(SvgBank);
export default ForwardRef;

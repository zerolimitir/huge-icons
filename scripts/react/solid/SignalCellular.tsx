import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSignalCellular = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M18.371 4.058c-.553.126-.377-.019-7.773 6.381-5.173 4.475-7.03 6.105-7.181 6.299-.471.61-.54 1.364-.192 2.093.232.485.64.846 1.198 1.059l.237.09 7.211.011c7.846.011 7.455.021 7.931-.208a2.065 2.065 0 0 0 1.138-1.392c.09-.385.09-12.46-.001-12.809-.232-.89-1.027-1.519-1.979-1.565a2.38 2.38 0 0 0-.589.041'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignalCellular);
export default ForwardRef;

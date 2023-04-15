import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFileMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.7 8.316a.745.745 0 0 0 .029 1.382c.13.054.543.062 3.28.061 2.958-.001 3.14-.005 3.291-.075a.743.743 0 0 0 0-1.368c-.151-.07-.332-.074-3.3-.074s-3.149.004-3.3.074m7.54 5.746c-1.648.352-2.85 1.562-3.178 3.2-.055.273-.062.634-.053 2.528L13.02 22l4-4 4-4-2.26.003c-1.768.003-2.317.015-2.52.059'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileMinus);
export default ForwardRef;

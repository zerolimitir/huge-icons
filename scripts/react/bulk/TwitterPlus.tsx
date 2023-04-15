import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTwitterPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9 2.875c0 1.242-.092 1.696-.484 2.393-.24.425-.823 1.008-1.248 1.248-.386.217-.746.35-1.143.422-.27.049.106.055 3.285.058L13 7V2H9v.875'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTwitterPlus);
export default ForwardRef;

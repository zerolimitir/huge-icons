import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCapsuleOpen = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M18.124 3.242a3.08 3.08 0 0 0-.954.424c-.237.155-3.21 3.074-3.21 3.152 0 .055 4.167 4.222 4.222 4.222.08 0 2.962-2.936 3.135-3.193a2.892 2.892 0 0 0 .523-1.707 2.968 2.968 0 0 0-2.256-2.901 3.39 3.39 0 0 0-1.46.003m-6.486 8.138c-.792.898-1.118 1.533-1.118 2.18 0 .905.549 1.439 1.48 1.439.931 0 1.48-.534 1.48-1.439 0-.493-.15-.885-.568-1.49C12.697 11.759 12.05 11 12 11c-.015 0-.178.171-.362.38'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCapsuleOpen);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBellCrooked = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.824 15.881c-.202.504-.245 1.267-.103 1.823a3.41 3.41 0 0 0 1.412 1.99c.629.417 1.505.623 2.17.509.296-.05.817-.204.817-.241 0-.012-.951-.973-2.114-2.136l-2.114-2.114-.068.169'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBellCrooked);
export default ForwardRef;

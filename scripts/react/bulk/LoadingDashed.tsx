import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLoadingDashed = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M18.74 4.266c-.198.103-2.378 2.293-2.463 2.474-.176.375-.01.803.383.984a.665.665 0 0 0 .571.014c.185-.077 2.379-2.249 2.492-2.466a.875.875 0 0 0 .034-.619.803.803 0 0 0-.386-.398c-.17-.073-.481-.067-.631.011'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLoadingDashed);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHealthCare = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12.746 2.042a3.327 3.327 0 0 0-2.181 1.371 3.235 3.235 0 0 0-.034 3.574c.128.192.859.95 2.425 2.514 2.556 2.552 2.466 2.479 3.044 2.479.579 0 .489.074 3.044-2.48 1.498-1.496 2.301-2.327 2.418-2.503.61-.916.701-2.101.238-3.104a3.248 3.248 0 0 0-4.709-1.365 5.17 5.17 0 0 0-.621.525l-.37.362-.37-.362c-.416-.408-.736-.63-1.166-.809a3.418 3.418 0 0 0-1.718-.202'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHealthCare);
export default ForwardRef;

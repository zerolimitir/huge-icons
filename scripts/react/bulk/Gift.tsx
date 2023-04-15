import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgGift = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.62 6.041c-.7.145-1.25.623-1.514 1.315-.081.213-.085.291-.085 1.644 0 1.363.004 1.429.087 1.65a2.115 2.115 0 0 0 1.248 1.244l.224.086h16.84l.224-.086a2.115 2.115 0 0 0 1.248-1.244c.083-.221.087-.287.087-1.65 0-1.353-.004-1.431-.085-1.644a2.112 2.112 0 0 0-1.244-1.248l-.23-.088-8.32-.006c-4.576-.003-8.392.009-8.48.027'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGift);
export default ForwardRef;

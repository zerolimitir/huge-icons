import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMouse = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 2.076a.734.734 0 0 0-.398.413c-.051.123-.062.354-.062 1.326v1.178l-1.43.017c-1.631.02-1.793.044-2.473.366-1.125.533-1.856 1.393-2.206 2.592l-.108.372-.014 3.5c-.009 2.41 0 3.625.031 3.9.44 3.916 3.977 6.708 7.854 6.2a7.006 7.006 0 0 0 6.066-6.2c.03-.274.04-1.495.032-3.88l-.013-3.48-.106-.385c-.329-1.197-1.076-2.081-2.21-2.619-.68-.322-.842-.346-2.473-.366l-1.43-.017-.001-1.186c-.001-1.068-.008-1.203-.075-1.347-.181-.392-.607-.558-.984-.384m.705 5.305c.08.051.188.162.24.246.095.152.095.158.095 1.38v1.226l-.121.172c-.166.236-.346.334-.619.334s-.453-.098-.619-.334l-.121-.172V9.007c0-1.214.001-1.229.093-1.376.233-.375.691-.484 1.052-.25'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMouse);
export default ForwardRef;

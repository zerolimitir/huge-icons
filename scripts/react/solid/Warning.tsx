import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWarning = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.12 2.039c-2.479.248-4.706 1.323-6.359 3.068a9.985 9.985 0 0 0-1.624 11.516 9.432 9.432 0 0 0 1.801 2.438c.992.99 2.1 1.728 3.334 2.217 3.362 1.332 7.041.802 9.928-1.433.437-.338 1.307-1.208 1.645-1.645C21.256 16.378 22 14.236 22 12c0-4.568-3.158-8.613-7.57-9.697-.984-.241-2.402-.355-3.31-.264m1.285 4.342c.08.051.188.162.24.246l.095.153v7.453l-.121.172c-.166.236-.346.334-.619.334s-.453-.098-.619-.334l-.121-.172V6.78l.093-.149c.233-.375.691-.484 1.052-.25m-.065 9.685c.369.126.66.538.66.934 0 .527-.473 1-1 1-.242 0-.521-.119-.701-.299a.984.984 0 0 1 .001-1.403.977.977 0 0 1 1.04-.232'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWarning);
export default ForwardRef;

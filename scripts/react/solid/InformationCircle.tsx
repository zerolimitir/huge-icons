import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgInformationCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.12 2.039c-2.479.248-4.706 1.323-6.359 3.068a9.985 9.985 0 0 0-1.624 11.516 9.432 9.432 0 0 0 1.801 2.438c.992.99 2.1 1.728 3.334 2.217 3.362 1.332 7.041.802 9.928-1.433.437-.338 1.307-1.208 1.645-1.645C21.256 16.378 22 14.236 22 12c0-4.568-3.158-8.613-7.57-9.697-.984-.241-2.402-.355-3.31-.264m1.285 5.342c.08.051.188.162.24.246.091.146.095.184.095.88v.726l-.121.172c-.166.236-.346.334-.619.334s-.453-.098-.619-.334l-.121-.172v-.726c0-.691.005-.734.093-.876.233-.375.691-.484 1.052-.25m-.113 3.433c.155.065.375.305.417.457.017.06.031 1.201.031 2.536v2.426l-.121.172c-.166.237-.346.334-.619.334s-.453-.097-.619-.334l-.121-.172v-2.426c0-1.335.014-2.476.031-2.536.041-.147.259-.39.408-.455a.881.881 0 0 1 .593-.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInformationCircle);
export default ForwardRef;

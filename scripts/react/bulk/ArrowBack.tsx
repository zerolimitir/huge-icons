import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowBack = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.777 4.283c-.2.058-4.341 3.192-4.436 3.357-.108.188-.108.532 0 .72.057.099.66.576 2.06 1.63 2.3 1.733 2.276 1.716 2.477 1.75.629.106 1.094-.606.745-1.14-.058-.089-.689-.583-1.735-1.36C6.984 8.569 6.244 8.011 6.244 8c0-.011.74-.569 1.644-1.24 1.046-.777 1.677-1.271 1.735-1.36a.72.72 0 0 0-.098-.924.727.727 0 0 0-.748-.193'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowBack);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoofHomeInformation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.336 2.058a4.14 4.14 0 0 0-1.234.391c-.39.196-.024-.052-3.862 2.606-3.562 2.466-3.656 2.541-3.956 3.148-.287.585-.356 1.187-.201 1.779.118.453.325.808.729 1.252.262.287.398.478.531.746.298.601.295.566.297 3.66.001 2.515.007 2.77.076 3.1.316 1.526 1.446 2.695 3.024 3.13l.4.11h9.72l.4-.11c1.578-.435 2.708-1.604 3.024-3.13.069-.33.075-.585.076-3.1.002-3.094-.001-3.059.297-3.66a2.89 2.89 0 0 1 .522-.735c.542-.593.768-1.081.808-1.745.027-.463-.051-.839-.269-1.289-.296-.612-.385-.683-3.958-3.156-3.84-2.659-3.473-2.411-3.86-2.605a4.303 4.303 0 0 0-2.564-.392m1.004 6.008c.369.126.66.538.66.934 0 .527-.473 1-1 1-.242 0-.521-.119-.701-.299a.984.984 0 0 1 .001-1.403.977.977 0 0 1 1.04-.232m.065 3.315c.08.051.188.162.24.246l.095.153v5.453l-.121.172c-.166.236-.346.334-.619.334s-.453-.098-.619-.334l-.121-.172V11.78l.093-.149c.233-.375.691-.484 1.052-.25'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeInformation);
export default ForwardRef;

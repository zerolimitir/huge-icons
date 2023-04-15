import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFileFavourite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.131 6.058c-.41.128-.813.487-1.004.893-.097.207-.107.274-.107.69 0 .44.006.472.13.72.08.16.525.75 1.16 1.539.934 1.16 1.05 1.29 1.247 1.39.161.081.276.11.443.11a.882.882 0 0 0 .443-.11c.198-.1.313-.229 1.286-1.444 1.25-1.561 1.251-1.563 1.251-2.227 0-.416-.007-.456-.129-.704a1.59 1.59 0 0 0-1.356-.907c-.514-.027-.839.103-1.266.508l-.232.219-.208-.202c-.277-.267-.421-.361-.694-.455-.265-.091-.707-.1-.964-.02m6.109 8.004c-1.648.352-2.85 1.562-3.178 3.2-.055.273-.062.634-.053 2.528L13.02 22l4-4 4-4-2.26.003c-1.768.003-2.317.015-2.52.059'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileFavourite);
export default ForwardRef;

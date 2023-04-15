import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgVerticalAlignTop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M1.811 3.279a.76.76 0 0 0-.551.606c-.063.335.19.739.521.83.097.027.561.045 1.189.045H4v6.718c0 4.75.013 6.78.044 6.93.157.75.798 1.391 1.548 1.548.283.059 2.533.059 2.816 0a2.062 2.062 0 0 0 1.548-1.548c.031-.15.044-2.18.044-6.93V4.76h4v3.718c0 2.56.014 3.784.044 3.93.157.75.798 1.391 1.548 1.548.283.059 2.533.059 2.816 0a2.062 2.062 0 0 0 1.548-1.548c.03-.146.044-1.37.044-3.93V4.76h1.03c.628 0 1.092-.018 1.189-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-10.143-.006c-5.579-.003-10.201.008-10.272.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVerticalAlignTop);
export default ForwardRef;

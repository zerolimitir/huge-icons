import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgStrikethrough = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.811 11.279a.76.76 0 0 0-.551.606c-.063.335.19.739.521.83.112.031 1.555.045 4.864.045 4.047 0 4.754.009 5.056.061 1.127.197 2.074.957 2.427 1.949.128.358.128 1.1.001 1.457-.435 1.221-1.664 2.012-3.129 2.012-1.001 0-1.878-.353-2.503-1.006a2.53 2.53 0 0 1-.732-1.587c-.018-.19-.061-.4-.095-.466-.254-.485-.866-.569-1.219-.167-.2.228-.233.398-.176.891.113.969.513 1.766 1.238 2.465.689.664 1.458 1.063 2.458 1.277.577.124 1.481.124 2.058 0 1-.214 1.769-.613 2.458-1.277 1.232-1.188 1.591-2.85.948-4.395a4.372 4.372 0 0 0-.656-1.05l-.148-.164h1.714c1.128 0 1.769-.016 1.874-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-8.143-.006c-4.479-.004-8.201.008-8.272.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStrikethrough);
export default ForwardRef;

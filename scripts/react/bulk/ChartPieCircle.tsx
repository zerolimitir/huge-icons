import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChartPieCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.32 2.027a10.131 10.131 0 0 0-6.213 2.735 10.303 10.303 0 0 0-2.478 3.766c-.22.598-.443 1.485-.536 2.132-.095.659-.095 2.021 0 2.68a10.16 10.16 0 0 0 2.6 5.48l.222.24 1.782-1.779 1.781-1.779-.132-.141c-.654-.693-1.132-1.716-1.267-2.711a5.919 5.919 0 0 1 .078-1.742A5.001 5.001 0 0 1 11.79 7.04H12V2l-.25.007c-.137.004-.331.013-.43.02m5.64 10.143c-.001.248-.104.884-.201 1.23-.168.603-.564 1.321-1.03 1.871l-.219.259 1.775 1.777 1.775 1.777.234-.247a10.215 10.215 0 0 0 2.302-4.037c.237-.826.403-1.887.404-2.57V12h-5.04v.17'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartPieCircle);
export default ForwardRef;

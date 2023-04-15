import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMenuCircleVertical = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M11.918 11.052a1.265 1.265 0 0 0-.812.706c-.128.283-.116.756.026 1.031.229.441.573.66 1.075.684.261.013.34 0 .522-.083.305-.139.49-.318.635-.611.114-.232.123-.282.11-.567-.025-.505-.245-.855-.677-1.074a1.352 1.352 0 0 0-.879-.086'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMenuCircleVertical);
export default ForwardRef;

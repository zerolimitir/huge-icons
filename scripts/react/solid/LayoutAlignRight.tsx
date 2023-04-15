import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLayoutAlignRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2.811 4.278a.883.883 0 0 0-.481.374c-.066.12-.071.556-.08 7.262-.008 5.12.002 7.181.033 7.299a.804.804 0 0 0 .515.506.745.745 0 0 0 .921-.517c.028-.104.039-2.455.031-7.288-.01-7.108-.01-7.135-.092-7.273a.807.807 0 0 0-.847-.363M8.033 7.04c-1.372.236-2.353 1.278-2.512 2.67-.052.455-.052 4.125 0 4.58.143 1.25.909 2.18 2.139 2.595l.28.095 5.16.011c4.534.01 5.197.004 5.468-.05a3.002 3.002 0 0 0 2.37-2.36c.091-.44.091-4.722 0-5.162a2.96 2.96 0 0 0-1.642-2.107c-.651-.314-.156-.289-5.916-.297-2.838-.003-5.244.008-5.347.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutAlignRight);
export default ForwardRef;

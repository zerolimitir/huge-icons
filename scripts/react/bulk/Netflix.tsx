import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgNetflix = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='m4.048 3.09 7.944 12.263a798.723 798.723 0 0 0 3.003 4.617c.016.017 1.149.026 2.516.02l2.487-.01-2.509-3.871-5.502-8.49L8.994 3H3.991l.057.09'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgNetflix);
export default ForwardRef;

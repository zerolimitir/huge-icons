import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgNextArrow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12.68 6.507a2.539 2.539 0 0 0-.789.322 2.004 2.004 0 0 0-.848 1.268C11.014 8.257 11 9.54 11 12s.014 3.743.043 3.903c.185 1.012 1.24 1.755 2.247 1.584.16-.027.398-.1.53-.162.269-.126 5.89-3.394 6.309-3.668.552-.362.878-.964.882-1.633.005-.705-.312-1.308-.882-1.681-.416-.272-6.038-3.541-6.309-3.669a1.989 1.989 0 0 0-1.14-.167'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgNextArrow);
export default ForwardRef;

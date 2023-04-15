import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCloudMoonRainLow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.42 3.043c-1.419.17-2.759.979-3.54 2.137-.167.248-.4.665-.4.716 0 .01.148.116.33.234a7.009 7.009 0 0 1 2.447 2.744c.168.334.197.371.275.348a4.838 4.838 0 0 1 1.448-.199c.667-.002 1.021.049 1.554.222.78.254 1.394.638 2.022 1.267l.457.457.072-.095c.144-.19.415-.696.541-1.011a4.972 4.972 0 0 0-2.084-6.147 4.698 4.698 0 0 0-1.462-.58 5.62 5.62 0 0 0-1.66-.093M11.671 17.33c-.813.905-1.108 1.457-1.142 2.134-.04.801.304 1.312.992 1.474.705.166 1.419-.037 1.719-.49.188-.285.252-.557.231-.984-.027-.547-.192-.933-.665-1.564-.226-.301-.763-.9-.806-.9-.018 0-.166.148-.329.33'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudMoonRainLow);
export default ForwardRef;

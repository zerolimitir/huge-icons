import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCloudRainLow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.671 16.33c-.813.905-1.108 1.457-1.142 2.134-.021.427.043.699.231.984.3.453 1.014.656 1.719.49.688-.162 1.032-.673.992-1.474-.027-.547-.192-.933-.665-1.564-.226-.301-.763-.9-.806-.9-.018 0-.166.148-.329.33'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudRainLow);
export default ForwardRef;

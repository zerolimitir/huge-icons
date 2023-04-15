import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHourglassStart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.66 5.095a.984.984 0 0 0-.482 1.325c.054.11.562.776 1.13 1.48.934 1.159 1.053 1.29 1.249 1.39a.923.923 0 0 0 .886 0c.196-.1.315-.231 1.249-1.39.568-.704 1.076-1.37 1.13-1.48a.99.99 0 0 0-.502-1.337c-.174-.078-.253-.081-2.32-.082H9.86l-.2.094'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHourglassStart);
export default ForwardRef;

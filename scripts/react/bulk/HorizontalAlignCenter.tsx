import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHorizontalAlignCenter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.811 1.278a.883.883 0 0 0-.481.374c-.066.121-.071.7-.08 10.263-.008 7.295.002 10.18.034 10.298a.8.8 0 0 0 .514.506.746.746 0 0 0 .921-.516c.028-.105.038-3.404.031-10.288-.01-10.133-.01-10.135-.092-10.274a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHorizontalAlignCenter);
export default ForwardRef;

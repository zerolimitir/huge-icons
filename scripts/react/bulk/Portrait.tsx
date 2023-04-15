import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPortrait = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.811 4.278a.883.883 0 0 0-.481.374c-.066.12-.071.556-.08 7.262-.008 5.12.002 7.181.033 7.299a.804.804 0 0 0 .515.506.745.745 0 0 0 .921-.517c.028-.104.039-2.455.031-7.288-.01-7.108-.01-7.135-.092-7.273a.807.807 0 0 0-.847-.363m16 0a.883.883 0 0 0-.481.374c-.066.12-.071.556-.08 7.262-.008 5.12.002 7.181.033 7.299a.804.804 0 0 0 .515.506.745.745 0 0 0 .921-.517c.028-.104.039-2.455.031-7.288-.01-7.108-.01-7.135-.092-7.273a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPortrait);
export default ForwardRef;

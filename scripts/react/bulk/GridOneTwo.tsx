import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgGridOneTwo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.62 2.041c-.702.147-1.249.622-1.514 1.315-.085.222-.086.254-.086 3.144s.001 2.922.086 3.144c.226.59.659 1.025 1.244 1.248.229.088.24.088 3.15.088s2.921 0 3.15-.088a2.112 2.112 0 0 0 1.244-1.248c.085-.222.086-.254.086-3.144s-.001-2.922-.086-3.144a2.115 2.115 0 0 0-1.244-1.248c-.228-.086-.256-.087-3.05-.094-1.551-.004-2.892.008-2.98.027m0 11c-.702.147-1.249.622-1.514 1.315-.085.222-.086.254-.086 3.144s.001 2.922.086 3.144c.226.59.659 1.025 1.244 1.248.229.088.24.088 3.15.088s2.921 0 3.15-.088a2.112 2.112 0 0 0 1.244-1.248c.085-.222.086-.254.086-3.144s-.001-2.922-.086-3.144a2.115 2.115 0 0 0-1.244-1.248c-.228-.086-.256-.087-3.05-.094-1.551-.004-2.892.008-2.98.027'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGridOneTwo);
export default ForwardRef;

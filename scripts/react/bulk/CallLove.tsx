import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCallLove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M15.404 3.063c-.498.134-.997.53-1.203.954a2.084 2.084 0 0 0 .015 1.814c.113.222 1.664 2.174 1.929 2.427.337.323.883.541 1.355.541s1.018-.218 1.355-.541c.265-.253 1.816-2.205 1.929-2.427.282-.552.287-1.25.015-1.814-.147-.302-.489-.638-.815-.799-.766-.379-1.539-.246-2.19.374l-.293.28-.295-.28c-.539-.513-1.172-.698-1.802-.529'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCallLove);
export default ForwardRef;

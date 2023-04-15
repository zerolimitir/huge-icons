import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.9 5.259a1.795 1.795 0 0 1-.16.04c-.089.02-.661.566-2.233 2.134-1.162 1.159-2.148 2.174-2.19 2.255a.847.847 0 0 0-.077.332c0 .537.53.886 1.031.679.101-.042.606-.518 1.559-1.47l1.41-1.409v5.12c0 3.612.013 5.167.045 5.279.059.213.293.441.513.5.4.108.812-.12.92-.51.028-.099.042-1.87.042-5.269V7.82l1.41 1.409c.953.952 1.458 1.428 1.559 1.47a.735.735 0 0 0 1.031-.679.847.847 0 0 0-.077-.332c-.079-.152-4.199-4.287-4.343-4.359-.091-.045-.38-.092-.44-.07'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowUp);
export default ForwardRef;

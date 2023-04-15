import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBarChartArrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M18.807 1.287c-.491.11-.705.76-.387 1.177.172.226.329.27 1.031.294l.631.022-.691.543c-2.948 2.316-5.387 3.942-7.651 5.101-2.808 1.437-5.406 2.212-9.235 2.756-.772.109-.939.164-1.084.356-.322.426-.119 1.049.385 1.176.386.097 3.338-.404 5.154-.875 4.326-1.122 8.119-3.215 13.47-7.43.423-.334.779-.607.79-.607.011 0 .02.26.02.578 0 .743.042.944.24 1.142.409.409 1.115.205 1.236-.358.056-.263.058-2.094.002-2.439a1.65 1.65 0 0 0-.495-.946 1.65 1.65 0 0 0-.946-.495c-.318-.051-2.234-.048-2.47.005'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBarChartArrowUp);
export default ForwardRef;

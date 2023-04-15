import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFontSizeText = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.807 11.287c-.531.119-.722.838-.327 1.233.217.217.376.24 1.662.24h1.098v3.098c0 2.111.014 3.164.044 3.304.163.758 1.269.758 1.432 0 .03-.14.044-1.193.044-3.304V12.76h1.098c.651 0 1.182-.018 1.304-.044.758-.163.758-1.269 0-1.432-.263-.056-6.101-.054-6.355.003'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFontSizeText);
export default ForwardRef;

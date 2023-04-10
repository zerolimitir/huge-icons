import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChatSmile = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            d='M13 3h-2a9 9 0 0 0-9 9v5a4 4 0 0 0 4 4h7a9 9 0 1 0 0-18Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='m15.4 13.55.002-.002a.75.75 0 0 1 1.198.902v.001l-.002.001-.002.003-.006.008-.02.025a5.408 5.408 0 0 1-.302.343 6.697 6.697 0 0 1-.89.776c-.77.56-1.921 1.143-3.378 1.143s-2.608-.583-3.379-1.143a6.695 6.695 0 0 1-1.126-1.039 3.714 3.714 0 0 1-.066-.08l-.019-.025-.006-.008-.002-.003-.001-.001-.001-.001a.75.75 0 0 1 1.198-.902m0 0 .007.009.039.047c.036.043.093.109.17.19a5.2 5.2 0 0 0 .69.6c.604.44 1.453.856 2.496.856s1.892-.417 2.496-.857a5.199 5.199 0 0 0 .86-.79l.039-.046.007-.01-.002.003m-6.802-.002.001.001.006.008-.006-.008v-.001Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatSmile);
export default ForwardRef;

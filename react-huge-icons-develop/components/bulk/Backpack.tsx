import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBackpack = (
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
            fillRule='evenodd'
            d='M11 1.25A2.75 2.75 0 0 0 8.25 4v1.666c.468-.242.97-.423 1.5-.536V4c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v1.13c.53.113 1.033.294 1.5.536V4A2.75 2.75 0 0 0 13 1.25h-2Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M5 11a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1a3 3 0 0 1 3 3v3a2 2 0 0 1-2 2h-1.535A3.998 3.998 0 0 1 15 22H9a3.998 3.998 0 0 1-3.465-2H4a2 2 0 0 1-2-2v-3a3 3 0 0 1 3-3v-1Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M10.25 10a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M9 22h6a4 4 0 0 0 4-4v-2c-5.6-2.667-8.4-2.667-14 0v2a4 4 0 0 0 4 4Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBackpack);
export default ForwardRef;

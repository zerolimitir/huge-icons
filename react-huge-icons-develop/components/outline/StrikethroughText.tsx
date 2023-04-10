import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStrikethroughText = (
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
            d='M6 4.25a.75.75 0 0 0 0 1.5v-1.5Zm12 1.5a.75.75 0 0 0 0-1.5v1.5Zm-12 0h12v-1.5H6v1.5Zm-2 5.5a.75.75 0 0 0 0 1.5v-1.5Zm16 1.5a.75.75 0 0 0 0-1.5v1.5Zm-16 0h16v-1.5H4v1.5Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12.75 5a.75.75 0 0 0-1.5 0v5.25h1.5V5Zm0 6.75h-1.5V19a.75.75 0 0 0 1.5 0v-7.25Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStrikethroughText);
export default ForwardRef;

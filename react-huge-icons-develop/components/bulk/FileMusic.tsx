import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileMusic = (
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
            d='M3 18V6a4 4 0 0 1 4-4h6l8 8v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M13 6V2l8 8h-4a4 4 0 0 1-4-4Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.25 13c0-.966.784-1.75 1.75-1.75A2.75 2.75 0 0 1 15.75 14v.05a.75.75 0 0 1-1.5 0V14c0-.69-.56-1.25-1.25-1.25a.25.25 0 0 0-.25.25v3.5a2.25 2.25 0 1 1-1.5-2.122V13Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileMusic);
export default ForwardRef;

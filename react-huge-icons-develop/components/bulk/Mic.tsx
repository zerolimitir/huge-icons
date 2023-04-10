import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMic = (
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
        <path fill='currentColor' d='M7 7a5 5 0 0 1 10 0v7a5 5 0 0 1-10 0V7Z' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12.25 8a.75.75 0 0 1 .75-.75h4v1.5h-4a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h4v1.5h-4a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M4 11.25a.75.75 0 0 1 .75.75v2a7.25 7.25 0 1 0 14.5 0v-2a.75.75 0 0 1 1.5 0v2a8.75 8.75 0 1 1-17.5 0v-2a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMic);
export default ForwardRef;

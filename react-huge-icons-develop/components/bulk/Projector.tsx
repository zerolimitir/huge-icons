import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgProjector = (
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
            d='m5 17.86.75.134v1.294c0 .255-.336.462-.75.462s-.75-.207-.75-.462v-1.692l.75.264Zm14 1.89c-.414 0-.75-.207-.75-.462v-1.3l.825-.142.675-.25v1.692c0 .255-.336.462-.75.462Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M18 4a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h12Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M15 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM5.25 8A.75.75 0 0 1 6 7.25h3a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8Zm0 6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgProjector);
export default ForwardRef;

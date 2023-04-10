import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArchiveSymmetrical = (
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
        <path fill='currentColor' d='M2 6v12a4 4 0 0 0 4 4h6V2H6a4 4 0 0 0-4 4Z' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M4.75 6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 4.75 6Zm0 4a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM22 6v12a4 4 0 0 1-4 4h-6V2h6a4 4 0 0 1 4 4Zm-6.5-.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3ZM14.75 10a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM17 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M8 17.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgArchiveSymmetrical);
export default ForwardRef;

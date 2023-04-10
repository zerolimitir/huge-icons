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
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M7 7v7a5 5 0 0 0 10 0v-.25h-4a.75.75 0 0 1 0-1.5h4v-3.5h-4a.75.75 0 0 1 0-1.5h4V7A5 5 0 0 0 7 7Zm-2.25 5a.75.75 0 0 0-1.5 0v2a8.75 8.75 0 1 0 17.5 0v-2a.75.75 0 0 0-1.5 0v2a7.25 7.25 0 1 1-14.5 0v-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMic);
export default ForwardRef;

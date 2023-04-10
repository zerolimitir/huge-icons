import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHelpSquare = (
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
            d='M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Zm10 .75A2.25 2.25 0 0 0 9.75 9a.75.75 0 0 1-1.5 0 3.75 3.75 0 1 1 4.977 3.544.92.92 0 0 0-.375.237c-.081.09-.102.163-.102.219v1a.75.75 0 0 1-1.5 0v-1c0-1.002.808-1.638 1.486-1.873A2.251 2.251 0 0 0 12 6.75ZM12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHelpSquare);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFolderFile = (
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
            d='M17 9.125c.706 0 1.38.133 2 .375V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2.875A5.486 5.486 0 0 1 7 6.5h1.897a5.5 5.5 0 0 1 3.24 1.056l1.493 1.089a2.5 2.5 0 0 0 1.473.48H17Zm4 5.5V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4h1.897a4 4 0 0 1 2.356.768l1.494 1.089a4 4 0 0 0 2.357.768H17a4 4 0 0 1 4 4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFolderFile);
export default ForwardRef;

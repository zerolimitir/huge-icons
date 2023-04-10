import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBoardStand = (
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
            d='M7 3a4 4 0 0 0-4 4v9.25H2a.75.75 0 0 0 0 1.5h9.25v2.5H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-2.5H22a.75.75 0 0 0 0-1.5h-1V7a4 4 0 0 0-4-4H7Zm9 5.75a.75.75 0 0 0 0-1.5H8a.75.75 0 0 0 0 1.5h8ZM12.75 12a.75.75 0 0 1-.75.75H8a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBoardStand);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDiplomaSquare = (
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
            d='M20 6v8a4 4 0 0 1-3.968 4 4.5 4.5 0 1 0-8.065 0A4 4 0 0 1 4 14V6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4ZM7.25 6A.75.75 0 0 1 8 5.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 6ZM8 8.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5H8Zm6 9.986a3 3 0 1 0-4 0V22l2-1 2 1v-3.764Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDiplomaSquare);
export default ForwardRef;

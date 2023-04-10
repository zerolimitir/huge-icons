import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWristwatchRectangle = (
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
            d='M15 2H9a2 2 0 0 0-2 2h10a2 2 0 0 0-2-2ZM9 5a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H9Zm3.75 4a.75.75 0 1 0-1.5 0v2.537l-1.585.792a.75.75 0 1 0 .67 1.342l2-1A.75.75 0 0 0 12.75 12V9ZM9 22h6a2 2 0 0 0 2-2H7a2 2 0 0 0 2 2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWristwatchRectangle);
export default ForwardRef;

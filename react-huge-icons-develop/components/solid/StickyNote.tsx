import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStickyNote = (
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
            d='M6 21a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v5.343c0 .308-.035.612-.104.907H19A4.75 4.75 0 0 0 14.25 18v2.896c-.295.069-.6.104-.907.104H6Zm9.75-.805c.148-.112.289-.234.422-.367l4.656-4.656c.133-.133.255-.274.367-.422H19A3.25 3.25 0 0 0 15.75 18v2.195ZM6.25 9A.75.75 0 0 1 7 8.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 9ZM7 13.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5H7Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStickyNote);
export default ForwardRef;

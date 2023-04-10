import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileWritten = (
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
            d='M3 18V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6.343c0 .308-.035.612-.104.907H17A4.75 4.75 0 0 0 12.25 18v3.896c-.295.069-.6.104-.907.104H7a4 4 0 0 1-4-4Zm10.75 3.195c.148-.112.289-.234.422-.367l5.656-5.656c.133-.133.255-.274.367-.422H17A3.25 3.25 0 0 0 13.75 18v3.195ZM7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7ZM8 10.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5H8Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileWritten);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFile = (
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
            d='M3 18V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6.343c0 .308-.035.612-.104.907H17A4.75 4.75 0 0 0 12.25 18v3.896c-.295.069-.6.104-.907.104H7a4 4 0 0 1-4-4Zm10.75 3.195c.148-.112.289-.234.422-.367l5.656-5.656c.133-.133.255-.274.367-.422H17A3.25 3.25 0 0 0 13.75 18v3.195Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFile);
export default ForwardRef;

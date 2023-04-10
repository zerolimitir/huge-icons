import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartKey = (
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
            d='M5.25 6A4.75 4.75 0 0 1 10 1.25h4A4.75 4.75 0 0 1 18.75 6v7a.75.75 0 0 1-1.5 0V6A3.25 3.25 0 0 0 14 2.75h-4A3.25 3.25 0 0 0 6.75 6v12A3.25 3.25 0 0 0 10 21.25h8a.75.75 0 0 1 0 1.5h-8A4.75 4.75 0 0 1 5.25 18V6Zm4.304 1.865c.639-.7 1.505-1.115 2.446-1.115.941 0 1.807.416 2.447 1.115a.75.75 0 1 0 1.107-1.012C14.656 5.873 13.401 5.25 12 5.25c-1.402 0-2.657.623-3.554 1.603a.75.75 0 0 0 1.108 1.012Zm1.5 2.32c.255-.279.59-.435.946-.435s.69.156.946.436a.75.75 0 1 0 1.107-1.012A2.777 2.777 0 0 0 12 8.25c-.816 0-1.541.363-2.054.924a.75.75 0 0 0 1.107 1.012ZM12 12.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm1.5 6.5h7a1.5 1.5 0 0 0 0-3h-7a1.5 1.5 0 0 0 0 3Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartKey);
export default ForwardRef;

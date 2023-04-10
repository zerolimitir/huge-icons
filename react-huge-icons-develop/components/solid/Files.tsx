import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFiles = (
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
            d='M13 2a4.001 4.001 0 0 1 3.71 2.5H11A5.5 5.5 0 0 0 5.5 10v7.71A4.001 4.001 0 0 1 3 14V6a4 4 0 0 1 4-4h6Zm-6 8v8a4 4 0 0 0 4 4h2.343c.308 0 .612-.035.907-.104V20A4.75 4.75 0 0 1 19 15.25h1.896c.069-.295.104-.6.104-.907V10a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4Zm9.172 10.828a4.003 4.003 0 0 1-.422.367V20A3.25 3.25 0 0 1 19 16.75h1.195a4.003 4.003 0 0 1-.367.422l-3.656 3.656Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFiles);
export default ForwardRef;

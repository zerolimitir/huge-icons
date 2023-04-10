import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileDownload = (
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
            d='M3 6v12a4 4 0 0 0 4 4h6l8-8V6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M13 18v4l8-8h-4a4 4 0 0 0-4 4Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12.75 10.172a1.22 1.22 0 0 0 .134-.117L14.47 8.47a.75.75 0 1 1 1.06 1.06l-1.585 1.586a2.75 2.75 0 0 1-3.89 0L8.47 9.53a.75.75 0 0 1 1.06-1.06l1.586 1.585c.043.043.087.082.134.117V6a.75.75 0 0 1 1.5 0v4.172Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileDownload);
export default ForwardRef;

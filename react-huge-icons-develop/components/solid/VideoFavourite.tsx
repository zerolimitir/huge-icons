import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgVideoFavourite = (
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
            d='M22 7.25h-6.543l3.641-5.097A4.002 4.002 0 0 1 22 6v1.25ZM2 8.75h20V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8.75Zm3.614-1.5H2V6a4 4 0 0 1 4-4h3.364l-3.75 5.25Zm1.843 0L11.207 2h6.157l-3.75 5.25H7.457ZM12 12.889l.268-.29a1.794 1.794 0 0 1 2.677 0c.74.8.74 2.096 0 2.895l-1.874 2.026c-.591.64-1.55.64-2.142 0l-1.874-2.026c-.74-.8-.74-2.095 0-2.894.739-.8 1.938-.8 2.677 0l.268.289Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVideoFavourite);
export default ForwardRef;

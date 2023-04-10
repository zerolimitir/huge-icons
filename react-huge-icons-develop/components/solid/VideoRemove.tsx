import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgVideoRemove = (
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
            d='M22 7.25h-6.543l3.641-5.097A4.002 4.002 0 0 1 22 6v1.25ZM2 8.75h20V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8.75Zm3.614-1.5H2V6a4 4 0 0 1 4-4h3.364l-3.75 5.25Zm1.843 0L11.207 2h6.157l-3.75 5.25H7.457Zm3.073 5.22a.75.75 0 1 0-1.06 1.06L10.94 15l-1.47 1.47a.75.75 0 1 0 1.06 1.06L12 16.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L13.06 15l1.47-1.47a.75.75 0 1 0-1.06-1.06L12 13.94l-1.47-1.47Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVideoRemove);
export default ForwardRef;

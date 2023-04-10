import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDownloadRectangle = (
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
            d='M2.25 17A4.75 4.75 0 0 0 7 21.75h10A4.75 4.75 0 0 0 21.75 17v-4A4.75 4.75 0 0 0 17 8.25h-.5a.75.75 0 0 0 0 1.5h.5A3.25 3.25 0 0 1 20.25 13v4A3.25 3.25 0 0 1 17 20.25H7A3.25 3.25 0 0 1 3.75 17v-4A3.25 3.25 0 0 1 7 9.75h.5a.75.75 0 0 0 0-1.5H7A4.75 4.75 0 0 0 2.25 13v4Zm6.22-4.47a.75.75 0 1 1 1.06-1.06l1.72 1.72V3a.75.75 0 0 1 1.5 0v10.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDownloadRectangle);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgImageEdit = (
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
            d='M2.75 6A3.25 3.25 0 0 1 6 2.75h9a.75.75 0 0 0 0-1.5H6A4.75 4.75 0 0 0 1.25 6v12A4.75 4.75 0 0 0 6 22.75h12A4.75 4.75 0 0 0 22.75 18V9a.75.75 0 0 0-1.5 0v4.51a2.002 2.002 0 0 0-.14-.104l-2.381-1.587a4 4 0 0 0-5.048.5L10.32 15.68a4 4 0 0 1-5.047.5L2.75 14.5V6ZM11 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm8.13-6.06-3.422 3.42a1 1 0 0 0-.264.468l-.429 1.742a.5.5 0 0 0 .605.605l1.742-.43a1 1 0 0 0 .467-.263L21.25 4.56a1.5 1.5 0 1 0-2.12-2.122Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgImageEdit);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPound = (
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
            d='M11.25 6.5a4.25 4.25 0 0 1 8.5 0V8a.75.75 0 0 1-1.5 0V6.5a2.75 2.75 0 1 0-5.5 0v2.069c0 .91-.116 1.81-.34 2.681H17a.75.75 0 0 1 0 1.5h-5.096c-.363.86-.838 1.673-1.418 2.419l-2.383 3.064c-.639.82-.054 2.017.986 2.017H19a.75.75 0 0 1 0 1.5H9.09c-2.29 0-3.576-2.632-2.171-4.438l2.383-3.064c.365-.47.683-.972.95-1.498H7a.75.75 0 0 1 0-1.5h3.853a9.247 9.247 0 0 0 .397-2.681V6.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPound);
export default ForwardRef;

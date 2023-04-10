import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgScreenRotate = (
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
            d='M14.166 2.491a.75.75 0 0 0-.332 1.463 8.263 8.263 0 0 1 6.212 6.212.75.75 0 0 0 1.371.225l1.223-2a.75.75 0 1 0-1.28-.782l-.371.607a9.768 9.768 0 0 0-6.823-5.725ZM3.955 13.834a.75.75 0 0 0-1.372-.226l-1.223 2a.75.75 0 1 0 1.28.783l.372-.608a9.768 9.768 0 0 0 6.822 5.725.75.75 0 1 0 .332-1.463 8.263 8.263 0 0 1-6.211-6.211ZM5.459 8.64a2 2 0 0 0 0 2.829l7.071 7.07a2 2 0 0 0 2.829 0l3.182-3.181a2 2 0 0 0 0-2.829l-7.071-7.07a2 2 0 0 0-2.829 0L5.46 8.641Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgScreenRotate);
export default ForwardRef;

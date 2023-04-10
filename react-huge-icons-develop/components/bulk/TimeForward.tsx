import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTimeForward = (
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
            d='M1.25 6A4.75 4.75 0 0 1 6 1.25h12A4.75 4.75 0 0 1 22.75 6v6a.75.75 0 0 1-1.28.53l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V6A3.25 3.25 0 0 0 18 2.75H6A3.25 3.25 0 0 0 2.75 6v12A3.25 3.25 0 0 0 6 21.25h16a.75.75 0 0 1 0 1.5H6A4.75 4.75 0 0 1 1.25 18V6Z'
            clipRule='evenodd'
        />
        <g fill='currentColor' opacity={0.4}>
            <path
                fillRule='evenodd'
                d='M12 5.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm-.97 7.72a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 0 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0Z'
                clipRule='evenodd'
            />
            <path d='M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' />
        </g>
    </svg>
);
const ForwardRef = forwardRef(SvgTimeForward);
export default ForwardRef;

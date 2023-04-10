import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAlarmDelete = (
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
            d='m4.874 18.498-2.456 3.03a.75.75 0 0 0 1.165.944l2.315-2.856a9.054 9.054 0 0 1-1.024-1.118Zm13.228 1.118 2.316 2.856a.75.75 0 0 0 1.165-.945l-2.457-3.03a9.05 9.05 0 0 1-1.024 1.119Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M21 13a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M7.884 1.7a.75.75 0 0 1-.387.987A11.292 11.292 0 0 0 2.625 6.78a.75.75 0 0 1-1.25-.83 12.797 12.797 0 0 1 5.521-4.637.75.75 0 0 1 .988.387Zm8.232 0a.75.75 0 0 1 .988-.387 12.797 12.797 0 0 1 5.52 4.636.75.75 0 1 1-1.248.83 11.296 11.296 0 0 0-4.873-4.092.75.75 0 0 1-.387-.987Zm-1.464 8.649a.75.75 0 0 1 0 1.06L13.06 13l1.59 1.591a.75.75 0 0 1-1.06 1.06L12 14.062l-1.591 1.59a.75.75 0 1 1-1.06-1.06l1.59-1.59-1.59-1.592a.75.75 0 1 1 1.06-1.06L12 11.939l1.591-1.59a.75.75 0 0 1 1.06 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAlarmDelete);
export default ForwardRef;
